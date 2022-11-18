package com.nocountry.ecommerce.service;

import com.nocountry.ecommerce.dto.ProductDTO;
import com.nocountry.ecommerce.entities.ProductEntity;
import com.nocountry.ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Component
public class ProductService {

    private final ProductRepository productRepository;

    public List<ProductEntity> findAll(){
        return productRepository.findAll();
    }

    public ProductEntity save(ProductEntity product){
        return productRepository.save(product);
    }

    public ProductEntity save(ProductDTO product){
        ProductEntity prod = ProductEntity.builder()
                .name(product.getName())
                .description(product.getDescription())
                .stock(product.getStock())
                .build();
        return save(prod);
    }

    public void delete(ProductEntity product){
        try{
            productRepository.delete(product);
        }catch(Exception err){
            log.error(err.getMessage());
        }
    }

}
