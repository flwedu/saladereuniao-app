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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

:root {
  --color-border: #6e6e6e;
  --color-main: #9f64ff;
  --color-text-light: #ffffdd;
  --color-text: #21282f;
  --color-dark: #202020;
  --color-white: #ffffff;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-text);
}
</style>
