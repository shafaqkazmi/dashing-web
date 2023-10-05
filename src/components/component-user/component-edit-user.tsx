import React, { useState } from "react";
import { Modal } from "../component-modal/component-modal";
import "./component-edit-user";
import { Api } from "../../api/url";

export const EditUser = ({ closeModal, id }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const getUserData = (userId: string) => {
    fetch(`${Api.GetUsers}/${userId}`)
      .then((response) => response.json())
      .then((result) => {
        setName(result?.name);
        setEmail(result?.email);
        setAge(result?.age);
      });
  };

  React.useEffect(() => getUserData(id), [id]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`${Api.GetUsers}/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        age,
      }),
    }).then(() => closeModal());
  };

  return (
    <Modal header="Edit User" isOpen onClose={closeModal}>
      <form>
        <div className="inputContainer">
          <div>
            <label className="formLabel" htmlFor="name">
              Name
            </label>
            <input
              placeholder="Edit Name"
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
              placeholder="Edit Email"
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
              placeholder="Edit Age"
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
            Update
          </button>
        </div>
      </form>
    </Modal>
  );
};
