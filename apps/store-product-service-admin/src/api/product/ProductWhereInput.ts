import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ProductWhereInput = {
  id?: StringFilter;
  nameProduct?: StringNullableFilter;
  store?: StoreWhereUniqueInput;
};
