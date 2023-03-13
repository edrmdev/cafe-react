// WithNav.js (Stand-alone Functional Component)
import React from 'react';
import { Outlet } from 'react-router';
import MenuNavBar from '../components/menu/menu';
import UserIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from "@mui/icons-material/Home";

const pages = [
{
  name: 'Inicio',
  link: '',
  icon: <HomeIcon />,
},
{
  name: 'Usuarios',
  link: 'Usuarios',
  icon: <UserIcon />
}, 
{
  name: 'Productos',
  link: 'Productos',
  icon: <ShoppingCartIcon />
}, 
{
  name: 'Categorías', 
  link: 'Categorias',
  icon: <CategoryIcon />
}];

const settings = 
  [
    ...pages,
    {
      name: 'Cerrar Sesión',
      link: 'LogOut'
    }
  ];

export default () => {
  return (
    <>
      <MenuNavBar pages = {pages} settings = {pages} title={"Cafe"} />
      <Outlet />
    </>
  );
};