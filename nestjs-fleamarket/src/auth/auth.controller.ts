import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import type { User } from 'generated/prisma';
import { CredentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.authService.createUser(createUserDto);
  }

  @Post('signin')
  async signin(@Body() credentialsDto: CredentialsDto,
  ): Promise<{ token: string }> {
    return await this.authService.singnIn(credentialsDto);
  }
}
