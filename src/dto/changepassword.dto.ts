import { ApiProperty } from "@nestjs/swagger";

export class ChangePasswordDto{
    @ApiProperty({type:Number,required:true,default:8687687})
    newpassword:Number
    @ApiProperty({type:Number,required:true,default:8687687})
    confirmpassword:Number

}