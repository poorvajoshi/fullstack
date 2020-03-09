package fullstack.springbootangular.application;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Stream;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import fullstack.springbootangular.application.entities.Group;
import fullstack.springbootangular.application.entities.User;
import fullstack.springbootangular.application.repositories.GroupRepository;
import fullstack.springbootangular.application.repositories.UserRepository;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner init(UserRepository userRepository, GroupRepository groupRepository) {
        return args -> {
            Stream.of("John", "Julie", "Jennifer", "Helen", "samad", "Faisal", "Samad").forEach(name -> {
                User user = new User();
                user.setFirstName(name);
                user.setLastName("Samad");
                user.setAboutMe("I am Awesome!");
                user.setAdmin(true);
                user.setEmail("faisal@samad.com");
                user.setCompletedModules("All");
                user.setGroupName("Chekov");
                user.setPhoneNumber("1234567890");
                user.setPicLocation("");
                userRepository.save(user);
            });
            List<User> findAll = (List<User>) userRepository.findAll();
            findAll.forEach(System.out::println);
            AtomicInteger atomicInteger = new AtomicInteger(0);
            Stream.of("Chekov", "Kirk", "Spock", "Picard", "Uhura").forEach(name -> {
                Group group = new Group();
                group.setMentor("abc");
                group.setGroupname(name);
                group.addUser(findAll.get(atomicInteger.incrementAndGet()));
                groupRepository.save(group);
            });
            groupRepository.findAll().forEach(System.out::println);
        };
    }
}
