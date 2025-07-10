<template>
<div class="grid-container">
 <div class="grid-item container3322164">
  <IconField class="ssearchinputfilter3322165">
   <InputIcon class="pi pi-search">
   </InputIcon>
   <InputText placeholder="Artist, track or podcast" v-model="inputsearch3322165">
   </InputText>
  </IconField>
  <p class="grid-item text3322166">
   Profile
  </p>
  <p class="grid-item text3322167">
   About
  </p>
  <p class="grid-item text3322168">
   Contacts
  </p>
 </div>
 <p class="grid-item text3322189">
  Events Nearby
 </p>
 <div class="grid-item container3322201">
  <div class="grid-item container3322202" v-on:click="gotoHomePage3322202()">
   <div class="grid-item container3322203">
    <img alt="container3322204" class="grid-item container3322204" src="/Vector3322204.svg"/>
   </div>
   <p class="grid-item text3322205">
    Home
   </p>
  </div>
  <div class="grid-item container3322206" v-on:click="gotoEventsPage3322206()">
   <div class="grid-item container3322207">
    <img alt="container3322208" class="grid-item container3322208" src="/Vector3322208.svg"/>
   </div>
   <p class="grid-item text3322209">
    Events
   </p>
  </div>
  <div class="grid-item container3322210">
   <div class="grid-item container3322211">
    <img alt="container3322212" class="grid-item container3322212" src="/Vector3322212.svg"/>
   </div>
   <p class="grid-item text3322213">
    Podcasts
   </p>
  </div>
  <div class="grid-item container3322214">
   <div class="grid-item container3322215">
    <img alt="container3322216" class="grid-item container3322216" src="/Vector3322216.svg"/>
   </div>
   <p class="grid-item text3322217">
    Playlists
   </p>
  </div>
 </div>
 <div class="grid-item container3322271">
  <img :src="object3322271.atr3322259" alt="container3322259" class="grid-item container3322259"/>
  <p class="grid-item text3322265">
   {{object3322271.atr3322265}}
  </p>
  <p class="grid-item text3322266">
   {{object3322271.atr3322266}}
  </p>
  <p class="grid-item text3322267">
   {{object3322271.atr3322267}}
  </p>
  <p class="grid-item text3322268">
   {{object3322271.atr3322268}}
  </p>
  <p class="grid-item text3322269">
   {{object3322271.atr3322269}}
  </p>
 </div>
 <div class="grid-item container3322272">
  <p class="grid-item text3322274">
   {{object3322272.atr3322274}}
  </p>
  <p class="grid-item text3322275">
   {{object3322272.atr3322275}}
  </p>
  <p class="grid-item text3322276">
   {{object3322272.atr3322276}}
  </p>
  <p class="grid-item text3322277">
   {{object3322272.atr3322277}}
  </p>
  <p class="grid-item text3322278">
   {{object3322272.atr3322278}}
  </p>
  <img :src="object3322272.atr3322262" alt="container3322262" class="grid-item container3322262"/>
 </div>
 <div class="grid-item rectangle332451">
  <p class="grid-item text332452">
   SUBSCRIBE
  </p>
  <div class="grid-item container332454">
   <div class="grid-item container332455">
    <img alt="container332456" class="grid-item container332456" src="/Vector332456.svg"/>
    <img alt="container332457" class="grid-item container332457" src="/Ellipse1990332457.svg"/>
   </div>
  </div>
 </div>
 <Variantframe838 :componentprops="selectedClass333115" :variant="currentVariant333115" @mouseleave="changeToDefault333115" @mouseover="changeToHovered333115"></Variantframe838>
</div>

</template>

<script>
import Variantframe838 from '@/components/Variantframe838.vue';
export default {
    components:{
        Variantframe838
    },
    data(){
        return {
            inputsearch3322165:"",
            componentclass3320156:"grid-item-3320156 component3320156",
            componentclass3194139:"grid-item-3194139 component3194139",
            componentclass333115:"grid-item-333115 component333115",
            selectedClass333115:'',
            currentVariant333115:'',                
            dataObjects:[],
            object3322271:{'atr3322259': '/imagem23322259.png', 'atr3322265': 'Karaoke Party', 'atr3322266': 'SEP', 'atr3322267': '10', 'atr3322268': '7:00 PM', 'atr3322269': 'Braga, Portugal'},
            object3322272:{'atr3322274': 'Friday Night Dance Party', 'atr3322275': 'SEP', 'atr3322276': '26', 'atr3322277': '9:00 PM', 'atr3322278': 'Braga, Portugal', 'atr3322262': '/imagem33322262.png'}    
        }
    },
    methods:{
        gotoHomePage3322202(){
            this.$router.push({path:"/homepage"});
        },
        gotoEventsPage3322206(){
            this.$router.push({path:"/eventspage"});
        },
		changeToHovered333115(){
                this.selectedClass333115=this.componentclass3194139;
                this.currentVariant333115= 'hovertrue'
    		},
		changeToDefault333115(){
            this.selectedClass333115=this.componentclass333115;
            this.currentVariant333115= 'hoverfalse'
		}
	},mounted(){
          this.selectedClass333115 = this.componentclass333115;
          this.currentVariant333115 = 'hoverfalse';
	}
}
</script>
<style lang="css" scoped>
@import '../assets/eventspage.css';
</style>