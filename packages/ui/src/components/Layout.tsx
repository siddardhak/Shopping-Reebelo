import { Outlet } from "react-router-dom";
import { Header } from "./UI/Header/Header.tsx";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
