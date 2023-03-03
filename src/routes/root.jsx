import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
    Login,
    Dashboard as DashboardPage,
    Productos as ProductsPage,
    Usuarios as UsersPage
} from '../pages/';

const router = () => (
    <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/usuarios' element={<UsersPage />}/>
        <Route path='/productos' element={<ProductsPage />} />
        <Route path='/logout' element={<h1>Logout Page</h1>} />
        <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
);

export default router;