import * as yup from "yup";

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("O nome é obrigatório!")
        .min(3, "O nome precisa ter pelo menos 3 caracteres.")
        .max(200, "O nome pode ter no máximo 200 caracteres."),
    email: yup
        .string()
        .required("O email é obrigatório!")
        .email("É necessário fornecer um email."),
    password: yup
        //.oneOf([yup.ref("password"), null], "As senhas precisam ser iguais")
        .string()
        .required("Campo obrigatório")
        .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula")
        .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula")
        .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número")
        .matches(
            /(?=.*?[#?!@$%^&*-])/,
            "É necessário pelo menos um caractere especial"
        )
        // https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
        .min(8, "É necessário uma senha de pelo menos 8 caracteres")
        .max(16, "É necessário uma senha de no máximo 16 caracteres"),
    userType: yup.string().required("Escolha um tipo de usuário"),
});