<template>
<div>
 <Variantheader :componentprops="selectedClass2280123" :variant="currentVariant2280123" @click="changeVariant2280123"></Variantheader>
 <div class="grid-item-2280122 container2280124">
  <Itemslist class="grid-item-2280125 component2280125"></Itemslist>
 </div>
</div>

</template>
    
<script>
import Iconsregularchevrondowns from '@/components/Iconsregularchevrondowns.vue';
import Label3 from '@/components/Label3.vue';
import Menulabel from '@/components/Menulabel.vue';
import Itemslist from '@/components/Itemslist.vue';
import Iconsregularplus from '@/components/Iconsregularplus.vue';
import Label2 from '@/components/Label2.vue';
import Variantheader from '@/components/Variantheader.vue';
import Label4 from '@/components/Label4.vue';
import Label5 from '@/components/Label5.vue';
import Label1 from '@/components/Label1.vue';
import Variantitemhover from '@/components/Variantitemhover.vue';
export default {
    components:{
        Iconsregularchevrondowns,
        Label3,
        Menulabel,
        Itemslist,
        Iconsregularplus,
        Label2,
        Variantheader,
        Label4,
        Label5,
        Label1,
        Variantitemhover
    },
    data(){
        return {
           
        }
    },
    methods:{
		changeVariant2280123(){
        if(this.selectedClass2280123==this.componentclass2280123){
                this.selectedClass2280123=this.componentclass2280108;
                this.currentVariant2280123= 'stateopenedl1'
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
          this.selectedClass2280123 = this.componentclass2280123;
          this.currentVariant2280123 = 'header';

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
@import '../assets/stateclosedl1.css';
</style>