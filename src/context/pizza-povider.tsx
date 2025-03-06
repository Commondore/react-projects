import { Ings } from "@/interfaces/pizza";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

interface ContextType {
  ings: Ings;
  price: number;
  addIng: (ingName: string) => void;
  removeIng: (ingName: string) => void;
  reset: () => void;
}

const PRICES = {
  cheese: 30,
  olives: 40,
  sausage: 50,
  mushrooms: 20,
};

const DEFAULT_VALUE = {
  ings: {
    cheese: 0,
    olives: 0,
    sausage: 0,
    mushrooms: 0,
  },
  price: 100,
  addIng: () => {},
  removeIng: () => {},
  reset: () => {},
};

const PizzaContext = createContext<ContextType>(DEFAULT_VALUE);

interface Props {
  children: React.ReactNode;
}

export const PizzaProvider = ({ children }: Props) => {
  const [ings, setIngs] = useState<Ings>({
    cheese: 0,
    olives: 0,
    sausage: 0,
    mushrooms: 0,
  });
  const [price, setPrice] = useState(100);

  const addIng = useCallback((ingName: string) => {
    setIngs((ings) => {
      return {
        ...ings,
        [ingName]: ings[ingName as keyof Ings] + 1,
      };
    });

    setPrice((price) => price + PRICES[ingName as keyof Ings]);
  }, []);

  const removeIng = useCallback(
    (ingName: string) => {
      setIngs((ings) => {
        return {
          ...ings,
          [ingName]: 0,
        };
      });

      setPrice((price) => price - ings[ingName as keyof Ings] * PRICES[ingName as keyof Ings]);
    },
    [ings]
  );

  const reset = useCallback(() => {
    setIngs(DEFAULT_VALUE.ings);
    setPrice(DEFAULT_VALUE.price);
  }, []);

  const data = useMemo(() => {
    return { ings, price, addIng, removeIng, reset };
  }, [ings, price, removeIng, addIng, reset]);

  return <PizzaContext.Provider value={data}>{children}</PizzaContext.Provider>;
};

export const usePizzaContext = () => useContext(PizzaContext);
