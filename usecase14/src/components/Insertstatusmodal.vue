<template>
<div>
 <p class="grid-item-27703008 text27703009">
  Success!
 </p>
 <div class="grid-item-27703008 ellipse27703010">
 </div>
 <p class="grid-item-27703008 text27703011">
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
		close2770300927703008(){
            this.$emit('close-from27703009-to27703008');
        }
	},created(){

        setTimeout(()=>{
            this.close2770300927703008()
        }, 1200.0000476837158)
        
	}
}
</script>
<style lang="css" scoped>
@import '../assets/insertstatusmodal.css';
</style>