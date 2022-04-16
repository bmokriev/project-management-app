import React, { useEffect } from "react";
import ContainerLayout from "../layouts/ContainerLayout/ContainerLayout";

const MainPage = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <ContainerLayout title="Hello World">
      <p>text</p>
    </ContainerLayout>
  );
};

export default MainPage;
