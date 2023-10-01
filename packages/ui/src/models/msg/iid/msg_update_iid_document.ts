import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgUpdateIidDocument {
  public category: Categories;

  public type: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgUpdateIidDocument {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export default MsgUpdateIidDocument;
