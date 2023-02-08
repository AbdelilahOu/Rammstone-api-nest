import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientController } from './client/client.controller';
import { SellerController } from './seller/seller.controller';
import { ProductController } from './product/product.controller';
import { CommandController } from './command/command.controller';
import { InvoiceController } from './invoice/invoice.controller';

@Module({
  imports: [],
  controllers: [AppController, ClientController, SellerController, ProductController, CommandController, InvoiceController],
  providers: [AppService],
})
export class AppModule {}
