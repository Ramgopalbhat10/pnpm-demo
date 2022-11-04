import { useState } from "react";
import { Select } from "shared-ui";
import { books, laptops, movies } from "../mocks/data";
import { Book, Laptop, Movie } from "../types";

export const SelectFilter = () => {
  const [book, setBook] = useState<Book | undefined>(undefined);
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [laptop, setLaptop] = useState<Laptop | undefined>(undefined);

  const doSomethingWithBooks = (selectedBook: Book) => {
    setBook(selectedBook);
  };
  const doSomethingWithMovies = (selectedMovie: Movie) => {
    setMovie(selectedMovie);
  };
  const doSomethingWithLaptops = (selectedLaptop: Laptop) => {
    setLaptop(selectedLaptop);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <Select<Book>
          values={books}
          onChange={(value) => doSomethingWithBooks(value)}
        />
        <p>Book - {book?.title}</p>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <Select<Movie>
          values={movies}
          onChange={(value) => doSomethingWithMovies(value)}
        />
        <p>Movie - {movie?.title}</p>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <Select<Laptop>
          titleKey="model"
          values={laptops}
          onChange={(value) => doSomethingWithLaptops(value)}
        />
        <p>Laptop - {laptop?.model}</p>
      </div>
    </div>
  );
};
