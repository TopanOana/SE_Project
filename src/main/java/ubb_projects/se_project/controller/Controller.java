package ubb_projects.se_project.controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ubb_projects.se_project.domain.Destination;
import ubb_projects.se_project.domain.User;
import ubb_projects.se_project.dto.UserDTO;
import ubb_projects.se_project.service.DestinationService;
import ubb_projects.se_project.service.UserService;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@AllArgsConstructor
public class Controller {
    @Autowired
    private final UserService userService;

    @Autowired
    private final DestinationService destinationService;


    @PostMapping("/login")
    public User loginForUser(@RequestBody UserDTO userDTO){
        User user = userService.loginUser(userDTO.getUsername(),userDTO.getPassword());
        if(user==null){
            throw new RuntimeException("bad request: user does not exist");
        }
        return userService.loginUser(userDTO.getUsername(),userDTO.getPassword());
    }

    @GetMapping("/publiclist")
    public List<Destination> getPublicDestinationList(){
        return destinationService.getPublicDestinationList();
    }

    @PostMapping("/publiclist/add")
    public Destination addPublicDestination(@RequestBody Destination destination, @RequestParam String username){
        if(username.equalsIgnoreCase("admin"))
            return destinationService.addDestinationToPublicList(destination);
        else
            throw new RuntimeException("bad request: user cannot add to public destination list");
    }

    @PostMapping("/user/bucketlist/new")
    public Destination addNewDestinationToBucketList(@RequestBody Destination destination, @RequestParam String username){
        if(username.equalsIgnoreCase("admin")){
            throw new RuntimeException("bad request: admin does not have a bucket list");
        }
        destinationService.addPrivateDestination(destination);
        return userService.addDestinationToBucketList(username,destination);
    }


    @PostMapping("/user/bucketlist/public")
    public Destination addPublicDestinationToBucketList(@RequestBody Map<String, String> requestData){
        String destination = requestData.get("destination");
        String username = requestData.get("username");

        if(username.equalsIgnoreCase("admin")){
            throw new RuntimeException("bad request: admin does not have a bucket list");
        }
        System.out.println(destination);
        System.out.println(username);
        int destination_id = Integer.parseInt(destination);
        Destination forBucket = destinationService.getDestinationById(destination_id);
        return userService.addDestinationToBucketList(username,forBucket);
    }

    @GetMapping("/bucketlist")
    public List<Destination> getBucketListForUser(@RequestParam String username){
        if(username.equalsIgnoreCase("admin")){
            throw new RuntimeException("bad request: admin does not have a bucket list");
        }
        return userService.getBucketList(username);
    }


    @PostMapping("/users")
    public  User addUser(@RequestBody UserDTO userDTO){
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        return userService.addUser(user);
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.getUsers();
    }








}
