import {ClientOrderModel} from './ClientOrderModel';
import {ProductCartRow} from './ProductCartRow';
import {Client} from './Client';

export class CartModel {
  get checkedOut(): boolean {
    return this._checkedOut;
  }

  set checkedOut(value: boolean) {
    this._checkedOut = value;
  }

  private _id: number;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _model: ClientOrderModel;
  private _rows: Array<ProductCartRow>;
  private _notifiedAboutCartForgottenItems: boolean;
  private _checkedOut: boolean;
  private _client: Client;

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  get model(): ClientOrderModel {
    return this._model;
  }

  set model(value: ClientOrderModel) {
    this._model = value;
  }

  get notifiedAboutCartForgottenItems(): boolean {
    return this._notifiedAboutCartForgottenItems;
  }

  set notifiedAboutCartForgottenItems(value: boolean) {
    this._notifiedAboutCartForgottenItems = value;
  }

  get rows(): Array<ProductCartRow> {
    return this._rows;
  }

  set rows(value: Array<ProductCartRow>) {
    this._rows = value;
  }


}
