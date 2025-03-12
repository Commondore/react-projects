import { Ings } from "@/interfaces/pizza";

export interface IOrder {
  ingredients: Ings;
  price: number;
  customer: ICustomer;
}

export interface ICustomer {
  name: string;
  email: string;
  address: string;
  phone: string;
}

type firebaseID = string;

export interface FirebaseData<T> {
  [key: firebaseID]: T;
}
