package com.backendAPI.model.customer;

import javax.persistence.*;

@Entity
@Table(name = "customer_types")
public class CustomerType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String typpeName;

    public CustomerType() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTyppeName() {
        return typpeName;
    }

    public void setTyppeName(String typpeName) {
        this.typpeName = typpeName;
    }
}
