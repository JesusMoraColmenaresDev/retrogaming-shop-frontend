export interface UserFormData {
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber?: string;
  country?: string;
  password: string;
  confirmPassword?: string;
}

export interface CurrentUserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  country?: string;
  role: 'user' | 'admin';
};
