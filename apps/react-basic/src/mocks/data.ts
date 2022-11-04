import { Book, Laptop, Movie } from "../types";

export const books: Book[] = [
  {
    id: "learn-angular",
    title: "Learn Angular",
    author: "Ramgopal",
  },
  {
    id: "learn-react",
    title: "Learn React",
    author: "Ramgopal",
  },
];

export const movies: Movie[] = [
  {
    id: "batman",
    title: "Batman",
    releaseDate: "Nov 25th 2022",
  },
  {
    id: "ironman",
    title: "Ironman",
    releaseDate: "Jun 16th 2022",
  },
];

export const laptops: Laptop[] = [
  {
    id: "acer-predator",
    model: "Acer Predator",
    releaseDate: "Dec 25th 2021",
  },
];
