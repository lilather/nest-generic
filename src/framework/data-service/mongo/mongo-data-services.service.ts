import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import {
    Generic,
    GenericDocument
} from './model';

@Injectable()
export class MongoDataServices
    implements IDataServices, OnApplicationBootstrap
{
    generic: MongoGenericRepository<Generic>;


    constructor(
        @InjectModel(Generic.name)
        private GenericRepository: Model<GenericDocument>
    ) {}

    onApplicationBootstrap() {
        this.generic = new MongoGenericRepository<Generic>(this.GenericRepository);
    }
}