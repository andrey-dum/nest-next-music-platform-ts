import { MONGODB } from './config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';
import {FileModule} from "./file/file.module";
import * as path from 'path'
import {ServeStaticModule} from "@nestjs/serve-static";

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    MongooseModule.forRoot(MONGODB),
    TrackModule,
    FileModule
  ],
})
export class AppModule {}
