<template>
  <div class="main">
    <Header msg="Indberet via fil"/>
    <FromFileView/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import FromFileView from '@/views/FromFileView.vue';

@Component({
  components: {
    Header,
    FromFileView,
    Footer,
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
.main {
  height: 100%;
}

</style>
