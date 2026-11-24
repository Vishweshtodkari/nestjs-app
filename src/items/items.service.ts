import { Injectable } from '@nestjs/common';
import { Item } from './iterfaces/item.interfaces.js';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  //   private readonly items: Item[] = [
  //     {
  //       id: '638631',
  //       name: 'one',
  //       qty: 100,
  //       description: 'this is one',
  //     },
  //     {
  //       id: '638632',
  //       name: 'two',
  //       qty: 100,
  //       description: 'this is two',
  //     },
  //     {
  //       id: '638633',
  //       name: 'three',
  //       qty: 100,
  //       description: 'this is three',
  //     },
  //   ];
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item | null> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: String): Promise<Item | null> {
    return await this.itemModel.findByIdAndDelete(id);
  }

  async update(id: String, item: Item): Promise<Item | null> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
