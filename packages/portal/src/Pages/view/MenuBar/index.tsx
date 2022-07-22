import { Tabs, Tooltip } from "antd";
import {
  AppstoreOutlined,
  RobotOutlined,
  LayoutOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";
import PageManage from "./PageManage";
import MaterialCenter from "./MaterialCenter";
import RealtimeData from "./RealtimeData";
import OperHistory from "./OperHistory";
import styles from "./index.module.less";
const { TabPane } = Tabs;

const DEFAULT_BAR_TITLE = "物料中心";

const MenuBar = () => {
  const initMenuTabs = () => {
    return [
      {
        title: "页面管理",
        icon: <LayoutOutlined />,
        compoment: PageManage,
      },
      {
        title: DEFAULT_BAR_TITLE,
        icon: <AppstoreOutlined />,
        compoment: MaterialCenter,
      },
      {
        title: "实时数据",
        icon: <RobotOutlined />,
        compoment: RealtimeData,
      },
      {
        title: "操作历史",
        icon: <ExperimentOutlined />,
        compoment: OperHistory,
      },
    ].filter((item) => item.compoment);
  };

  return (
    <div className={styles["menu-bar"]}>
      <div className={styles["resize-replace"]}></div>
      <div className={styles["resize-line"]}></div>

      <Tabs
        tabPosition="left"
        className={styles["menu-bar-tabs"]}
        defaultActiveKey={DEFAULT_BAR_TITLE}
      >
        {initMenuTabs().map((item) => {
          return (
            <TabPane
              tab={
                <Tooltip placement="right" title={item.title}>
                  {item.icon}
                </Tooltip>
              }
              key={item.title}
            >
              <div className={styles["bar-card"]}>
                <item.compoment>
                  <div className={styles.title}>{item.title}</div>
                </item.compoment>
              </div>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default MenuBar;
