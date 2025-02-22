import { Specialist } from './ISpecialist';

export interface Clinic {
  id: string;
  name: string;
  cnpj: string;
  email: string;
  password: string;
  telephone: string;
  createdAt: string;
  updatedAt: string;
  adressId: string;
  specialist: Specialist[];
}
