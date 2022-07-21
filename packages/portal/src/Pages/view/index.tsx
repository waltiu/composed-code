import styles from "./index.module.less";
const View = () => {
  return (
    <div className={styles.view}>
      <div className={styles.header}></div>
      <div className={styles.content}></div>
    </div>
  );
};

export default View;
