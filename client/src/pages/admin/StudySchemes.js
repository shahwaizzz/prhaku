import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from  'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form";

const StudySchemes = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [doc, setDoc] = useState(null);
  const [data, setData] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState(null);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    axios.get("http://localhost:5000/studyscheme/").then((response) => {
      setData(response.data.studySchemes);
      console.log("Response : ", response);
      console.log("Response data : ", response.data.studySchemes);
      console.log("data : ", data);
    }).catch((error) => {
      console.log(error);
    })
  },[])

  const onSubmit = (scheme) => {
    console.log(scheme);
    const formData = new FormData();
    formData.append("class", scheme.class);
    formData.append("category", scheme.category);
    formData.append("subject", scheme.subject);
    formData.append("studySchemeDoc", doc);
    console.log("FormData : ", formData);
    console.log("doc : ", doc);
    axios
      .post("http://localhost:5000/studyscheme/create-studyScheme", formData)
      .then((res) => {
        console.log(res);
        alert("Study Schema added successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("error in sending request");
      });
  };
  
  const handleEdit = (id) => {
    alert("set edit");
    setShow1(true);
    alert(id);
    axios
      .get(`http://localhost:5000/studyscheme/${id}`)
      .then((response) => {
        // const { notes } = response.data;
        setEditData(response.data.ebooks);
        setEditId(id);
        console.log("response : ", response.data);
        console.log("editData : ", editData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onEditSubmit = (scheme) => {
    console.log(scheme);
    const formData = new FormData();
    formData.append("class", scheme.class);
    formData.append("category", scheme.category);
    formData.append("subject", scheme.subject);
    formData.append("studySchemeDoc", doc);
    console.log("FormData : ", formData);
    console.log("doc : ", doc);
    axios
      .patch(`http://localhost:5000/studyscheme/${editId}`, formData)
      .then((res) => {
        console.log(res);
        alert("Scheme Updated successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("error in sending request");
      });
  };

  function delFun(id) {
    alert(id);
      axios.delete(`http://localhost:5000/studyscheme/${id}`).then((response) => {
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log(response);
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        alert("Ebook deleted Successfully");
      }).catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <div className='recent-sales box' style={{ width: "100%" }}>
        <div className='title'>
          Study Schemes
          <button onClick={handleShow} className='add-pbtn btn btn-success' style={{float: 'right'}}>
            Add Study Scheme
          </button>
        </div>
        <div className='sales-details'>
          <table className='class-table mt-3' style={{width: '100%'}}> 
            <thead>
              <tr>
                <th>Sr</th>
                <th>Class </th>
                <th>Category</th>
                <th>Subject</th>
                <th>File</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((scheme, index) => (
                <tr className="mt-2">
                  <td>{index+1}</td>
                  <td>{scheme.class}</td>
                  <td>{scheme.category}</td>
                  <td>{scheme.subject}</td>
                  <td>File{index+1}</td>
                  {/* <td>{scheme.studyschemeDoc}</td> */}
                  <td><button className="btn mt-2 btn-primary px-4" onClick={() => handleEdit(scheme._id)}>Edit</button></td>
                  <td><button onClick={() => delFun(scheme._id)} className="btn mt-2 btn-danger">Delete</button></td>
                </tr>             
              ))}
            </tbody>
          </table>
        </div>
        <div className='button'>
          <a href='#'>See All</a>
        </div>
      </div>
          {/* modal for adding new item */}

          <Modal show={show} onHide={handleClose}>
            <Form encType='multipart/form-data' onSubmit={handleSubmit(onSubmit)}>
              <Modal.Header closeButton>
                <Modal.Title className='fw-700'>Add Study Scheme</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className='mb-3' controlId='formGroupEmail'>
                  <Form.Label>Class</Form.Label>
                  <Form.Control
                    type='text'
                    {...register("class")}
                    placeholder='Enter Class'
                    required
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupCategory'>
                  <Form.Label>Category</Form.Label>
                  <Form.Select aria-label="Default select example" {...register("category")}>
                    <option>Select Category</option>
                    <option value="Class Wise">Class Wise</option>
                    <option value="Entry Test">Entry Test</option>
                    <option value="Competitive Exams">Competitive Exams</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupPassword'>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type='text'
                    {...register("subject")}
                    name='subject'
                    placeholder='Enter Subject '
                    required
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupPassword'>
                  <Form.Label>File</Form.Label>
                  <Form.Control
                    type='file'
                    {...register("studySchemeDoc")}
                    name='doc'
                    onChange={(e) => setDoc(e.target.files[0])}
                    placeholder='Select An File'
                    required
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                  Close
                </Button>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>

          {/* Model for updating item */}

          <Modal show={show1} onHide={() => setShow1(false)}>
            <Form encType='multipart/form-data' onSubmit={handleSubmit(onEditSubmit)}>
              <Modal.Header closeButton>
                <Modal.Title className='fw-700'>Edit Study Scheme</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className='mb-3' controlId='formGroupEmail'>
                  <Form.Label>Class</Form.Label>
                  <Form.Control
                    type='text'
                    {...register("class")}
                    placeholder='Enter Class'
                    required
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupCategory'>
                  <Form.Label>Category</Form.Label>
                  <Form.Select aria-label="Default select example" {...register("category")}>
                    <option>Select Category</option>
                    <option value="Class Wise">Class Wise</option>
                    <option value="Entry Test">Entry Test</option>
                    <option value="Competitive Exams">Competitive Exams</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupPassword'>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type='text'
                    {...register("subject")}
                    name='subject'
                    placeholder='Enter Subject '
                    required
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupPassword'>
                  <Form.Label>File</Form.Label>
                  <Form.Control
                    type='file'
                    {...register("studySchemeDoc")}
                    name='doc'
                    onChange={(e) => setDoc(e.target.files[0])}
                    placeholder='Select An File'
                    required
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                  Close
                </Button>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
    </>
  );
};

export default StudySchemes;
