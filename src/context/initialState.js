import { fetchUser } from "../utils/fetchlocalstoragedata";

const UserInfo = fetchUser()

export const initialState = {
    user : UserInfo,
};