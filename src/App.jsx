import { useForm } from "react-hook-form";

export const App = () => {
  const {register, handleSubmit} = useForm();
  // register: função que vai registrar os campos do formulário, condensando em um objeto.

  const submit = (data) => {
    console.log(data);
  }

  return (
  <>
    <form onSubmit={handleSubmit(submit)}>
      {/* não precisa de arrow function, pois o handleSubmit já faz isso. */}
      <input type="text" placeholder="Digite o seu nome" {...register("name")}/>
      <input type="email" placeholder="Digite seu e-mail"{...register("email")}/>
      <input type="password" placeholder="Crie uma senha"{...register("password")}/>
      <button type="submit">Enviar</button>
    </form>
  </>
  );
};
