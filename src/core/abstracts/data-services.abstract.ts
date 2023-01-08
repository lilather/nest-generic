import { Generic } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract generic: IGenericRepository<Generic>;


}