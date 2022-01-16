import { Component, ProvideReactive, Watch } from "vue-property-decorator";

@Component({
  components: {
    Drawer: () => import("@/components/Drawer/Drawer.vue"),
  },
})
export default class App extends Vue {
  @ProvideReactive() showContent: boolean = false;

  @Watch("$route.name")
  onChangeRouteName(): void {
    this.navigateAction(this.$route.name || "");
  }

  public mounted(): void {
    console.log(this);
  }

  protected onNavigate(name: string): void {
    this.navigateAction(name);
  }

  protected onClickToggleMenu(): void {
    this.showContent = false;
  }

  private navigateAction(name: string) {
    name = name.toLowerCase();
    if (name == "home") {
      this.showContent = false;
    } else {
      this.showContent = true;
    }
  }
}
