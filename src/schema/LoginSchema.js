import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo invalido")
    .required("El campo correo es requerido"),
  password: Yup.string()
    .min(8, "El campo contraseña debe tener minimo 8 caracteres")
    .max(16, "El campo contraseña debe tener maximo 16 caracteres")
    .required("El campo contraseña es requerido"),
});
