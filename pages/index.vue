<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <div>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      pageTitle: "Hello World",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deseruntquibusdam, odit vitae voluptas iste qui atque sed aliquam, cumque consequatur perspiciatis necessitatibus aspernatur laborum dolorem maxime provident, vero aliquid autem porro iure non? Incidunt hic soluta accusamus adipisci mollitia.",
    };
  },
};
</script>
<style lang="sass"></style>
