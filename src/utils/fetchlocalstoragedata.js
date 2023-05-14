export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : localStorage.clear();

    return userInfo;
};

export const fetchCart = () => {
    const cartInfo = localStorage.getItem('cartItems') !== "undefined"
    ? JSON.parse(localStorage.getItem("cartItems"))
    : localStorage.clear();

    return cartInfo ? cartInfo : [];
};

export const score = () => {
    const ScoreInfo = localStorage.getItem('score') !== "undefined"
    ? JSON.parse(localStorage.getItem("score"))
    : localStorage.clear();

    return ScoreInfo ? ScoreInfo : 0;
};