import Component from "vue-class-component";

@Component({
  components: {
    Drawer: () => import("@/components/Drawer/Drawer.vue"),
  },
})
export default class App extends Vue {}
