import { Component } from "vue-property-decorator";
import Page from "../Page.vue";

@Component({
  components: {
    Drawer: () => import("@/components/Drawer/Drawer.vue"),
  },
})
export default class Home extends Page {}
