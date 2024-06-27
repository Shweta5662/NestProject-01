import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { verify } from 'crypto';
import { SiginInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { ChangePasswordDto } from './dto/changepassword.dto';
import { ForgetPasswordDto } from './dto/forgetpassword.dto';
import { VerifyOtpDto } from './dto/verifyotp.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('signin')
  signin(@Body() signdto :SiginInDto){
    return this.appService.signin(signdto)
  }

  @Post('signup')
  signup(@Body() signupdto :SignUpDto){
    return this.appService.signup(signupdto)
  }

  @Post('changepassword')
  changepassword(@Body()changepassworddto:ChangePasswordDto){
    return this.appService.changepassword(changepassworddto)
  }

  @Post('forgetpassword')
  forgetpassword(@Body()forgetpassworddto:ForgetPasswordDto){
    return this.appService.forgetpassword(forgetpassworddto)
  }

  @Post('verifyotp')
  verifyotp(@Body()verifyotpdto:VerifyOtpDto){
    return this.appService.verifyotp(verifyotpdto)
  }
}
