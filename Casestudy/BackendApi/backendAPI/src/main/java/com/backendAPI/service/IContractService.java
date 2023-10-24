package com.backendAPI.service;

import com.backendAPI.model.contract.Contract;

import java.util.List;

public interface IContractService {
    List<Contract> getAllContract();
    Contract getContractById(Integer id);
    void createContract(Contract contract);
    void editContract(Contract contract);
    void deleteContract(Integer id);
}
