<template>
  <img
    src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    alt
  />
</template>

<script>
import { TimelineMax, TweenMax, Sine } from "gsap";

export default {
  methods: {
    mastheadAnima() {
      const tl = new TimelineMax();

      tl.add("start");
      tl.from(
        "img",
        2,
        {
          x: -600,
          ease: Sine.easeOut
        },
        "start"
      );
    }
  },
  mounted() {
    this.mastheadAnima();
  }
};
</script>

<style lang="scss" scoped>
</style>