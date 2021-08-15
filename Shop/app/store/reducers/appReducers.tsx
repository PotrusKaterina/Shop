const INITIAL_STATE = {
  shopList: [],
  archivedList: [],
};

export const appReducers = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'ADD_ITEM': {
      return {
        ...state,
        shopList: [...state.shopList, payload],
      };
    }
    case 'SET_LIST': {
      return {
        ...state,
        shopList: [...payload],
      };
    }
    case 'ADD_ARCHIVED_ITEM': {
      state.shopList.splice(payload.index, 1);
      return {
        ...state,
        archivedList: [...state.archivedList, payload.item],
        shopList: [...state.shopList],
      };
    }
    case 'SET_ARCHIVED_LIST': {
      return {
        ...state,
        archivedList: [...payload],
      };
    }
    default: {
      return state;
    }
  }
};
