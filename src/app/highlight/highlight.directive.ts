import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective{

    constructor(private el:ElementRef){ }

    @Input('myHighlight') highlightColor: string;
    @Input() defaultColor: string;

    @HostListener('mouseenter')
    onMouseEnter(){
        this.highlightElement(this.highlightColor || this.defaultColor || 'pink');
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.highlightElement(null);
    }

    private highlightElement(color:string){
        this.el.nativeElement.style.backgroundColor = color;
    }
}