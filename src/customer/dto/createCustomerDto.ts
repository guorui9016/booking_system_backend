import { IsEmail,  IsNotEmpty } from "class-validator";

export class CreateCustomerDto{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;yarn 
}