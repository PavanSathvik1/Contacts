package com.example.Backend.Controller;

import com.example.Backend.dto.ContactDTO;
import com.example.Backend.Service.ContactService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contacts")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    @Autowired
    private ContactService service;

    // 🔹 CREATE Contact
    @PostMapping
    public ResponseEntity<ContactDTO> createContact(@RequestBody ContactDTO contactDTO) {
        ContactDTO savedContact = service.createContact(contactDTO);
        return ResponseEntity.ok(savedContact);
    }

    // 🔹 GET All Contacts
    @GetMapping
    public ResponseEntity<List<ContactDTO>> getAllContacts() {
        List<ContactDTO> contacts = service.getAllContacts();
        return ResponseEntity.ok(contacts);
    }

    // 🔹 GET Contact by ID
    @GetMapping("/{id}")
    public ResponseEntity<ContactDTO> getContactById(@PathVariable Long id) {
        ContactDTO contact = service.getContactById(id);
        return ResponseEntity.ok(contact);
    }

    // 🔹 UPDATE Contact
    @PutMapping("/{id}")
    public ResponseEntity<ContactDTO> updateContact(
            @PathVariable Long id,
            @RequestBody ContactDTO contactDTO) {

        ContactDTO updatedContact = service.updateContact(id, contactDTO);
        return ResponseEntity.ok(updatedContact);
    }

    // 🔹 DELETE Contact
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteContact(@PathVariable Long id) {
        service.deleteContact(id);
        return ResponseEntity.ok("Contact deleted successfully");
    }
}
