<template>
<div>
 <p class="grid-item-3367384 text3367385">
  Success!
 </p>
 <p class="grid-item-3367384 text3367387">
  The movie was successfully inserted!
 </p>
</div>

</template>
    
<script>
export default {

    data(){
        return {
           
        }
    },
    methods:{
		close33673853367384(){
            this.$emit('close-from3367385-to3367384');
        }
	},created(){

        setTimeout(()=>{
            this.close33673853367384()
        }, 1200.0000476837158)
        
	}
}
</script>
<style lang="css" scoped>
@import '../assets/insertstatusmodal.css';
</style>