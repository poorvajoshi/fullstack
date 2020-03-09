import { Type } from '@angular/core';
import { Component } from '@angular/compiler/src/core';

export class CustomInput {
  constructor(public component: Type<any>, public data: any) {}
}