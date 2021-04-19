const initialState = {
  books: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "BOOKS_REQUESTED":
      return {
        books: [],
        loading: true,
      };

    case "BOOKS_LOADED":
      return {
        books: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
