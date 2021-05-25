import { ConflictException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Customer } from "./customer.entity";
import { CreateCustomerDto } from "./dto/createCustomerDto";


@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer>{
    async createCustomer(createCustomerDto: CreateCustomerDto):Promise<Customer>{
        const {email, password} = createCustomerDto;

        if(await this.isEmailExist(email)){
            throw new ConflictException(`The email: ${email} is exist`) 
        }   

        const customer:Customer = new Customer
        customer.email = email
        customer.password = password
        await customer.save()
        return customer
    }

    

    async isEmailExist(checkEmail:string):Promise<boolean>{
        const result = await this.count({
            where:{email:checkEmail}
        })
        if(result>0){ 
            return true
        }else{
            return false
        }
    }
}