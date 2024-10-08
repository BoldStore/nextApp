export const API_URL = "https://us-central1-bold-a1e8e.cloudfunctions.net/app/";
// To use firebase emulator
// export const API_URL = "http://localhost:5003/bold-96a92/us-central1/app/";

export const PROFILE = "profile";
export const LINK = "profile/link";

// Pages
export const HOME_PAGE = "pages/home";
export const EXPLORE_PAGE = "pages/explore";
export const STORE_PAGE = "pages/store";

// Stores
export const CREATE_STORE = "store/";
export const UPDATE_STORE = "store/update";
export const UPDATE_STORE_PRODUCTS = "store/update";
export const SAVE_STORE_DATA = "store/saveStoreData";
export const ADD_POTENTIAL_STORE = "store/potentialStore";

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
export const CREATE_ORDER = "order";
export const GET_ORDER = "order/get";
export const PAST_ORDERS = "order";
export const VERIFY_ORDER = "order/verify";
export const CHECK_DELIVERY = "order/checkForDelivery";

export const CALLBACK = API_URL + "order/callback";

// Invite code
export const ADD_INVITE_CODE = "codes/";

// Product
export const GET_PRODUCT = "product";
export const SAVE_PRODUCT = "product/save";

// Search
export const MEILI_URL = "https://search.boldstore.in";
export const MEILI_API_KEY = process.env.NEXT_PUBLIC_MEILI_KEY;

// TEST
export const SEND_MAIL = "test/sendMail";
export const PING_SERVER = "test";
export const CHECK_LOGIN = "test/checkLogin";

const REDIRECT_URL = "https://boldstore.in/code";
const CLIENT_ID = "551125670004277";
export const INSTAGRAM_URL = `https://www.instagram.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=user_profile%2Cuser_media&response_type=code`;
