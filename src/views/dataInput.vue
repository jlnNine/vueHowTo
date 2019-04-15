<template>
  <div class="home">
    <FormDataInput/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormDataInput from '@/components/FormDataInput.vue';

@Component({
  components: {
    FormDataInput,
  },
})
export default class Home extends Vue {}
</script>
