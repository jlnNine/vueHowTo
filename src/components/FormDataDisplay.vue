<template>
  <div class="form">
    <h3>Form - data displayed</h3>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';
import { Form1State } from '../store/modules/form1';

@Component
export default class Data extends Vue {
 @Getter('formUpdate') private form!: Form1State;

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
.form {
  padding: 25px 300px;
}
</style>