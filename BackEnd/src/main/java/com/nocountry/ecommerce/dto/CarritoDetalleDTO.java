package com.nocountry.ecommerce.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CarritoDetalleDTO {

    private Double quantity;
    private Long productId;
    private Double price;


}
