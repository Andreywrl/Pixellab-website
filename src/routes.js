import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;