import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ProductUpdateInput = {
  nameProduct?: string | null;
  store?: StoreWhereUniqueInput | null;
};
