<template>
  <div class="about">
    <h3>Async/Await</h3>
    <h3>Store with Vuex</h3>
    <div>
      <button class="btn btn-primary" @click="clickA" label="close">Press</button>
    </div>
    <div>{{ msg }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import Axios from 'axios';

@Component
export default class Data extends Vue {
    private msg =  'hello there';

    private clickA() {
        Axios.get('http://localhost:3001/comments').then((res) => this.msg = res.data[0].body);
    }
}
</script>