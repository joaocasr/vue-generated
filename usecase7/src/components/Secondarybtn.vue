<template>
<div>
 <a class="grid-item-222319 text222316" href="/PrincipalPage" v-on:click="gotoPrincipalPage()">
  Go Back
 </a>
</div>

</template>
    
<script>
export default {

    data(){
        return {
           
        }
    },
    methods:{
        gotoPrincipalPage(){
            this.$router.push({path:"/principalpage"});
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/secondarybtn.css';
</style>