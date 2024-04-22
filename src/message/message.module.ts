import { Module } from '@nestjs/common';
import { MessageController } from './controller/message.controller';

@Module({
  controllers: [MessageController],
})
export class MessageModule {}
