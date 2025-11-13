import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import HomePage from "../Pages/HomePage/HomePage";
import TermsConditionPage from "../Pages/TermsConditionPage/TermsConditionPage";
import PrivacyPolicyPage from "../Pages/PrivacyPolicyPage/PrivacyPolicyPage";
import ReturnPolicyPage from "../Pages/ReturnPolicyPage/ReturnPolicyPage";
import MediaPage from "../Pages/MediaPage/MediaPage";

import ContactPage from "../Pages/ContactPage/ContactPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import OfferPage from "../Pages/OfferPage/OfferPage";
import OfferDetailsPage from "../Pages/OfferPage/OfferDetailsPage";
import PayBillPage from "../Pages/PayBillPage/PayBillPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/media",
        element: <MediaPage />,
      },

      {
        path: "/contact/",
        element: <ContactPage />,
      },
      {
        path: "/about/",
        element: <AboutPage />,
      },
      {
        path: "/offers/",
        element: <OfferPage />,
      },
      {
        path: "/offers/:slug",
        element: <OfferDetailsPage />,
      },
      {
        path: "/paybill",
        element: <PayBillPage />,
      },
      {
        path: "/terms-and-conditions/",
        element: <TermsConditionPage />,
      },
      {
        path: "/return-policy/",
        element: <ReturnPolicyPage />,
      },
      {
        path: "/privacy-policy/",
        element: <PrivacyPolicyPage />,
      },
    ],
  },
]);
