<template>
  <div>
    <h1>Breadcrumb example</h1>
    <div>
        <ul class="arrowbox">
            <li v-for='menu in menuNames' :key="menu" ref="eldr">{{menu}}</li>
        </ul>
    </div>
    <div>
    <b-dropdown text="pick menu" class="m-md-2 dd" v-on:change="changeItem">
        <b-dropdown-item v-for='menu in menuNames' :key="menu" :value="menu" @click="changeItem(menu)">{{menu}}</b-dropdown-item>
    </b-dropdown>
</div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Watch, Model } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';
import { JsonInfoState } from '../store/modules/jsonInfo';

@Component
export default class Data extends Vue {
  private menuNames = ['Start', 'noget1', 'noget2', 'afslut'];

  private changeItem(menu: string) {
    (this.$refs.eldr as HTMLElement[]).forEach((element) => {
      if (element.innerText === menu) {
        element.classList.add('highlight');
      } else {
        element.classList.remove('highlight');
      }
    });
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
a {
  color: #42b983;
}
div {
  margin: 50px
}
.dd {
  margin: 100px
}

$bg-color: rgba(0, 0, 0, 0.0);
$highlight: #E9A10D !important;
$arrow-color: #E05F0E;

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

body {
  margin: 10px;
  font-size: 16px;
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


// 
body {
   font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
  background-color: #85DFC7;
  text-align: center;
  webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}
@import url(https://fonts.googleapis.com/css?family=Raleway:200,100);
h3 {
  font-size: 4em;
   @media (max-width: 768px) {
     font-size: 2.5em;
   }
  margin-top: 0.3em;
  margin-bottom:0.4em;
  color: #786E51;
  font-family: 'Raleway', sans-serif;
  font-weight:100;
}
li {
  color: white;
  font-weight:100;
}
.arrowbox li {
  @media (max-width: 768px) {
    font-size: 12px;
    width: 70px;
  }
   @media (max-width: 480px) {
    font-size: 9px;
    width: 49px;
  }
}
</style>