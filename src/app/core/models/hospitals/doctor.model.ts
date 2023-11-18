export interface DoctorModel {
  id?: string;
  doctors: DoctorsModel;
}

export interface DoctorsModel {
  name: string;
  specialty: string;
}
