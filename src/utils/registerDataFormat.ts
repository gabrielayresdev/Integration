import { RegisterDataInterface } from "../contexts/RegisterContext";
import { RegisterData } from "../services/userService.ts";

export default function registerDataFormat(
  data: RegisterDataInterface
): RegisterData {
  const parts = data.birthDate.split("/");
  const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`).toISOString();

  return {
    email: data.email,
    password: data.password,
    cpf: data.cpf,
    name: data.name,
    lastName: data.lastName,
    state: data.state,
    city: data.city,
    neighborhood: data.neighborhood,
    cep: data.cep,
    street: data.street,
    houseNumber: data.houseNumber,
    addressSupplement: data.addressSuplement,
    birthday: date,
    phoneNumber: data.phone,
  };
}
