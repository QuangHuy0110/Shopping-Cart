import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Created by Tạ Quang Huy
    </Footer>
  );
};
export default React.memo(FooterComponent)

