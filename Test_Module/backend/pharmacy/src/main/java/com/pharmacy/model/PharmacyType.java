package com.pharmacy.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "types")
public class PharmacyType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    @JsonBackReference
    @OneToMany(mappedBy = "pharmacyType")
    private List<Pharmacy> pharmacyList;

    public PharmacyType() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Pharmacy> getPharmacyList() {
        return pharmacyList;
    }

    public void setPharmacyList(List<Pharmacy> pharmacyList) {
        this.pharmacyList = pharmacyList;
    }
}
