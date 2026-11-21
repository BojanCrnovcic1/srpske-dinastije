import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../hooks/ScrollToTop";
import AudioPlayer from "../components/common/AudioPlayer";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Outlet />

      <Footer />
      <AudioPlayer />
    </>
  );
};

export default MainLayout;
