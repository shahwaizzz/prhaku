import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from  'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form";

const Papers = () => {
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
    axios.get("http://localhost:5000/paper/").then((response) => {
      setData(response.data.papers);
      console.log(data);
    }).catch((error) => {
      console.log(error);
    })    
  },[])
  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/products").then((response) => {
  //     setData(response.data);
  //   }).catch((error) => {
  //     console.log(error);
  //   })    
  // },[])


  const handleInput = (e) => {
    // name = e.target.name;
    // value = e.target.value;

    // setProduct({ ...product, [name]: value });
  };
  const onChange = (e) => {
    // setProduct({ ...product, img: e.target.files[0]});
  };

  const handleSubmit2 = async (e) => {
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
    // alert(`${baseURL}/`+idd);
    axios.delete(`http://localhost:5000/paper/${idd}`).then((response) => {
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      console.log(response);
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      alert("Paper deleted Successfully");
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

  const onSubmit = (paper) => {
    console.log(paper);
    const formData = new FormData();
    formData.append("board", paper.board);
    formData.append("class", paper.class);
    formData.append("subject", paper.subject);
    formData.append("type", paper.type);
    formData.append("university", paper.university);
    formData.append("paperDoc", doc);
    console.log("FormData : ", formData);
    console.log("doc : ", doc);
    axios
      .post("http://localhost:5000/paper/create-paper", formData)
      .then((res) => {
        console.log(res);
        alert("Paper added successfully");
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
      .get(`http://localhost:5000/paper/${id}`)
      .then((response) => {
        // const { notes } = response.data;
        setEditData(response.data.paper);
        setEditId(id);
        console.log("response : ", response.data.paper);
        console.log("editData : ", editData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onEditSubmit = (paper) => {
    console.log(paper);
    const formData = new FormData();
    formData.append("board", paper.board);
    formData.append("class", paper.class);
    formData.append("subject", paper.subject);
    formData.append("type", paper.type);
    formData.append("university", paper.university);
    formData.append("paperDoc", doc);
    console.log("FormData : ", formData);
    console.log("doc : ", doc);
    axios
      .patch(`http://localhost:5000/paper/${editId}`, formData)
      .then((res) => {
        console.log(res);
        alert("Paper Updated successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("error in sending request");
      });
  };


  return (
    <>
      <div className='recent-sales box' style={{ width: "100%" }}>
        <div className='title'>
          Papers
          <button onClick={handleShow} className='add-pbtn btn btn-success' style={{float: 'right'}}>
            Add paper
          </button>
        </div>
        <div className='sales-details'>
          <table className='class-table mt-3' style={{width: '100%'}}> 
            <thead>
              <tr>
                <th>Sr</th>
                <th>Board</th>
                <th>Class</th>
                <th>Subject</th>
                <th>Type</th>
                <th>University</th>
                <th>File</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {data &&
              data.map((paper, index) => (
              <tr className="mt-2" key={index}>
                <td>{index+1}</td>
                <td>{paper.board}</td>
                <td>{paper.class}</td>
                <td>{paper.subject}</td>
                <td>{paper.type}</td>
                <td>{paper.university && paper.university}</td>
                {/* <td>{paper.paperDoc}</td>                 */}
                <td>File{index+1}</td>                
                <td><button className="btn mt-2 btn-primary px-4" onClick={() => handleEdit(paper._id)}>Edit</button></td>
                <td><button onClick={() => delFun(paper._id)} className="btn mt-2 btn-danger">Delete</button></td>
              </tr>                
              ))
            }              
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
                <Modal.Title className='fw-700'>Add Paper</Modal.Title>                
              </Modal.Header>
              <Modal.Body>
                <Form.Group className='mb-3' controlId='formGroupEmail'>
                  <Form.Label>Board</Form.Label>
                  <Form.Control
                    type='text'
                    {...register("board")}
                    placeholder='Enter Board'
                    required
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupCategory'>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type='text'
                    {...register("class")}
                    placeholder='Enter Category'
                    required
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupCategory'>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type='text'
                    {...register("subject")}
                    placeholder='Enter Subject'
                    required
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupCategory'>
                  <Form.Label>Type</Form.Label>
                  <Form.Select aria-label="Default select example" {...register("type")}>
                    <option>Select Type</option>
                    <option value="Past Paper">Past Paper</option>
                    <option value="Guess Paper">Guess Paper</option>
                    <option value="Test Series">Test Series</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupCategory'>
                  <Form.Label>university</Form.Label>
                  <Form.Control
                    type='text'
                    {...register("university")}
                    placeholder='Enter University'
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
                <Modal.Title className='fw-700'>Edit Paper</Modal.Title>
                {editData? editData._id: 'no id found'}
              </Modal.Header>
              <Modal.Body>
                <Form.Group className='mb-3' controlId='formGroupEmail'>
                  <Form.Label>Board</Form.Label>
                  <Form.Control
                    type='text'
                    {...register("board")}
                    placeholder='Enter Board'
                    required
                    defaultValue={editData? editData.board: '' }
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupCategory'>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type='text'
                    {...register("class")}
                    placeholder='Enter Category'
                    defaultValue={editData? editData.category: '' }
                    required
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupCategory'>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type='text'
                    {...register("subject")}
                    placeholder='Enter Subject'
                    required
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupCategory'>
                  <Form.Label>Type</Form.Label>
                  <Form.Select defaultValue={editData? editData.type: '' } aria-label="Default select example" {...register("type")}>
                    <option>Select Type</option>
                    <option value="Past Paper">Past Paper</option>
                    <option value="Guess Paper">Guess Paper</option>
                    <option value="Test Series">Test Series</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupCategory'>
                  <Form.Label>university</Form.Label>
                  <Form.Control
                    type='text'
                    {...register("university")}
                    placeholder='Enter University'
                    defaultValue={editData? editData.university: '' }
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

export default Papers;
