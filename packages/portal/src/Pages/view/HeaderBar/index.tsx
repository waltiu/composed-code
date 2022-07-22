import {
  LeftOutlined,
  EyeOutlined,
  SaveOutlined,
  NumberOutlined,
  SendOutlined,
} from "@ant-design/icons";
import logoIcon from "@/assets/icons/logo.png";
import styles from "./index.module.less";

const HeaderBar = () => {
  return (
    <div className={styles["header-bar"]}>
      <div className={styles.logo}>
        <LeftOutlined />
        <span className={styles.back}>返回</span>
        <img src={logoIcon} alt="" />
      </div>
      <div className={styles.oper}>
        <div className={styles.item}>
          <NumberOutlined className={styles.icon} />
          <div>填充</div>
        </div>
        <div className={styles.item}>
          <EyeOutlined className={styles.icon} />
          <div>预览</div>
        </div>
        <div className={styles.item}>
          <SaveOutlined className={styles.icon} />
          <div>暂存</div>
        </div>
        <div className={styles.item}>
          <SendOutlined className={styles.icon} />
          <div>发布</div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBar;
