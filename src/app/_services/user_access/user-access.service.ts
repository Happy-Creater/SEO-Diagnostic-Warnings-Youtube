import { Injectable } from '@angular/core';

const userAccessExclude = require('assets/user_accesses/user_access_exclude.json');

@Injectable()
export class UserAccessService {

  constructor() { }

  isExcludeModule(user: string, account: string, module: string): boolean {
    for (let exclude of userAccessExclude) {
      if (exclude.user == user) {
        for (let excludeModule of exclude.modules) {
          if (excludeModule.module == module) {
            if ((excludeModule.account == null) || (excludeModule.account == account)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}
