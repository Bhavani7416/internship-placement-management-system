package placementtracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import placementtracker.entity.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}