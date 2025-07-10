<template>
<div>
 <img alt="container3320144" class="grid-item-3320159 container3320144" src="/inline_image_preview13320144.png"/>
 <div class="grid-item-3320159 container3320149">
  <p class="grid-item-3320159 text3320150">
   Record label &amp; Music streaming
  </p>
  <p class="grid-item-3320159 text3320151">
   The standard chunk of Lorem Ipsum used since the 1500s is reproduced  below for those interested. Sections 1.10.32 and 1.10.33 from "de  Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.
  </p>
  <div class="grid-item-3320159 container3320152">
   <p class="grid-item-3320159 text3320155">
    Buy Now
   </p>
  </div>
  <Variantframe838 :componentprops="selectedClass333115" :variant="currentVariant333115" @mouseleave="changeToDefault333115" @mouseover="changeToHovered333115" @openoverlay319414031862963="openOverlay3194140_31862963"></Variantframe838>
 </div>
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
        componentclass3320156:"grid-item-3320156 component3320156",
            componentclass3194139:"grid-item-3194139 component3194139",
            selectedClass3320156:'',
            currentVariant3320156:'',
            componentclass333115:"grid-item-333115 component333115",
            selectedClass333115:'',
            currentVariant333115:''   
        }
    },
    methods:{
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
		}
	},mounted(){
          this.selectedClass333115 = this.componentclass333115;
          this.currentVariant333115 = 'hoverfalse';
	}
}
</script>
<style lang="css" scoped>
@import '../assets/frame846.css';
</style>