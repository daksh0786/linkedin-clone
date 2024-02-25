import { createBrowserRouter, RouterProvider,Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import Home from './Pages/Home'

const router = createBrowserRouter([
{
  path:'/',
  element:<Login/>

}
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
