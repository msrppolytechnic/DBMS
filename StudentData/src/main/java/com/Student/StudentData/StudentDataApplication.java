package com.Student.StudentData;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class StudentDataApplication {

	public static void main(String[] args) {

		ApplicationContext context   =    SpringApplication.run(StudentDataApplication.class, args);
		StudentRepo studentRepo = context.getBean(StudentRepo.class);
		Student st = new Student();
		st.setId(10);
		st.setName("hdu");
		st.setAddress("djxn");
	}

}
