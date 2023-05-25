package ubb_projects.se_project.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Table(name="destinations")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Destination {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    @Column
    String geolocation;
    @Column
    String title;
    @Column
    String image;
    @Column
    String description;
    @Column
    Date arrivalDate;
    @Column
    Date departureDate;

    @Column
    Boolean isPrivate;
}