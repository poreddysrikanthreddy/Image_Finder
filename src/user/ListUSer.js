import { useSelector } from "react-redux";
import { selectUserCards } from "../features/userSlice";

const ListUser = () => {
  const { user, status, error } = useSelector(selectUserCards);

  return (
    <>
      {status === "loading" && <p className="loading">Loading...</p>}
      {error && <p className="error-msg">{error}</p>}

      {status === "idle" && (
        <div className="images">
          {user[0]?.image?.map((image, index) => (
            <div className="abc" key={index}>
              <img
                key={image.id}
                src={image.urls.small}
                alt={image.alt_description}
                className="image"
              />
              <span className="text-start">{user[0].name}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default ListUser;
