<template>
  <div id="app">
    <header-app />
    <room-list />
  </div>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import RoomList from "./components/RoomList.vue";
import { RoomService } from "./service/RoomService";

const roomsService = new RoomService();

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
