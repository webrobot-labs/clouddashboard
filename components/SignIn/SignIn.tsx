"use client";
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import Cookies from "universal-cookie";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { Button } from "reactstrap";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Swal from "sweetalert2";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation"; // Importa useRouter per la navigazione
import"./newlogin.module.css";

// Inizializza i cookies
const cookies = new Cookies();

// Schema di validazione con yup
const schema = yup.object().shape({
  name: yup.string().trim().required("User Name is required"),
  email: yup
    .string()
    .trim()
    .required("Email Address is required")
    .email("Email format is not correct"),
  password: yup.string().trim().required("Password is required"),
  ConfirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("Confirm Password is required"),
});

// Definisci i tipi per i dati del form
interface FormData {
  name: string;
  email: string;
  password: string;
  ConfirmPassword: string;
}

const SignIn: React.FC = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const router = useRouter(); // Inizializza il router
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // Mutazione per il form di registrazione
  const mutation = useMutation({
    mutationFn: (data: FormData) => {
      return axios
        .post("/api/signup", data)
        .then((response: AxiosResponse) => {
          console.log(response, "response");
          window.location.href = "/Home"; // Reindirizzamento post-registrazione
        })
        .catch((error) => {
          Swal.fire("Server Error.", "error");
          console.error("Error", error);
        });
    },
  });

  const onSubmit = async (data: FormData) => {
    mutation.mutate(data);
  };

  // Login con Google
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        });
        cookies.set("user", JSON.stringify(res.data), { path: "/" });
        console.log("Google user info:", res.data);
        window.location.href = "/Home"; // Reindirizzamento dopo login
      } catch (err) {
        console.error("Error fetching Google user info:", err);
      }
    },
    onError: (error) => {
      console.error("Google login error:", error);
    },
  });

  return (
    <section className="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-6">
            <div className="card text-black rounded-3">
              <div className="row g-0">
                <div className="col-lg-12">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <a href="/" className="cursor-pointer">
                        <Image
                          width={250}
                          height={66}
                          src={"/images/logo.png"}
                          alt="Logo"
                        />
                      </a>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h5 className="font-bold mt-4">Create your account</h5>
                      <div className="form-outline mb-4">
                        <TextField
                          id="name"
                          label="User Name"
                          variant="filled"
                          type="text"
                          className="email-width"
                          {...register("name")}
                        />
                        {errors?.name && (
                          <span style={{ color: "red" }}>
                            {errors?.name?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-outline mb-4">
                        <TextField
                          id="email"
                          label="Email"
                          variant="filled"
                          type="email"
                          className="email-width"
                          {...register("email")}
                        />
                        {errors?.email && (
                          <span style={{ color: "red" }}>
                            {errors?.email?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-outline mb-4">
                        <TextField
                          id="password"
                          label="Password"
                          variant="filled"
                          className="email-width"
                          type="password"
                          {...register("password")}
                        />
                        {errors?.password && (
                          <span style={{ color: "red" }}>
                            {errors?.password?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-outline mb-4">
                        <TextField
                          id="confirmPassword"
                          label="Confirm Password"
                          variant="filled"
                          className="email-width"
                          type="password"
                          {...register("ConfirmPassword")}
                        />
                        {errors?.ConfirmPassword && (
                          <span style={{ color: "red" }}>
                            {errors?.ConfirmPassword?.message}
                          </span>
                        )}
                      </div>
                      <div className="text-center pt-1 mb-1 pb-1">
                        <Button
                          className="btn btn-primary fa-lg gradient-custom-2 mb-3 w-100 login-button"
                          type="submit"
                        >
                          Register
                        </Button>
                      </div>
                      <div className="d-flex flex-row align-items-center login-box-seperator-container">
                        <div className="login-box-seperator"></div>
                        <div className="login-box-seperator-text">
                          <p className="or-text">or</p>
                        </div>
                        <div className="login-box-seperator"></div>
                      </div>
                      <div className="form-outline mb-4">
                        <div className="login-box-content">
                          <Button className="fb-login box-shadow">
                            <FacebookIcon className="facebook-icon-color" />
                            Log in with Facebook
                          </Button>
                          <Button
                            className="fb-login box-shadow mt-2"
                            onClick={() => login()}
                          >
                            <GoogleIcon className="gmail-icon-color" />
                            Log in with Google
                          </Button>
                        </div>
                        <div className="mt-2 mb-2">
                          <p className="text-muted text-center d-flex justify-content-center align-items-center">
                            <Checkbox {...label} />I consent to the processing
                            of my personal data
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center pb-4">
                        <p className="mb-0 me-2 pb-0">Don't have an account?</p>
                    
                        <button
                          className="btn cr-new"
                          type="button"
                          onClick={() => router.push("/Signup")}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignIn;
