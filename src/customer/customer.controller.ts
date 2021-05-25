import { Body, Controller, Delete, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Customer } from './customer.entity';
import { CustomerRepository } from './customer.repository';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/createCustomerDto';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService){}

    @Post('/new')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomerDto: CreateCustomerDto):Promise<Customer>{
        return this.customerService.createCustomer(createCustomerDto);
    }

    @Post('/all')
    getAllCustomer():Promise<Customer[]>{
        return this.customerService.getAllCustomers();
    }

    @Delete()
    deleteCustomer(@Body() email:string):Promise<DeleteResult>{
       return  this.customerService.deleteCustomer(email)
    }
}


 