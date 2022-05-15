import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AdminLogin = () => {
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
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
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