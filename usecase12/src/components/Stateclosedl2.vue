<template>
<div>
 <Variantheader :componentprops="selectedClass2280127" :variant="currentVariant2280127" @click="changeVariant2280127"></Variantheader>
 <div class="grid-item-2280126 container2280128">
  <Itemslist class="grid-item-2280129 component2280129"></Itemslist>
 </div>
</div>

</template>
    
<script>
import Variantitemhover from '@/components/Variantitemhover.vue';
import Iconsregularplus from '@/components/Iconsregularplus.vue';
import Label3 from '@/components/Label3.vue';
import Iconsregularchevrondowns from '@/components/Iconsregularchevrondowns.vue';
import Label5 from '@/components/Label5.vue';
import Menulabel from '@/components/Menulabel.vue';
import Variantheader from '@/components/Variantheader.vue';
import Label4 from '@/components/Label4.vue';
import Label1 from '@/components/Label1.vue';
import Itemslist from '@/components/Itemslist.vue';
import Label2 from '@/components/Label2.vue';
export default {
    components:{
        Variantitemhover,
        Iconsregularplus,
        Label3,
        Iconsregularchevrondowns,
        Label5,
        Menulabel,
        Variantheader,
        Label4,
        Label1,
        Itemslist,
        Label2
    },
    data(){
        return {
           
        }
    },
    methods:{
		changeVariant2280127(){
        if(this.selectedClass2280127==this.componentclass2280127){
                this.selectedClass2280127=this.componentclass2280103;
                this.currentVariant2280127= 'stateopenedl2'
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
          this.selectedClass2280127 = this.componentclass2280127;
          this.currentVariant2280127 = 'header';

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
@import '../assets/stateclosedl2.css';
</style>