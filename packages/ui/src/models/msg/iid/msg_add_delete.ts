import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

export class MsgAddVerification {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgAddVerification {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgRevokeVerification {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgRevokeVerification {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgSetVerificationRelationships {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgSetVerificationRelationships {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgAddService {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgAddService {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgDeleteService {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgDeleteService {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgAddController {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgAddController {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgDeleteController {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgDeleteController {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgAddLinkedResource {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgAddLinkedResource {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgDeleteLinkedResource {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgDeleteLinkedResource {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgAddLinkedClaim {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgAddLinkedClaim {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgDeleteLinkedClaim {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgDeleteLinkedClaim {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgAddLinkedEntity {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgAddLinkedEntity {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgDeleteLinkedEntity {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgDeleteLinkedEntity {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgAddAccordedRight {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgAddAccordedRight {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgDeleteAccordedRight {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgDeleteAccordedRight {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgAddIidContext {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgAddIidContext {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}

export class MsgDeleteIidContext {
  public category: Categories;
  public type: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'iid';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgDeleteIidContext {
    return {
      category: 'iid',
      json,
      type: R.pathOr('', ['@type'], json),
    };
  }
}
