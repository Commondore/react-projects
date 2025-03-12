import ky from "ky";
import { FirebaseData, IOrder } from "@/interfaces/order";

const firebaseApi = ky.create({ prefixUrl: import.meta.env.VITE_FIREBASE_API });

export const postOrder = (order: IOrder) => {
  return firebaseApi.post("orders.json", { json: order }).json();
};

export const getOrders = (): Promise<FirebaseData<IOrder>> => {
  return firebaseApi.get("orders.json").json();
};
