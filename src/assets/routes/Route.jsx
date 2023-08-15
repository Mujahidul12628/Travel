import { createBrowserRouter } from "react-router-dom";


// import RecipeDetails from "../pages/recipeDetails/RecipeDetails";
// import ChefRecipes from "../pages/chefRecipes/ChefRecipes";

// import PrivateRoute from "./PrivateRoute";
// import Blog from "../pages/Blog/Blog";

import Home from "../Component/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MainLayout from "../Common/MainLayout/MainLayout";
import ErrorPage from "../Common/ErrorPage/ErrorPage";
import Blog from "../Component/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            // {
            //     path: "/chef/:id",
            //     element: (
            //         <PrivateRoute>
            //             <ChefRecipes></ChefRecipes>
            //         </PrivateRoute>
            //     ),
            //     loader: ({ params }) =>
            //         fetch(
            //             `http://localhost:5555/chef/${params.id}`
            //         ),
            // },
            // {
            //     path: "/recipe/:id",
            //     element: (
            //         <PrivateRoute>
            //             <RecipeDetails></RecipeDetails>
            //         </PrivateRoute>
            //     ),
            //     loader: ({ params }) =>
            //         fetch(
            //             `http://localhost:5555/recipe/${params.id}`
            //         ),
            // },
            // {
            //     path: "/blog",
            //     element: <Blog></Blog>,
            //     loader: () =>
            //         fetch("http://localhost:5555/questions"),
            // },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
]);

export default router;
