import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "./components/Layout.tsx";
import { Orders } from "./pages/Orders.tsx";
import { Products } from "./pages/Products.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Products />} />
      <Route path="/orders" element={<Orders />} />
    </Route>
  )
);

function App() {
  return (
    <div className="page">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
