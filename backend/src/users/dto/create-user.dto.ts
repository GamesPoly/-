import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'Ivan', description: 'User name' })
    @IsString({ message: 'Must be a string' })
    readonly name: string;
    @ApiProperty({ example: '123456789', description: 'User password' })
    @IsString({ message: 'Must be a string' })
    @Length(8, 32, { message: 'Password length must be between 8 and 32 characters' })
    readonly password: string;
    @ApiProperty({ example: 'mail@mail.com', description: 'User email' })
    @IsString({ message: 'Must be a string' })
    @IsEmail({}, { message: 'Incorrect email' })
    readonly email: string;
    @ApiProperty({ example: 'man', description: 'User gender' })
    @IsString({ message: 'Must be a string' })
    readonly gender: string;
    @ApiProperty({ example: '2024-01-01', description: 'User date of birth' })

    readonly dateOfBirth: Date;
    @ApiProperty({ example: '111-111', description: 'User group' })
    @IsString({ message: 'Must be a string' })

    readonly group: string;
}