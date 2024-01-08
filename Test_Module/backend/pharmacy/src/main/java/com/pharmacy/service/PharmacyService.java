package com.pharmacy.service;

import com.pharmacy.model.Pharmacy;
import com.pharmacy.model.PharmacyType;
import com.pharmacy.repository.IPharmacyRepository;
import com.pharmacy.repository.IPharmacyTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PharmacyService implements IPharmacyService{
    @Autowired
    private IPharmacyTypeRepository pharmacyTypeRepository;
    @Autowired
    private IPharmacyRepository pharmacyRepository;
    @Override
    public List<Pharmacy> searchPharmacy(String name, String type) {
        if (type.equals("")){
            return pharmacyRepository.findPharmaciesByNameContaining(name);
        } else {
            return pharmacyRepository.findPharmaciesByNameContainingAndPharmacyType_Name(name, type);
        }
    }

    @Override
    public Pharmacy getPharmacyById(Integer id) {
        return pharmacyRepository.findById(id).get();
    }

    @Override
    public void createPharmacy(Pharmacy pharmacy) {
        pharmacyRepository.save(pharmacy);
    }

    @Override
    public void editPharmacy(Pharmacy pharmacy) {
        Pharmacy pharmacyOld = getPharmacyById(pharmacy.getId());
        if (pharmacyOld != null){
            pharmacyRepository.save(pharmacy);
        }
    }

    @Override
    public void deletePharmacyById(Integer id) {
        Pharmacy pharmacyOld = getPharmacyById(id);
        if (pharmacyOld != null){
            pharmacyRepository.deleteById(id);
        }
    }

    @Override
    public List<PharmacyType> getAllType() {
        return pharmacyTypeRepository.findAll();
    }
}
