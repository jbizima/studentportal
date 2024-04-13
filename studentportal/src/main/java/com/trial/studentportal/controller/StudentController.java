package com.trial.studentportal.controller;



import com.trial.studentportal.model.Student;
import com.trial.studentportal.service.StudentService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {

    @Autowired
    StudentService studentService;

    @PostMapping("/add")
    public String addStudent(@RequestBody Student student){

        return studentService.addStudent(student);

    }
    @GetMapping
    public List<Student> getAllStudents(){

        return studentService.getAllStudents();

    }

}
