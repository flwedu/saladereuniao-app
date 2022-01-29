import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import RoomList from "./components/Room/RoomList.vue";
import RoomEventList from "./components/RoomEvents/RoomEventList.vue";
import RoomDetails from "./components/Room/RoomDetails.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

// Describing routes
const routes = [
  {
    path: "/",
    component: RoomList,
  },
  {
    path: "/room/:roomId",
    name: "room",
    component: RoomDetails,
    children: [
      {
        path: "events",
        name: "events",
        component: RoomEventList,
      },
    ],
  },
  {
    path: "/events/:pageNumber",
    name: "allEvents",
    component: RoomEventList,
  },
];

// Creating the router
const router = new VueRouter({
  routes,
});

// Using the router and other options in app instance
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
