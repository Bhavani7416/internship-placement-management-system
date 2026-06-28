package placementtracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import placementtracker.entity.Company;
import placementtracker.repository.CompanyRepository;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository repository;

    public List<Company> getAllCompanies() {
        return repository.findAll();
    }

    public Company saveCompany(Company company) {
        return repository.save(company);
    }

    public Company updateCompany(Long id, Company company) {
        Company existing = repository.findById(id).orElseThrow();

        existing.setCompanyName(company.getCompanyName());
        existing.setLocation(company.getLocation());
        existing.setPackageOffered(company.getPackageOffered());

        return repository.save(existing);
    }

    public void deleteCompany(Long id) {
        repository.deleteById(id);
    }
}