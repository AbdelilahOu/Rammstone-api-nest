import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientController } from './controllers/client.controller';
import { SellerController } from './controllers/seller.controller';
import { ProductController } from './controllers/product.controller';
import { CommandController } from './controllers/command.controller';
import { InvoiceController } from './controllers/invoice.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ClientController,
    SellerController,
    ProductController,
    CommandController,
    InvoiceController,
  ],
  providers: [AppService],
})
export class AppModule {}
