import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:3000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div class="container">
      <div className="text-center py-4">
        <Link to="/add">
          <button className="btn btn-primary rounded">+</button>
        </Link>
      </div>

      <div class="row my-2">
        <div class="col-lg-12">
          <table class="table text-center ty-4  ">
            <thead class="table-dark">
              <tr class="">
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Quantity</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr class="align-middle" key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img
                        src={item.image}
                        width="50px"
                        height="50px"
                        class="rounded-circle"
                        alt=""
                      />
                    </td>
                 
                    <td>{item.name}</td>
                    <td>{item.brand}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <Link to={`/edit/${item.id}`} class="text-success">
                        <i class="fas fa-edit fa-lg mx-1"></i>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/edit/${item.id}`} class="text-danger">
                        <i class="fas fa-trash fa-lg mx-1"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Home;
