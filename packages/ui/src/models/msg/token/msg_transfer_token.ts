import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgTransferToken {
  public category: Categories;

  public type: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'token';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgTransferToken {
    return {
      category: 'token',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export default MsgTransferToken;
