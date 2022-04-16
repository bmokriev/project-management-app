import LoginPage from "../components/pages/LoginPage/LoginPage";
import MainPage from "../components/pages/MainPage";
import routePathEnum from "../enums/routePathEnum";
import React from "react";

const { MAIN_PAGE, LOGIN_PAGE } = routePathEnum;

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
  ];
}
