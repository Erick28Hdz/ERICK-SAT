import React from "react";
import {
    Box,
    Stack,
    TextField,
} from "@mui/material";
import { Mail, Send, PhoneCall, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "./Button";

interface FormData {
    name: string;
    email: string;
    message: string;
}

// Validación con Yup
const schema = yup.object().shape({
    name: yup.string().required("El nombre es obligatorio"),
    email: yup.string().email("Correo inválido").required("El correo es obligatorio"),
    message: yup.string().required("El mensaje es obligatorio"),
});

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        console.log("Datos enviados:", data);
        // Aquí va tu lógica para enviar el formulario
    };

    return (
        <Box flex={1}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                    spacing={2}
                    sx={{
                        width: "100%",
                        maxWidth: "700px",
                        margin: "0 auto",
                        padding: 3,
                        backgroundColor: "var(--color-dark)",
                        borderRadius: 2,
                    }}
                >
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        {...register("name")}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        sx={{
                            input: { color: "var(--color-light)" },
                            "& label": { color: "var(--color-light-blue)" },
                            "& label.Mui-focused": { color: "var(--color-light-blue)" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "var(--color-light-blue)" },
                                "&:hover fieldset": { borderColor: "var(--color-beige)" },
                                "&.Mui-focused fieldset": { borderColor: "var(--color-beige)" },
                            },
                        }}
                    />
                    <TextField
                        label="Correo electrónico"
                        variant="outlined"
                        fullWidth
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        sx={{
                            input: { color: "var(--color-light)" },
                            "& label": { color: "var(--color-light-blue)" },
                            "& label.Mui-focused": { color: "var(--color-light-blue)" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "var(--color-light-blue)" },
                                "&:hover fieldset": { borderColor: "var(--color-beige)" },
                                "&.Mui-focused fieldset": { borderColor: "var(--color-beige)" },
                            },
                        }}
                    />
                    <TextField
                        label="Mensaje"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        {...register("message")}
                        error={!!errors.message}
                        helperText={errors.message?.message}
                        sx={{
                            textarea: { color: "var(--color-light)" },
                            "& label": { color: "var(--color-light-blue)" },
                            "& label.Mui-focused": { color: "var(--color-light-blue)" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "var(--color-light-blue)" },
                                "&:hover fieldset": { borderColor: "var(--color-beige)" },
                                "&.Mui-focused fieldset": { borderColor: "var(--color-beige)" },
                            },
                        }}
                    />
                    <Box display="flex" justifyContent="center">
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting}
                        >
                            Enviar
                        </Button>
                    </Box>
                </Stack>
            </form>
        </Box>
    );
};

export default ContactForm;
