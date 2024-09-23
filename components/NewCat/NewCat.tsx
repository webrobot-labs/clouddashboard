"use client";
import NewCategoriesCss from "./new-categories.module.css";
import React, { useEffect, useState } from "react";
import InnerHeader from "../InnerHeader/InnerHeader";
import TopSearch from "../TopSearch/TopSearch";
import {
  Form,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  Table,
  ModalBody,
  Button,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";

// Definizione dello schema di validazione con yup
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Category Name is required")
    .min(5, "Category Name must be at least 5 characters"),
});

// Definizione del tipo per i dati del form
interface FormData {
  name: string;
}

function NewCat(): JSX.Element {
  const router = useRouter(); // Usa il router da next/navigation

  const [modal, setModal] = useState<boolean>(false);
  const toggle = () => setModal(!modal);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // Definizione della mutazione
  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      return axios.post("/api/category", data);
    },
    onSuccess: () => {
      Swal.fire("Saved!", "Your item has been Saved.", "success");
      reset();
      // Usa il router per reindirizzare
      router.push("/category");
    },
    onError: (error) => {
      console.error("Error:", error);
      Swal.fire("Error!", "There was an error saving the category.", "error");
    },
  });

  // Submit del form
  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <InnerHeader />
      <section className={NewCategoriesCss.newProject}>
        <TopSearch />
        <div className={NewCategoriesCss.project_items}>
          <div className={NewCategoriesCss.table_responsive}>
            <Table borderless style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Name/ID/Description</th>
                  <th>Creation date</th>
                  <th>Nr. bots/scrapers</th>
                  <th>Actions</th>
                </tr>
              </thead>
            </Table>
          </div>
          <div className={NewCategoriesCss.newProjectWrap}>
            <h3>
              You are almost done! Now create your first extraction project.
            </h3>
            <Form>
              <FormGroup className={NewCategoriesCss.newFile}>
                <Label for="file">
                  <span onClick={toggle}>
                    <span>
                      <img src={"/images/icon20-hover.svg"} alt="Icon18Hover" />
                    </span>
                    <span className={NewCategoriesCss.input_text}>
                      NEW CATEGORY
                    </span>
                  </span>
                </Label>
              </FormGroup>
            </Form>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={`modalWrap header-modal`}
      >
        <ModalHeader>
          <span className="modalTitle">New Category - Creation Panel</span>
          <span className={"closeButton"} onClick={toggle}></span>
        </ModalHeader>
        <ModalBody>
          <div className="modalBodyContent">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label>Category name:</Label>
                <input
                  className="form-control"
                  {...register("name")}
                  placeholder="Write your category name here"
                  type="text"
                />
                {errors?.name && (
                  <p>
                    <span style={{ color: "red" }}>
                      {errors?.name?.message}
                    </span>
                  </p>
                )}
              </FormGroup>
              <div className="btn_block">
                <Button
                  color="danger"
                  style={{ marginRight: "10px" }}
                  onClick={toggle}
                >
                  CANCEL
                </Button>
                <Button color="primary" type="submit">
                  SAVE
                </Button>
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default NewCat;

