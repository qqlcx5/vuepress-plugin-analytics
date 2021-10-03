<template>
  <span :id="`cnzz_stat_icon_${CNZZ_ID}`"></span>
</template>

<script>
import reqCnzz from "./request-cnzz"
export default {
  name: "cnzz-analytics",
  data() {
    return {
      CNZZ_ID: CNZZ_ID,
    };
  },
  mounted(){
    reqCnzz()
  }
};
</script>