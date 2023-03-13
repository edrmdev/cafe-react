import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
    Login as LoginPage,
    Dashboard as DashboardPage,
    Productos as ProductsPage,
    Usuarios as UsersPage
} from '../pages/';

import ProtectedRoute from "./protected";
import WithNav from "./withnav";
import WithoutNav from "./withoutnav";

const routes = ({user}) => (
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
            <Route 
                path='/categorias'
                element={
                    <ProtectedRoute user={user}>
                        <h1>Categorias Page</h1>
                    </ProtectedRoute>
                }
            />
        </Route>
    </Routes>
);

export default routes;