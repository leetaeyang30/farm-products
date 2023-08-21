import { GlobalStyles } from "./styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "/src/const";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import MainPage from "/src/components/pages/main-page/main-page";
import OrderPage from "/src/components/pages/order-page/order-page";
import products from "/src/mocks/products";
import featuresList from "/src/mocks/featuresList";
import ScrollToTop from "/src/components/ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoutes.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={featuresList} />} />
            <Route
              path={AppRoutes.ORDER}
              element={<OrderPage products={products} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
