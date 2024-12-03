import { ReactElement } from "react";

type Props = {
  children: ReactElement;
};

const LayoutAuth = ({ children }: Props): ReactElement => {
  return <div className="h-screen flex justify-center items-center">{children}</div>;
};

export default LayoutAuth;
