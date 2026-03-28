import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SoftBackdrop from "./components/SoftBackdrop";
import Footer from "./components/Footer";
import LenisScroll from "./components/lenis";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Generator from "./pages/Generator";
import Result from "./pages/Result";
import MyGenerations from "./pages/MyGenerations";
import Community from "./pages/Community";
import Plans from "./pages/Plans";
import Loading from "./pages/Loading";
import { Toaster } from "react-hot-toast";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Toaster
        toastOptions={{ style: { background: "#333", color: "#fff" } }}
      />
      <SoftBackdrop />
      <LenisScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/generate" element={<Generator />}></Route>
        <Route path="/result/:projectId" element={<Result />}></Route>
        <Route path="/my-generations" element={<MyGenerations />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/plans" element={<Plans />}></Route>
        <Route path="/loading" element={<Loading />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
