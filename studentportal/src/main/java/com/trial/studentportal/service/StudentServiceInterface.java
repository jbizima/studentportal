package com.trial.studentportal.service;

import com.trial.studentportal.model.Student;

import java.util.List;

public interface StudentServiceInterface {
    public String addStudent(Student student);
    public List<Student> getAllStudents();


}
