<template>
<div>
 <div class="grid-item-3367388 container3367389" v-on:click="close33673893367388()">
  <p class="grid-item-3367388 text3367390">
   No, Cancel
  </p>
 </div>
 <div class="grid-item-3367388 container3367391">
  <p class="grid-item-3367388 text3367392">
   Yes, Delete
  </p>
 </div>
 <p class="grid-item-3367388 text3367393">
  Are you sure you want to delete all the movies from your watchlist?
 </p>
 <p class="grid-item-3367388 text3367394">
  Clear Watchlist
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
		close33673893367388(){
            this.$emit('close-from3367389-to3367388');
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/deletionwatchlistmodal.css';
</style>