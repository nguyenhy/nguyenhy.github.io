import { Component, Emit, PropSync } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Drawer extends Vue {
  @PropSync("show") showContent!: boolean;
  @Emit("navigate")
  onEmitNavigate(name: string): string {
    return name;
  }

  public mounted(): void {
    //
  }

  protected onNavigate(name: string): void {
    this.onEmitNavigate(name);
  }
}
