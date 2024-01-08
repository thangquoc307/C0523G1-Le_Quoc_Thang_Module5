package com.pharmacy.controller;

import com.pharmacy.dto.PharmacyDto;
import com.pharmacy.model.Pharmacy;
import com.pharmacy.model.PharmacyType;
import com.pharmacy.service.PharmacyService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/")
public class PharmacyController {
    @Autowired
    private PharmacyService pharmacyService;
    @GetMapping("pharmacy")
    public ResponseEntity<List<Pharmacy>> searchPharmacy(
            @RequestParam(required = false, defaultValue = "") String name,
            @RequestParam(required = false, defaultValue = "") String type) {
        List<Pharmacy> pharmacyList = pharmacyService.searchPharmacy(name, type);
        if (pharmacyList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            Collections.sort(pharmacyList, new Comparator<Pharmacy>() {
                @Override
                public int compare(Pharmacy o1, Pharmacy o2) {
                    return o1.getName().compareTo(o2.getName());
                }
            });
            return new ResponseEntity<>(pharmacyList, HttpStatus.OK);
        }
    }
    @GetMapping("types")
    public ResponseEntity<List<PharmacyType>> getType() {
        List<PharmacyType> typeList = pharmacyService.getAllType();
        if (typeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(typeList, HttpStatus.OK);
        }
    }
    @PostMapping("create")
    public ResponseEntity<?> createPharmacy(@RequestBody PharmacyDto pharmacyDto){
        if (pharmacyDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            Pharmacy pharmacy = new Pharmacy();
            BeanUtils.copyProperties(pharmacyDto, pharmacy);
            pharmacyService.createPharmacy(pharmacy);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
    @GetMapping("pharmacy/{id}")
    public ResponseEntity<Pharmacy> getPharmacy(@PathVariable Integer id){
        Pharmacy pharmacy = pharmacyService.getPharmacyById(id);
        if (pharmacy == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(pharmacy, HttpStatus.OK);
        }
    }
    @PatchMapping("edit")
    public ResponseEntity<?> editPharmacy(@RequestBody PharmacyDto pharmacyDto){
        if (pharmacyDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            Pharmacy pharmacy = new Pharmacy();
            BeanUtils.copyProperties(pharmacyDto, pharmacy);
            pharmacyService.editPharmacy(pharmacy);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> delPharmacy(@PathVariable Integer id){
        pharmacyService.deletePharmacyById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
