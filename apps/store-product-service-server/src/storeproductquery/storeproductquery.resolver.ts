import * as graphql from "@nestjs/graphql";
import { StoreProductStatisticsOutput } from "../storeProductQuery/StoreProductStatisticsOutput";
import { StoreProductQueryService } from "./storeproductquery.service";

export class StoreProductQueryResolver {
  constructor(protected readonly service: StoreProductQueryService) {}

  @graphql.Query(() => [StoreProductStatisticsOutput])
  async GetStoreProductStatistics(
    @graphql.Args("args")
    args: string
  ): Promise<StoreProductStatisticsOutput[]> {
    return this.service.GetStoreProductStatistics(args);
  }
}
