import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

// remember to replace the <username> and <password> with your credentials
const DB_URI =
  'mongodb+srv://north3by:A315a315@cluster0.nqmqhu4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

@Module({
  imports: [MongooseModule.forRoot(DB_URI),],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule { }