import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageRepository {
  private pathVal = join('message.json');
  private async fetchMsgCnt() {
    const contents = await readFile(this.pathVal, 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async findOne(id: string) {
    const messages = await this.fetchMsgCnt();
    return messages[id];
  }

  async findAll() {
    const messages = await this.fetchMsgCnt();
    return messages;
  }

  async create(message: string) {
    let messages = await this.fetchMsgCnt();
    const id = new Date(Date.now()).getTime().toString().slice(0, 3);
    messages[id] = {
      message,
      id,
    };
    const messagesJson = JSON.stringify(messages);
    await writeFile(this.pathVal, messagesJson);
    return id;
  }
}
