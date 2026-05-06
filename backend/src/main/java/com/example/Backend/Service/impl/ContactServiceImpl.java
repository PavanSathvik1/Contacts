package com.example.Backend.Service.impl;

import com.example.Backend.dto.ContactDTO;
import com.example.Backend.entity.Contact;
import com.example.Backend.repository.ContactRepository;
import com.example.Backend.Service.ContactService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository repository;

    // 🔹 CREATE
    @Override
    public ContactDTO createContact(ContactDTO dto) {
        Contact contact = mapToEntity(dto);
        Contact saved = repository.save(contact);
        return mapToDTO(saved);
    }

    // 🔹 GET ALL
    @Override
    public List<ContactDTO> getAllContacts() {
        return repository.findAll()
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    // 🔹 GET BY ID
    @Override
    public ContactDTO getContactById(Long id) {
        Contact contact = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found with id: " + id));
        return mapToDTO(contact);
    }

    // 🔹 UPDATE
    @Override
    public ContactDTO updateContact(Long id, ContactDTO dto) {
        Contact existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found with id: " + id));

        existing.setName(dto.getName());
        existing.setEmail(dto.getEmail());
        existing.setPhone(dto.getPhone());

        Contact updated = repository.save(existing);
        return mapToDTO(updated);
    }

    // 🔹 DELETE
    @Override
    public void deleteContact(Long id) {
        Contact existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found with id: " + id));

        repository.delete(existing);
    }

    // 🔁 Mapping Methods

    private Contact mapToEntity(ContactDTO dto) {
        Contact contact = new Contact();
        contact.setName(dto.getName());
        contact.setEmail(dto.getEmail());
        contact.setPhone(dto.getPhone());
        return contact;
    }

    private ContactDTO mapToDTO(Contact contact) {
        ContactDTO dto = new ContactDTO();
        dto.setName(contact.getName());
        dto.setEmail(contact.getEmail());
        dto.setPhone(contact.getPhone());
        return dto;
    }
}