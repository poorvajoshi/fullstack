package fullstack.springbootangular.application.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "ADMIN_GROUPS")
public class Group {

    @Id
    @GeneratedValue(generator = "group_generator", strategy = GenerationType.AUTO)
    private long id;
    private String groupname;
    private Long mentorId;
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "mentorId", cascade = CascadeType.MERGE)
    private List<User> users;

    public void addUser(User user) {
        if (getUsers() == null) {
            users = new ArrayList<>();
        }
        getUsers().add(user);
    }

    public void removeUser(User user) {
        if (getUsers() == null) {
            users = new ArrayList<>();
        }
        getUsers().remove(user);
    }

}
