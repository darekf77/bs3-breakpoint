## bs3-breakpoint ##


Detect breakpoint in bootstrap 3 :

How to use it
-------------

**import it**

    import {  Bs3BreakPoint, Bs3Breakpoint } from "bs3-breakpoint/bs3-breakpoint";

**include it**

    ...
    directives: [Bs3BreakpointsComponent]
    ...

function in class component

    newBreakpoint(e: Bs3BreakPoint) {
          // breakpoint detected
    }

in html:

    <bs3-breakpoints (changed)="newBreakpoint($event)" ></bs3-breakpoints>


