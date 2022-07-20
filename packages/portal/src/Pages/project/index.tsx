import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import List from "./list";
import styles from "./index.module.less";
const project = () => {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    setProjectList([]);
  }, []);
  return (
    <div className={styles.project}>
      <div className={styles.header}></div>
      <div className={styles.content}>
        <div className={styles.oper}>
          <span>
            <Input size="large" placeholder="请输入名称模糊匹配" />
          </span>
          <span>
            <Button size="large" type="primary">
              搜索
            </Button>
          </span>
          <span>
            <Button size="large"> 导入</Button>
          </span>
        </div>
        <List projectList={projectList} />
      </div>
    </div>
  );
};

export default project;
