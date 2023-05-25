package ubb_projects.se_project.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ubb_projects.se_project.domain.BucketListDestination;
import ubb_projects.se_project.domain.Destination;
import ubb_projects.se_project.domain.User;

import java.util.List;

@Repository
public interface BucketListRepository extends JpaRepository<BucketListDestination, Integer> {

    @Query(value = "SELECT new Destination (d.id, d.geolocation, d.title, d.image, d.description, d.arrivalDate, d.departureDate, d.isPrivate) FROM BucketListDestination bld " +
            "INNER JOIN Destination d ON bld.destination.id=d.id" +
            " WHERE bld.user.username = ?1")
    List<Destination> getBucketListDestinations(String username);
}
