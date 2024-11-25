package com.Student.StudentData;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.NoArgsConstructor;
import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "studentdata")

public class Student {
    @Id
    private int id;
    private String name;
    private String address;
    
}
