package ubb_projects.se_project.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ubb_projects.se_project.domain.User;



@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    User findUserByUsernameAndPassword(String username, String password);
    User findUserByUsername(String username);
}
