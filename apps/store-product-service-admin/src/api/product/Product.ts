import { Store } from "../store/Store";

export type Product = {
  createdAt: Date;
  id: string;
  nameProduct: string | null;
  store?: Store | null;
  updatedAt: Date;
};
