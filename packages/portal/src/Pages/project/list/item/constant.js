export const goProjectDetailUrl = (id) => {
  return id ? `/view/${id}?pageId=${id}` : "/view/new-project";
};
