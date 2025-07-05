<template>
<div>
 <div class="grid-item-27703001 container27703002" v-on:click="close2770300227703001()">
  <p class="grid-item-27703001 text27703003">
   No, Cancel
  </p>
 </div>
 <div class="grid-item-27703001 container27703004" v-on:click="close2770300427703001()">
  <p class="grid-item-27703001 text27703005">
   Yes, Insert
  </p>
 </div>
 <p class="grid-item-27703001 text27703006">
  Are you sure you want to add this movie to watchlist?
 </p>
 <p class="grid-item-27703001 text27703007">
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
		close2770300227703001(){
            this.$emit('close-from27703002-to27703001');
        },
		close2770300427703001(){
            this.$emit('close-from27703004-to27703001');
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/confirmationwatchlistmodal.css';
</style>