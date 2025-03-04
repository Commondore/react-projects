import { Pizza } from "@/components/pizza";
import { Ings } from "@/interfaces/pizza";
import { Button } from "@/shared/ui/button";

interface Props {
  ings: Ings;
}

export const CheckoutSummary = ({ ings }: Props) => {
  return (
    <>
      <Pizza ings={ings} />
      <div style={{ textAlign: "center" }}>
        <h1>Потвердите свой заказ</h1>
        <div>
          <Button click={() => {}} variant="danger">
            Отмена
          </Button>
          <Button click={() => {}} variant="success">
            Подтвердить
          </Button>
        </div>
      </div>
    </>
  );
};
