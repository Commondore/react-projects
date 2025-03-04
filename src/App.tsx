import { CheckoutPage } from "@/pages/checkout-page";
import { PizzaBuilder } from "@/pages/pizza-builder";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PizzaBuilder />} />
      <Route path="/checkout" element={<CheckoutPage />} />

      <Route path="*" element={<h1>404 | Страница не найдена</h1>} />
    </Routes>
  );
}

export default App;
