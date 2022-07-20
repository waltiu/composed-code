import { FC } from "react";
import Item from "./item";
import styles from "./index.module.less";
type ProjectListType = {
  projectList: any[];
};

const List: FC<ProjectListType> = ({ projectList }) => {
  return (
    <div className={styles.list}>
      {projectList.length ? (
        <>
          <Item />
          {projectList.map((item) => {
            <Item projectInfo={item} key={item.projectId} />;
          })}
        </>
      ) : (
        <Item />
      )}
    </div>
  );
};

export default List;
