import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = randomBytes(20).toString('hex');
    const message = { id, content };
    messages[id] = message;

    await writeFile('messages.json', JSON.stringify(messages));

    return message;
  }
}
