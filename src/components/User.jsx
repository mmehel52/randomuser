import React from "react";
import "./User.css";
import { useState, useEffect } from "react";
import manSvg from "../assets/man.svg";
import womanSvg from "../assets/woman.svg";
import mailSvg from "../assets/mail.svg";
import mapSvg from "../assets/map.svg";
import phoneSvg from "../assets/phone.svg";
import gmanSvg from "../assets/growing-up-man.svg";
import gwomanSvg from "../assets/growing-up-woman.svg";
import padlockSvg from "../assets/padlock.svg";
import UserList from "./UserList";

const User = () => {
  const [user, setUser] = useState("");
  const [hovered, setHovered] = useState({
    name: false,
    email: false,
    dob: false,
    location: false,
    phone: false,
    login: false,
  });
  const [addUser, setAddUser] = useState([]);
  const getUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };
  useEffect(() => {
    getUser();
  }, []);

  console.log(user);
  const { gender, name, dob, email, picture, location, phone, login } = user;
  const handleAddUser = () => {
    if (!addUser.includes(user)) {
      setAddUser([...addUser, user]);
    }
  };
  return (
    <div className="container">
      <img className="pic" src={picture?.large} alt="" />
      <div className="text">
        {hovered.name && (
          <div>
            <h3>
              {name?.first}-{name?.last}
            </h3>
          </div>
        )}
        {hovered.email && (
          <div>
            <h3> {email}</h3>
          </div>
        )}
        {hovered.dob && (
          <div>
            <h3> {dob.age}</h3>
          </div>
        )}
        {hovered.phone && (
          <div>
            <h3> {phone}</h3>
          </div>
        )}
        {hovered.location && (
          <div>
            <h3> {location?.country}</h3>
          </div>
        )}
        {hovered.login && (
          <div>
            <h3> {login.password}</h3>
          </div>
        )}
      </div>
      <div className="btn">
        <button onClick={getUser}>Get User</button>
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <div className="icons">
        <button
          className="btn-icon"
          onMouseEnter={() => setHovered({ ...hovered, name: true })}
          onMouseLeave={() => setHovered({ ...hovered, name: false })}
        >
          {gender === "male" ? (
            <img className="icon" src={manSvg} alt="#" />
          ) : (
            <img className="icon" src={womanSvg} alt="#" />
          )}
        </button>
        <button
          className="btn-icon"
          onMouseEnter={() => setHovered({ ...hovered, email: true })}
          onMouseLeave={() => setHovered({ ...hovered, email: false })}
        >
          <img className="icon" src={mailSvg} alt="#" />
        </button>
        <button
          className="btn-icon"
          onMouseEnter={() => setHovered({ ...hovered, dob: true })}
          onMouseLeave={() => setHovered({ ...hovered, dob: false })}
        >
          {gender === "male" ? (
            <img className="icon" src={gmanSvg} alt="#" />
          ) : (
            <img className="icon" src={gwomanSvg} alt="#" />
          )}
        </button>
        <button
          className="btn-icon"
          onMouseEnter={() => setHovered({ ...hovered, location: true })}
          onMouseLeave={() => setHovered({ ...hovered, location: false })}
        >
          <img className="icon" src={mapSvg} alt="#" />
        </button>
        <button
          className="btn-icon"
          onMouseEnter={() => setHovered({ ...hovered, phone: true })}
          onMouseLeave={() => setHovered({ ...hovered, phone: false })}
        >
          <img className="icon" src={phoneSvg} alt="#" />
        </button>
        <button
          className="btn-icon"
          onMouseEnter={() => setHovered({ ...hovered, login: true })}
          onMouseLeave={() => setHovered({ ...hovered, login: false })}
        >
          <img className="icon" src={padlockSvg} alt="#" />
        </button>
      </div>
      <div>{addUser.length > 0 && <UserList addUser={addUser} />}</div>
    </div>
  );
};

export default User;
