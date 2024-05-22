import { useSelector } from "react-redux";
import { selectUserCards } from "./userSlice";
import Card from "react-bootstrap/Card";

const ListUser = () => {
  const users = useSelector(selectUserCards);

  const renderedPosts = users?.map((user) => (
    <Card style={{ width: "18rem", marginBottom: "10px" }}>
      <Card.Img variant="top" src={user.image} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
      </Card.Body>
    </Card>
  ));

  return (
    <section>
      <h2>User Cards</h2>
      {renderedPosts}
    </section>
  );
};
export default ListUser;
