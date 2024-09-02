import { Injectable } from "@nestjs/common";
import { StoreProductStatisticsOutput } from "../storeProductQuery/StoreProductStatisticsOutput";

@Injectable()
export class StoreProductQueryService {
  constructor() {}
  async GetStoreProductStatistics(args: string): Promise<StoreProductStatisticsOutput[]> {
    throw new Error("Not implemented");
  }
}
