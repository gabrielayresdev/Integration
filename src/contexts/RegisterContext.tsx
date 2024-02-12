import React from "react";
import usePagination from "../hooks/usePagination";
import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormWatch,
  useForm,
} from "react-hook-form";

const RegisterContext = React.createContext<IRegisterContext | null>(null);

export interface RegisterDataInterface {
  email: string;
  password: string;
  password2: string;
}

interface PaginationInterface {
  page: number;
  goBack: VoidFunction;
  goNext: VoidFunction;
  goTo: (page: number) => void;
}

interface IRegisterContext {
  formValues: RegisterDataInterface;
  pagination: PaginationInterface;
  control: Control<
    {
      email: string;
      password: string;
      password2: string;
    },
    any,
    {
      email: string;
      password: string;
      password2: string;
    }
  >;
  handleSubmit: UseFormHandleSubmit<
    {
      email: string;
      password: string;
      password2: string;
    },
    {
      email: string;
      password: string;
      password2: string;
    }
  >;
  errors: FieldErrors<{
    email: string;
    password: string;
    password2: string;
  }>;
  watch: UseFormWatch<{
    email: string;
    password: string;
    password2: string;
  }>;
}

export function useRegisterContext() {
  const context = React.useContext(RegisterContext);
  if (!context) throw new Error("useContext must be inside provider");
  else return context;
}

const RegisterContextProvider = ({ children }: React.PropsWithChildren) => {
  const formValues: RegisterDataInterface = {
    email: "",
    password: "",
    password2: "",
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: formValues.email,
      password: formValues.password,
      password2: formValues.password2,
    },
  });

  const pagination = usePagination(3);

  return (
    <RegisterContext.Provider
      value={{ formValues, pagination, control, handleSubmit, errors, watch }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
