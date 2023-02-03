import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/entities/user.entity';
import { LocalStrategy } from './local.auth';
import { JwtStrategy } from './jwt.auth';

@Module({
    imports: [PassportModule, JwtModule.register({
        secret: 'secreteKey',
        signOptions: { expiresIn: '360s' },
    }), MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    providers: [AuthService, UsersService, LocalStrategy, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule { }
