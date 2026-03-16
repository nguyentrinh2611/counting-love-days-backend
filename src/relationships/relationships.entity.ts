import { Users } from "src/users/users.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Relationship {
    @PrimaryGeneratedColumn()
    id: number;


    @ManyToOne(() => Users)
    @JoinColumn({ name: 'user_id' })
    user: Users;

    @ManyToOne(() => Users)
    @JoinColumn({ name: 'partner_id' })
    partner: Users;

    @CreateDateColumn()
    startDate: Date;
}