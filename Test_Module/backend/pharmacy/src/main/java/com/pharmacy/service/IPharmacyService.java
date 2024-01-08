package com.pharmacy.service;

import com.pharmacy.model.Pharmacy;
import com.pharmacy.model.PharmacyType;

import java.util.List;

public interface IPharmacyService {
    List<Pharmacy> searchPharmacy(String name, String type);
    Pharmacy getPharmacyById(Integer id);
    void createPharmacy(Pharmacy pharmacy);
    void editPharmacy(Pharmacy pharmacy);
    void deletePharmacyById(Integer id);
    List<PharmacyType> getAllType();
}
