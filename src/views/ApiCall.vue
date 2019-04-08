<template>
  <div class="home">
    <DataFetch/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DataFetch from '@/components/DataFetch.vue';

@Component({
  components: {
    DataFetch,
  },
})
export default class Home extends Vue {}
</script>
