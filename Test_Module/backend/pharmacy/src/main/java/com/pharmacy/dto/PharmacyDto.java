package com.pharmacy.dto;

import com.pharmacy.model.PharmacyType;
import java.time.LocalDate;

public class PharmacyDto {
    private Integer id;
    private String code;
    private String name;
    private Double price;
    private Double quatity;
    private LocalDate date;
    private PharmacyType pharmacyType;

    public PharmacyDto(Integer id, String code, String name, Double price, Double quatity, LocalDate date, PharmacyType pharmacyType) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.price = price;
        this.quatity = quatity;
        this.date = date;
        this.pharmacyType = pharmacyType;
    }

    public PharmacyDto() {
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
