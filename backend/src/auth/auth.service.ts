import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/user.model';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) { }

    async login( userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration( userDto: CreateUserDto) {
        
        if (!userDto || typeof userDto.email !== 'string') {
            // Обработка случая, когда userDto отсутствует или не содержит корректное значение email
            throw new HttpException('Invalid user data', HttpStatus.BAD_REQUEST);
        }

        const candidate = await this.userService.getUserByEmail(userDto.email)
        if (candidate) {
            throw new HttpException('User with this email already exists', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, roles: user.roles}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email)
        const passwordEquals = await bcrypt.compare(userDto.password, user.password)
        if (user && passwordEquals) {
            return user
        }
        throw new UnauthorizedException({message: 'Incorrect email or password'})
    }
}
