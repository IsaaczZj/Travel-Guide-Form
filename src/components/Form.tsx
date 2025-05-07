import { useForms } from "../hooks/useForm";
import { UserFormSchema } from "../schemas/userFormSchema";
import Input from "./Input";

const Form = () => {
  const { register, handleSubmit, errors, watch } = useForms();
  const onSubmit = (data: UserFormSchema) => {
    const formValue = watch();
    console.log(data, formValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <h1 className="font-bold text-2xl text-center text-emerald-700 uppercase">Cadastre-se</h1>
      <div className="">
        <Input
          label="Nome:"
          type="text"
          id="name"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        {errors.name && <small>{errors.name.message}</small>}
      </div>
      <div>
        <Input
          label="Sobrenome:"
          type="text"
          id="name"
          placeholder="Digite seu sobrenome"
          {...register("lastname")}
        />
        {errors.name && <small>{errors.name.message}</small>}
      </div>
      <div>
        <select name="" id="">
          <option value="" disabled selected>Selecione</option>
        </select>
        {errors.name && <small>{errors.name.message}</small>}
      </div>
      <div>
        <Input
          label="Email:"
          type="text"
          id="name"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.name && <small>{errors.name.message}</small>}
      </div>
      <div>
        <Input
          label="Senha:"
          type="text"
          id="name"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.name && <small>{errors.name.message}</small>}
      </div>
      <div>
        <Input
          label="Confirme a senha:"
          type="text"
          id="name"
          placeholder="Confirme a senha"
          {...register("confirmpassword")}
        />
        {errors.name && <small>{errors.name.message}</small>}
      </div>
      <button className="py-2 px-5 w-full bg-emerald-800 text-white rounded-lg cursor-pointer opacity-85 hover:opacity-100" type="submit">Cadastrar</button>
    </form>
  );
};

export default Form;
