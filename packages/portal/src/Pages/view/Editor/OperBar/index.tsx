import { Tooltip } from "antd";
import {
  BackwardOutlined,
  ForwardOutlined,
  ToTopOutlined,
  VerticalAlignBottomOutlined,
  FileAddOutlined,
  CopyOutlined,
  MinusSquareOutlined,
  BugOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import styles from "./index.module.less";
const EditorOperBar = () => {
  // 初始化操作Bar
  const initEditorOperBars = () => {
    return [
      [
        [
          {
            title: "回退",
            icon: <BackwardOutlined />,
          },
          {
            title: "撤销",
            icon: <ForwardOutlined />,
          },
        ],
        [
          {
            title: "导入",
            icon: <ToTopOutlined />,
          },
          {
            title: "导出",
            icon: <VerticalAlignBottomOutlined />,
          },
        ],
      ],
      [
        [
          {
            title: "新建页面",
            icon: <FileAddOutlined />,
          },
          {
            title: "删除当前页面",
            icon: <DeleteOutlined />,
          },
          {
            title: "复制当前页面",
            icon: <CopyOutlined />,
          },
          {
            title: "清空当前页面",
            icon: <MinusSquareOutlined />,
          },
          {
            title: "调试",
            icon: <BugOutlined />,
          },
        ],
      ],
    ];
  };

  return (
    <div className={styles["editor-oper-bar"]}>
      {initEditorOperBars().map((item, index) => {
        return (
          <div key={index}>
            {item.map((groupItem, groupIndex) => {
              return (
                <div key={groupIndex} className={styles["button-group"]}>
                  {groupItem.map((buttonItem) => {
                    return (
                      <div
                        key={buttonItem.title}
                        className={styles["button-item"]}
                      >
                        <Tooltip title={buttonItem.title}>
                          {buttonItem.icon}
                        </Tooltip>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default EditorOperBar;
