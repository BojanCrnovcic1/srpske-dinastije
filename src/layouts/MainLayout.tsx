import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AudioPlayer from "../components/common/AudioPlayer";
import InstantScrollToTop from "../hooks/InstantScrollToTop";

const MainLayout = () => {
  return (
    <>
      <InstantScrollToTop />
      <Header />

      <Outlet />

      <Footer />
      <AudioPlayer />
    </>
  );
};

export default MainLayout;
