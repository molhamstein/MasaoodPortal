import { Component, Input, EventEmitter, Output, Injectable } from '@angular/core';

@Injectable()
export class AppDirectionService {
  private direction: string;
  private lang: string;
  @Output() change: EventEmitter<String> = new EventEmitter();

  constructor() {
    this.direction = "ltr"
    this.lang = "en"
  }

  public swithchLang(lang: string) {
    this.lang = lang;
    if (this.lang == "en")
      this.direction = "ltr"
    else
      this.direction = "rtl"
    this.change.emit(this.direction)
  }

  public getLangAndDir() {
    return { "dir": this.direction, "lang": this.lang };
  }


}
