import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/navbar/Navbar";
import Footer from "../components/ui/footer/Footer";

const MainLayout = () => {
  return (
    <div
      className="
        flex
        flex-col
        min-h-screen
        bg-(--color-dark-blue)
      "
    >
      <Navbar />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;