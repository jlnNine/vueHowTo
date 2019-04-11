<template>
  <div class="about">
    <h3>Async/Await</h3>
    <h3>Store with Vuex</h3>
    <div>
      <button class="btn btn-primary" @click="fetchData" label="close">Press</button>
      <div v-if="isLoading">
        <b-spinner label="Loading..."></b-spinner>
      </div>
      <div v-else>
        <div v-if="error">
          error 
        </div>
        <div v-else>
          <div> hello there {{ jsonString }} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';
import { JsonInfoState } from '../store/modules/jsonInfo';

@Component
export default class Data extends Vue {
 @Getter('isLoading') private isLoading!: boolean;
 @Getter('jsonString') private jsonString!: string;
 @Action('fetchData') private fetchData!: string;
 @State((state) => state.profile.error) private error!: boolean;

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin: 50px
}
</style>