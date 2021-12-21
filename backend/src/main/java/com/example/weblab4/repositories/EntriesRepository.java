package com.example.weblab4.repositories;

import com.example.weblab4.entities.EntryEntity;
import com.example.weblab4.entities.UserEntity;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface EntriesRepository extends CrudRepository<EntryEntity,Long> {
    List<EntryEntity> findAllByUserEntity(UserEntity user);

    @Transactional
    long deleteAllByUserEntity(UserEntity user);
}
