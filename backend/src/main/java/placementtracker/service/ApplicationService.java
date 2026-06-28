package placementtracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import placementtracker.entity.Application;
import placementtracker.repository.ApplicationRepository;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository repository;

    public List<Application> getAllApplications() {
        return repository.findAll();
    }

    public Application saveApplication(Application application) {
        return repository.save(application);
    }

    public Application updateApplication(Long id, Application application) {

        Application existing = repository.findById(id).orElseThrow();

        existing.setStudentName(application.getStudentName());
        existing.setCompanyName(application.getCompanyName());
        existing.setStatus(application.getStatus());

        return repository.save(existing);
    }

    public void deleteApplication(Long id) {
        repository.deleteById(id);
    }
}