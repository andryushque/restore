export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "The Gunslinger",
      author: "Stephen King",
      price: "39",
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41tZWSRo28L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 2,
      title: "The Drawing of the Three",
      author: "Stephen King",
      price: "42",
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51imrEdvLiL._SX322_BO1,204,203,200_.jpg",
    },
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 750); // Synthetic delay
    });
  }
}
