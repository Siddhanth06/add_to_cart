const INIT_STATE = {
  cart: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
          ...state,
          cart:[...state.cart,action.payload]
      };

      case "RMV_CART":
        const data= state.cart.filter((el)=>el.id!==action.payload);
        return{
          ...state,
          cart:data
        }

      default: return state
  }
};
