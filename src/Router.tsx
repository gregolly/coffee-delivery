import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import { Cart } from "./pages/Cart"
import { Success } from "./pages/Success";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/success" element={<Success />}></Route>
        </Routes>
    )
}