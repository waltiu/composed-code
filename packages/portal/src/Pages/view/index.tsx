import HeaderBar from "./HeaderBar";
import MenuBar from "./MenuBar";
import Editor from "./Editor";
import ConfigBar from "./ConfigBar";
import styles from "./index.module.less";
const View = () => {
  return (
    <div className={styles.view}>
      <div className={styles.header}>
        <HeaderBar />
      </div>
      <div className={styles.content}>
        <MenuBar />
        <Editor />
        <ConfigBar />
      </div>
    </div>
  );
};

export default View;
