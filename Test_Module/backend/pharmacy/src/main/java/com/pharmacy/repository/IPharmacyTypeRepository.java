package com.pharmacy.repository;

import com.pharmacy.model.PharmacyType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPharmacyTypeRepository extends JpaRepository<PharmacyType, Integer> {
}
