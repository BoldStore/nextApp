import { Dispatch } from "redux";
import * as ActionTypes from "../ActionTypes";
import { MeiliSearch } from "meilisearch";
import { MEILI_API_KEY, MEILI_URL } from "../../constants";

const client = new MeiliSearch({
  host: MEILI_URL,
  apiKey: MEILI_API_KEY,
});

export const explorePage = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.EXPLORE_PAGE_REQUEST });
    try {
      let data: Array<any> = [];
      const storeData = await client.index("stores").search("", {
        limit: 30,
        filter: [`isCompleted = true`],
      });
      const stores = storeData.hits;

      for (let i = 0; i < stores.length; i++) {
        const store = stores[i];
        const productsData = await client.index("products").search("", {
          limit: 6,
          filter: [`store = ${store.id}`],
        });

        data.push({
          store: store,
          products: productsData.hits,
        });
      }

      dispatch({
        type: ActionTypes.EXPLORE_PAGE_SUCCESS,
        data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.EXPLORE_PAGE_FAILED,
        errmess: e,
      });
    }
  };
};

export const searchStores = (term: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.SEARCH_STORES_REQUEST });
    try {
      const results = await client.index("stores").search(term, {
        filter: [`isCompleted = true`],
      });

      dispatch({
        type: ActionTypes.SEARCH_STORES_SUCCESS,
        data: results.hits,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.SEARCH_STORES_FAILED,
        errmess: e,
      });
    }
  };
};

export const searchProducts = (term: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.SEARCH_PRODUCTS_REQUEST });
    try {
      const results = await client.index("products").search(term);

      dispatch({
        type: ActionTypes.SEARCH_PRODUCTS_SUCCESS,
        data: results.hits,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.SEARCH_PRODUCTS_FAILED,
        errmess: e,
      });
    }
  };
};
