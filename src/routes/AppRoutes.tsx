import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home.page"
import { Perfil } from "../pages/Perfil.page"
import { ScrollTop } from "../utils/ScrollTop"


export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <ScrollTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
            </Routes>
        </BrowserRouter>
    )
}