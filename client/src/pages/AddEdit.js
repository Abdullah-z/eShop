import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialState ={
    name: "",
    quantity: "",
    price: "",
    brand: "",
    description: "",
    category_id: "",

}


const AddEdit = () => {
    const [state,setState]= useState(initialState);
    const {name,quantity,price,brand,description,category_id} = state;

    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/api/post",{
            name: "",
            quantity: "",
            price: "",
            brand: "",
            description: "",
            category_id: "",  
        }).then(()=>{
            setState({name: "", quantity:"", price:"", brand:"", description:"", category_id:""})
        }).catch((err)=> toast.error(err.response.data));
                setTimeout(()=>
                    navigate.push("/"),500
                )
    }

    const handleInputChange= (e)=>{
        const {name,value} = e.target;
        setState({...state,[name]:value})
    }

  return (
    <div>
      <div class="text-center py-4">
        <h1>Add Product</h1>
      </div>

      <form  onSubmit={handleSubmit}>
        <div class="container d-flex justify-content-center py-2">
          <div class="row border rounded py-4">
            <div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">
                  Quantity
                </label>

                <input
                  type="number"
                  class="form-control"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="" class="form-label">
                  Brand
                </label>

                <input
                  type="text"
                  id="brand"
                  name="brand"
                  class="form-control"
                  value={brand}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="" class="form-label">
                  Description
                </label>

                <textarea
                  class="form-control"
                  id="description"
                  rows="3"
                  name="description"
                  placeholder={description}
                  
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="" class="form-label">
                  Price
                </label>

                <input
                  type="number"
                  id="price"
                  name="price"
                  class="form-control"
                  value={price}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="" class="form-label">
                  Category
                </label>

                <input
                  type="text"
                  id="category_id"
                  name="category_id"
                  class="form-control"
                  value={category_id}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div class="form-group py-4">
                <label for="formFileMultiple" class="form-label">
                  Image
                </label>
                <input class="form-control" name="image" type="file" />
              </div>

              <div class="mb-3 form-check d-flex justify-content-center py-4">
                {/* <button type="submit" class="btn btn-primary ">
                  Submit
                </button> */}

                    <input type="submit" value="Save" />
           

              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEdit;
