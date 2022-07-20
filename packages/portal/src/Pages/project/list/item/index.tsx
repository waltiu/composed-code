import { FC } from "react";
import styles from "./index.module.less";

type ItemPropsType = {
  projectInfo?: {
    projectId: number;
  };
};

const Item: FC<ItemPropsType> = ({ projectInfo }) => {
  return (
    <div className={styles["project-item"]}>
      {projectInfo?.projectId ? (
        <div>111</div>
      ) : (
        <div className={styles.add}>
          <div className={styles.plus}>+</div>
          <div>新建项目</div>
        </div>
      )}
    </div>
  );
};
export default Item;
