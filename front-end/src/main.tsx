import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "./views/Cart/Cart";
import { Favourites } from "./views/Favourites/Favourites";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./views/MainPage/MainPage";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { ProductDetails } from "./views/ProductDetails/ProductDetails";
import { mainPageLoader } from "./api/mainPageLoader";
import { productListLoader } from "./api/productListLoader";
import { favouritesLoader } from "./api/favouritesLoader";
import { addProductToFavourites } from "./api/addProductToFavouriteAction";
import { deleteFavouriteAction } from "./api/deleteFavouriteAction";

//wszystkie parametry ":productId", ":gendrer", ":category" i ":subcategory" są potocznie nazywane parametrami dynamicznymi (ta część url jest dynamiczna, zmienia się w zależności od tego co wybierze użytkownik)
//dostęp do tych parametrów można uzyskać w komponentach za pomocą hooka useParams() z react-router-dom
//w funkcji loader poprzez argument params
//zalety parametrów dynamicznych: Tworzenie elastycznych ścieżek, Nawigację do konkretnych zasobów (jak szczegóły produktu), Implementację funkcji takich jak dodawanie do ulubionych dla konkretnego produktu
const router = createBrowserRouter([
  {
    path: "/add-to-favourites/:productId",
    action: addProductToFavourites,
  },
  {
    path: "/delete-favourite/:favouriteId",
    action: deleteFavouriteAction,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/koszyk",
        element: <Cart />,
      },
      {
        path: "/ulubione",
        element: <Favourites />,
        loader: favouritesLoader,
        //loader to mechanizm, który pozwala na asynchroniczne ładowanie danych przed renderowaniem komponentu
        //w loaderze można pobrać dane z API, a następnie przekazać je do komponentu jako props
        //w loaderze można również przekazać parametry do komponentu, które będą dostępne w propsach
      },
      {
        path: "/:gender?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: "/:gender/:category/:subcategory?",
        element: <ProductsList />,
        loader: productListLoader,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        // Tu można dodać loader do pobierania szczegółów produktu
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
