import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
@Unique(['email'])
export class Customer extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    firstName: string

    @Column({ nullable: true })
    midName: string

    @Column({ nullable: true })
    lastName: string

    @Column()
    email: string

    @Column({ nullable: true })
    phoneNumber: string

    @Column()
    password: string

    @CreateDateColumn()
    createTime: string

    @UpdateDateColumn()
    updateTime: string

    @DeleteDateColumn()
    deletedAt?: Date
}