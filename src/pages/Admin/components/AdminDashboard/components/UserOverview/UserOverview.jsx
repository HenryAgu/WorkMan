// stylesheet
import "./style/UserOverview.scss";

// images
import searchIcon from "./images/search.svg";
import avatar from "./images/avatar.png";

const UserOverview = () => {

  // users
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    {
      id: 3,
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
  ];

  return (
    <div className="user-overview">
      <div className="user-overview-header">
        <h1>User Management System</h1>
      </div>
      <div className="search-box">
        <img src={searchIcon} alt="search-icon" />
        <input type="text" placeholder="Search for user and artisans" />
      </div>
      <div className="overview-section">
        <div className="users-section">
          <h3>Users</h3>
          <div className="inner-overview-section">
            {users.map((user) => (
              <div className="particular-user">
                <div className="left-particular-user" key={user.id}>
                  <div className="avatar">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div className="name-email">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="right-particular-user">
                  <button>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOverview;
