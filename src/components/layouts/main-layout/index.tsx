import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
