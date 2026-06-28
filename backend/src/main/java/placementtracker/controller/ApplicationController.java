package placementtracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import placementtracker.entity.Application;
import placementtracker.service.ApplicationService;

@RestController
@RequestMapping("/applications")
@CrossOrigin(origins = "*")
public class ApplicationController {

    @Autowired
    private ApplicationService service;

    @GetMapping
    public List<Application> getAllApplications() {
        return service.getAllApplications();
    }

    @PostMapping
    public Application saveApplication(@RequestBody Application application) {
        return service.saveApplication(application);
    }

    @PutMapping("/{id}")
    public Application updateApplication(@PathVariable Long id,
                                         @RequestBody Application application) {
        return service.updateApplication(id, application);
    }

    @DeleteMapping("/{id}")
    public String deleteApplication(@PathVariable Long id) {
        service.deleteApplication(id);
        return "Application Deleted Successfully";
    }
}