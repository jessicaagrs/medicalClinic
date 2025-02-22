import { PlanRelationUser } from './IPlan';

export interface User {
  id?: string;
  email: string;
  name: string;
  password: string;
  telephone: string;
  havePlan: boolean;
  createdAt?: string;
  updatedAt?: string;
  addressId: string;
  plans?: PlanRelationUser[];
}
