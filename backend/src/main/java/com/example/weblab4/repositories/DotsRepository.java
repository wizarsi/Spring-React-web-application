package com.example.weblab4.repositories;

import com.example.weblab4.entities.DotEntity;
import org.springframework.data.repository.CrudRepository;

public interface DotsRepository extends CrudRepository<DotEntity,Long> {

}
