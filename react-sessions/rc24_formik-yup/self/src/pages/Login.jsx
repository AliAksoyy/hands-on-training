import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import { Link, useNavigate } from "react-router-dom";
import {Formik, Form, } from "formik"
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup"
import { useAuthCall } from "../hooks/useAuthCalls";
import { toastErrorNotify } from "../helper/ToastNotify";
import { useEffect } from "react";


const loginSchema=yup.object().shape({
  email:yup.string().email("email giriniz").required("gerekli"),
  password:yup.string().required("ula").min(8, "8 karakter").max(16, "kardeş yavaş").matches(/[a-zA-Z]+/, "qqq")
})

const Login = () => {
  const navigate = useNavigate();

  const {login} = useAuthCall()

  const { currentUser, error, loading } = useSelector((state) => state?.auth);

  useEffect(()=> {
    error && toastErrorNotify("hata var")
  },[error])

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>


        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
          initialValues={{email:"", password:""}}
          validationSchema={loginSchema}
          onSubmit={(values,actions)=> {
            login(values)
            navigate("/stock")
            actions.resetForm()
            actions.setSubmitting(false)
          }}
          >
          {({values,errors,handleChange,handleBlur,touched})=> (
            <Form>
              <Box sx={{display:"flex", flexDirection:"column", gap:2 }}>
                <TextField
                label="Email"
                id="email"
                type="email"
                name="email"
                value={values?.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email }
                 />
                <TextField
                label="Paasword"
                id="password"
                type="password"
                name="password"
                value={values?.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password }
                 />
                <LoadingButton 
                type="submit"
                loading={loading} 
                loadingPosition="center"
                variant="outlined" >
                Submit
                </LoadingButton>
              </Box>
            </Form>
          )}


          </Formik>




          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
