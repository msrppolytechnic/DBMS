package com.Student.StudentData;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepo extends MongoRepository <Student, Integer> {

    
}