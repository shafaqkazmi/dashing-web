import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { AddUser } from "../component-user/component-add-user";
import { EditUser } from "../component-user/component-edit-user";
import "./component.dashboard.style.scss";
import { Api } from "../../api/url";

const TableHead = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
      <th>Action</th>
    </tr>
  </thead>
);

interface IUser {
  id: string;
  age: number;
  createdAt: string;
  name: string;
  email: string;
}

export const Dashboard = () => {
  const navigate = useNavigate();
  const [isAddUserModalOpen, setIsAddUserModalOpen] = React.useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = React.useState(false);
  const [editId, setEditId] = React.useState();
  const [data, setData] = React.useState<IUser[]>([]);
  const [filteredResults, setFilteredResults] = React.useState<IUser[]>([]);
  const [searchInput, setSearchInput] = React.useState("");

  const closeAddUserModal = () => {
    GetUsers();
    setIsAddUserModalOpen(false);
  };

  const openAddUserModal = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsAddUserModalOpen(true);
  };

  const closeEditUserModal = () => {
    GetUsers();
    setIsEditUserModalOpen(false);
  };

  const openEditUserModal = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsEditUserModalOpen(true);
  };

  const GetUsers = () => {
    fetch(`${Api.GetUsers}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setFilteredResults(result);
      });
  };

  const DeleteUsers = (id: number) => {
    fetch(`${Api.GetUsers}/${id}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      GetUsers();
    });
  };

  React.useEffect(() => GetUsers(), []);

  const handleLogout = () => {
    localStorage.clear();
    navigate(Api.Default);
  };

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchValue) {
      const lowerCaseSearchValue = searchValue.toLowerCase();
      const filteredData = data.filter(({ name, email }) => {
        return (
          name.toLowerCase().includes(lowerCaseSearchValue) ||
          email.toLowerCase().includes(lowerCaseSearchValue)
        );
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  return (
    <div className="container">
      <div className="btnsAndSearch">
        <div className="searchContainer">
          <input
            type="search"
            className="searchBar"
            placeholder="Type to search"
            value={searchInput}
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
        <div className="buttonsContainer">
          <button className="tableBtn add" onClick={openAddUserModal}>
            Add User
          </button>
          <button className="tableBtn logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      {/* TODO: Move it to Table component  */}
      <div className="tableContainer">
        <table>
          <TableHead />
          <tbody>
            {filteredResults?.map((item: any) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>
                  <button
                    onClick={(e) => {
                      openEditUserModal(e);
                      setEditId(item.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button onClick={() => DeleteUsers(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isAddUserModalOpen && <AddUser closeModal={closeAddUserModal} />}
      {isEditUserModalOpen && (
        <EditUser closeModal={closeEditUserModal} id={editId} />
      )}
    </div>
  );
};
