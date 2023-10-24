package com.backendAPI.model.contract;

import javax.persistence.*;

@Entity
@Table(name = "detail_services")
public class DetailService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "is_delete",columnDefinition = "integer default 0")
    private Integer isDelete;
    @ManyToOne
    @JoinColumn(name = "contractId", referencedColumnName = "id")
    private Contract contract;
    @ManyToOne
    @JoinColumn(name = "serviceId", referencedColumnName = "id")
    private Service service;

    public DetailService() {
    }

    public Integer getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Integer isDelete) {
        this.isDelete = isDelete;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Contract getContract() {
        return contract;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }
}
