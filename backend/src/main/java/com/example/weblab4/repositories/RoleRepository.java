package com.example.weblab4.repositories;

import com.example.weblab4.entities.EnumRole;
import com.example.weblab4.entities.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<RoleEntity,Long> {
    Optional<RoleEntity> findByName(EnumRole name);
}
