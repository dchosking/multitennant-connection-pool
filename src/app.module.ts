import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseConfigModule} from "./database/database-config.module";
import {SequelizeConfigService} from "./database/sequelize-config-service";
import {SequelizeModule} from '@nestjs/sequelize';
import {Users} from "./database/users.model";

@Module({
    providers: [AppService,SequelizeConfigService],
    imports: [
        SequelizeModule.forRootAsync({
            imports: [DatabaseConfigModule],
            useExisting: SequelizeConfigService,
        }),
        SequelizeModule.forFeature([Users]),
    ],
    controllers: [AppController],    
})
export class AppModule {
}
