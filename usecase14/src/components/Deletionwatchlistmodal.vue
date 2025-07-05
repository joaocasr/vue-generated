<template>
<div>
 <div class="grid-item-27703012 container27703013" v-on:click="close2770301327703012()">
  <p class="grid-item-27703012 text27703014">
   No, Cancel
  </p>
 </div>
 <div class="grid-item-27703012 container27703015" v-on:click="close2770301527703012()">
  <p class="grid-item-27703012 text27703016">
   Yes, Delete
  </p>
 </div>
 <p class="grid-item-27703012 text27703017">
  Are you sure you want to delete all the movies from your watchlist?
 </p>
 <p class="grid-item-27703012 text27703018">
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
		close2770301327703012(){
            this.$emit('close-from27703013-to27703012');
        },
		close2770301527703012(){
            this.$emit('close-from27703015-to27703012');
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/deletionwatchlistmodal.css';
</style>