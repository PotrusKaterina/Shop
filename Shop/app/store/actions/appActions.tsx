export const addItem = payload => ({type: 'ADD_ITEM', payload});

export const setList = payload => ({type: 'SET_LIST', payload});

export const addArchivedItem = payload => ({
  type: 'ADD_ARCHIVED_ITEM',
  payload,
});

export const setArchivedList = payload => ({
  type: 'SET_ARCHIVED_LIST',
  payload,
});
