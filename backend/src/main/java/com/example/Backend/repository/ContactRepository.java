package com.example.Backend.repository;

import com.example.Backend.entity.Contact;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

    // 🔹 Custom Query Methods (Optional)

    // Find by name
    List<Contact> findByName(String name);

    // Find by email
    Contact findByEmail(String email);

    // Search by name (contains keyword)
    List<Contact> findByNameContaining(String keyword);
}