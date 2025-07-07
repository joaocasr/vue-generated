<template>
<div>
 <Variantheader :componentprops="selectedClass2280131" :variant="currentVariant2280131" @click="changeVariant2280131"></Variantheader>
 <div class="grid-item-2280130 container2280132">
  <Itemslist class="grid-item-2280133 component2280133"></Itemslist>
 </div>
</div>

</template>
    
<script>
import Variantheader from '@/components/Variantheader.vue';
import Itemslist from '@/components/Itemslist.vue';
import Label3 from '@/components/Label3.vue';
import Label4 from '@/components/Label4.vue';
import Label2 from '@/components/Label2.vue';
import Iconsregularplus from '@/components/Iconsregularplus.vue';
import Variantitemhover from '@/components/Variantitemhover.vue';
import Label1 from '@/components/Label1.vue';
import Iconsregularchevrondowns from '@/components/Iconsregularchevrondowns.vue';
import Menulabel from '@/components/Menulabel.vue';
import Label5 from '@/components/Label5.vue';
export default {
    components:{
        Variantheader,
        Itemslist,
        Label3,
        Label4,
        Label2,
        Iconsregularplus,
        Variantitemhover,
        Label1,
        Iconsregularchevrondowns,
        Menulabel,
        Label5
    },
    data(){
        return {
           
        }
    },
    methods:{
		changeVariant2280131(){
        if(this.selectedClass2280131==this.componentclass2280131){
                this.selectedClass2280131=this.componentclass228098;
                this.currentVariant2280131= 'stateopenedl3'
		}},
,
		changeToDefault207283(){
            this.selectedClass207283=this.componentclass207283;
            this.currentVariant207283= 'itemhover'
		},
		changeToDefault207284(){
            this.selectedClass207284=this.componentclass207284;
            this.currentVariant207284= 'itemhover'
		},
		changeToDefault207285(){
            this.selectedClass207285=this.componentclass207285;
            this.currentVariant207285= 'itemhover'
		},
		changeToDefault207286(){
            this.selectedClass207286=this.componentclass207286;
            this.currentVariant207286= 'itemhover'
		},
		changeToDefault207287(){
            this.selectedClass207287=this.componentclass207287;
            this.currentVariant207287= 'itemhover'
		}
	},mounted(){
          this.selectedClass2280131 = this.componentclass2280131;
          this.currentVariant2280131 = 'header';

          this.selectedClass207283 = this.componentclass207283;
          this.currentVariant207283 = 'itemhover';

          this.selectedClass207284 = this.componentclass207284;
          this.currentVariant207284 = 'itemhover';

          this.selectedClass207285 = this.componentclass207285;
          this.currentVariant207285 = 'itemhover';

          this.selectedClass207286 = this.componentclass207286;
          this.currentVariant207286 = 'itemhover';

          this.selectedClass207287 = this.componentclass207287;
          this.currentVariant207287 = 'itemhover';
	}
}
</script>
<style lang="css" scoped>
@import '../assets/stateclosedl3.css';
</style>