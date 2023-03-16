// Component Props Interfaces

export interface NoteProps {
  title: string;
  content: string;
  id: number;
  date_created: Date;
  owner: string;
}

export interface IconProps {
  size: number;
  color: string;
}

// API Interfaces

export interface RegistrationParams {
  email: string;
  username: string;
  password: string;
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface ActivationParams {
  uid: string;
  token: string;
}

export interface AddNoteParams {
  title: string;
  content: string;
}

export interface UpdateNoteParams {
  id: number;
  title: string;
  content: string;
}
