<template>
  <div style="text-align: center;">
    <ul class="arrowbox">
       <li v-for='menu in menuNames' :key="menu" ref="eldr">{{menu}}</li>
    </ul>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Watch, Model, Prop } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';

@Component
export default class Breadcrumb extends Vue {
	@State((state) => state.breadStore.menuNames) private menuNames!: string[];
	@State((state) => state.breadStore.status) private status!: number;

	@Watch('status')
  private onChildChanged(val: number, oldVal: number) {
		(this.$refs.eldr as HTMLElement[])[val].classList.add('highlight');
		// (this.$refs.eldr as HTMLElement[])[oldVal].classList.remove('highlight');
	}

	private async mounted() {
		await(this.$refs.eldr as HTMLElement[]);
		(this.$refs.eldr as HTMLElement[])[0].classList.add('highlight');
	}

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

$bg-color: rgba(0, 0, 0, 0.0);
$highlight: #14133C !important;
$arrow-color: #3399D9;

.highlight {
		background: $highlight;
    &::before {
		border-left: 25px solid transparent;
		border-top: 25px solid $highlight;
		border-bottom: 25px solid $highlight;
	}
	&::after {
		border-left: 25px solid $highlight;
		border-top: 25px solid transparent;
		border-bottom: 25px solid transparent;
	}
}
.arrowbox{
	padding:0; 
  margin:0;    
	padding-left: 26px; 
	padding-right: 5.5px;
	display: inline-block;
	position: relative;
}

.arrowbox li {
	list-style-type: none;
	display: inline-block;
	margin-right: 20px;
	height: 50px;
	line-height: 50px;
	width: 150px;
	background: $arrow-color;
	font-size: 18px;
	text-align: center;
	position: relative;
	&::before {
		content: '';
		border-left: 25px solid transparent;
		border-top: 25px solid $arrow-color;
		border-bottom: 25px solid $arrow-color;
		border-right: 0;
		position: absolute;
		left: -25px;
	}
	&::after {
		content: '';
		border-left: 25px solid $arrow-color;
		border-top: 25px solid transparent;
		border-bottom: 25px solid transparent;
		border-right: 0;
		position: absolute;
		right: -24px;
	}
}


li {
  color: white;
  font-weight:100;
}
</style>