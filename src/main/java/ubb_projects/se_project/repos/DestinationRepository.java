package ubb_projects.se_project.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ubb_projects.se_project.domain.Destination;

import java.util.List;

@Repository
public interface DestinationRepository extends JpaRepository<Destination,Integer> {

    List<Destination> getDestinationsByIsPrivate(boolean privacy);
}
