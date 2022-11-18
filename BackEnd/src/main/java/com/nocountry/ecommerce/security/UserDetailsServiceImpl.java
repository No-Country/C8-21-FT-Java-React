package com.nocountry.ecommerce.security;

import com.nocountry.ecommerce.entities.AppUser;
import com.nocountry.ecommerce.repository.AppUserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@Slf4j
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private AppUserRepository userRepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        AppUser user = userRepo
                .findByEmail(email)
                .orElseThrow(
                        () -> new UsernameNotFoundException("Username not found")
                );
        log.info( user.toString() );
        return new UserDetailsImpl(user);
    }

}
