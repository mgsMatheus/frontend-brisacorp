import { SpecialistModel } from "./specialist.model";

export interface DatesAvailablesBySpecialtyModel {
  doctors?: SpecialistModel;
  _id?: string;
  datesDoctors?: datesDoctors[];
}

export interface datesDoctors {
  _id?: string;
  active?: boolean;
  doctorId?: string;
  date?: string;
  hour?: string[];
}
