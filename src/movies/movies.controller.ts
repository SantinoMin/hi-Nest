import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Body,
  Patch,
  Put, 
  Query
} from '@nestjs/common';
import { CreateRequestDto } from './dto/create-Request.dto';
import { Request } from './entities/Request.entity';
import { RequestService } from './requests.service';

@Controller('request')
export class RequestController {
  constructor(private readonly requestsService: RequestService){}

@Get()
  getAll() {
    return this.requestsService.getAll();
}

@Get('/:id')
  getOne(@Param('id') RequestId: string): Request {
    return this.requestsService.getOne(RequestId);
}

  @Post()
  create(@Body() movieData: CreateRequestDto) {
    return this.requestsService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') RequestId: string) {
    return this.requestsService.deleteOne(RequestId);
  }


@Patch('/:id')
  update(@Param('id') RequestId: string, @Body() updateData ) {
    return this.requestsService.update(RequestId, updateData)
  }}