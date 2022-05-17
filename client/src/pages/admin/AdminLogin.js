import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


const AdminLogin = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = (event) => {
      event.preventDefault();
      const obj ={
          username: email,
          password: password
      }
      console.log(obj);
      axios.post(`http://localhost:5000/auth/admin/login`,{ headers: {
            'Access-Control-Allow-Origin': true,
            Accept: 'application/json',
            'Content-Type': 'application/json',
      }, ...obj}).then((response) => {
          console.log("Login Successfully");
          console.log(response);
      }).catch((error) => {
          console.log(error);
      })
  }
  return (
    <>
        <section className="vh-100 gradient-custom" style={{backgroundColor: '#e9ecef'}}>
            <div className="container py-3 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card " style={{bordeRadius:'1rem'}}>
                    <div className="card-body p-5">

                        <div className="mb-md-5 mt-md-4 pb-5">

                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" name="username" onChange={(e) => setEmail(e.target.value)} required placeholder="Enter email" />
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>
                        </div>

                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    </>
  )
}

export default AdminLogin