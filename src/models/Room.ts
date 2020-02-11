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

  @Column(DataType.INTEGER)
  public capacity!: number;

  @Column(DataType.INTEGER)
  public bedroomNumber!: number;

  @Column(DataType.INTEGER)
  public bedNumber!: number;

  @Column(DataType.INTEGER)
  public bathNumber!: number;

  @Column(DataType.INTEGER)
  public price!: number;

  @Column(DataType.STRING)
  public houseType!: string;

  @Column(DataType.JSON)
  public convenience!: {
    wifi: boolean;
    parking: boolean;
    kitchen: boolean;
    breakfast: boolean;
    tv: boolean;
    laundry: boolean;
    ac: boolean;
  };

  // @Column(DataType.BOOLEAN)
  // public wifi!: boolean;

  // @Column(DataType.BOOLEAN)
  // public parking!: boolean;

  // @Column(DataType.BOOLEAN)
  // public kitchen!: boolean;

  // @Column(DataType.BOOLEAN)
  // public breakfast!: boolean;

  // @Column(DataType.BOOLEAN)
  // public tv!: boolean;

  // @Column(DataType.BOOLEAN)
  // public laundry!: boolean;

  // @Column(DataType.BOOLEAN)
  // public ac!: boolean;

  @Column(DataType.STRING)
  public address!: string;

  @Column(DataType.STRING)
  public city!: string;

  @Column(DataType.STRING)
  public street1!: string;

  @Column(DataType.STRING)
  public street2!: string;

  @Column(DataType.FLOAT)
  public latitude?: number;

  @Column(DataType.FLOAT)
  public longitude?: number;

  @Column(DataType.ARRAY(DataType.STRING))
  public imagePaths!: string[];

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
