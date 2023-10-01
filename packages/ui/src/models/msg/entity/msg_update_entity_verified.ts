import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgUpdateEntityVerified {
  public category: Categories;

  public type: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'entity';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgUpdateEntityVerified {
    return {
      category: 'entity',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export default MsgUpdateEntityVerified;
