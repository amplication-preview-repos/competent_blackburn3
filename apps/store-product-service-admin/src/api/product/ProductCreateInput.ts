import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ProductCreateInput = {
  nameProduct?: string | null;
  store?: StoreWhereUniqueInput | null;
};
