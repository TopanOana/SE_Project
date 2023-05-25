package ubb_projects.se_project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ubb_projects.se_project.domain.BucketListDestination;
import ubb_projects.se_project.domain.Destination;
import ubb_projects.se_project.domain.User;
import ubb_projects.se_project.repos.BucketListRepository;
import ubb_projects.se_project.repos.UserRepository;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    BucketListRepository bucketListRepository;

    public User loginUser(String username, String password){
        User user = userRepository.findUserByUsernameAndPassword(username,password);
        return user;
    }

    public Destination addDestinationToBucketList(String username, Destination destination){
        User user = userRepository.findUserByUsername(username);
        if(user==null)
            return null;
        BucketListDestination bucketListDestination = new BucketListDestination();
        bucketListDestination.setDestination(destination);
        bucketListDestination.setUser(user);
        bucketListRepository.save(bucketListDestination);
        return destination;
    }

    public List<Destination> getBucketList(String username){
//        User user = userRepository.findUserByUsername(username);
        return bucketListRepository.getBucketListDestinations(username);
    }

    public User addUser(User user){
        return userRepository.save(user);
    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }


}
