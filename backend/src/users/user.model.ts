import { ApiProperty } from "@nestjs/swagger";
import { Column, Table, DataType, Model, HasMany } from "sequelize-typescript";
import { BelongsToMany } from "sequelize-typescript";
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';
import { Game } from '../games/games.model';

interface UserCreationAttrs {
    name: string;
    password: string;
    email: string;
    group: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'Ivan', description: 'User name' })
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({ example: '12345', description: 'User password' })
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({ example: 'mail@mail.com', description: 'User email' })
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({ example: 'man', description: 'User gender' })
    @Column({type: DataType.STRING, allowNull: false})
    gender: string;

    @ApiProperty({ example: '2024-01-01', description: 'User date of birth' })
    @Column({type: DataType.DATEONLY, allowNull: false})
    dateOfBirth: Date;

    @ApiProperty({ example: '111-111', description: 'User group' })
    @Column({type: DataType.STRING, allowNull: false})
    group: string;

    @ApiProperty({ example: 'false', description: 'Ban status' })
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({ example: 'bad game', description: 'Ban reason' })
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Game)
    games: Game[];
}