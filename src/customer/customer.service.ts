import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import * as uuid from 'uuid';
import { Customer } from './customer.entity';
import { CustomerRepository } from './customer.repository';
import { CreateCustomerDto } from './dto/createCustomerDto';

@Injectable()
export class CustomerService {
        constructor(@InjectRepository(CustomerRepository) private customerRepository:CustomerRepository){};
        
        async createCustomer(createCustomerDto: CreateCustomerDto):Promise<Customer>{
            return await this.customerRepository.createCustomer(createCustomerDto);
    
        }

        async getAllCustomers():Promise<Customer[]>{
            return await this.customerRepository.find();
        }

        async deleteCustomer(email:string):Promise<DeleteResult>{
            const deleteResult = await this.customerRepository.delete({email: email})
            if(deleteResult.affected === 0 ){
                throw new NotFoundException(`The customer with email: ${email} is not exist!`)
            }
            return deleteResult;
        }
}
