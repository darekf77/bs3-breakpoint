//#region @notForNpm

//#region @browser
    import { NgModule } from '@angular/core';
    import { Component, OnInit } from '@angular/core';


    @Component({
      selector: 'app-bs3-breakpoint',
      template: 'hello from bs3-breakpoint'
    })
    export class Bs3BreakpointComponent implements OnInit {
      constructor() { }

      ngOnInit() { }
    }

    @NgModule({
      imports: [],
      exports: [Bs3BreakpointComponent],
      declarations: [Bs3BreakpointComponent],
      providers: [],
    })
    export class Bs3BreakpointModule { }
    //#endregion

    //#region @backend
    async function start(port: number) {
      console.log('hello world from backend');
    }

    export default start;

//#endregion

//#endregion