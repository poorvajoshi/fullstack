package fullstack.springbootangular.application.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fullstack.springbootangular.application.entities.Group;
import fullstack.springbootangular.application.entities.User;
import fullstack.springbootangular.application.repositories.GroupRepository;
import fullstack.springbootangular.application.repositories.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {

    private final UserRepository userRepository;

    private final GroupRepository groupRepository;

    public Controller(UserRepository userRepository, GroupRepository groupRepository) {
        this.userRepository = userRepository;
        this.groupRepository = groupRepository;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable long id) {
        return userRepository.findById(id).orElse(null);
    }

    @GetMapping("/groups")
    public List<Group> getGroups() {
        return (List<Group>) groupRepository.findAll();
    }

    @GetMapping("/groups/{id}")
    public Group getGroup(@PathVariable long id) {
        return groupRepository.findById(id).orElse(null);
    }

    @PostMapping("/users")
    void addUser(@RequestBody User user) {
        userRepository.save(user);
    }
}
