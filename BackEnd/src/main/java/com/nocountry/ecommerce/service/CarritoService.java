package com.nocountry.ecommerce.service;

import com.nocountry.ecommerce.entities.CarritoEntity;
import com.nocountry.ecommerce.repository.CarritoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CarritoService{

    private final CarritoRepository carritoRepository;

    public CarritoEntity save(CarritoEntity carrito){
        return carritoRepository.save(carrito);
    }

    public List<CarritoEntity> find(){
        return carritoRepository.findAll();
    }

    public void delete(CarritoEntity carrito){
        try {
            carritoRepository.delete(carrito);
        }catch(Exception err){
            log.error(err.getMessage());
        }

    }

}
