<template>
  <div class="footer footer-copyright text-center py-3">
        footer
   </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>

<style scoped lang="scss">
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #14133c;
    color: white;
}

</style>