export type Book = {
  id: string;
  title: string;
  author: string;
};

export type Movie = {
  id: string;
  title: string;
  releaseDate: string;
};

export type Laptop = {
  id: string;
  model: string;
  releaseDate: string;
};

export type LaptopKeys = keyof Laptop;
