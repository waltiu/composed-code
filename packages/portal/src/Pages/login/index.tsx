import { useState } from "react";
import addTwo from "composed-parser";
import addOne from "composed-editor";
import { Button } from "antd";
import styles from "./index.module.less";
console.log(styles, "styles");
console.log(addTwo(2), addOne(2));
const Login = () => {
  const [state, setState] = useState(2);
  return (
    <div className={styles.login}>
      <div>--Hello Waltiu --</div>
      <div
        onClick={() => {
          setState(state + 1);
        }}
      >
        {state}
      </div>
      <Button type="primary">Button</Button>
    </div>
  );
};

export default Login;
