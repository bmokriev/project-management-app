import MainPage from "../components/pages/MainPage";
import routePathEnum from "../enums/routePathEnum";
import React from "react";

interface IrouteMap<T> {
  component: React.ComponentType<T>; // Page/Component to be rendered
  path: string; // Path grabbed from routePathEnum
}
const { MAIN_PAGE } = routePathEnum;

export function routeMap<T>(): IrouteMap<T>[] {
  return [
    {
      component: <MainPage />,
      path: MAIN_PAGE,
    },
  ];
}
