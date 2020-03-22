import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { createHmac } from 'crypto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: true })
  name: string;

  @Column('varchar', { unique: true })
  username: string;

  @Column('varchar')
  email: string;

  @Column('boolean', { default: false })
  isActive: boolean;

  @Column('varchar', { nullable: true })
  avatar: string;

  @Column('varchar', { select: false })
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (this.password) {
      this.password = User.hashPassword(this.password);
    }
  }

  static hashPassword(password: string) {
    return createHmac('sha256', password).digest('hex');
  }

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
