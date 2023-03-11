// WithNav.js (Stand-alone Functional Component)
import React from 'react';
import { Outlet } from 'react-router';
import MenuNavBar from '../components/menu/menu';

const pages = ['Usuarios', 'Productos', 'Categorías'];
const settings = ['Usuarios', 'Productos', 'Categorías', 'Cerrar Sesión'];

export default () => {
  return (
    <>
      <MenuNavBar pages = {pages} settings = {settings} />
      <Outlet />
    </>
  );
};