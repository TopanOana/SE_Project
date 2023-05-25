package ubb_projects.se_project.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class User{
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    @Column
    private String username;
    @Column
    private String password;

    @JsonIgnore
    @OneToMany(mappedBy = "user",
    cascade = CascadeType.ALL,
    orphanRemoval = true)
    private List<BucketListDestination> bucketList = new ArrayList<>();

}
