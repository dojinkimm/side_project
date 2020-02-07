import {
  Table,
  Model,
  PrimaryKey,
  Column,
  CreatedAt,
  UpdatedAt,
  DataType,
  HasMany,
  AutoIncrement,
} from 'sequelize-typescript';
import {Reservation} from './Reservation';
import {Room} from './Room';

@Table({
  underscored: true,
})
export class User extends Model<User> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public id!: number;

  @Column(DataType.STRING)
  public displayName!: string;

  @Column(DataType.STRING)
  public googleId!: string;

  @Column(DataType.STRING)
  public token?: string;

  @Column(DataType.BOOLEAN)
  public isSeller!: boolean;

  @Column(DataType.BOOLEAN)
  public isSuperHost!: boolean;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;

  @HasMany(() => Room, 'userId')
  public rooms!: Room[];

}