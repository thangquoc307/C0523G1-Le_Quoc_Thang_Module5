package com.pharmacy.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "pharmacies")
public class Pharmacy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String code;
    private String name;
    private Double price;
    private Double quatity;
    private LocalDate date;
    @ManyToOne
    @JoinColumn(name = "typeId", referencedColumnName = "id")
    private PharmacyType pharmacyType;

    public Pharmacy() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getQuatity() {
        return quatity;
    }

    public void setQuatity(Double quatity) {
        this.quatity = quatity;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public PharmacyType getPharmacyType() {
        return pharmacyType;
    }

    public void setPharmacyType(PharmacyType pharmacyType) {
        this.pharmacyType = pharmacyType;
    }
}
