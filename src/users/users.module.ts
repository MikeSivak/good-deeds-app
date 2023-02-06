import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { DeedsModule } from 'src/deeds/deeds.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
    ]),
    forwardRef(() => DeedsModule),
  ],
  exports: [UsersService]
})
export class UsersModule { }
