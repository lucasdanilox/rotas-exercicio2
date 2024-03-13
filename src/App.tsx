import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Promotion from "./routes/Home/Promotion";
import Enrollment from "./routes/ Enrollment ";


export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<HomeBody />} />
                    <Route path="promotion" element={<Promotion />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
                <Route path="enrollment" element={<Enrollment />} />
            </Routes>
        </BrowserRouter>
    );
}


