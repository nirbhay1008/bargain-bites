import { fetchUser } from "../utils/fetchlocalstoragedata";
import { fetchCart } from "../utils/fetchlocalstoragedata";

const UserInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
    user : UserInfo,
    foodItems : null,
    cartShow : false,
    cartItems : cartInfo,
};