<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col>Vælg, hvilket år du indberetter for og vælg filen du vil overføre.</b-col>
      </b-row>
       <b-row class="formtg">
        <b-col class="text-center">Kalenderår</b-col>
        <b-col>
          <b-form-select style="width: 400px" v-model="selected" :options="options"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="formtg"> 
        <b-col class="text-center">Vælg fil</b-col>
        <b-col><b-form-file style="width: 400px" v-model="file"></b-form-file></b-col>
      </b-row>
      <b-row class="text-center formtg">
        <b-col>Vi anbefalder, at du validerer din fil, inden du indberetter.</b-col>
      </b-row>
      <b-row class="formtg"> 
        <div style="width: 100%">
          <b-button class="float-left" variant="link">Afbryd</b-button>
          <b-button v-if="!isLoading" class="float-right" size="lg" @click="uploadFile"> Næste</b-button>
          <div v-else class="lds-ring float-right"><div></div><div></div><div></div><div></div></div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';

@Component
export default class Data extends Vue {
  private options = [
        { value: 2018, text: '2018' },
        { value: 2019, text: '2019' },
        { value: 2020, text: '2020' },
      ];
  private fullPage = true;

  @State((state) => state.fileUpload.isLoading) private isLoading!: boolean;

  get file() {
    return this.$store.state.file;
  }
  set file(file: any) {
    this.$store.commit('updateFile', file);
  }
  get selected() {
    return this.$store.state.file;
  }
  set selected(year: any) {
    this.$store.commit('updateYear', year);
  }

  @Action('uploadFileData') private uploadFile!: any;
  @Mutation('nextPage') private nextPage!: any;

}
</script>

<style>
.formtg {
  margin: 50px 0px 0px 0px;
}


</style>