<template>
<div class="grid-container">
 <Frame828 class="grid-item-29565 component29565"></Frame828>
 <div class="grid-item container2965179">
  <p class="grid-item text296512">
   Rate Us
  </p>
  <v-rating :length="5" :model-value="starsSeletec2965158" :size="25" class="srating2965158" half-increments="" hover="">
  </v-rating>
 </div>
 <img alt="container29618" class="grid-item container29618" src="/Semtítulo129618.png"/>
 <Popup @close-from29531690-to29531688="show29531688=false" class="grid-item-29531688 component29531688" v-if="show29531688"></Popup>
 <div class="grid-item ellipse29649" v-on:click="changeVisibility29531688()">
  <p class="grid-item text296410">
   CLICK ME!
  </p>
 </div>
 <div :style="{
                    cursor: isDragging ? 'grabbing' : 'grab',
                    scrollSnapType: isDragging ? '' : '',
            }" @mousedown="onMouseDown2965182" @mouseup="onMouseUp2965182" class="scroll-wrapper2965182" ref="ref2965182">
  <div class="grid-item container2965182">
   <div class="grid-item container2965188">
    <p class="grid-item text2965197">
     Item 1
    </p>
   </div>
   <div class="grid-item container2965191">
    <p class="grid-item text2965200">
     Item 2
    </p>
   </div>
   <div class="grid-item container2965195">
    <p class="grid-item text2965204">
     Item 5
    </p>
   </div>
   <div class="grid-item container2965189">
    <p class="grid-item text2965198">
     Item 3
    </p>
   </div>
   <div class="grid-item container2965194">
    <p class="grid-item text2965202">
     Item 4
    </p>
   </div>
  </div>
 </div>
</div>

</template>

<script>
import Popup from '@/components/Popup.vue';
import Frame828 from '@/components/Frame828.vue';
export default {
    components:{
        Popup,
        Frame828
    },
    data(){
        return {
            starsSeletec2965158:"0",
            show29531688:false,
            isDragging:false,
            cursorPos:[0, 0]    
                
        }
    },
    methods:{
		changeVisibility29531688(){
            this.show29531688 = true;
            
        },
        onMouseDown2965182(ev){
            this.cursorPos = [ev.pageX, ev.pageY];
            this.isDragging = true;

            window.addEventListener("mousemove", this.onMouseHold2965182);
        },
        onMouseUp2965182(ev){
            window.removeEventListener("mousemove", this.onMouseHold2965182);
            this.isDragging = false;
        },
        onMouseHold2965182(ev){
            ev.preventDefault();

            requestAnimationFrame(() => {
                    const delta = [ev.pageX - this.cursorPos[0], ev.pageY - this.cursorPos[1]];

                    this.cursorPos = [ev.pageX, ev.pageY];

                    if (!this.$refs.ref2965182) return;
                    this.$refs.ref2965182.scrollBy({
                    left: -delta[0]});
            });
        }
	},mounted(){
          window.addEventListener("mouseup", this.onMouseUp2965182);
	},destroyed(){
          window.removeEventListener("mouseup", this.onMouseUp2965182);
	}
}
</script>
<style lang="css" scoped>
@import '../assets/principalpage.css';
</style>