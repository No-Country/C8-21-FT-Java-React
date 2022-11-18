package com.nocountry.ecommerce.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "carrito")
public class CarritoEntity {

    @Id
    @SequenceGenerator(
            name = "carrito_id_sequence",
            sequenceName = "carrito_id_sequence"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "carrito_id_sequence"
    )
    private Long id;
    @ManyToOne
    private AppUser user;

    private Date created;
    @OneToMany
    private List<ProductEntity> productlist;

    public void addProduct(ProductEntity product){
        productlist.add(product);
    }

    public void removeProduct(ProductEntity product){
        productlist.remove(product);
    }


}
