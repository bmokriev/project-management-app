import React, { useEffect } from "react";
import ContainerLayout from "../layouts/ContainerLayout/ContainerLayout";

const MainPage = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <ContainerLayout title="Hello World">
      <h1>Hello World</h1>
      <p>
        He who controls the past, commands the future. He who commands the
        future, conquers the past.
      </p>
    </ContainerLayout>
  );
};

export default MainPage;
