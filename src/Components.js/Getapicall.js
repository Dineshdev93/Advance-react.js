import React from "react";
import { useState, useEffect } from "react";
export default function Getapicall() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Customer").then(
      (result) => {
        result.json().then((res) => {
          // console.warn("resulr",res)
          setData(res);
        });
      }
    );
  }, []);
  console.warn(data);
  return (
    <>
      <h1>Api Calling with Fetch method</h1>
      <h5>
        The Fetch API is a new standard to make server requests with Promises,
        but which also includes additional features. This short tutorial will
        guide you through the simple steps of using the Fetch API for external
        data fetching within your React application.
      </h5>
      <br />
      <h6>
        What is fetch () in React? Image result for what isfetch api in react To
        send an HTTP request we simply use the fetch() function with the API
        endpoint URL as an argument. We receive a promise that resolves to the
        actual data from the API, const response = await
        fetch('https://api.example.com'); Code language: JavaScript
        (javascript)09-Sept-2022
      </h6>
      <table border={1} style={{ marginLeft: "450px",backgroundColor:'darkgrey' }}>
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>

          {data.map((it, i) => (
            <tr key={i}>
              <td>{it.id}</td>
              <td>{it.name}</td>
              <td>{it.email}</td>
              <td>{it.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

