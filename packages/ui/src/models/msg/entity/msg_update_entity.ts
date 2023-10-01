import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgUpdateEntity {
  public category: Categories;

  public type: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'entity';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgUpdateEntity {
    return {
      category: 'entity',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export default MsgUpdateEntity;
