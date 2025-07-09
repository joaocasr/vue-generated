<template>
<div>
 <div class="grid-item-3367377 container3367378" v-on:click="close33673783367377()">
  <p class="grid-item-3367377 text3367379">
   No, Cancel
  </p>
 </div>
 <div class="grid-item-3367377 container3367380" v-on:click="swap33673803367384">
  <p class="grid-item-3367377 text3367381">
   Yes, Insert
  </p>
 </div>
 <p class="grid-item-3367377 text3367382">
  Are you sure you want to add this movie to watchlist?
 </p>
 <p class="grid-item-3367377 text3367383">
  Insert to Watchlist
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
		close33673783367377(){
            this.$emit('close-from3367378-to3367377');
        },
		swap33673803367384(){
            this.$emit('swapfrom3367380to3367384');
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/confirmationwatchlistmodal.css';
</style>