import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const Notes = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [img, setImg] = useState(null);
  const [doc, setDoc] = useState(null);
  const [data, setData] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState(null);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    axios
      .get("http://localhost:5000/notes")
      .then((response) => {
        setData(response.data.notes);
        console.log("data : ", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let name, value;
  const handleInput = (e) => {
    // name = e.target.name;
    // value = e.target.value;
    // setProduct({ ...product, [name]: value });
  };
  const onChange = (e) => {
    // setProduct({ ...product, img: e.target.files[0]});
  };

  const handleEdit = (id) => {
    alert("set edit");
    setShow1(true);
    alert(id);
    axios
      .get(`http://localhost:5000/notes/${id}`)
      .then((response) => {
        const { notes } = response.data;
        setEditData(response.data.notes);
        setEditId(id);
        // console.log("response : ", response.data.notes);
        console.log("editData : ", editData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function delFun(idd) {
      axios.delete(`http://localhost:5000/notes/${idd}`).then((response) => {
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("response : ", response); 
        console.log("response data: ", response.data);
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        alert("Notes deleted Successfully");
      }).catch((error) => {
        console.log(error);
      })
  }
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
  // }

  const onSubmit = (notes) => {
    console.log(notes);
    const formData = new FormData();
    formData.append("title", notes.title);
    formData.append("class", notes.class);
    formData.append("subject", notes.subject);
    formData.append("notesImage", img);
    formData.append("notesDoc", doc);
    console.log("FormData : ", formData);
    console.log("img : ", img);
    console.log("doc : ", doc);
    
    axios
      .post("http://localhost:5000/notes/create-notes", formData)
      .then((res) => {
        console.log(res);
        alert("Notes added successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("error in sending request");
      });
  };

  const onEditSubmit = (notes) => {
    console.log(notes);
    console.log("edit id is equal to :", notes.id)
    const formData = new FormData();
    formData.append("title", notes.title);
    formData.append("class", notes.class);
    formData.append("subject", notes.subject);
    formData.append("notesImage", img);
    formData.append("notesDoc", doc);
    // console.log("editFormData : ", formData);
    console.log("editFormData : ");
    console.log("editFormData : ");
    console.log("editFormData : ");
    console.log("titel : ",notes.title);
    console.log("class : ",notes.class);
    console.log("subject : ",notes.subject);

    console.log("img : ", img);
    console.log("doc : ", doc);
    console.log("*********************")
    console.log("Edit id usestate --- ",editId);
    console.log("*********************")
    
    axios
      .patch(`http://localhost:5000/notes/${editId}`, formData)
      .then((res) => {
        console.log(res);
        alert("Notes Updated successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("error in sending request");
      });
  };
  // alert(editData && editData.title)

  return (
    <>
      <div className='recent-sales box' style={{ width: "100%" }}>
        <div className='title'>
          Notes
          <button
            onClick={handleShow}
            className='add-pbtn btn btn-success'
            style={{ float: "right" }}
          >
            Add Notes
          </button>
        </div>
        <div className='sales-details'>
          <table className='class-table mt-3' style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Sr</th>
                <th>Title</th>
                <th>Category</th>
                <th>Subject</th>
                <th>Image</th>
                <th>File</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((notes, index) => (
                  <tr className='mt-2' key={index}>
                    <td>{index + 1}</td>
                    <td>{notes.title}</td>
                    <td>{notes.class}</td>
                    <td>{notes.subject}</td>
                    <td>Image{index+1}</td>
                    {/* <td>{notes.notesImage}</td> */}
                    <td>Doc{index + 1}</td>
                    {/* <td><img src={`../../../${notes.notesImage}`} width="60px" height="40px" alt="notes_image" /></td> */}
                    {/* <td>{notes.notesDoc}</td> */}
                    <td>
                      <button
                        className='btn mt-2 btn-primary px-4'
                        onClick={() => handleEdit(notes._id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button onClick={() => delFun(notes._id)} className='btn mt-2 btn-danger'>Delete</button>
                    </td>
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
            <Modal.Title className='fw-700'>Add Notes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className='mb-3' controlId='formGroupEmail'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                {...register("title")}
                placeholder='Enter Notes Title'
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupCategory'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                {...register("class")}
                placeholder='Enter Notes Title'
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupCategory'>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type='text'
                {...register("subject")}
                placeholder='Enter Notes Title'
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupPassword'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='file'
                {...register("notesImage")}
                name='img'
                onChange={(e) => setImg(e.target.files[0])}
                placeholder='Select An Image'
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupPassword'>
              <Form.Label>File</Form.Label>
              <Form.Control
                type='file'
                {...register("notesDoc")}
                name='doc'
                onChange={(e) => setDoc(e.target.files[0])}
                placeholder='Select An Image'
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
            <Modal.Title className='fw-700'>Edit Notes</Modal.Title>
            {editData? editData.title: '' }
            {editData? editData._id: '' }
          </Modal.Header>
          <Modal.Body>
            <input type="hidden" {...register("id")} value={editData? editData._id: ''} />
            <Form.Group className='mb-3' controlId='formGroupEmail'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                {...register("title")}
                placeholder='Enter Notes Title'
                required
                defaultValue={editData && editData.title} 
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupCategory'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                {...register("class")}
                placeholder='Enter Notes Class'
                defaultValue={editData && editData.class}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupCategory'>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type='text'
                {...register("subject")}
                placeholder='Enter Notes Subject'
                required
                defaultValue={editData && editData.subject}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupPassword'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='file'
                {...register("notesImage")}
                name='img'
                onChange={(e) => setImg(e.target.files[0])}
                placeholder='Select An Image'
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupPassword'>
              <Form.Label>File</Form.Label>
              <Form.Control
                type='file'
                {...register("notesDoc")}
                name='doc'
                onChange={(e) => setDoc(e.target.files[0])}
                placeholder='Select An Image'
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

export default Notes;
