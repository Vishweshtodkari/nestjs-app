import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto.js';
import { Item } from './iterfaces/item.interfaces.js';
import { ItemsService } from './items.service.js';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemServices: ItemsService) {}
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item | null> {
    return this.itemServices.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemServices.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Item | null> {
    return this.itemServices.delete(id);
  }

  @Patch(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id: string) {
    return this.itemServices.update(id, updateItemDto);
  }
}
