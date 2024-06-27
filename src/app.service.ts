import { Injectable } from '@nestjs/common';
import { SiginInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { ChangePasswordDto } from './dto/changepassword.dto'
import { ForgetPasswordDto } from './dto/forgetpassword.dto';
import { VerifyOtpDto } from './dto/verifyotp.dto';

@Injectable()
export class AppService {
  signin(dto:SiginInDto) {
    return {
      email:dto.email,
      password:dto.password
    }
  }
  signup(dto:SignUpDto){
    return {
      firstname:dto.firstname,
      lastname:dto.lastname,
      mobilenumber:dto.mobilenumber,
      email:dto.email,
      password:dto.password
    }
  }
  changepassword(dto:ChangePasswordDto){
    return {
      newpassword:dto.newpassword,
      confirmpassword:dto.confirmpassword,
    }
  }
  forgetpassword(dto:ForgetPasswordDto){
    return {
      email:dto.email
    }
  }
  verifyotp(dto:VerifyOtpDto){
    return {
      verifyotp:dto.verifyotp
    }
  }
}
