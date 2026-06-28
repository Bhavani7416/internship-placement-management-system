package placementtracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import placementtracker.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}