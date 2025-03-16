import { ApiProperty } from "@nestjs/swagger";
import { Column, Table, DataType, Model, ForeignKey } from "sequelize-typescript";
import { Role } from './roles.model';
import { User } from '../users/user.model';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {

    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: '1', description: 'Role unique identifier' })
    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ApiProperty({ example: '1', description: 'User unique identifier' })
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;
}