import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { goProjectDetailUrl } from "./constant";
import styles from "./index.module.less";

type ItemPropsType = {
  projectInfo?: {
    projectId: number;
  };
};

const Item: FC<ItemPropsType> = ({ projectInfo }) => {
  const navigate = useNavigate();
  const addProject = () => {
    navigate(goProjectDetailUrl());
  };
  return (
    <div className={styles["project-item"]}>
      {projectInfo?.projectId ? (
        <div>111</div>
      ) : (
        <div className={styles.add} onClick={() => addProject()}>
          <div className={styles.plus}>+</div>
          <div>新建项目</div>
        </div>
      )}
    </div>
  );
};
export default Item;
