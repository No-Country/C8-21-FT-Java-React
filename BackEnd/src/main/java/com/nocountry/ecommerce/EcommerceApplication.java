package com.nocountry.ecommerce;

import com.nocountry.ecommerce.entities.AppUser;
import com.nocountry.ecommerce.entities.Role;
import com.nocountry.ecommerce.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class EcommerceApplication {
    public static void main(String[] args) {
        SpringApplication.run(EcommerceApplication.class, args);
    }

    @Bean
    CommandLineRunner run(UserService userService) {
        return args -> {
            userService.saveRole(new Role(null, "ROLE_USER"));
            userService.saveRole(new Role(null, "ROLE_MANAGER"));
            userService.saveRole(new Role(null, "ROLE_ADMIN"));
            userService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));

            AppUser donovan = AppUser.builder()
                    .name("Donovan Ian")
                    .email("donovan@gmail.com")
                    .password(new BCryptPasswordEncoder().encode("1234"))
                    .roles(new ArrayList<>())
                    .build();
            AppUser mia = AppUser.builder()
                    .name("Mia Mauren")
                    .email("mia@gmail.com")
                    .password(new BCryptPasswordEncoder().encode("1234"))
                    .roles(new ArrayList<>())
                    .build();
            AppUser will = AppUser.builder()
                    .name("Will Smith")
                    .email("will@gmail.com")
                    .password(new BCryptPasswordEncoder().encode("1234"))
                    .roles(new ArrayList<>())
                    .build();
            AppUser juan = AppUser.builder()
                    .name("Juan Manuel")
                    .email("jm@gmail.com")
                    .password(new BCryptPasswordEncoder().encode("1234"))
                    .roles(new ArrayList<>())
                    .build();
            userService.saveUser(donovan);
            userService.saveUser(mia);
            userService.saveUser(will);
            userService.saveUser(juan);

            userService.addRoleToUser("donovan", "ROLE_USER");
            userService.addRoleToUser("mia", "ROLE_MANAGER");
            userService.addRoleToUser("will", "ROLE_ADMIN");
            userService.addRoleToUser("juancho", "ROLE_SUPER_ADMIN");
            userService.addRoleToUser("juancho", "ROLE_ADMIN");
            userService.addRoleToUser("juancho", "ROLE_MANAGER");
            userService.addRoleToUser("juancho", "ROLE_USER");
        };
    }
}
