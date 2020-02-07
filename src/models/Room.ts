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

@Table({
  underscored: true
})
export class Room extends Model<Room> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public id!: number;

  @Column(DataType.STRING)
  public title!: string;

  @Column(DataType.STRING)
  public address!: string;

  @Column(DataType.STRING)
  public city!: string;

  @Column(DataType.INTEGER)
  public price!: number;

  @Column(DataType.INTEGER)
  public capacity!: number;

  @Column(DataType.INTEGER)
  public bedroomNumber!: number;

  @Column(DataType.INTEGER)
  public bedNumber!: number;

  @Column(DataType.INTEGER)
  public bathNumber!: number;

  @Column(DataType.FLOAT)
  public latitude?: number;

  @Column(DataType.FLOAT)
  public longitude?: number;

  @Column(DataType.STRING)
  public imageUrls!: string[];

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  public userId!: number;

  @BelongsTo(() => User, 'userId')
  public user!: User;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;
}
