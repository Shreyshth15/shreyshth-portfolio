import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Portfolio from "@/pages/Portfolio";

function App() {
  useEffect(() => {
    document.title = "Shreyshth Sharma | Finance & Quant Portfolio";
    const desc =
      "Portfolio of Shreyshth Sharma, an Economics & Quantitative Methods graduate from Indiana University Bloomington focused on finance, asset management, analytics, investment research and consulting.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster theme="dark" position="top-center" />
    </div>
  );
}

export default App;
