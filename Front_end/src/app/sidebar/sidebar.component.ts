import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  //Busca en todas las paginas css las variables
  private themeWrapper = document.querySelector("body");
  onSubmit(form) {
    this.globalOverride(form.value);
  }
  globalOverride(stylesheet) {
    if (stylesheet.globalColor) {
      this.themeWrapper.style.setProperty(
        "--bodBackground",
        stylesheet.globalColor
      );
    }
  }
}
