import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRoles } from '../enums/user-role.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id_user: string;

  @Column({ type: 'varchar', length: 100, nullable: false, unique: false })
  name: string;

  @Column({
    type: 'varchar',
    length: 11,
    nullable: false,
    unique: true,
    select: false,
  })
  cpf: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.CUSTOMER })
  role: UserRoles;

  @Column({
    type: 'varchar',
    length: 100,
    unique: false,
    nullable: false,
    select: false,
  })
  password: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  upadateAt: Date;
}
