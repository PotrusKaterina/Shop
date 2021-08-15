export const sortingByNewerData = (a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
};

export const sortingByOlderData = (a, b) => {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
};
