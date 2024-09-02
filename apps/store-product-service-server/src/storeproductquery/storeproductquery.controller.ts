import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { StoreProductQueryService } from "./storeproductquery.service";
import { StoreProductStatisticsOutput } from "../storeProductQuery/StoreProductStatisticsOutput";

@swagger.ApiTags("storeProductQueries")
@common.Controller("storeProductQueries")
export class StoreProductQueryController {
  constructor(protected readonly service: StoreProductQueryService) {}

  @common.Get("/store-product-statistics")
  @swagger.ApiOkResponse({
    type: StoreProductStatisticsOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetStoreProductStatistics(
    @common.Body()
    body: string
  ): Promise<StoreProductStatisticsOutput[]> {
        return this.service.GetStoreProductStatistics(body);
      }
}
