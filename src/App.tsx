import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./routes/routes";

const Home = lazy(() => import("./pages/home/Home"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
           <Route element={<MainLayout />}>
           <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} /></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
