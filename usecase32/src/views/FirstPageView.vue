<template>
<div class="grid-container">
 <Frame845 class="grid-item-31862894 component31862894" v-on:click="changeVisibility3229143()"></Frame845>
 <div class="grid-item container31862895">
  <p class="grid-item text31862896">
   Rate Us
  </p>
  <v-rating :length="5" :model-value="starsSeletec31862897" :size="25" class="srating31862897" half-increments="" hover="">
  </v-rating>
  <img alt="container31862898" class="grid-item container31862898" src="/Semtítulo131862898.png"/>
 </div>
 <div :style="{
                    cursor: isDragging ? 'grabbing' : 'grab',
                    scrollSnapType: isDragging ? '' : '',
            }" @mousedown="onMouseDown31862899" @mouseup="onMouseUp31862899" class="scroll-wrapper31862899" ref="ref31862899">
  <div class="grid-item container31862899">
   <div class="grid-item container31862900" v-on:mouseenter="gotoSecondPage()">
    <p class="grid-item text31862901">
     Item 1
    </p>
   </div>
   <div class="grid-item container31862902" v-on:mouseleave="gotoSecondPage()">
    <p class="grid-item text31862903">
     Item 2
    </p>
   </div>
   <div class="grid-item container31862906" v-on:mousedown="delayedgotoSecondPage()">
    <p class="grid-item text31862907">
     Item 3
    </p>
   </div>
   <div class="grid-item container31862908" v-on:mouseup="gotoSecondPage()">
    <p class="grid-item text31862909">
     Item 4
    </p>
   </div>
   <div class="grid-item container31862904">
    <p class="grid-item text31862905">
     Item 5
    </p>
   </div>
  </div>
 </div>
 <Popup @close-from31862965-to31862963="show31862963=false" class="grid-item-31862963 component31862963" v-if="show31862963"></Popup>
 <div class="grid-item ellipse3194136" v-on:mousedown="changeVisibility31862963()">
  <p class="grid-item text31862913">
   CLICK ME!
  </p>
 </div>
 <Variantframe838 :componentprops="selectedClass3195114" :variant="currentVariant3195114" v-on:click="gotoSecondPage()"></Variantframe838>
 <div class="grid-item container3229152" v-if="showswaped3229152" v-on:click="swap3229152()">
 </div>
 <div class="grid-item container3229143" v-if="showswaped3229143" v-on:click="swap3229143()" v-show="show3229143==true">
 </div>
 <div class="grid-item container3229144" v-if="showswaped3229144" v-on:click="swap3229144()">
 </div>
 <div class="grid-item container3233154" v-if="showswaped3233154">
 </div>
</div>

</template>

<script>
import Popup from '@/components/Popup.vue';
import Variantframe838 from '@/components/Variantframe838.vue';
import Frame845 from '@/components/Frame845.vue';
export default {
    components:{
        Popup,
        Variantframe838,
        Frame845
    },
    data(){
        return {
            show3229143:false,
            showswaped3229144:false,
            show3229144:false,
            showswaped3229143:false,
            starsSeletec31862897:"2",
            isDragging:false,
            cursorPos:[0, 0],
            animationName:"",
            show31862963:false,
            componentclass3195114:"grid-item-3195114 component3195114",
            componentclass3194139:"grid-item-3194139 component3194139",
            selectedClass3195114:'',
            currentVariant3195114:'',
            show3233154:false,
            showswaped3229152:true    
                
        }
    },
    methods:{
        setAnimationName(name){
            this.animationName = name
        },
		changeVisibility3229143(){
            this.show3229143 = true;
            this.showswaped3229143= true

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
        gotoSecondPage(){
            this.$router.push({path:"/secondpage"});
        },
        delayedgotoSecondPage(){
            setTimeout(() => this.gotoSecondPage,2.0)
        },
		changeVisibility31862963(){
            this.show31862963 = true;
            this.setAnimationName('el3194136')

        },
        swap3229152(){
            this.showswaped3229152=!this.showswaped3229152
            this.showswaped3233154=!this.showswaped3233154
        },
        swap3229143(){
            this.showswaped3229143=!this.showswaped3229143
            this.showswaped3229144=!this.showswaped3229144
        },
        swap3229144(){
            this.showswaped3229144=!this.showswaped3229144
            this.showswaped3229143=!this.showswaped3229143
        }
	},mounted(){
          window.addEventListener("mouseup", this.onMouseUp31862899);

          this.selectedClass3195114 = this.componentclass3195114;
          this.currentVariant3195114 = 'hoverfalse';
	},destroyed(){
          window.removeEventListener("mouseup", this.onMouseUp31862899);
	}
}
</script>
<style lang="css" scoped>
@import '../assets/firstpage.css';
</style>