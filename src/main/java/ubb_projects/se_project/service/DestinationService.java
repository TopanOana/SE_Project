package ubb_projects.se_project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ubb_projects.se_project.domain.Destination;
import ubb_projects.se_project.repos.DestinationRepository;

import java.util.List;

@Service
public class DestinationService {
    @Autowired
    private DestinationRepository destinationRepository;

    public Destination addDestinationToPublicList(Destination destination){
        destination.setIsPrivate(false);
        return destinationRepository.save(destination);
    }

    public Destination addPrivateDestination(Destination destination){
        destination.setIsPrivate(true);
        return destinationRepository.save(destination);
    }

    public List<Destination> getPublicDestinationList(){
        return destinationRepository.getDestinationsByIsPrivate(false);
    }

    public Destination getDestinationById(int id){
        return destinationRepository.findById(id).get();
    }


}
