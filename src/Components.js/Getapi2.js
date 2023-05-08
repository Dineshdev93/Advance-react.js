import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
export default function Getapi2() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [userid, setUserid] = useState(null);
  useEffect(() => {
    getapi();
  }, []);
  // This is delete list method
  const deleted = (id) => {
    fetch(`http://localhost:3000/Customer/${id}`, {
      method: "delete",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getapi();
      });
    });
  };

  const getapi = () => {
    fetch("http://localhost:3000/Customer").then((result) => {
      result.json().then((response) => {
        setData(response);
        setName(response[0].name);
        setEmail(response[0].email);
        setPhone(response[0].phone);
        setDob(response[0].dob);
        setUserid(response[0].id);
      });
    });
  };
  function selectuser(id) {
    setName(data[id - 1].name);
    setEmail(data[id - 1].email);
    setPhone(data[id - 1].phone);
    setDob(data[id - 1].dob);
    setUserid(data[id - 1].id);
  }
  // update user function
  function updateuser() {
    let data = { name, email, phone, dob, userid };
    fetch(`http://localhost:3000/Customer/${userid}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getapi();
      });
    });
  }
  return (
    <div>
      <h3>User Details</h3>
      <Table striped bordered hover variant="dark" size="sm" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>DOB</th>
            <th>Password</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dob}</td>
              <td>{user.pass}</td>
              <td>
                <Button variant="danger" onClick={() => deleted(user.id)}>
                  Delete
                </Button>
                <Button variant="warning" onClick={() => selectuser(user.id)}>
                  SelectUser
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      <br />
      <div>
        user
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        phone
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <br />
        dob
        <input
          type="text"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br />
        <br />
        <Button variant="warning" onClick={() => updateuser()}>
          Upadte
        </Button>
      </div>
    </div>
  );
}
