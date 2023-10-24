package com.backendAPI.repository;

import com.backendAPI.model.build.RoomType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IRoomTypeRepository extends JpaRepository<RoomType, Integer> {
    List<RoomType> findAllByIsDeleteIs (Integer isDelete);
}
