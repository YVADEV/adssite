export type IstomaEnvelope<T> = {
  Success?: boolean;
  Message?: string;
  StatusCode?: number;
  Data?: T;
};

export type IstomaSlot = {
  DoctorId: number;
  LocationId: number;
  StartDate: string;
  EndDate: string;
  BranchId?: number;
  CategoryIds?: number[];
};

export type PublicSlot = {
  start: string;
  end: string;
  doctorId: number;
  cabinetId: number;
  branchId?: number;
  durationMinutes: number;
  label: string;
};

export type IstomaPatientMatch = {
  Id: number;
  LastName?: string;
  FirstName?: string;
  Phone?: string;
  Email?: string;
};

export type IstomaAppointment = {
  Id?: number;
  PatientId?: number;
  DoctorId?: number;
  CabinetId?: number;
  StartDate?: string;
  EndDate?: string;
  PatientFullName?: string;
  PatientPhone?: string;
  AppointmentStatus?: number;
};

export type AddAppointmentRequestPayload = {
  FullName: string;
  Phone: string;
  Email: string;
  Notes: string;
  MarketingSourceId: number;
  BranchId?: number;
};

export type BookingInput = {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  consent: boolean;
  source?: string;
  website?: string;
  origin?: string;
  idempotencyKey?: string;
};

export type BookingValidationError = {
  field?: string;
  message: string;
};
