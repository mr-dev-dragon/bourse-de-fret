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
  elf($event: any) {

    if (this.cont.nativeElement.classList.contains('s--active')) return;
    this.renderer.removeClass(this.cont.nativeElement, 's--inactive');
      this.renderer.addClass(this.cont.nativeElement, 's--el-active');
      this.renderer.addClass(this.cont.nativeElement, 's--active');
 
   
  }
  elCloseBtnf(event: any) {

      this.renderer.removeClass(this.cont.nativeElement, 's--inactive');
        this.renderer.removeClass(this.cont.nativeElement, 's--active');
  
     
      }
  }







