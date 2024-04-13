package com.trial.studentportal.service;

import java.util.List;

import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;

import com.trial.studentportal.model.Student;
import com.trial.studentportal.repository.StudentRepository;

@Service
public class StudentService implements StudentServiceInterface{

    @Autowired
    StudentRepository studentRepository;

    @Override
    public String addStudent(Student student) {
        // TODO Auto-generated method stub
        studentRepository.save(student);
        return "Successful";
    }

    @Override
    public List<Student> getAllStudents() {
        // TODO Auto-generated method stub
        return studentRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

}
