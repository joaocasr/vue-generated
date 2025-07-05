<template>
<div>
 <a class="grid-item-3195114 text31862911" href="/SecondPage" v-on:click="gotoSecondPage()">
  Next
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
        gotoSecondPage(){
            this.$router.push({path:"/secondpage"});
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/hoverfalse.css';
</style>