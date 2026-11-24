import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module.js';
import config from './config/keys.js';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI),
    // MongooseModule.forRoot(
    //   process.env.DATABASE_URL || 'mongodb://localhost:27017/nest-db',
    // ),
    ItemsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
