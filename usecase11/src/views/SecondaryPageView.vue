<template>
<div class="grid-container">
 <p class="grid-item text222314">
  THIS IS THE SECONDARY PAGE
 </p>
 <Secondarybtn class="grid-item-222319 component222319" v-on:click="gotoPrincipalPage222319()"></Secondarybtn>
</div>

</template>

<script>
import Secondarybtn from '@/components/Secondarybtn.vue';
export default {
    components:{
        Secondarybtn
    },
    data(){
        return {
                
                
        }
    },
    methods:{
        gotoPrincipalPage222319(){
            this.$router.push({path:"/principalpage"});
        },
        gotoPrincipalPage222316(){
            this.$router.push({path:"/principalpage"});
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/secondarypage.css';
</style>