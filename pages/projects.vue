<template>
  <main>
    <section>
      <h1>Projects</h1>
      <div v-for="project in githubProjects" :key="project.id">
        <h3>
          <a :href="project.html_url">{{ project.name }}</a>
        </h3>
        <p>{{ project.stargazers_count }}</p>
        <p>{{ project.homepage }}</p>
        <p>{{ project.description }}</p>
      </div>
    </section>
    <aside></aside>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["githubProjects"])
  },
  mounted() {
    this.$store.dispatch("getGithubProjects");
  }
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  section {
    grid-area: 1 / 3 / 6 / 6;
    background-color: darkgrey;
  }
  aside {
    grid-area: 1 / 1 / 6 / 3;
  }
}
</style>