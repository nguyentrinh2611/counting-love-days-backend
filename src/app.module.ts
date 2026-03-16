import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RelationshipsModule } from './relationships/relationships.module';
import { MemoriesModule } from './memories/memories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'postgres' as const,
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT ?? '5432'),
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          autoLoadEntities: true,
          synchronize: process.env.TYPEORM_SYNC === 'true',
        };
      },
    }),
    UsersModule,
    AuthModule,
    RelationshipsModule,
    MemoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
