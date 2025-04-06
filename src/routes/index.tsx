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
import Enterprise from "@/pages/landing/Enterprise";
import Program from "@/pages/landing/Program";

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
                    path:'financiamiento',
                    element: <Business/>
                },
                {
                    path:'contactos',
                    element: <Contact/>
                },
                {
                    path: 'investigacion',
                    element: <Investigation />
                },
                {
                    path:'emprendimiento',
                    element: <Enterprise />
                },
                {
                    path:'programa',
                    element: <Program />
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
