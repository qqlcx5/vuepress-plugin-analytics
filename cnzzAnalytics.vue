<template>
  <span :id="`cnzz_stat_icon_${GA_ID}`"></span>
</template>

<script>
import reqCnzz from "./request-cnzz"
export default {
  name: "cnzz-analytics",
  data() {
    return {
      GA_ID: GA_ID,
    };
  },
  mounted(){
    reqCnzz()
  }
};
</script>