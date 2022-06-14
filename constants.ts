export const ENV = process.env.NODE_ENV === "production" ? "prod" : "dev";
export const ISPROD = ENV === "prod";

export const API_URL = "https://us-central1-bold-96a92.cloudfunctions.net/app/";
// : "http://localhost:5003/bold-96a92/us-central1/app/";
// To use firebase emulator
// export const API_URL = "http://localhost:5003/bold-96a92/us-central1/app/";

export const PROFILE = "profile";

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

// Product
export const GET_PRODUCT = "product";
export const SAVE_PRODUCT = "product/save";

// Search
// export const MEILI_URL = ISPROD
//   ? "http://52.66.214.126/"
//   : "http://127.0.0.1:7700";

export const MEILI_URL = "http://43.204.122.133/";
// : "http://127.0.0.1:7700";
export const MEILI_API_KEY = ISPROD ? process.env.MEILI_KEY : "masteKey";

// TEST
export const SEND_MAIL = "test/sendMail";
export const PING_SERVER = "test";
export const CHECK_LOGIN = "test/checkLogin";

const REDIRECT_URL = "https://boldstoredev.netlify.app/code";
const CLIENT_ID = "716956792630660";
export const INSTAGRAM_URL = `https://www.instagram.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=user_profile%2Cuser_media&response_type=code`;
