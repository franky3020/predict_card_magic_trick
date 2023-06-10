import { Injectable } from '@angular/core';


const userLearned = 'userLearned';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  isUserLearned() {
    const isLearned = localStorage.getItem(userLearned);
    if (isLearned === 'true') {
      return true;
    } else {
      return false;
    }
    
  }

  userLearned() {
    localStorage.setItem(userLearned, 'true');
  }

}
