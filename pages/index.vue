<template>
  <main>
    <div class="background"></div>
    <div class="headings">
      <h1>
        Hello facoface
        <br />I love delicious tacos
      </h1>
    </div>
    <div class="links">
      <p>Go follow Hawk Philsworth</p>
    </div>
    <div class="nextpage">Projects</div>

    <app-masthead />
  </main>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";

export default {
  components: {
    AppMasthead
  }
};
</script>

<style lang="scss" scoped>
main {
  height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(2, 100px) repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.backgrounds {
  grid-area: 1 / 3 / 5 / 6;
}
.headings {
  grid-area: 1 / 1 / 5 / 3;
}
.nextpage {
  grid-area: 5 / 3 / 6 / 6;
}
.links {
  grid-area: 5 / 1 / 6 / 3;
}
</style>