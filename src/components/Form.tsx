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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nome:"
        type="text"
        id="name"
        placeholder="Digite seu nome"
        {...register("name")}
      />
      {errors.name && <small>{errors.name.message}</small>}
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Form;
