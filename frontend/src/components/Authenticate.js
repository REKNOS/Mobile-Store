import { Formik } from "formik"
import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { AppContext } from "../AppContext"
import { TextField, Button } from "@mui/material"
import './Home.css'

const Authenticate = () => {
  const navigate = useNavigate()

  const { setLoggedIn } = useContext(AppContext)

  const userSubmit = async (formdata) => {
    console.log(formdata)

    const response = await fetch("http://localhost:5000/user/Authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "You have successfully logged in",
      })
      const data = await response.json()
      console.log(data)
      setLoggedIn(true)
      

      sessionStorage.setItem("user", JSON.stringify(data))
      navigate("/logoutpage")
      
    } else if (response.status === 400) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Invalid Credentials",
      })
    }
  }



  return (
      <div style={{ background: "#eee", height: "100vh" }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="text-muted text-center">Login Form</h3>
    
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit,errors, touched }) => (
          <form onSubmit={handleSubmit}>
             <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Email"
                      placeholder="Email Address"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      error={Boolean(errors.email) && touched.email}
                      helperText={errors.email}
                    />
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      type="password"
                      label="Password"
                      placeholder="Password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      error={Boolean(errors.password) && touched.password}
                      helperText={errors.password}
                    />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 5 }}>
                      Login Now
                    </Button>
          </form>
        )}
      </Formik>
      </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authenticate;