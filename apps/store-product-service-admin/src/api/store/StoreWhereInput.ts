import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type StoreWhereInput = {
  id?: StringFilter;
  nameStore?: StringNullableFilter;
  products?: ProductListRelationFilter;
};
