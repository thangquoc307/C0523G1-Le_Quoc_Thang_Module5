package com.backendAPI.service;

import com.backendAPI.model.contract.Contract;
import com.backendAPI.repository.IContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ContractService implements IContractService{
    @Autowired
    private IContractRepository contractRepository;
    @Override
    public List<Contract> getAllContract() {
        return contractRepository.findAllByIsDeleteIs(0);
    }

    @Override
    public Contract getContractById(Integer id) {
        Contract contract = contractRepository.findById(id).get();
        if (contract != null) {
            if (contract.getIsDelete() == 0) {
                return contract;
            }
        }
        return null;
    }

    @Override
    public void createContract(Contract contract) {
        contract.setIsDelete(0);
        contractRepository.save(contract);
    }

    @Override
    public void editContract(Contract contract) {
        Contract check = getContractById(contract.getId());
        if (check != null) {
            contractRepository.save(contract);
        }
    }

    @Override
    public void deleteContract(Integer id) {
        Contract contract = getContractById(id);
        if (contract != null) {
            contract.setIsDelete(1);
            contractRepository.save(contract);
        }
    }
}
