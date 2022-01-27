<template>
  <header>
    <router-link :to="{ path: '/' }">
      <h1>Sala de Reuniões App</h1>
    </router-link>
  </header>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
header {
  width: 100%;
  height: 6.25rem;
  background: var(--color-main);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
}

h1 {
  font-family: "Roboto", sans-serif;
  font-size: 36;
  color: var(--color-white);
}

a {
  text-decoration: none;
}
</style>
