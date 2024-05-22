import { useState } from "react";
import { useDispatch } from "react-redux";
import { userAdded } from "./userSlice";
import Button from "react-bootstrap/Button";

const topics = [
  { id: 1, topic: "Travel" },
  { id: 2, topic: "Cars" },
  { id: 3, topic: "Wildlife" },
  { id: 4, topic: "Technology" },
  { id: 5, topic: "Other" },
];

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [topic, setTopic] = useState("");
  const [other, setOther] = useState("");

  const onNameChanged = (e) => setName(e.target.value);
  const onSurnameChanged = (e) => setSurname(e.target.value);
  const onTopicChanged = (e) => setTopic(e.target.value);
  const onOtherChanged = (e) => setOther(e.target.value);

  const canSave = Boolean(name) && Boolean(surname) && Boolean(topic);

  const onSaveUserClicked = () => {
    if (topic !== "Other" && canSave) {
      dispatch(userAdded({ name: name, surname: surname, search: topic }));
      setName("");
      setSurname("");
      setTopic("");
      setOther("");
    } else {
      dispatch(userAdded({ name: name, surname: surname, search: other }));
      setName("");
      setSurname("");
      setTopic("");
      setOther("");
    }
  };

  const usersOptions = topics?.map((user) => (
    <option key={user.id} value={user.topic}>
      {user.topic}
    </option>
  ));

  return (
    <section>
      <h2>Image Finder...!!!</h2>
      <form>
        <label htmlFor="postTitle">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={onNameChanged}
        />
        <label htmlFor="postTitle">surname:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={surname}
          onChange={onSurnameChanged}
        />
        <label htmlFor="topics">Topics:</label>
        <select id="topics" value={topic} onChange={onTopicChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        {topic === "Other" && (
          <input
            type="text"
            id="other"
            name="other"
            value={other}
            onChange={onOtherChanged}
          />
        )}

        <Button
          variant="primary"
          type="button"
          onClick={onSaveUserClicked}
          disabled={!canSave}
          className="mt-2"
        >
          Find Image
        </Button>
      </form>
    </section>
  );
};
export default AddUserForm;
