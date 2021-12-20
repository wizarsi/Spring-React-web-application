package com.example.weblab4.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name="users",
    uniqueConstraints = {
        @UniqueConstraint(columnNames = "username")
    })
public class UserEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonIgnore
    private Long id;

    private String username;
    @JsonIgnore
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name="user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    @JsonIgnore
    private Set<RoleEntity> roles = new HashSet<>();

    @OneToMany(mappedBy = "userEntity")
    @JsonIgnore
    private List<DotEntity> entries;

    public UserEntity(String name, String password) {
        this.username = name;
        this.password = password;
    }

    public UserEntity() {

    }
}
