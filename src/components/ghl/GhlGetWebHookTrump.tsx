import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  id: string;
}

export const GhlGetWebHookTrump: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      id: "6475908096aa97477d78535d",
      // any other default values go here
    },
  });

  const onSubmit = (data: IFormInput) => {
    axios
      .get(
        "https://services.leadconnectorhq.com/hooks/4rKuULHASyQ99nwdL1XH/webhook-trigger/7cb021de-1bb5-4cce-91f1-b47f6b8111af",
        {
          params: data,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-gray-200 w-full max-w-sm mx-auto rounded-lg form-control"
    >
      <input
        {...register("firstName", { required: true })}
        placeholder="Donald"
        className={`input input-primary mb-2 ${
          errors.firstName && "input-error"
        }`}
      />
      <input
        {...register("lastName", { required: true })}
        placeholder="Trump"
        className={`input input-primary mb-2 ${
          errors.lastName && "input-error"
        }`}
      />
      <input
        {...register("email", { required: true })}
        placeholder="trump@email.com"
        className={`input input-primary mb-2 ${errors.email && "input-error"}`}
      />
      <input
        {...register("phone", { required: true })}
        placeholder="678.333.4444"
        className={`input input-primary mb-2 ${errors.phone && "input-error"}`}
      />
      <input
        {...register("id")}
        placeholder="6475908096aa97477d78535d"
        className={`input input-primary mb-2 `}
        disabled
      />
      <input type="submit" className="btn btn-primary" value="Submit" />
    </form>
  );
};

export default GhlGetWebHookTrump;
