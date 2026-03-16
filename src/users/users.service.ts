import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
    ) { }

    async findByEmail(email: string) {
        return this.userRepository.findOne({ where: { email } });
    }

    async create(userData: Partial<Users>) {
        const user = this.userRepository.create(userData);
        return this.userRepository.save(user);
    }

}
