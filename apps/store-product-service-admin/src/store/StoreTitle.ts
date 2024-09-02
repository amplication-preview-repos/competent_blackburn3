import { Store as TStore } from "../api/store/Store";

export const STORE_TITLE_FIELD = "nameStore";

export const StoreTitle = (record: TStore): string => {
  return record.nameStore?.toString() || String(record.id);
};
