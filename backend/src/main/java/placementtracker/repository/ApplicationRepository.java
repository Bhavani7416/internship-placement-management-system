package placementtracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import placementtracker.entity.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
}