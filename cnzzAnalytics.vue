<template>
  <span :id="`cnzz_stat_icon_${id}`"></span>
</template>

<script>
export default {
  name: "cnzz-analytics",
  data() {
    return {
      id: ID,
    };
  },
  mounted() {
    // this.init(document, "script", "https://s9.cnzz.com/z_stat.php?id=");
  },
  methods: {
    // init(a,b,c,d) {
    //     const script = a.createElement(b)
    //     script.src = `${c}${this.id}`
    //     script.id = this.id
    //     script.language = 'JavaScript'
    //     a.body.appendChild(script)
    //     console.log('initinitinit');
    // },
  },
};
</script>

<style>
</style>