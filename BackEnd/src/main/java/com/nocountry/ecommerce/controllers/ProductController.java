package com.nocountry.ecommerce.controllers;

import com.nocountry.ecommerce.dto.ProductDTO;
import com.nocountry.ecommerce.entities.ProductEntity;
import com.nocountry.ecommerce.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/product")
@RequiredArgsConstructor
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public ResponseEntity<ProductEntity> save(@RequestBody ProductDTO productDTO){
        return new ResponseEntity<>(productService.save(productDTO), HttpStatus.OK);
    }

}
