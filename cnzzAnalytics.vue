<template>
  <span :id="`cnzz_stat_icon_${GA_ID}`"></span>
</template>

<script>
export default {
  name: "cnzz-analytics",
  data() {
    return {
      GA_ID: GA_ID,
    };
  },
};
</script>