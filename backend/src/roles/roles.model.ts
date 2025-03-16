import { ApiProperty } from "@nestjs/swagger";
import { Column, Table, DataType, Model, BelongsToMany } from "sequelize-typescript";
import { User } from '../users/user.model';
import { UserRoles } from './user-roles.model';

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {

    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'Moderator', description: 'Role name' })
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({ example: 'Moderates games', description: 'Role description' })
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}