package com.nocountry.ecommerce.controllers;
import com.nocountry.ecommerce.dto.CarritoDTO;
import com.nocountry.ecommerce.entities.CarritoEntity;
import com.nocountry.ecommerce.service.CarritoService;
import com.nocountry.ecommerce.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/carrito")
@RequiredArgsConstructor
public class CarritoController {


    private CarritoService carritoService;
    private final ProductService productService;

}
