import { Relationship } from "src/relationships/relationships.entity";
import { User } from "src/users/users.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Memory {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Relationship)
    @JoinColumn({ name: 'relationship_id' })
    relationship: Relationship;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    imageUrl: string;

    @Column()
    memoryDate: Date;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

}