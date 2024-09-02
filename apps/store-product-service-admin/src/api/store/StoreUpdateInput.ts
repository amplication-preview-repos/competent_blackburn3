import { ProductUpdateManyWithoutStoresInput } from "./ProductUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  nameStore?: string | null;
  products?: ProductUpdateManyWithoutStoresInput;
};
