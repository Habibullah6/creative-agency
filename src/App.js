import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './pages/Home/Home';
import { theme } from './theme/theme';



const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    }
  ])



 
  return (
   <ThemeProvider theme={theme}>
     <RouterProvider router={router}/>
      <CssBaseline/>
    
   </ThemeProvider>
  );
};

export default App;