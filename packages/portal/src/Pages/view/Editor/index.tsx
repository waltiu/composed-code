import EditorOperBar from "./OperBar";
import EditorContent from "./Content";
import styles from "./index.module.less";
const Editor = () => {
  return (
    <div className={styles.editor}>
      <EditorOperBar />
      <EditorContent data={null} />
    </div>
  );
};
export default Editor;
