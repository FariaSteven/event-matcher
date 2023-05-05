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
          host: 'ep-dry-river-457835.us-east-2.aws.neon.tech',
          user: 'FariaSteven',
          password: 'WYeA3uD9KnHL',
          database: 'postgress',
          port: 5432,
          ssl: { rejectUnauthorized: true },
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
