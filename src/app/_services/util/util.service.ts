import { Injectable } from '@angular/core';
const entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};
@Injectable()
export class UtilService {

  constructor() { }

  randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  escapeHtml(source: string) {
    return String(source).replace(/[&<>"'\/]/g, s => entityMap[s]);
  }

  escapeRegExp(text: string) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
}
