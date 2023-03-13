import AppRouter from './routes/root';
import { useSelector } from 'react-redux';

const App = () => {

  const { auth } = useSelector( state=>state.rootReducer );
  
  return (
     <AppRouter user={ auth.user } />
  )
}

export default App