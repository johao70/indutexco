import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 

private themeWrapper = document.querySelector('body');
onSubmit(form) {
    this.globalOverride(form.value);
}
globalOverride(stylesheet) {
    if (stylesheet.globalColor) {
        this.themeWrapper.style.setProperty('--bodBackground', stylesheet.globalColor);
    }
}

}
