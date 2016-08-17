import { Component, OnInit, ElementRef, Output, NgZone, EventEmitter } from '@angular/core';

import { Bs3BreakPoint } from './bs3-breakpoints.enum';
import { Size } from './size.enum';

@Component({
    selector: 'bs3-breakpoints',
    template: `
        <div class="device-xs visible-xs"></div>
        <div class="device-sm visible-sm"></div>
        <div class="device-md visible-md"></div>
        <div class="device-lg visible-lg"></div>
    `, styles: [':host { display:none; } ']
})
export class Bs3BreakpointsComponent implements OnInit {
    @Output() changed: EventEmitter<Bs3BreakPoint> = new EventEmitter<Bs3BreakPoint>();
    @Output() resize: EventEmitter<Size> = new EventEmitter<Size>();

    current: Bs3BreakPoint = Bs3BreakPoint.lg;
    width: number;
    height: number;
    constructor(private e: ElementRef, ngZone: NgZone) {

        this.changed.next(this.current);
        window.onresize = () => {
            ngZone.run(() => {

                this.width = window.innerWidth;
                this.height = window.innerHeight;
                if (this.check()) {
                    this.changed.next(this.current);
                }
                this.resize.next({ width: this.width, height: this.height });
            });
        };
    }


    isVisible(obj): boolean {
        let style = window.getComputedStyle(obj, undefined);
        return style.display === 'block';
    }

    check(): boolean {
        let t;
        if (this.isVisible(this.e.nativeElement.children[0])) {
            t = Bs3BreakPoint.xs;
        }
        if (this.isVisible(this.e.nativeElement.children[1])) {
            t = Bs3BreakPoint.sm;
        }
        if (this.isVisible(this.e.nativeElement.children[2])) {
            t = Bs3BreakPoint.md;
        }
        if (this.isVisible(this.e.nativeElement.children[3])) {
            t = Bs3BreakPoint.lg;
        }
        if (t !== this.current) {
            this.current = t;
            return true;
        }

        return false;
    }


    ngOnInit() { }

}
