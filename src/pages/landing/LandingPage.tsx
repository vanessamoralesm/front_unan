import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Outlet } from "react-router-dom";

export default function LandingPage() {
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
