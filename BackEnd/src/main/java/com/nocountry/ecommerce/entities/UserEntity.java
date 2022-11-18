package com.nocountry.ecommerce.entities;

import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "usuario")
public class UserEntity {

    @Id
    @SequenceGenerator(
            name = "appuser_id_sequence",
            sequenceName = "appuser_id_sequence"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "appuser_id_sequence"
    )
    private Long id;
    private String name;
    private String email;
    private String pass;

    @ManyToOne
    private CarritoEntity carrito;
}
