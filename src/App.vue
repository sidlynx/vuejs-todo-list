<template>
  <div id="app">
    <div id="new">

    </div>
    <div id="list">

    </div>
    <div id="update"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss">
#app {
  min-height: 100%;
  background-color: aliceblue;
  display: flex;
  div {
    width: 33.3333%;
  }
  #new {
    background-color: green;
  }
  #list {
    background-color: antiquewhite;
  }
  #update {
    background-color: goldenrod;
  }
}
</style>
