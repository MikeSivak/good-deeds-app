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
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('SECRET_KEY'),
                signOptions: { expiresIn: configService.get<string>('JWT_EXIRE_TIME') }
            }),
            inject: [ConfigService],
        }),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    providers: [AuthService, UsersService, LocalStrategy, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule { }
