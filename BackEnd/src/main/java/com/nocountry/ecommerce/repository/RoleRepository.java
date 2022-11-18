package com.nocountry.ecommerce.repository;

import com.nocountry.ecommerce.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Role findByName(String name);

}
