
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/clientSide/homePage/HomePage';
import ContactUs from '../pages/clientSide/contactUs/ContactUs';

const router = createBrowserRouter([
    {
      path:"/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<HomePage></HomePage>
        },
        {
            path:"/contact-us",
            element: <ContactUs></ContactUs>
        }
      ]
    }
   
  ]); 

export default router;