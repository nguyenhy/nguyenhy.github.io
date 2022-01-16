import { Emit, PropSync } from "vue-property-decorator";

export default class Page extends Vue {
  @PropSync("show") showContent!: boolean;

  @Emit("navigate")
  onEmitNavigate(name: string): string {
    return name;
  }

  protected autoShowContent(): void {
    this.$nextTick(() => {
      this.showContent = true;
    });
  }

  protected showMainContent(): void {
    this.showContent = true;
  }

  protected hideMainContent(): void {
    this.showContent = false;
  }

  protected toggleMainContent(): void {
    this.showContent = !this.showContent;
  }
}
