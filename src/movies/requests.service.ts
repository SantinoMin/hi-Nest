import { CreateRequestDto } from './dto/create-Request.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Request } from './entities/Request.entity';

@Injectable()
export class RequestService {
  private requests: Request[] = [];

  getAll(): Request[] {
    return this.requests;
  }
  getOne(id: string): Request {
    const movie = this.requests.find((request) => request.id === +id);
    if (!Request) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }
  deleteOne(id: string) {
    this.getOne(id);
    this.requests = this.requests.filter(
      (request) => request.id !== parseInt(id),
    );
  }

  create(movieData: CreateRequestDto){
    this.requests.push({
      id: this.requests.length + 1,
      ...movieData,
      contact: 0,
      adress: '',
      symptom: ''
    })
  }

  update(id: string, updateData){
    const request = this.getOne(id);
    this.deleteOne(id);
    this.requests.push({ ...request, ...updateData });
  }
}
