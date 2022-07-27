import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Users} from "./database/users.model";

@Injectable()
export class AppService {
  constructor(
      @InjectModel(Users)
      private readonly userRepository: typeof Users,
  ) {}
  
  async getUsers(): Promise<any[]> {
   return await this.userRepository.findAll();
  }
}
