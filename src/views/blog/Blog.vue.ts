import { Component } from "vue-property-decorator";
import Page from "../Page.vue";

@Component({})
export default class Blog extends Page {
  public mounted(): void {
    this.autoShowContent();
  }

  protected onClick(): void {
    this.toggleMainContent();
  }
}
