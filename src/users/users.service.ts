import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const cpfRegistered = await this.UserRepository.findOne({
      where: { cpf: createUserDto.cpf },
    });

    const emailRegistered = await this.UserRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (cpfRegistered) {
      throw new ConflictException('CPF já cadastrado');
    }
    if (emailRegistered) {
      throw new ConflictException('e-mail já cadastrado');
    }

    
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
