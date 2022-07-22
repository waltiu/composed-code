import { useState } from "react";
type HistoryRecordItemType = {
  message: string;
  operTime: string;
};
type HistoryListType = HistoryRecordItemType[];
const useHistory = () => {
  const [historyList, setHistoryList] = useState<HistoryListType>([]);
  const createHistory = (message: string) => {
    setHistoryList([
      {
        message,
        operTime: new Date().toLocaleString(),
      },
    ]);
  };
  const unDo = () => {
    console.log("撤销");
  };
  const reDo = () => {
    console.log("回退");
  };
  const history = {
    historyList,
    createHistory,
    unDo,
    reDo,
  };

  return history;
};

export default useHistory;
