import { ProductCreateNestedManyWithoutStoresInput } from "./ProductCreateNestedManyWithoutStoresInput";

export type StoreCreateInput = {
  nameStore?: string | null;
  products?: ProductCreateNestedManyWithoutStoresInput;
};
