import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import SmoothScroll from "./components/common/SmoothScroll";
import { AudioProvider } from "./context/AudioContext";

const App = () => {
  return (
    <AudioProvider>
      <SmoothScroll>
        <RouterProvider router={router} />
      </SmoothScroll>
    </AudioProvider>
  );
};

export default App;
