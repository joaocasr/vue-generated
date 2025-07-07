<template>
<div>
 <Variantheader :componentprops="selectedClass2280139" :variant="currentVariant2280139" @click="changeVariant2280139"></Variantheader>
 <div class="grid-item-2280138 container2280140">
  <Itemslist class="grid-item-2280141 component2280141"></Itemslist>
 </div>
</div>

</template>
    
<script>
import Iconsregularchevrondowns from '@/components/Iconsregularchevrondowns.vue';
import Variantheader from '@/components/Variantheader.vue';
import Label1 from '@/components/Label1.vue';
import Variantitemhover from '@/components/Variantitemhover.vue';
import Label4 from '@/components/Label4.vue';
import Iconsregularplus from '@/components/Iconsregularplus.vue';
import Label3 from '@/components/Label3.vue';
import Label2 from '@/components/Label2.vue';
import Label5 from '@/components/Label5.vue';
import Menulabel from '@/components/Menulabel.vue';
import Itemslist from '@/components/Itemslist.vue';
export default {
    components:{
        Iconsregularchevrondowns,
        Variantheader,
        Label1,
        Variantitemhover,
        Label4,
        Iconsregularplus,
        Label3,
        Label2,
        Label5,
        Menulabel,
        Itemslist
    },
    data(){
        return {
           
        }
    },
    methods:{
		changeVariant2280139(){
        if(this.selectedClass2280139==this.componentclass2280139){
                this.selectedClass2280139=this.componentclass228088;
                this.currentVariant2280139= 'stateopenedl5'
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
          this.selectedClass2280139 = this.componentclass2280139;
          this.currentVariant2280139 = 'header';

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
@import '../assets/stateclosedl5.css';
</style>