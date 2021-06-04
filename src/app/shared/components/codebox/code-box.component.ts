import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.css']
})
export class CodeBoxComponent implements OnInit {

  @Input() value: string
  @Output() valueChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
//    this.highlight(this.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      console.log('(ngOnChanges ' + propName+')'  );
      const change = changes[propName];
      const text = change.currentValue;
      this.highlight(text)
     }
  }

  onChange(event) {
    console.log('code box text changes (onChange)' + event.target.value );
    this.valueChange.emit(event.target.value);
  }

  onInput(event) {
    let text = event.target.value;
    console.log('code box text changes (onInput)' + text );
    this.valueChange.emit(text);
 //   this.highlight(text);

  }

   sync_scroll(element) {
    /* Scroll result to scroll coords of event - sync with textarea */
    let result_element = document.querySelector("#highlighting");
    // Get and set x and y
    result_element.scrollTop = element.scrollTop;
    result_element.scrollLeft = element.scrollLeft;
  }

  private highlight(text) {
    let result_element = document.querySelector("#highlighting-content");
    // Update code
    // @ts-ignore
   result_element.innerText = text;
    //result_element.innerHTML = text.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<"); /* Global RegExp */
    // Syntax Highlight
    Prism.highlightElement(result_element);
  }

  check_tab(element, event) {
    let code = element.value;
    if(event.key == "Tab") {
      /* Tab key pressed */
      event.preventDefault(); // stop normal
      let before_tab = code.slice(0, element.selectionStart); // text before tab
      let after_tab = code.slice(element.selectionEnd, element.value.length); // text after tab
      let cursor_pos = element.selectionEnd + 2; // where cursor moves after tab - 2 for 2 spaces
      element.value = before_tab + "  " + after_tab; // add tab char - 2 spaces
      // move cursor
      element.selectionStart = cursor_pos;
      element.selectionEnd = cursor_pos;
    }
  }
}
