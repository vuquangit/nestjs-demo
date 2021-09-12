import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RouterModule } from 'nest-router';

import { routes } from '@/app.routes';
import { ProductsModule } from '@/modules/products/products.module';
// import { UsersModule } from '@/modules/users/users.module';

const MongooseConfig = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>('MONGODB_URI'),
  }),
  inject: [ConfigService],
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    MongooseModule.forRootAsync(MongooseConfig),
    RouterModule.forRoutes(routes),
    ProductsModule,
    // UsersModule,
  ],
})
export class AppModule {}
