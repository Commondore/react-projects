import { Pizza } from "@/components/pizza";
import { Ings } from "@/interfaces/pizza";
import { Button } from "@/shared/ui/button";
import { Outlet, useNavigate } from "react-router";

interface Props {
  ings: Ings;
}

export const CheckoutSummary = ({ ings }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <Pizza ings={ings} />
      <div style={{ textAlign: "center" }}>
        <h1>Потвердите свой заказ</h1>
        <div>
          <Button click={() => navigate("/")} variant="danger">
            Отмена
          </Button>
          <Button click={() => navigate("/checkout/contact-data")} variant="success">
            Подтвердить
          </Button>
        </div>
        <Outlet />
      </div>
    </>
  );
};
