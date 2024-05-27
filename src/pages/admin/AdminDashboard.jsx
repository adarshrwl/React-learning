import React, { useState } from "react";
import { createProductApi } from "../../apis/Api";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  //Making a state for product
  const [productName, SetProductName] = useState("");
  const [productPrice, SetProductPrice] = useState("");
  const [productCategory, SetProductCategory] = useState("");
  const [productDescription, SetProductDescription] = useState("");

  //image state
  const [productImage, SetProductImage] = useState(null);
  const [previewImage, SetPreviewImage] = useState(null);

  //function to upload abd preview image
  const handleImageUpload = (event) => {
    //0-file 1-name 2-size
    const file = event.target.files[0];
    SetProductImage(file);
    SetPreviewImage(URL.createObjectURL(file));
  };
  //handle submmit 
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(productName,productPrice,productCategory,productDescription,productImage)
    
    //Make a logical form data
    const formData=new FormData()
    formData.append('productName',productName)
    formData.append('productPrice',productPrice)
    formData.append('productCategory',productCategory)
    formData.append('productDescription',productDescription)
    formData.append('productImage',productImage)
  

    //Make a api call/request
    createProductApi(formData).then((res)=>{
      if(res.status ===201){
        toast.success(res.data.message)
      }else{
        toast.error("Something Went wrong in frontend")
      }
    }).catch((error)=>{
      if(error.response){
        if(error.response.status===400){
          toast.error(error.response.data.message)
        }
        // space for 401 error
      }else if(error.response.status===500){
        toast.error("Internal Server Error")
      }else{
        toast.error("No response")
      }


    })
  }

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mt-3">
          <h2>Admin Dashboard</h2>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add product
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Create a New Product!!!
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form action="">
                    
                    <label>Product Name</label>
                    <input
                    onChange={(e) => SetProductName(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Product Name"
                    />
                    <label>Product Price</label>
                    <input
                      onChange={(e) => SetProductPrice(e.target.value)}
                      type="number"
                      className="form-control"
                      placeholder="Enter Product Price"
                    />
                    <div className="mt-2">
                      <label>Select Category</label>
                      <select
                        className="form-control"
                        onChange={(e) => SetProductCategory(e.target.value)}
                      >
                        <option value="action">Action Movies</option>
                        <option value="love">Love Movies</option>
                        <option value="romance">Romance Movies</option>
                      </select>
                    </div>
                    <label className="mt-2">Type Product descriprion</label>
                    <textarea
                      id=""
                      className="form-control"
                      onChange={(e) => SetProductDescription(e.target.value)}
                    ></textarea>
                    <label className="mt-2">Product Image</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleImageUpload}
                    />
                    {/* preview image */}
                    {previewImage && (
                      <div>
                        <img src={previewImage} alt="preview-image" className="img-fluid rounded object-fit-cover mt-3" />
                     
                      </div>
                    )}  
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary" onClick={handleSubmit}>
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-3"></div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-light">
              <td>
                <img
                  height={"100px"}
                  width={"160px"}
                  src="https://th.bing.com/th/id/OIP.LhgZOlbBt3HF8BSN2dbokQHaEf?rs=1&pid=ImgDetMain"
                  alt=""
                />
              </td>
              <td>Iron Man</td>
              <td>NPR 1000000</td>
              <td>Action Movies</td>
              <td>Marvel Movies </td>
              <td>
                <div className="btn-group " role="group">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
