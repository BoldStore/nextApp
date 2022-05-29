export const API_URL = "https://us-central1-bold-96a92.cloudfunctions.net/app/";

// Pages
export const HOME_PAGE = "pages/home";
export const EXPLORE_PAGE = "pages/explore";
export const STORE_PAGE = "pages/store";

// Stores
export const CREATE_STORE = "store/";
export const UPDATE_STORE = "store/update";
export const UPDATE_STORE_PRODUCTS = "store/update";
export const SAVE_STORE_DATA = "store/saveStoreData";
export const ADD_POTENTIAL_STORE = "store/addPotentialStore";

// Users
export const CREATE_USER = "user/";
export const ADD_INSTA_USERNAME = "user/instaUsername";
export const GET_PERSONAL_DETAILS = "user/";
export const UPDATE_USER = "user/";
export const DELETE_USER = "user/";

// Addresses
export const ADD_ADDRESS = "address/";
export const USER_ADDRESSES = "address/";
export const UPDATE_ADDRESS = "address/";
export const DELETE_ADDRESS = "address/delete";

// Orders
export const CREATE_ORDER = "orders/createOrder";
export const PAST_ORDERS = "orders/previousOrders";
export const VERIFY_ORDER = "orders/verifyOrder";
export const CHECK_DELIVERY = "orders/checkForDelivery";

// Invite code
export const ADD_INVITE_CODE = "codes/";

// TEST
export const SEND_MAIL = "test/sendMail";
export const PING_SERVER = "test";
export const CHECK_LOGIN = "test/checkLogin";

const REDIRECT_URL = "https://dev-bold.netlify.app/code";
const CLIENT_ID = "716956792630660";
export const INSTAGRAM_URL = `https://www.instagram.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=user_profile%2Cuser_media&response_type=code`;
