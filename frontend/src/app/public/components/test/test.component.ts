import {    OnInit, QueryList  ,Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  @ViewChild('cont') cont!: ElementRef;
  @ViewChildren('el') els: QueryList<ElementRef> | undefined;
  @ViewChildren('elCloseBtn') closeBtns: QueryList<ElementRef> | undefined;
  showel = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    setTimeout(() => {
      this.renderer.removeClass(this.cont.nativeElement, 's--inactive');
    }, 200);
  }
  el = false;
  elf($event: any) {
     this.el = !this.el;
  }
  elCloseBtn= false;
  elCloseBtnf(event: any) {
    this.elCloseBtn = !this.elCloseBtn;
  }
}




 