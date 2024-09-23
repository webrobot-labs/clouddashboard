"use client";
import React, { useEffect, useState } from "react";
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
import { useGoogleLogin } from "@react-oauth/google";
import Cookies from "universal-cookie";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";  // Importa useRouter per la navigazione
import "./newlogin.module.css";

// Inizializza i cookies
const cookies = new Cookies();

// Schema di validazione con yup per i dati dell'anagrafica
const schema = yup.object().shape({
  fullName: yup.string().trim().required("Full Name is required"),
  email: yup
    .string()
    .trim()
    .required("Email Address is required")
    .email("Email format is not correct"),
  address: yup.string().trim().required("Address is required"),
  phoneNumber: yup
    .string()
    .trim()
    .required("Phone Number is required")
    .matches(/^[0-9]+$/, "Phone Number must contain only digits"),
});

interface ProfileFormData {
  fullName: string;
  email: string;
  address: string;
  phoneNumber: string;
}

const Profile: React.FC = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [isGoogleLinked, setIsGoogleLinked] = useState(false);
  const [isFacebookLinked, setIsFacebookLinked] = useState(false);
  const router = useRouter(); // Inizializza il router

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(schema),
  });

  // Mutazione per salvare i dettagli del profilo
  const mutation = useMutation({
    mutationFn: (data: ProfileFormData) => {
      return axios
        .post("/api/profile", data)
        .then((response) => {
          Swal.fire("Saved!", "Profile updated successfully.", "success");
        })
        .catch((error) => {
          Swal.fire("Error!", "There was an error updating the profile.", "error");
          console.error("Error:", error);
        });
    },
  });

  // Login con Google
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        });
        cookies.set("googleUser", JSON.stringify(res.data), { path: "/" });
        console.log("Google user info:", res.data);
        setIsGoogleLinked(true);
        Swal.fire("Linked!", "Google account linked successfully.", "success");
      } catch (err) {
        console.error("Error fetching Google user info:", err);
      }
    },
    onError: (error) => {
      console.error("Google login error:", error);
    },
  });

  // Placeholder per il login con Facebook (da integrare)
  const loginWithFacebook = () => {
    setIsFacebookLinked(true);
    Swal.fire("Linked!", "Facebook account linked successfully.", "success");
  };

  const onSubmit = async (data: ProfileFormData) => {
    mutation.mutate(data);
  };

  // Carica i dettagli del profilo utente al montaggio del componente (simulazione di un fetch)
  useEffect(() => {
    // Simulazione di un fetch dei dati utente
    const fetchUserData = async () => {
      const userData = await axios.get("/api/user");
      reset(userData.data);
    };
    fetchUserData();
  }, [reset]);

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
                      <h5 className="font-bold mt-4">Your Profile</h5>
                      <div className="form-outline mb-4">
                        <TextField
                          id="fullName"
                          label="Full Name"
                          variant="filled"
                          type="text"
                          className="email-width"
                          {...register("fullName")}
                        />
                        {errors?.fullName && (
                          <span style={{ color: "red" }}>
                            {errors?.fullName?.message}
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
                          id="address"
                          label="Address"
                          variant="filled"
                          className="email-width"
                          type="text"
                          {...register("address")}
                        />
                        {errors?.address && (
                          <span style={{ color: "red" }}>
                            {errors?.address?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-outline mb-4">
                        <TextField
                          id="phoneNumber"
                          label="Phone Number"
                          variant="filled"
                          className="email-width"
                          type="text"
                          {...register("phoneNumber")}
                        />
                        {errors?.phoneNumber && (
                          <span style={{ color: "red" }}>
                            {errors?.phoneNumber?.message}
                          </span>
                        )}
                      </div>

                      <div className="text-center pt-1 mb-1 pb-1">
                        <Button
                          className="btn btn-primary fa-lg gradient-custom-2 mb-3 w-100 login-button"
                          type="submit"
                        >
                          Save Profile
                        </Button>
                      </div>

                      <div className="d-flex flex-row align-items-center login-box-seperator-container">
                        <div className="login-box-seperator"></div>
                        <div className="login-box-seperator-text">
                          <p className="or-text">Link your Social Accounts</p>
                        </div>
                        <div className="login-box-seperator"></div>
                      </div>

                      <div className="form-outline mb-4">
                        <div className="login-box-content">
                          <Button
                            className={`fb-login box-shadow ${isFacebookLinked ? "linked" : ""}`}
                            onClick={loginWithFacebook}
                            disabled={isFacebookLinked}
                          >
                            <FacebookIcon className="facebook-icon-color" />
                            {isFacebookLinked ? "Facebook Linked" : "Link Facebook"}
                          </Button>

                          <Button
                            className={`fb-login box-shadow mt-2 ${isGoogleLinked ? "linked" : ""}`}
                            onClick={() => loginWithGoogle()}
                            disabled={isGoogleLinked}
                          >
                            <GoogleIcon className="gmail-icon-color" />
                            {isGoogleLinked ? "Google Linked" : "Link Google"}
                          </Button>
                        </div>

                        <div className="mt-2 mb-2">
                          <p className="text-muted text-center d-flex justify-content-center align-items-center">
                            <Checkbox {...label} />I consent to the processing
                            of my personal data
                          </p>
                        </div>
                      </div>

                      {/* Aggiungi un pulsante per tornare alla home */}
                      <div className="text-center">
                        <Button
                          className="btn btn-secondary mt-3"
                          onClick={() => router.push("/")}
                        >
                          Back to Home
                        </Button>
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

export default Profile;

