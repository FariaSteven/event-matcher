import { Injectable } from '@nestjs/common';
import { CreateTalkDto } from './dto/create-talk.dto';
import { UpdateTalkDto } from './dto/update-talk.dto';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';

@Injectable()
export class TalksService {
  constructor(
    @InjectConnection() private readonly knex: Knex
  ) { }
  async create(createTalkDto: CreateTalkDto) {
    try {
      const Talk = await this.knex('talks')
        .insert(createTalkDto)
        .returning('*');
      return Talk;
    } catch (error) {
      throw error
    }
  }

  async findAll() {
    try {
      const Talk = await this.knex('talks');
      return Talk;
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const Talk = await this.knex('talks').where({ id });
      return Talk;
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateTalkDto: UpdateTalkDto) {
    try {
      const Talk = await this.knex('talks')
        .where({ id })
        .update(updateTalkDto)
        .returning('*');
      return Talk;
    } catch (error) {
      throw error
    }
  }

  async remove(id: number) {
    try {
      const Talk = await this.knex('talks')
        .where({ id })
        .delete()
        .returning('*');
      return Talk;
    } catch (error) {
      throw error
    }
  }
}
