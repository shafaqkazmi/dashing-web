import { useState } from "react";
import { Modal } from "../component-modal/component-modal";
import "./component-add-user.scss";
import { Api } from "../../api/url";

export const AddUser = ({ closeModal }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`${Api.GetUsers}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        age,
      }),
    }).then(() => closeModal());
  };

  return (
    <Modal header="Add User" isOpen onClose={closeModal}>
      <form>
        <div className="inputContainer">
          <div>
            <label className="formLabel" htmlFor="name">
              Name
            </label>
            <input
              placeholder="Enter Your Name"
              required
              className="formInput"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="formLabel" htmlFor="email">
              Email
            </label>
            <input
              placeholder="Enter Your Email"
              required
              className="formInput"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="formLabel" htmlFor="age">
              Age
            </label>
            <input
              placeholder="Enter Your Age"
              required
              className="formInput"
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
        <div className="btnContainer">
          <button onClick={handleSubmit} className="submitBtn">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};
