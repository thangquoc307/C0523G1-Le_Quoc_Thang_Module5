package com.backendAPI.repository;

import com.backendAPI.model.contract.Contract;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IContractRepository extends JpaRepository<Contract, Integer> {
    List<Contract> findAllByIsDeleteIs(Integer isDelete);
}
