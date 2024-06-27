import { ApiProperty } from "@nestjs/swagger";

export class ForgetPasswordDto{
    @ApiProperty({type:String,required:true,default:'email'})
    email:String
}