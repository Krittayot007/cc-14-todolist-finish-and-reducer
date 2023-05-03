import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom' 
import { publicRoutes } from './publicRoutes'

function Router() {


    const router = createBrowserRouter(publicRoutes)
  return <RouterProvider router={router} />
}

export default Router 

// Ex : Array of Router Object
// const mockedRotes = [
//         {
//             path: '/',
//             element: <h1>Home</h1>
//         },
//         {
//             path: 'profile',
//             element: <h1>profile</h1>
//         },
//         {
//             path: 'profile/:id',
//             element: <h1>profile</h1>
//         },
//         {
//             path: 'about',
//             element: <h1>about</h1>
//         },
//         {
//             path: '*',
//             element: <Navigate to='/' />
//         }
//     ]

