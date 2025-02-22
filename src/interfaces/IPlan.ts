export interface PlanRelationUser {
  userId?: string;
  planId: string;
  planDesc: string;
}

export interface PlanRelationSpecialist {
  specialistId?: string;
  planId: string;
  planDesc: string;
}

export interface Plan {
  id: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}
