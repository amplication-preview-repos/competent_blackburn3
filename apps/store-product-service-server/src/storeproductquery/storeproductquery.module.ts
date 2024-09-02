import { Module } from "@nestjs/common";
import { StoreProductQueryService } from "./storeproductquery.service";
import { StoreProductQueryController } from "./storeproductquery.controller";
import { StoreProductQueryResolver } from "./storeproductquery.resolver";

@Module({
  controllers: [StoreProductQueryController],
  providers: [StoreProductQueryService, StoreProductQueryResolver],
  exports: [StoreProductQueryService],
})
export class StoreProductQueryModule {}
