import empty from "@/assets/icons/empty.png";
import styles from "./index.module.less";
const EditorContent = ({ data }) => {
  return (
    <div className={styles["editor-content"]}>
      {data ? (
        <div></div>
      ) : (
        <div className={styles.empty}>
          <img src={empty} alt="" />
          <div className={styles.text}>从左侧面板组件中心拖入组件或区块</div>
        </div>
      )}
    </div>
  );
};

export default EditorContent;
