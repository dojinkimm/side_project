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

  @Column(DataType.NUMBER)
  public price!: number;

  @Column(DataType.NUMBER)
  public capacity!: number;

  @Column(DataType.NUMBER)
  public bedroomNumber!: number;

  @Column(DataType.NUMBER)
  public bedNumber!: number;

  @Column(DataType.NUMBER)
  public bathNumber!: number;

  @Column(DataType.DECIMAL(10, 8))
  public latitude!: number;

  @Column(DataType.DECIMAL(11, 8))
  public longitude!: number;

  @Column(DataType.STRING)
  public imageURLs!: string[];

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
