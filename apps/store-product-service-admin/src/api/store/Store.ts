import { Product } from "../product/Product";

export type Store = {
  createdAt: Date;
  id: string;
  nameStore: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
