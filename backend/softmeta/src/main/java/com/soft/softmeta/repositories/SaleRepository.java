package com.soft.softmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.soft.softmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
