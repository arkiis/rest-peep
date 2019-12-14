import { storeFactory } from "./test/testUtils";
import { fetchQuotes } from "./store/actions/quoteActions";

describe("randomQuote action dispatcher ", () => {
  const fetchPost = "hey bruh";
  const fetchUnsuccessful = "";

  describe("no quotes fetched", () => {
    let store;
    const initalState = { fetchPost };
    beforeEach(() => {
      store = storeFactory(initalState);
    });

    test("should state incorrectly for no data fetched", () => {
      store.dispatch(fetchQuotes(fetchUnsuccessful));
      const newState = store.getState();
      const expectedState = {
        ...initalState,
        loading: true,
        quote: [
          {
            quote: fetchUnsuccessful
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
  });
  describe("quotes fetched", () => {
    test("should state correctly for data fetched", () => {});
  });
});
