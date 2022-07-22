import { FC, ReactNode } from "react";
import styles from "./index.module.less";
type MaterialCenterPropsType = {
  children: ReactNode;
};

const MaterialCenter: FC<MaterialCenterPropsType> = ({ children }) => {
  return <div>{children}</div>;
};

export default MaterialCenter;
