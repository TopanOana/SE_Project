package ubb_projects.se_project.domain;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name="bucketListDestinations")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BucketListDestination {
    private @Id
    @GeneratedValue(strategy = GenerationType.AUTO) int id;

    @ManyToOne
    @JoinColumn(name="userID")
    private User user;

    @ManyToOne
    @JoinColumn(name="destinationID")
    private Destination destination;


}
