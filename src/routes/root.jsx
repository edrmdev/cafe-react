import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
    Login,
    Dashboard as DashboardPage,
    Productos as ProductsPage,
    Usuarios as UsersPage
} from '../pages/';
import LoginPage from "../pages/Login/login-page";
import ProtectedRoute from "./protected";
import WithNav from "./withnav";
import WithoutNav from "./withoutnav";
const user = true;

const routes = () => (
    <Routes>
        <Route element={<WithoutNav />}>
            <Route path="/login" element={ <LoginPage />} />
        </Route>
        <Route element={<WithNav />}>
            <Route path='/' element={
                <ProtectedRoute user={user}>
                    <DashboardPage />
                </ProtectedRoute>
            }/>
            <Route 
                path='/usuarios' 
                element={
                    <ProtectedRoute user={user}>
                        <UsersPage />
                    </ProtectedRoute>
                }
            />
            <Route 
                path='/productos' 
                element={
                    <ProtectedRoute user={user}>
                        <ProductsPage />
                    </ProtectedRoute>
                } 
            />
            <Route path='/logout' element={<h1>Logout Page</h1>} />
        </Route>
    </Routes>
);

export default routes;