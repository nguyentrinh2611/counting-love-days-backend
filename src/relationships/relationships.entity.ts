import { User } from "src/users/users.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Relationship {
    @PrimaryGeneratedColumn()
    id: number;


    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'partner_id' })
    partner: User;

    @CreateDateColumn()
    startDate: Date;
}