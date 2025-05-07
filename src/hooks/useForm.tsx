import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserFormSchema, userFormSchema } from "../schemas/userFormSchema";

export const useForms = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema)
  });

  return {register, handleSubmit, errors, watch}
};
