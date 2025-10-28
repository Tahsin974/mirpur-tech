import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import HomePage from "../Pages/HomePage/HomePage";
import TermsConditionPage from "../Pages/TermsConditionPage/TermsConditionPage";
import PrivacyPolicyPage from "../Pages/PrivacyPolicyPage/PrivacyPolicyPage";
import ReturnPolicyPage from "../Pages/ReturnPolicyPage/ReturnPolicyPage";
import MediaPage from "../Pages/MediaPage/MediaPage";
import TariffApprovalPage from "../Pages/TariffApprovalPage/TariffApprovalPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import AboutPage from "../Pages/AboutPage/AboutPage";

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
        path: "/tariff-approval-page",
        element: <TariffApprovalPage />,
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
