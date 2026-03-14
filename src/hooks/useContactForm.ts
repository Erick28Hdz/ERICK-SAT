import { useState } from "react";
import { useForm } from "react-hook-form";
import type { AlertColor } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { trackFormSubmit } from "../analitycs/events";
export interface FormData {
  name: string;
  email: string;
  message: string;
  company?: string;
}

const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup
    .string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),
  message: yup.string().required("El mensaje es obligatorio"),
});

export const useContactForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] =
    useState<AlertColor>("success");
  const [formDisabled, setFormDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (isSubmitting) return;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Error del API:", result);
        setSnackbarMessage(result.error || "Error enviando el mensaje");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
        return;
      }

      trackFormSubmit("contact_form");

      setSnackbarMessage("¡Mensaje enviado exitosamente!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      reset();
      setFormDisabled(true);
      setTimeout(() => setFormDisabled(false), 60000);
    } catch (error) {
      console.error("Error enviando el correo:", error);
      setSnackbarMessage("Hubo un error al enviar el mensaje.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    formDisabled,
    snackbarOpen,
    snackbarMessage,
    snackbarSeverity,
    setSnackbarOpen,
    onSubmit,
  };
};
