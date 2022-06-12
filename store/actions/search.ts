import { Dispatch } from "redux";
import * as ActionTypes from "../ActionTypes";
import { MeiliSearch } from "meilisearch";
import { MEILI_API_KEY, MEILI_URL } from "../../constants";

const client = new MeiliSearch({
  host: MEILI_URL,
  apiKey: MEILI_API_KEY,
});

export const searchStores = (term: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.SEARCH_STORES_REQUEST });
    try {
      const results = await client.index("stores").search(term);

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
