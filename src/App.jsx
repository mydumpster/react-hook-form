import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//ponte entre o react-hook-form e o yup
import * as yup from "yup";
// faz a validação dos campos do formulário

export const App = () => {
  const registerSchema = yup.object().shape({
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    // defaultValues: {
    //   name: "joão",
    //   email: "fulano@fulano.com",
    //   password: "********",
    // },
  });
  // register: função que vai registrar os campos do formulário, condensando em um objeto.

  const submit = (data) => {
    console.log(data);
    alert("Seja feliz com molejão! :)");
    // Lógica de envio do formulário
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)} noValidate>
        {/* não precisa de arrow function, pois o handleSubmit já faz isso. */}
        <input
          type="text"
          placeholder="Digite o seu nome"
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}
        <input
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Crie uma senha"
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <select {...register("userType")}>
          <option value="">Tipo de usuário</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {errors.userType?.message && <p>{errors.userType.message}</p>}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
