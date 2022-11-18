package com.nocountry.ecommerce.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class CarritoDetalleEntity {

    @Id
    @SequenceGenerator(
            name = "carritodetalle_id_sequence",
            sequenceName = "carritodetalle_id_sequence"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "carritodetalle_id_sequence"
    )
    private Long id;
    private Double quantity;
    @ManyToOne
    private ProductEntity product;
    private Double unitPrice;
    @Transient
    private Double subtotal;

}
