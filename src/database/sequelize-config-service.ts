import { Injectable, Scope } from "@nestjs/common";
import {SequelizeModuleOptions} from "@nestjs/sequelize";

const DB_USERNAME = process.env.DB_USERNAME || 'admin';
const DB_PASSWORD = process.env.DB_PASSWORD || 'password';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = parseInt(process.env.DB_PORT) || 5432;


@Injectable({scope:Scope.REQUEST})
export class SequelizeConfigService{
    // The intention is you can resolve the DB from the request header
    // constructor(@Inject(REQUEST) private readonly request:RequestContext){}

  createSequelizeOptions(): SequelizeModuleOptions {
    //const firmUuid = this.request.firmGuid;
    let database = 'postgres';
    // if (firmUuid) {
    //   database = `sqmfirm_${firmUuid}`;
    // }
    return {
      dialect: 'postgres',
      host: DB_HOST,
      port: Number(DB_PORT),
      database: database,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      autoLoadModels: true,
      synchronize: true,
    };
  }
}