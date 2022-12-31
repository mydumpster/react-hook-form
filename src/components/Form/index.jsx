import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formSchema";
import { useForm } from "react-hook-form";
import { Input } from "../Input";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
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
    <form onSubmit={handleSubmit(submit)} noValidate>
      {/* não precisa de arrow function, pois o handleSubmit já faz isso. */}

      <Input
          type="text"
          placeholder="Digite o seu nome"
          register={register("name")}
        />

      {/* <input
        type="text"
        placeholder="Digite o seu nome"
        {...register("name")}
      /> */}
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
  );
};
