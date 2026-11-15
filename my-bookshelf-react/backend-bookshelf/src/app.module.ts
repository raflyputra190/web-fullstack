import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BukuModule } from './buku/buku.module';

@Module({
  imports: [BukuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
