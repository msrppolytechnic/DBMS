package com.Student.StudentData;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class StudentController {
    @Autowired
    public StudentRepo repo;
    @PostMapping("/createData")
    public String createdata(@RequestBody Student student) {
        repo.save(student);
        return "data added succesffulyyy!!";
    }
    @GetMapping("/fetchData")
    public List<Student> fetch(){

        return repo.findAll();
    }
    @DeleteMapping("removeData/ {id}")
    public String delete(@PathVariable int id){
        repo.deleteById(id);
        return "data deleted successfully";
    }
    
    
}
