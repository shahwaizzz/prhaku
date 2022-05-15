import React, { useEffect, useState } from "react";
// import axios from "axios";
import Button from  'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const Subjects = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/categories").then((response) => {
  //     setCat(response.data);
  //   }).catch((error) => {
  //     console.log(error);
  //   })    
  // },[])
  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/products").then((response) => {
  //     setData(response.data);
  //   }).catch((error) => {
  //     console.log(error);
  //   })    
  // },[])
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    category: "",
    size: "",
    color: "",
    quantity: "",
    price: "",
    img: "",
  });
  let name, value;
  const handleInput = (e) => {
    // name = e.target.name;
    // value = e.target.value;

    // setProduct({ ...product, [name]: value });
  };
  const onChange = (e) => {
    // setProduct({ ...product, img: e.target.files[0]});
  };

  const handleSubmit = async (e) => {
    // alert("Request send")
    // e.preventDefault();
    // console.log("hello world");
    // const formData = new FormData();
    // formData.append("productimg", product.img);
    // formData.append("title", product.title);
    // formData.append("desc", product.desc);
    // formData.append("category", product.category);
    // formData.append("size", product.size);
    // formData.append("color", product.color);
    // formData.append("price", product.price);
    // formData.append("quantity", product.quantity);

    // axios
    //   .post("http://localhost:5000/api/products/add", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       "token": `Bearer ${auth}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     alert("Product added successfully");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert("error in sending request");
    //   });
  };
  function delFun(idd){
  //   alert(`${baseURL}/`+idd);
  //   axios.delete("http://localhost:5000/api/products/"+idd, {
  //     headers: { 
  //       "token": 'Bearer '+auth,
  //     },
  //   }).then((response) => {
  //     console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
  //     console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
  //     console.log(response);
  //     console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
  //     alert("Product deleted Successfully");
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }
  // function updateFun(element){
  //   setProduct({...element});
  //   console.log("UPDATE PRODUCT UPDATE PRODUCT UPDATE PRODUCT");
  //   console.log("product : ",product);
  // }
  // function handleSubmit2(e){
  //   e.preventDefault();
  //   alert('form submittedd');
  //   console.log("updated product object value");
  //   console.log("U product : ", product);
  //   const formData = new FormData();
  //   formData.append("productimg", product.img);
  //   formData.append("title", product.title);
  //   formData.append("desc", product.desc);
  //   formData.append("category", product.category);
  //   formData.append("size", product.size);
  //   formData.append("color", product.color);
  //   formData.append("price", product.price);
  //   formData.append("quantity", product.quantity);

  //   axios
  //     .put(baseURL+"/"+product._id, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         "token": `Bearer ${auth}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       alert("Product Updated successfully");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("error in sending request");
  //     });
  }
  return (
    <>
      <div className='recent-sales box' style={{ width: "100%" }}>
        <div className='title'>
          Classes
          <button onClick={handleShow} className='add-pbtn btn btn-success' style={{float: 'right'}}>
            Add Class
          </button>
        </div>
        <div className='sales-details'>
          <table className='class-table mt-3' style={{width: '100%'}}> 
            <thead>
              <tr>
                <th>Sr</th>
                <th>Class Name</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr className="mt-2">
                <td>1</td>
                <td>Class One</td>
                <td>Image</td>
                <td><button className="btn mt-2 btn-primary px-4" onClick={() => setShow1(true)}>Edit</button></td>
                <td><button className="btn mt-2 btn-danger">Delete</button></td>
                <td>1</td>
              </tr>
              <tr className="mt-2">
                <td>1</td>
                <td>Class One</td>
                <td>Image</td>
                <td><button className="btn mt-2 btn-primary px-4" onClick={() => setShow1(true)}>Edit</button></td>
                <td><button className="btn mt-2 btn-danger">Delete</button></td>
                <td>1</td>
              </tr>
              <tr className="mt-2">
                <td>1</td>
                <td>Class One</td>
                <td>Image</td>
                <td><button className="btn mt-2 btn-primary px-4" onClick={() => setShow1(true)}>Edit</button></td>
                <td><button className="btn mt-2 btn-danger">Delete</button></td>
                <td>1</td>
              </tr>
              <tr className="mt-2">
                <td>1</td>
                <td>Class One</td>
                <td>Image</td>
                <td><button className="btn mt-2 btn-primary px-4" onClick={() => setShow1(true)}>Edit</button></td>
                <td><button className="btn mt-2 btn-danger">Delete</button></td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='button'>
          <a href='#'>See All</a>
        </div>
      </div>
          {/* modal for adding new item */}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="fw-700">Add Class</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Class Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Class Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" placeholder="Select An Image" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Model for updating item */}

          <Modal show={show1} onHide={() => setShow1(false)}>
            <Modal.Header closeButton>
              <Modal.Title className="fw-700">Edit Class</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Class Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Class Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" placeholder="Select An Image" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow1(false)}>
                Close
              </Button>
              <Button variant="primary">
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
    </>
  );
};

export default Subjects;
