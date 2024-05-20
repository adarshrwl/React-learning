import React from 'react'

const AdminDashboard = () => {
  return (
    <>

    <div className='container'>
    <div className='d-flex justify-content-between mt-3'>
        <h2>
            Admin Dashboard
        </h2>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add product
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="container mt-3">
    </div>
    <table className='table'>
        <thead className='table-dark'>
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
            <tr className='table-light'>
                <td>
                    <img height={'100px'} width={'160px'} src="https://th.bing.com/th/id/OIP.LhgZOlbBt3HF8BSN2dbokQHaEf?rs=1&pid=ImgDetMain" alt="" />
                </td>
                <td>Iron Man</td>
                <td>NPR 1000000</td>
                <td>Action Movies</td>
                <td>Marvel Movies </td>
                <td>
                    <div className='btn-group 'role='group'>
                        <button className='btn btn-success'>Edit</button>
                        <button className='btn btn-danger'>Delete</button>
                    </div>
                </td>
            </tr>
           </tbody>

            
    </table>
</div>
    
    </>
  )
}

export default AdminDashboard
