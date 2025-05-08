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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h1 className="font-bold text-2xl text-center text-emerald-700 uppercase">
        Cadastre-se
      </h1>
      <div className="">
        <Input
          label="Nome:"
          type="text"
          id="name"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        {errors.name && (
          <small className="italic text-red-500">{errors.name?.message}</small>
        )}
      </div>
      <div>
        <Input
          label="Sobrenome:"
          type="text"
          id="name"
          placeholder="Digite seu sobrenome"
          {...register("lastname")}
        />
        {errors.lastname && (
          <small className="italic text-red-500">
            {errors.lastname?.message}
          </small>
        )}
      </div>
      <div>
        <label htmlFor="gender" className="font-light text-green-950">
          Genero
        </label>
        <select
          className="w-full border-1 border-emerald-700 p-2.5 text-green-950"
          id="gender"
          {...register("gender")}
        >
          <option value="select" disabled selected>
            Selecione
          </option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="none">Prefiro não dizer</option>
        </select>
        {errors.gender && (
          <small className="italic text-red-500">
            {errors.gender?.message}
          </small>
        )}
      </div>
      <div>
        <Input
          label="Email:"
          type="email"
          id="name"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email && (
          <small className="italic text-red-500">{errors.email?.message}</small>
        )}
      </div>
      <div>
        <Input
          label="Senha:"
          type="text"
          id="name"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && (
          <small className="italic text-red-500">
            {errors.password?.message}
          </small>
        )}
      </div>
      <div>
        <Input
          label="Confirme a senha:"
          type="text"
          id="name"
          placeholder="Confirme a senha"
          {...register("confirmpassword")}
        />
        {errors.confirmpassword && (
          <small className="italic text-red-500">
            {errors.confirmpassword?.message}
          </small>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <input
            className="outline-0"
            type="checkbox"
            id="agree"
            {...register("agree")}
          />
          <label className="font-light text-green-950 " htmlFor="label">
            Concordo com os termos
          </label>
        </div>
        {errors.confirmpassword && (
          <small className="italic text-red-500">{errors.agree?.message}</small>
        )}
      </div>
      <button
        className="py-2 px-5 w-full bg-emerald-800 text-white rounded-lg cursor-pointer opacity-85 hover:opacity-100 transition-all"
        type="submit"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default Form;
