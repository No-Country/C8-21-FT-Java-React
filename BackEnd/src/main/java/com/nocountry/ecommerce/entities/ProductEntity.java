package com.nocountry.ecommerce.entities;

import lombok.*;

import javax.persistence.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "producto")
public class ProductEntity {

    @Id
    @SequenceGenerator(
            name = "product_id_sequence",
            sequenceName = "product_id_sequence"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "product_id_sequence"
    )
    private Long id;
    private String name;
    private String description;
    private Double stock;
    @ManyToOne(fetch = FetchType.EAGER)
    private CarritoEntity carrito;

}
