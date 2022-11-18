package com.nocountry.ecommerce.dto;

import lombok.*;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarritoDTO {

    private Long userId;
    private List<CarritoDetalleDTO> products;

}
