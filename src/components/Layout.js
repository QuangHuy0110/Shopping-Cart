import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./partials/Header";
import ContentComponent from "./partials/Content";
import FooterComponent from "./partials/Footer";

const LayoutComponent = (props) => {
  return (
    <>
      <Layout className="layout">
        <HeaderComponent />
        <ContentComponent>
          {props.children}
        </ContentComponent>
        <FooterComponent />
      </Layout>
    </>
  );
};

export default React.memo(LayoutComponent);
