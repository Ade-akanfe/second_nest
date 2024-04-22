import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDTO } from '../dto/create-message-dto';

@Controller('message')
export class MessageController {
  @Get()
  getHello() {
    return 'Ademola hello';
  }

  @Post()
  postHello(@Body() body: CreateMessageDTO) {
    console.log(body);
    return 'done';
  }

  @Get('/:id')
  getSingle(@Param('id') id: string) {
    console.log(id);
    return 'yes';
  }
}
