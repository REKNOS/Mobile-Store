import { Formik } from "formik"
import React from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { TextField, Button } from "@mui/material"

const Register = () => {
  const navigate = useNavigate()

  const userSubmit = async (formdata) => {
    console.log(formdata)

    // 1. address
    // 2. request method
    // 3. data
    // 4. data format

    //  for creating request on backend
    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.status === 200) {
      console.log("success")
      Swal.fire({
        icon: "success",
        title: "Well Done 👍",
        text: "You have done a wonderfull Job!!",
      })
      navigate("/login")
    } else {
      console.log(response.status)
      console.log("something went wrong")
    }
  }

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
        }}
        onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit,errors,touched }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              className="w-100 mb-4"
              id="username"
              onChange={handleChange}
              value={values.username}
              helperText={touched.username ? errors.username : ''}
              error={Boolean(errors.username && touched.username)}
            />
            
            <TextField
              label="Email"
              variant="outlined"
              className="w-100 mb-4"
              id="email"
              onChange={handleChange}
              value={values.email}
              helperText={touched.email ? errors.email : ''}
              error={Boolean(errors.email && touched.email)}
            />
            <TextField
              label="Password"
              variant="outlined"
              className="w-100 mb-4"
              id="password"
              onChange={handleChange}
              value={values.password}
              helperText={touched.password ? errors.password : ''}
              error={Boolean(errors.password && touched.password)}
            />


            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Register;