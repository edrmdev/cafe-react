import { useState } from 'react';
import MenuNavBar from './components/menu/menu';
import AppRouter from './routes/root';

const pages = ['Usuarios', 'Productos', 'Categorías'];
const settings = ['Usuarios', 'Productos', 'Categorías', 'Cerrar Sesión'];

function App() {
  
  return (
    <>
      <MenuNavBar title="Cafe" pages={pages} settings={settings} />
      <AppRouter />
    </>
  )
}

export default App