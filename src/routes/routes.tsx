import { Outlet } from "react-router-dom";
import Header from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";


function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
