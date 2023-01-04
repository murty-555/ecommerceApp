import { actionTypes } from "../actions/actionTypes/cartActionTypes";

const initialState = {
    cart_count : 0,
    cartList : []
}

const cartReducer = (state=initialState,action) => {
    switch(action.payload){
        case actionTypes.GET_CART_COUNT:
            return {...state}
        case actionTypes.ADD_TO_CART:
            if(state.cart_count === 0){
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    title: action.payload.title,
                    image: action.payload.image,
                    price: action.payload.price
                }
                state.cartList.push(cart);
            }else {
                let check = false;
                state.cartList.map((cartItem,key) => {
                    if(cartItem.id === action.payload.id){
                        state.cartList[key].quantity++;
                        check=true;
                    }
                    return check;
                });
                if(!check){
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        title: action.payload.title,
                        image: action.payload.image,
                        price: action.payload.price
                    }
                    state.cartList.push(_cart);
                }
            }
            return {
                ...state,
                cart_count: state.cart_count + 1
            }
        case actionTypes.INCREASE_CART_QTY:
            state.cart_count ++
            state.cartList[action.payload].quantity++;
            return{...state}
        case actionTypes.DECREASE_CART_QTY:
            let quantity = state.cartList[action.payload].quantity;
            if(quantity > 1){
                state.cart_count--;
                state.cartList[action.payload].quantity--;
            }
            return {...state}
        case actionTypes.DELETE_FROM_CART:
            let _quantity = state.cartList[action.payload].quantity;
            return{
                ...state,
                cart_count:state.cart_count - _quantity,
                cartList:state.cartList.filter(item => item.id !== state.cartList[action.payload].id)
            }
        default : return state;
    }
}

export default cartReducer;