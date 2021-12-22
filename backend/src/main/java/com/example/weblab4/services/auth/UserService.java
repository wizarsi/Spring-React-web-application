package com.example.weblab4.services.auth;

import com.example.weblab4.POJO.Requests.AuthRequest;
import com.example.weblab4.POJO.Responses.JwtResponse;
import com.example.weblab4.entities.EnumRole;
import com.example.weblab4.entities.RoleEntity;
import com.example.weblab4.entities.UserEntity;
import com.example.weblab4.exceptions.EmptyFieldException;
import com.example.weblab4.exceptions.UserAlreadyExistException;
import com.example.weblab4.repositories.RoleRepository;
import com.example.weblab4.repositories.UserRepository;
import com.example.weblab4.security.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    private UserRepository userRepository;

    public UserEntity getUserByUsername(String username){
        return userRepository.findByUsername(username).get();
    }

    public void register(AuthRequest authRequest) throws UserAlreadyExistException, EmptyFieldException {
        if (userRepository.existsByUsername(authRequest.getUsername())) {
            throw new UserAlreadyExistException("A user with the same name already exists");
        }

        if(authRequest.getUsername().length() ==0 || authRequest.getPassword().length() ==0){
            throw new EmptyFieldException("username and password should not be empty");
        }

        UserEntity user = new UserEntity(authRequest.getUsername(),
                passwordEncoder.encode(authRequest.getPassword()));

        Set<String> reqRoles = authRequest.getRoles();
        Set<RoleEntity> roles = new HashSet<>();

        if (reqRoles == null) {
            RoleEntity userRole = roleRepository
                    .findByName(EnumRole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error, Role USER is not found"));
            roles.add(userRole);
        } else {
            reqRoles.forEach(r -> {
                switch (r) {
                    case "admin":
                        RoleEntity adminRole = roleRepository
                                .findByName(EnumRole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error, Role ADMIN is not found"));
                        roles.add(adminRole);

                        break;
                    case "mod":
                        RoleEntity modRole = roleRepository
                                .findByName(EnumRole.ROLE_MODERATOR)
                                .orElseThrow(() -> new RuntimeException("Error, Role MODERATOR is not found"));
                        roles.add(modRole);

                        break;

                    default:
                        RoleEntity userRole = roleRepository
                                .findByName(EnumRole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error, Role USER is not found"));
                        roles.add(userRole);
                }
            });
        }
        user.setRoles(roles);
        userRepository.save(user);
    }

    public JwtResponse login(AuthRequest authRequest) throws EmptyFieldException {
        if(authRequest.getUsername().length() ==0 || authRequest.getPassword().length() ==0){
            throw new EmptyFieldException("username and password should not be empty");
        }
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        authRequest.getUsername(),
                        authRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                roles);

        /*UserEntity userDB = userRepository.findByUsername(authRequest.getUsername()).get();
        if(userDB==null){
            throw new UserNotFoundException("Пользователь c таким именем не найден");
        }else if(!userDB.getPassword().equals(authRequest.getPassword())){
            throw new UserWrongPasswordException("Неверный пароль");
        }
        return userDB;*/
    }
}
