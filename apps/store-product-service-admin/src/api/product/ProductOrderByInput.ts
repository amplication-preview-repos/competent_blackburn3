import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  nameProduct?: SortOrder;
  storeId?: SortOrder;
  updatedAt?: SortOrder;
};
