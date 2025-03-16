import { ApiProperty } from "@nestjs/swagger";
import { Column, Table, DataType, Model, ForeignKey } from "sequelize-typescript";
import { BelongsToMany } from "sequelize-typescript";
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';
import { BelongsTo } from "sequelize-typescript";
import { User } from '../users/user.model';

interface GameCreationAttrs {
    title: string;
    description: string;
    shortDescription: string;
    keywords: string;
    tags: string;
    os: string;
    cpu: string;
    ram: string;
    gpu: string;
    programSize: string;
    additionalReqs: string;
    developers: string;
    contacts: string;
    genres: string;
    mainGenre: string;
    playersNumber: string;
    gameRewards: string;
    icon: string;
    cover: string;
    screenshot: string;
    trailer: string;
    gameFiles: string;
    creatorId: number;
}

@Table({ tableName: 'games' })
export class Game extends Model<Game, GameCreationAttrs> {

    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    description: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    shortDescription: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    keywords: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    tags: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    os: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    cpu: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    ram: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    gpu: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    programSize: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    additionalReqs: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    developers: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    contacts: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    genres: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    mainGenre: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    playersNumber: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    gameRewards: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    icon: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    cover: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    screenshot: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    trailer: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    gameFiles: string;
    
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    creatorId: number;

    @BelongsTo(() => User)
    creator: User;
    

    // ------------
    // @ApiProperty({ example: 'Ivan', description: 'User name' })
    // @Column({type: DataType.STRING, allowNull: false})
    // name: string;

    // @ApiProperty({ example: '12345', description: 'User password' })
    // @Column({type: DataType.STRING, allowNull: false})
    // password: string;

    // @ApiProperty({ example: 'mail@mail.com', description: 'User email' })
    // @Column({type: DataType.STRING, unique: true, allowNull: false})
    // email: string;

    // @ApiProperty({ example: 'man', description: 'User gender' })
    // @Column({type: DataType.STRING, allowNull: false})
    // gender: string;

    // @ApiProperty({ example: '2024-01-01', description: 'User date of birth' })
    // @Column({type: DataType.DATEONLY, allowNull: false})
    // dateOfBirth: Date;

    // @ApiProperty({ example: '111-111', description: 'User group' })
    // @Column({type: DataType.STRING, allowNull: false})
    // group: string;

    // @ApiProperty({ example: 'false', description: 'Ban status' })
    // @Column({type: DataType.BOOLEAN, defaultValue: false})
    // banned: boolean;

    // @ApiProperty({ example: 'bad game', description: 'Ban reason' })
    // @Column({type: DataType.STRING, allowNull: true})
    // banReason: string;

    // @BelongsToMany(() => Role, () => UserRoles)
    // roles: Role[];
}