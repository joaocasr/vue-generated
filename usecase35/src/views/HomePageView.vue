<template>
<div class="grid-container">
 <Popup @close-from31862965-to31862963="show31862963=false" class="grid-item-31862963 component31862963" v-if="show31862963"></Popup>
 <Frame846 @openoverlay319414031862963="changeVisibility31862963" class="grid-item-3320159 component3320159"></Frame846>
 <div :style="{
                    cursor: isDragging ? 'grabbing' : 'grab',
                    scrollSnapType: isDragging ? '' : '',
            }" @mousedown="onMouseDown31862899" @mouseup="onMouseUp31862899" class="scroll-wrapper31862899" ref="ref31862899">
  <div class="grid-item container31862899">
   <div class="grid-item container3320188" ref="ref3320188">
    <img alt="container3320189" class="grid-item container3320189" src="/album13320189.png"/>
   </div>
   <div class="grid-item container31862902">
    <img alt="container3320173" class="grid-item container3320173" src="/album23320173.png"/>
   </div>
   <div class="grid-item container31862906">
    <img alt="container3320176" class="grid-item container3320176" src="/album33320176.png"/>
   </div>
   <div class="grid-item container31862908">
    <img alt="container3320179" class="grid-item container3320179" src="/album43320179.png"/>
   </div>
   <div class="grid-item container31862904" ref="ref31862904">
    <img alt="container3320182" class="grid-item container3320182" src="/album53320182.png"/>
   </div>
   <div class="grid-item container31862900">
    <img alt="container3320192" class="grid-item container3320192" src="/imagem13320192.png"/>
   </div>
  </div>
 </div>
 <div class="grid-item container3322219">
  <div class="grid-item container3322220">
   <p class="grid-item text3322233">
    Neon Skies &amp; Coffee Highs
   </p>
   <img alt="container3322256" class="grid-item container3322256" src="/summerplaylist13322256.png"/>
  </div>
  <div class="grid-item container3322222">
   <p class="grid-item text3322234">
    Echoes of Nowhere
   </p>
   <img alt="container3322253" class="grid-item container3322253" src="/canvapurplegradientmodern80saesthetictimelesstunesplaylistcoverEs3zqj_4OZs13322253.png"/>
  </div>
  <div class="grid-item container3322224">
   <p class="grid-item text3322236">
    Velvet Static
   </p>
   <img alt="container3322250" class="grid-item container3322250" src="/e2e5b993020a07910b82e8944a94dbbf13322250.png"/>
  </div>
  <div class="grid-item container3322226">
   <p class="grid-item text3322239">
    Sunset Switchboard
   </p>
   <img alt="container3322247" class="grid-item container3322247" src="/images13322247.png"/>
  </div>
  <div class="grid-item container3322228">
   <p class="grid-item text3322241">
    Midnight in Lo-Fi
   </p>
   <img alt="container3322244" class="grid-item container3322244" src="/unnamed13322244.png"/>
  </div>
 </div>
 <div class="grid-item container3320211" v-on:click="scrollTo3320211()">
  <img alt="container3320212" class="grid-item container3320212" src="/union13320212.svg"/>
 </div>
 <p class="grid-item text3320168">
  New Releases
 </p>
 <p class="grid-item text3322199">
  Your playlists
 </p>
 <div class="grid-item container3320207" v-on:click="scrollTo3320207()">
  <img alt="container3320208" class="grid-item container3320208" src="/union13320208.svg"/>
 </div>
 <div class="grid-item container3322124">
  <IconField class="ssearchinputfilter3322126">
   <InputIcon class="pi pi-search">
   </InputIcon>
   <InputText placeholder="Artist, track or podcast" v-model="inputsearch3322126">
   </InputText>
  </IconField>
  <p class="grid-item text3322129">
   Profile
  </p>
  <p class="grid-item text3322130">
   About
  </p>
  <p class="grid-item text3322132">
   Contacts
  </p>
 </div>
 <div class="grid-item container332433">
  <div class="grid-item container332434" v-on:click="gotoHomePage332434()">
   <div class="grid-item container332435">
    <img alt="container332436" class="grid-item container332436" src="/Vector332436.svg"/>
   </div>
   <p class="grid-item text332437">
    Home
   </p>
  </div>
  <div class="grid-item container332438" v-on:click="gotoEventsPage332438()">
   <div class="grid-item container332439">
    <img alt="container332440" class="grid-item container332440" src="/Vector332440.svg"/>
   </div>
   <p class="grid-item text332441">
    Events
   </p>
  </div>
  <div class="grid-item container332442">
   <div class="grid-item container332443">
    <img alt="container332444" class="grid-item container332444" src="/Vector332444.svg"/>
   </div>
   <p class="grid-item text332445">
    Podcasts
   </p>
  </div>
  <div class="grid-item container332446">
   <div class="grid-item container332447">
    <img alt="container332448" class="grid-item container332448" src="/Vector332448.svg"/>
   </div>
   <p class="grid-item text332449">
    Playlists
   </p>
  </div>
 </div>
</div>

</template>

<script>
import Variantframe838 from '@/components/Variantframe838.vue';
import Frame846 from '@/components/Frame846.vue';
import Popup from '@/components/Popup.vue';
export default {
    components:{
        Variantframe838,
        Frame846,
        Popup
    },
    data(){
        return {
            show31862963:false,
            componentclass333115:"grid-item-333115 component333115",
            componentclass3194139:"grid-item-3194139 component3194139",
            selectedClass333115:'',
            currentVariant333115:'',
            isDragging:false,
            cursorPos:[0, 0],
            inputsearch3322126:""    
                
        }
    },
    methods:{
		changeVisibility31862963(){
            this.show31862963 = true;
            
        },
		openOverlay3194140_31862963(){
            this.$emit('openoverlay319414031862963');
        },
		changeToHovered333115(){
                this.selectedClass333115=this.componentclass3194139;
                this.currentVariant333115= 'hovertrue'
    		},
		changeToDefault333115(){
            this.selectedClass333115=this.componentclass333115;
            this.currentVariant333115= 'hoverfalse'
		},
        onMouseDown31862899(ev){
            this.cursorPos = [ev.pageX, ev.pageY];
            this.isDragging = true;

            window.addEventListener("mousemove", this.onMouseHold31862899);
        },
        onMouseUp31862899(ev){
            window.removeEventListener("mousemove", this.onMouseHold31862899);
            this.isDragging = false;
        },
        onMouseHold31862899(ev){
            ev.preventDefault();

            requestAnimationFrame(() => {
                    const delta = [ev.pageX - this.cursorPos[0], ev.pageY - this.cursorPos[1]];

                    this.cursorPos = [ev.pageX, ev.pageY];

                    if (!this.$refs.ref31862899) return;
                    this.$refs.ref31862899.scrollBy({
                    left: -delta[0]});
            });
        },
        scrollTo3320211(){
            this.$refs.ref3320188?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        },
        scrollTo3320207(){
            this.$refs.ref31862904?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        },
        gotoHomePage332434(){
            this.$router.push({path:"/homepage"});
        },
        gotoEventsPage332438(){
            this.$router.push({path:"/eventspage"});
        }
	},mounted(){
          this.selectedClass333115 = this.componentclass333115;
          this.currentVariant333115 = 'hoverfalse';

          window.addEventListener("mouseup", this.onMouseUp31862899);
	},destroyed(){
          window.removeEventListener("mouseup", this.onMouseUp31862899);
	}
}
</script>
<style lang="css" scoped>
@import '../assets/homepage.css';
</style>