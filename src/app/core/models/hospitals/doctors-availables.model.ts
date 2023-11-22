import { DoctorsModel } from "./doctor.model";

export interface DoctorsAvailableModel {
  active: boolean;
  date: string;
  _id: string;
  _idDoctor: string;
  datesDoctors: InfoDoctorModel[];
}

export interface InfoDoctorModel {
  name: string;
  doctors: DoctorsModel[];
}
