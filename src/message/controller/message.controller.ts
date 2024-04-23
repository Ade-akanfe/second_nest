import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDTO } from '../dto/create-message-dto';
import { MessagesService } from '../services/message.service';

@Controller('message')
export class MessageController {
  constructor(public messageServiceVal: MessagesService) {}

  @Get()
  getAll() {
    return this.messageServiceVal.findAll();
  }

  @Post()
  postHello(@Body() body: CreateMessageDTO) {
    const { message } = body;
    return this.messageServiceVal.create(message);
  }

  @Get('/:id')
  async getSingle(@Param('id') id: string) {
    const message = await this.messageServiceVal.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message;
  }
}
