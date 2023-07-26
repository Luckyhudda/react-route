import { Outlet } from "react-router-dom";
import Header from "../conponents/Header/Header";
import Footer from "../conponents/Footer/Footer";

const MasterLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;
