<template>
  <div class="home">
    <FormDataDisplay/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormDataDisplay from '@/components/FormDataDisplay.vue';

@Component({
  components: {
    FormDataDisplay,
  },
})
export default class Home extends Vue {}
</script>
