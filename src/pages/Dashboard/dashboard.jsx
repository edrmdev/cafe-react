import Grid from "@mui/material/Grid";
import css from './dashboard.css';
import ProductsList from "../../components/product-list/products-list";
import MenuNavBar from "../../components/menu/menu";
import { styles } from "../../styled-components/custom";
import { Typography } from "@mui/material";

const pages = ['Usuarios', 'Productos', 'Categorías'];
const settings = ['Usuarios', 'Productos', 'Categorías', 'Cerrar Sesión'];
const userName = "Example";//Replace this with redux global state

const Dashboard = () => {
    
    return (
        <>
            { 
                <MenuNavBar title="Cafe" pages={pages} settings={settings} />
            } 
            <main>
                <div>
                    <div>
                        <Typography component="h4" variant="h4">Welcome {userName}!</Typography>
                    </div>
                    <ProductsList />
                </div>
            </main>
        </>
    )
}

export default Dashboard;