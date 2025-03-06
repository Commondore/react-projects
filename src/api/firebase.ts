import ky from "ky";
import { IOrder } from "@/interfaces/order";

const firebaseApi = ky.create({ prefixUrl: import.meta.env.VITE_FIREBASE_API });

export const postOrder = (order: IOrder) => {
  return firebaseApi.post("orders.json", { json: order }).json();
};

export const getOrders = () => {
  return firebaseApi.get("orders.json").json<{ [key: string]: IOrder }>();
};
