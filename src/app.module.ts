import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import { EventsModule } from './events/events.module';
import { TalksModule } from './talks/talks.module';
import * as path from 'path';


@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'pg',
        connection: {
          host: 'localhost',
          user: 'postgres',
          password: '123',
          database: 'postgres',
          port: 5432
        },
        migrations: {
          directory: '../migrations',
          loadExtensions: ['.js']
        }
      }
    }),
    EventsModule,
    TalksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
