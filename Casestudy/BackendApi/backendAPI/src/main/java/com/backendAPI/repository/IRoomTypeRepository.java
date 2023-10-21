package com.backendAPI.repository;

import com.backendAPI.model.build.RoomType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoomTypeRepository extends JpaRepository<RoomType, Integer> {
}
