export interface iContactRequest {
  email: string;
}

export interface iContact extends iContactRequest {
  id: string;
  name: string;
  phoneNumber: string;
  createdAt: Date;
}

