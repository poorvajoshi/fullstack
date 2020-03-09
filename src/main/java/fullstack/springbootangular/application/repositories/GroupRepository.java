package fullstack.springbootangular.application.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fullstack.springbootangular.application.entities.Group;

@Repository
public interface GroupRepository extends CrudRepository<Group, Long>{}
