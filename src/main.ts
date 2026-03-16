import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // #region agent log
  fetch('http://127.0.0.1:7483/ingest/87fa2c6b-5297-466b-99ac-d7c19f4d6eaa', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '01da80' }, body: JSON.stringify({ sessionId: '01da80', runId: 'pre-fix', hypothesisId: 'A', location: 'src/main.ts:8', message: 'bootstrap.start', data: { nodeEnv: process.env.NODE_ENV ?? null, port: process.env.PORT ?? null }, timestamp: Date.now() }) }).catch(() => { });
  // #endregion agent log
  try {
    const app = await NestFactory.create(AppModule);
    // #region agent log
    fetch('http://127.0.0.1:7483/ingest/87fa2c6b-5297-466b-99ac-d7c19f4d6eaa', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '01da80' }, body: JSON.stringify({ sessionId: '01da80', runId: 'pre-fix', hypothesisId: 'A', location: 'src/main.ts:14', message: 'bootstrap.nestFactory.create.ok', data: {}, timestamp: Date.now() }) }).catch(() => { });
    // #endregion agent log
    await app.useGlobalPipes(new ValidationPipe());
    await app.listen(process.env.PORT ?? 3000);
  } catch (err: any) {
    // #region agent log
    fetch('http://127.0.0.1:7483/ingest/87fa2c6b-5297-466b-99ac-d7c19f4d6eaa', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '01da80' }, body: JSON.stringify({ sessionId: '01da80', runId: 'pre-fix', hypothesisId: 'A', location: 'src/main.ts:20', message: 'bootstrap.error', data: { name: err?.name ?? null, message: err?.message ?? null, stackTop: String(err?.stack ?? '').split('\n').slice(0, 6).join('\n') }, timestamp: Date.now() }) }).catch(() => { });
    // #endregion agent log
    throw err;
  }
}
bootstrap();
