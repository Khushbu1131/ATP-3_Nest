import { Controller,Get, UsePipes, ValidationPipe,Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Get()
      getAbd(): string {
        return this.userService.getAbd();
        
      

}
}