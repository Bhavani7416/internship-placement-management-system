package placementtracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import placementtracker.entity.Company;
import placementtracker.service.CompanyService;

@RestController
@RequestMapping("/companies")
@CrossOrigin(origins = "*")
public class CompanyController {

    @Autowired
    private CompanyService service;

    @GetMapping
    public List<Company> getAllCompanies() {
        return service.getAllCompanies();
    }

    @PostMapping
    public Company saveCompany(@RequestBody Company company) {
        return service.saveCompany(company);
    }

    @PutMapping("/{id}")
    public Company updateCompany(@PathVariable Long id,
                                 @RequestBody Company company) {
        return service.updateCompany(id, company);
    }

    @DeleteMapping("/{id}")
    public String deleteCompany(@PathVariable Long id) {
        service.deleteCompany(id);
        return "Company Deleted Successfully";
    }
}