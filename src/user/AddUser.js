import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { userAdded } from "../features/userSlice";

import ListUser from "./ListUser";
const topics = [
  { id: 1, topic: "Travel" },
  { id: 2, topic: "Cars" },
  { id: 3, topic: "Wildlife" },
  { id: 4, topic: "Technology" },
  { id: 5, topic: "Other" },
];

function AddUser() {
  
  const dispatch = useDispatch();

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    surname: "",
    topic: "",
    other: "",
  });
  const { name, surname, topic, other } = form;

  const resetForm = () => {
    setForm({
      name: "",
      surname: "",
      topic: "",
      other: "",
    });
  };

  const canSave = Boolean(name) && Boolean(surname) && Boolean(topic);
  const handleSelection = () => {
    try {
      if (topic !== "Other" && canSave) {
        setErrorMsg("");
        setLoading(true);
        dispatch(userAdded({ name: name, surname: surname, search: topic }));
        resetForm();
        setLoading(false);
      } else {
        setErrorMsg("");
        setLoading(true);
        dispatch(userAdded({ name: name, surname: surname, search: other }));
        resetForm();
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg("Error fetching images. Try again later.");
      console.log(error);
      setLoading(false);
    }
  };

  const usersOptions = topics?.map((user) => (
    <option key={user.id} value={user.topic} name="topic">
      {user.topic}
    </option>
  ));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="container">
      <h1 className="title">Image Finder...!</h1>
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      {loading && <p>Loading...</p>}
      <>
        <div className="search-section">
          <Form>
            <Form.Control
              type="text"
              placeholder="Please Enter Your Name..."
              className="search-input"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <br />
            <Form.Control
              type="text"
              placeholder="Please Enter Your Surname..."
              className="search-input"
              name="surname"
              value={surname}
              onChange={handleChange}
            />
            <br />
            <Form.Select
              aria-label="Default select example"
              onChange={handleChange}
              name="topic"
              value={topic}
            >
              <option value="" name=""></option>
              {usersOptions}
            </Form.Select>
            <br />
            {topic === "Other" && (
              <Form.Control
                type="text"
                placeholder="Type something to search"
                className="search-input"
                name="other"
                value={other}
                onChange={handleChange}
              />
            )}
          </Form>
        </div>
        <div className="filters">
          <Button
            type="button"
            onClick={() => handleSelection()}
            disabled={!canSave}
          >
            Find Images
          </Button>
        </div>
      </>
      <ListUser />
    </div>
  );
}

export default AddUser;
