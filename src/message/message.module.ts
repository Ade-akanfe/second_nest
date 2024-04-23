import { Module } from '@nestjs/common';
import { MessageController } from './controller/message.controller';
import { MessageRepository } from './repositories/message.repository';
import { MessagesService } from './services/message.service';

@Module({
  controllers: [MessageController],
  providers: [MessageRepository, MessagesService],
})
export class MessageModule {}
