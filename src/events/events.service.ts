import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';

@Injectable()
export class EventsService {
  constructor(
    @InjectConnection() private readonly knex: Knex
  ) { }
  async create(createEventDto: CreateEventDto) {
    try {
      const Event = await this.knex('events')
        .insert(createEventDto)
        .returning('*');
      return Event;
    } catch (error) {
      throw error
    }
  }

  async findAll() {
    try {
      const Event = await this.knex('events');
      return Event;
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const Event = await this.knex('events').where({ id });
      return Event;
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    try {
      const Event = await this.knex('events')
        .where({ id })
        .update(updateEventDto)
        .returning('*');
      return Event;
    } catch (error) {
      throw error
    }
  }

  async remove(id: number) {
    try {
      const Event = await this.knex('events')
        .where({ id })
        .delete()
        .returning('*');
      return Event;
    } catch (error) {
      throw error
    }
  }
}
