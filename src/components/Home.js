import { useEffect, useState } from "react";
import Skelet from "./Skelet";
import UserCard from "./UserCard";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setTimeout(() => {
          setUsers(users);
          setIsLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <>
      <h1 style={{ marginBottom: "1.5rem" }}>Users</h1>
      <div className="user-container">
        {isLoading && <Skelet cards={8} />}
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};
export default Home;
