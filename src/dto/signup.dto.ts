import { ApiProduces, ApiProperty } from "@nestjs/swagger"

export class SignUpDto{
    @ApiProperty({type:String,required:true,default:'Shweta'})
    firstname:string
    @ApiProperty({type:String,required:true,default:'Verma'})
    lastname:string
    @ApiProperty({type:Number,required:true,default:8115683592})
    mobilenumber:number
    @ApiProperty({type:String,required:true,default:"shweta5662@gmail.com"})
    email:string
    @ApiProperty({type:Number,required:true,default:5662})
    password:number
}