import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { MDB_CONNECTION } from '../constants';
import { DbConnection } from './db.connection';

@Module({
  providers: [DbConnection],
  exports: [DbConnection],
})
export class DbModule {}
