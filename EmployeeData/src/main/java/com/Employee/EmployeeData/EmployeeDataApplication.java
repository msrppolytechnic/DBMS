package com.Employee.EmployeeData;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
@SpringBootApplication
public class EmployeeDataApplication {
 public static void main(String[] args) {
 ApplicationContext context =
SpringApplication.run(EmployeeDataApplication.class, args);
 EmployeeRepo studentRepo = context.getBean(EmployeeRepo.class);
 Employee st = new Employee();
 st.setId(102);
 st.setName("Anchal Rai");
 st.setAge("24");

 Employee stDisplay = studentRepo.save(st);
 System.out.println(stDisplay);
 }
}
