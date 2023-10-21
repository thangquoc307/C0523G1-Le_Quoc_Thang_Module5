package com.backendAPI.model.contract;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "services")
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String digit;
    private Integer value;
    @JsonBackReference
    @OneToMany(mappedBy = "service")
    private List<DetailService> detailServices;

    public Service() {
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

    public String getDigit() {
        return digit;
    }

    public void setDigit(String digit) {
        this.digit = digit;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public List<DetailService> getDetailServices() {
        return detailServices;
    }

    public void setDetailServices(List<DetailService> detailServices) {
        this.detailServices = detailServices;
    }
}
