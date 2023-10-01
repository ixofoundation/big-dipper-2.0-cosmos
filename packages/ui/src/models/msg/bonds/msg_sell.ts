import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgSell {
  public category: Categories;

  public type: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'bonds';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgSell {
    return {
      category: 'bonds',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export default MsgSell;
