import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import routes from "./routes.json";
import Errror from "../pages/Errror";
import ProductDetails from "../pages/ProductDetails";
import ProductHelp from "../pages/ProductHelp";
import ProductsLayoout from "../layouts/ProductsLayoout";
import MasterLayout from "../layouts/MasterLayout";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={"*"} element={<Errror />} />
      <Route path={routes.HOME} element={<MasterLayout />}>
        <Route index element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.PRODUCT} element={<ProductsLayoout />}>
          <Route index element={<Products />} />
          <Route path=":pid" element={<ProductDetails />} />
          <Route path="help" element={<ProductHelp />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default PageRoutes;
