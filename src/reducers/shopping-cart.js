const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + Number(book.price) * quantity,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;

  const book = books.find((book) => book.id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);
  const newCartItems = updateCartItems(cartItems, newItem, itemIndex);
  const orderTotal = newCartItems.reduce(
    (totalSum, { total }) => totalSum + total,
    0
  );

  return {
    orderTotal,
    cartItems: newCartItems,
  };
};

const updateShoppingCart = (state, action) => {
  const { type, payload } = action;

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (type) {
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, payload, 1);

    case "BOOK_REMOVED_FROM_CART":
      return updateOrder(state, payload, -1);

    case "ALL_BOOKS_REMOVED_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        (book) => book.id === payload
      );
      return updateOrder(state, payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
