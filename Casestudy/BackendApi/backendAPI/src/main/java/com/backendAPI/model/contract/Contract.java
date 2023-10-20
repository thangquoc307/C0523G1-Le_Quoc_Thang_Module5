package com.backendAPI.model.contract;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "contracts")
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(unique = false)
    private String code;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private int deposit;
    private int payment;

}
