<template>
  <div class="home">
    <BreadcrumbEx/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BreadcrumbEx from '@/components/BreadcrumbEx.vue';

@Component({
  components: {
    BreadcrumbEx,
  },
})
export default class Home extends Vue {}
</script>
