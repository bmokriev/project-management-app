import LoginPage from "../components/pages/LoginPage/LoginPage";
import MainPage from "../components/pages/MainPage";
import ForgotPasswordPage from "../components/pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "../components/pages/ResetPasswordPage/ResetPasswordPage";
import routePathEnum from "../enums/routePathEnum";
import React from "react";
import SignUpPage from "../components/pages/SignUpPage/SignUpPage";


const { MAIN_PAGE, LOGIN_PAGE, SIGN_UP_PAGE, FORGOT_PASSWORD_PAGE, RESET_PASSWORD_PAGE } =
  routePathEnum;

export function routeMap() {
  return [
    {
      component: <MainPage />,
      path: MAIN_PAGE,
    },
    {
      component: <LoginPage />,
      path: LOGIN_PAGE,
    },
    {
      component: <SignUpPage />,
      path: SIGN_UP_PAGE,
    },
    {
      component: <ForgotPasswordPage />,
      path: FORGOT_PASSWORD_PAGE,
    },
    {
      component: <ResetPasswordPage />,
      path: RESET_PASSWORD_PAGE,
    },
  ];
}
