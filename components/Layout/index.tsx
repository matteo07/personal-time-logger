import { FC } from "react";
import { LayoutWrapper } from "./styled";

const Layout: FC = ({children}) => {
  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
