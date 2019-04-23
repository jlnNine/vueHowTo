<template>
    <div class="row">
    <div class="col breadStyle">
        <Breadcrumb />
    </div>
    <div class="w-100"></div>
    <div class="col">
        <MultiUpload v-if="currentPage === 0"/>
        <FileSucces v-else-if="currentPage === 1"/>
    </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MultiUpload from '@/components/MultiUpload.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import FileSucces from '@/components/FileSucces.vue';
import { State, Getter, Action, Mutation } from 'vuex-class';

@Component({
  components: {
    MultiUpload,
    Breadcrumb,
    FileSucces,
  },
})
export default class Home extends Vue {

  @Getter('currentPage') private currentPage!: number;

  private mounted() {
    this.$store.commit('initBreadStore', ['År og fil', 'Bekræftelse']);
  }
}
</script>

<style scoped lang="scss">
.breadStyle {
    padding: 30px;
}
</style>
