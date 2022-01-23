<template>
  <div id="app">
    <header-app />
    <room-list :rooms="rooms" />
  </div>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import RoomList from "./components/RoomList.vue";
import { RoomService } from "./service/RoomService";
import { HttpClient } from "./core/HttpClient";

const httpClient = new HttpClient();
const roomsService = new RoomService(httpClient);

export default {
  name: "App",
  components: {
    HeaderApp,
    RoomList,
  },
  data: function () {
    return {
      rooms: [],
    };
  },
  created: function () {
    roomsService.listAll().then((response) => (this.rooms = response));
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap");

:root {
  --color-main: #9f64ff;
  --color-white: #ffffff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
