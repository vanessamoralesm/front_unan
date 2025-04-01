import { createBrowserRouter , RouterProvider} from "react-router-dom";
import LandingPage from "@/pages/landing/LandingPage";
import Main from '@/pages/landing/Main'
import Contact from '@/pages/landing/Contact'
import Teachers from "@/pages/landing/Teachers";
import Sources from "@/pages/landing/Sources";
import Projects from "@/pages/landing/Projects";
import Events from "@/pages/landing/Events";
import Business from "@/pages/landing/Business";
import Auth from "@/pages/auth/Auth";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Dashboard from "@/pages/admin/Dashboard";
import Investigation from "@/pages/landing/Investigation";

export default function Index() {

    const routes = createBrowserRouter([
        {
            path:'/',
            element: <LandingPage/>,   
            children:[
                {
                    index:true,
                    element: <Main/>
                },
                {
                    path:'maestros',
                    element: <Teachers/>
                },
                {
                    path:'recursos',
                    element: <Sources/>
                },
                {
                    path:'proyectos',
                    element: <Projects/>
                },
                {
                    path:'eventos',
                    element: <Events/>
                },
                {
                    path:'finacimiento',
                    element: <Business/>
                },
                {
                    path:'contactos',
                    element: <Contact/>
                },
                {
                    path: 'investigacion',
                    element: <Investigation />
                }
            ]
        },
        {
            path:'/auth',
            element: <Auth/>,
            children:[
                {
                    path:'login',
                    element:<Login/>
                },
                {
                    path:'register',
                    element:<Register/>
                }
            ]
        },
        {
            path:'dashboard',
            element:<Dashboard/>
        }
        
    ])

  return <RouterProvider router={routes}/>
  
}
