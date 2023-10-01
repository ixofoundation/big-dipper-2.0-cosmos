import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgSubmitClaim {
  public category: Categories;

  public type: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'claims';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgSubmitClaim {
    return {
      category: 'claims',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export default MsgSubmitClaim;
