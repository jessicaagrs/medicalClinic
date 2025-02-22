import { PlanRelationSpecialist } from './IPlan';

export interface Specialist {
  id: string;
  name: string;
  email: string;
  password: string;
  telephone: string;
  specialty: string;
  urlPhoto: string;
  crm: string;
  meetsPlan: boolean;
  createdAt: string;
  updatedAt: string;
  plans: PlanRelationSpecialist[];
  addressId: string;
  clinicId: string;
}
