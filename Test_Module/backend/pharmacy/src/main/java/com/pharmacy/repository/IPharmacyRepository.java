package com.pharmacy.repository;

import com.pharmacy.model.Pharmacy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IPharmacyRepository extends JpaRepository<Pharmacy, Integer> {
    List<Pharmacy> findPharmaciesByNameContainingAndPharmacyType_Name(String name, String type);
    List<Pharmacy> findPharmaciesByNameContaining(String name);
}
