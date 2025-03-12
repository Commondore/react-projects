import { getOrders } from "@/api/firebase";
import { OrderItem } from "@/components/order/order-item";
import { IOrder } from "@/interfaces/order";
import { Container } from "@/shared/ui/container";
import { Loader } from "@/shared/ui/loader";
import { useEffect, useState } from "react";

interface OrderState extends IOrder {
  id: string;
}

export const Orders = () => {
  const [orders, setOrders] = useState<OrderState[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getOrders()
      .then((data) => {
        const orders = Object.keys(data).map((id) => {
          const order = data[id];
          return {
            ...order,
            id,
          };
        });

        setOrders(orders);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <Container>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Страница заказов!</h1>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {orders.toReversed().map((order, index) => (
          <OrderItem key={order.id} {...order} count={index + 1} />
        ))}
      </ul>
    </Container>
  );
};
