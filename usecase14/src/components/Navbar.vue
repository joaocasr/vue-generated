<template>
<div>
 <img alt="container27702914" class="grid-item-27703040 container27702914" src="/27702914.png"/>
 <a class="grid-item-27703040 text27702915" href="/HomePage" v-on:click="gotoHomePage27702915()">
  MOVIESTV
 </a>
 <div class="grid-item-27703040 container27702916">
  <div class="grid-item-27703040 container27702917">
   <div class="grid-item-27703040 container27702918" v-on:click="gotoWatchlistPage27702918()">
    <img alt="container27702919" class="grid-item-27703040 container27702919" src="/listVector27702919.svg"/>
   </div>
   <div class="grid-item-27703040 container27702920">
    <img alt="container27702921" class="grid-item-27703040 container27702921" src="/heartVector27702921.svg"/>
   </div>
   <div class="grid-item-27703040 smenu27702922">
    <v-menu>
     <template v-slot:activator="{ props }">
      <div v-bind="props">
       <img alt="iconMenu27703164" src="/iconMenu27703164.png"/>
      </div>
     </template>
     <v-list>
      <v-list-item :key="index" :value="index" v-for="(item, index) in menuoptions27702922">
       <v-list-item-title @click="selectedItem27702922(item)">
        {{ item.option }}
       </v-list-item-title>
      </v-list-item>
     </v-list>
    </v-menu>
   </div>
  </div>
  <div class="grid-item-27703040 container27702923">
   <p class="grid-item-27703040 text27702924">
    HOME
   </p>
  </div>
  <div class="grid-item-27703040 container27702925">
   <p class="grid-item-27703040 text27702926">
    HOME
   </p>
  </div>
  <div class="grid-item-27703040 container27702925">
   <p class="grid-item-27703040 text27702926">
    HOME
   </p>
  </div>
 </div>
</div>

</template>
    
<script>
export default {

    data(){
        return {
        menuoptions27702922:[{'option': 'Login', 'destination': '2770:3033'}, {'option': 'Sign Up'}],
            show27702925:false   
        }
    },
    methods:{
        gotoHomePage27702915(){
            this.$router.push({path:"/homepage"});
        },
        gotoWatchlistPage27702918(){
            this.$router.push({path:"/watchlistpage"});
        },
        selectedItem27702922(){
               this.$router.push({path:"/loginpage"});

            }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/navbar.css';
</style>