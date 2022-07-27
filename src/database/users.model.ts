import { Column, Model, Table,CreatedAt,UpdatedAt, BelongsToMany,ForeignKey } from 'sequelize-typescript';


@Table({tableName:'Users'})
export class Users extends Model<Users> {
    @Column( {allowNull: false })
    firstName: string;

    @Column( {allowNull: false })
    lastName: string;
}