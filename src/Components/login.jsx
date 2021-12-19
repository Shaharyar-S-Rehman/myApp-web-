import axios from 'axios';
import { useFormik } from 'formik';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import {
  useHistory
} from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firbase"

const validationSchema = yup.object({
  email: yup
    .string('Enter string')
    .email('Enter email')
    .required('this field is required'),
  password: yup
    .string('enter string')
    .required('password is required')
})
function Login() {
  let history = useHistory();
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: onSubmitFunction
  })
  function onSubmitFunction(values) {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert(user)
        console.log(user)
        if (user) {
          history.push("/Dashboard")
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        // ..
      });
  }

  return (
    <div style={{ margin: "0 20% 0 20%" }}>
      <br />
      <h1 style={{ textAlign: "center", color: "black", textDecoration: "5px solid underline", textDecorationColor: "brown" }}>Login</h1>
      <br />

      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>

          <TextField
            fullWidth
            color="primary"
            id="outlined-basic"
            label="Email"
            variant="outlined"

            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}

            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            color="primary"
            id="filled-basic"
            label="Password"
            variant="outlined"
            type="password"

            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}

            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <div>
            {/* <a style={{color: "blue", textDecoration:"underline " }} onClick={() => { history.push("/") }} variant="contained" color="primary">I have no account</a> */}
            <br />
            <Button style={{ width: "20%", }} variant="contained" color="primary" type="submit">Login</Button>

          </div>
        </Stack>

      </form>

    </div>
  )
}

export default Login;