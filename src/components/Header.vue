<template>
<div>
    <div class="header">
        <div class="headerLogo">
        </div>
        <div class="login">
            John doe
        </div>
        <div class="logo">
            skat.dk
        </div>
    </div>
    <div class="info border-bottom">
        <b-container class="bv-example-row">
            <b-row>
                <b-col class="text-muted text">Kapitaludlodning</b-col>
                <b-col class="title">{{ msg }}</b-col>
                <b-col class="float-right text" style="text-align: right;">På vegne af John doe</b-col>
            </b-row>
        </b-container>
    </div>    
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.header {
    height: 78px;
    text-align: center;
    top: 0;
    width: 100%;
    color:white;
}
.login {
    background: #3399D9;
    width: 20%;
    height: 100%;
    color: black;
    padding: 30px 0px 0px 0px;
    float:right;
}
.headerLogo {
    background: #14133c;
    width: 80%;
    height: 100%;
    float:left;
}
.logo {
    position: absolute;
    width: 100%;
    padding: 20px 0px 0px 0px;
    font-size: 150%;
    font-weight: bold;
}
.info {
    height: 60px;
}
.title {
    text-align: center;
    font-size: 200%;
    padding: 10px 0px 0px 0px;
}
.text {
    padding: 20px 0px 0px 0px;
}
</style>