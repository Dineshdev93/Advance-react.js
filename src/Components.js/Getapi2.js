import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
export default function Getapi2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getapi();
  }, []);
  const deleted = (id) => {
    fetch(`http://localhost:3000/Customer/${id}`, {
      method: "delete",
    }).then((result) => {
      // This is delete list method
      result.json().then((resp) => {
        console.warn(resp);
        getapi()
      });
    });
  };

  const getapi = () => {
    fetch("http://localhost:3000/Customer").then((result) => {
      result.json().then((response) => {
        setData(response);
      });
    });
  };
  return (
    <div>
      <Table striped bordered hover variant="dark" size="sm">
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
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
