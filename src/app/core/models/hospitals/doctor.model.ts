export interface DoctorModel {
  id?: string;
  doctors: DoctorsModel;
}

export interface DoctorsModel {
  _id?: string;
  name: string;
  specialty: string;
}
