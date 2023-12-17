import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Home/HomePage";
import { Footer } from "./Components/Footer/Footer";
import { SinglePage } from "./Components/Watch/SinglePage";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/singlePage/:id" element={<SinglePage />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
