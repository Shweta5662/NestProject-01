import { ApiProperty } from "@nestjs/swagger";

export class VerifyOtpDto{
    @ApiProperty({type:Number,required:true,default:8989})
    verifyotp:number
}