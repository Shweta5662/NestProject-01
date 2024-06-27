import { ApiProperty } from "@nestjs/swagger"

export class SiginInDto{   
    @ApiProperty({type:String,required:true,default:'shweta5662@gmail.com'})
    email: string
    @ApiProperty({type:String,required:true,default:65445})
    password:number
//      email:string
//      password:string
 }


