import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "sample_module" })
export class SampleModule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  age: number;
}
