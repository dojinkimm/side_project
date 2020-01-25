import {
  Table,
  Model,
  PrimaryKey,
  ForeignKey,
  Column,
  CreatedAt,
  UpdatedAt,
  DataType,
  AutoIncrement,
  BelongsTo
} from 'sequelize-typescript';
import { User } from './User';
import { Room } from './Room';

@Table({
  underscored: true
})
export class Reservation extends Model<Reservation> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public id!: number;

  @Column(DataType.DATE)
  public startDate!: Date;

  @Column(DataType.DATE)
  public endDate!: Date;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  public userId!: number;

  @BelongsTo(() => User, 'userId')
  public user!: User;

  @ForeignKey(() => Room)
  @Column(DataType.INTEGER)
  public roomId!: number;

  @BelongsTo(() => Room, 'roomId')
  public room!: User;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;
}
