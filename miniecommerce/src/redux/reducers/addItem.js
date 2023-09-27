const initialState = [];

const addItems = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM":

      const existingItem = state.find(item => item.id === action.payload.id);

      if (existingItem) {

        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {

        return [...state, { ...action.payload, quantity: 1 }];
      }

    case "DELITEM":

      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
};

export default addItems;
