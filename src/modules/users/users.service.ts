import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers() {
    return [
      { id: 1, name: "John" },
      { id: 2, name: "Anna" }
    ];
  }
}
