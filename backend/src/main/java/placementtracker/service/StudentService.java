package placementtracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import placementtracker.entity.Student;
import placementtracker.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public Student updateStudent(Long id, Student student) {
        Student existing = repository.findById(id).orElseThrow();
        existing.setName(student.getName());
        existing.setEmail(student.getEmail());
        existing.setBranch(student.getBranch());
        return repository.save(existing);
    }

    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }
}