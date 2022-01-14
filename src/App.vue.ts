import { Component, ProvideReactive } from "vue-property-decorator";

@Component({
  components: {
    Drawer: () => import("@/components/Drawer/Drawer.vue"),
  },
})
export default class App extends Vue {
  @ProvideReactive() showContent: boolean = false;

  public mounted(): void {
    console.log(this);
  }

  protected onNavigate(name: string): void {
    if (name == "home") {
      this.showContent = false;
    } else {
      this.showContent = true;
    }
  }

  protected onClickToggleMenu(): void {
    this.showContent = false;
  }
}
