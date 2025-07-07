<template>
<div>
 <Variantheader :componentprops="selectedClass228099" :variant="currentVariant228099" @click="changeVariant228099"></Variantheader>
 <div class="grid-item-228098 container2280100">
  <Itemslist class="grid-item-2280101 component2280101"></Itemslist>
 </div>
 <div class="grid-item-228098 rectangle2280102">
 </div>
</div>

</template>
    
<script>
import Iconsregularchevronups from '@/components/Iconsregularchevronups.vue';
import Label1 from '@/components/Label1.vue';
import Label3 from '@/components/Label3.vue';
import Itemslist from '@/components/Itemslist.vue';
import Label4 from '@/components/Label4.vue';
import Variantitemhover from '@/components/Variantitemhover.vue';
import Menulabel from '@/components/Menulabel.vue';
import Label2 from '@/components/Label2.vue';
import Variantheader from '@/components/Variantheader.vue';
import Iconsregularplus from '@/components/Iconsregularplus.vue';
import Iconsregularchevrondowns from '@/components/Iconsregularchevrondowns.vue';
import Label5 from '@/components/Label5.vue';
export default {
    components:{
        Iconsregularchevronups,
        Label1,
        Label3,
        Itemslist,
        Label4,
        Variantitemhover,
        Menulabel,
        Label2,
        Variantheader,
        Iconsregularplus,
        Iconsregularchevrondowns,
        Label5
    },
    data(){
        return {
           
        }
    },
    methods:{
		changeVariant228099(){
        if(this.selectedClass228099==this.componentclass228099){
                this.selectedClass228099=this.componentclass2280130;
                this.currentVariant228099= 'stateclosedl3'
		}
        else if(this.selectedClass228099==this.componentclass2280130){
                this.selectedClass228099=this.componentclass228098;
                this.currentVariant228099= 'stateopenedl3'
		}},
,
		changeToDefault207283(){
            this.selectedClass207283=this.componentclass207283;
            this.currentVariant207283= 'itemhover'
		},
		changeVariant207283(){
        if(this.selectedClass207283==this.componentclass207283){
                this.selectedClass207283=this.componentclass2280122;
                this.currentVariant207283= 'stateclosedl1'
		}
        else if(this.selectedClass207283==this.componentclass2280122){
                this.selectedClass207283=this.componentclass2280108;
                this.currentVariant207283= 'stateopenedl1'
		}},
		changeToDefault207284(){
            this.selectedClass207284=this.componentclass207284;
            this.currentVariant207284= 'itemhover'
		},
		changeVariant207284(){
        if(this.selectedClass207284==this.componentclass207284){
                this.selectedClass207284=this.componentclass2280126;
                this.currentVariant207284= 'stateclosedl2'
		}
        else if(this.selectedClass207284==this.componentclass2280126){
                this.selectedClass207284=this.componentclass2280103;
                this.currentVariant207284= 'stateopenedl2'
		}},
		changeToDefault207285(){
            this.selectedClass207285=this.componentclass207285;
            this.currentVariant207285= 'itemhover'
		},
		changeVariant207285(){
        if(this.selectedClass207285==this.componentclass207285){
                this.selectedClass207285=this.componentclass2280130;
                this.currentVariant207285= 'stateclosedl3'
		}
        else if(this.selectedClass207285==this.componentclass2280130){
                this.selectedClass207285=this.componentclass228098;
                this.currentVariant207285= 'stateopenedl3'
		}},
		changeToDefault207286(){
            this.selectedClass207286=this.componentclass207286;
            this.currentVariant207286= 'itemhover'
		},
		changeVariant207286(){
        if(this.selectedClass207286==this.componentclass207286){
                this.selectedClass207286=this.componentclass2280134;
                this.currentVariant207286= 'stateclosedl4'
		}
        else if(this.selectedClass207286==this.componentclass2280134){
                this.selectedClass207286=this.componentclass228093;
                this.currentVariant207286= 'stateopenedl4'
		}},
		changeToDefault207287(){
            this.selectedClass207287=this.componentclass207287;
            this.currentVariant207287= 'itemhover'
		},
		changeVariant207287(){
        if(this.selectedClass207287==this.componentclass207287){
                this.selectedClass207287=this.componentclass2280138;
                this.currentVariant207287= 'stateclosedl5'
		}
        else if(this.selectedClass207287==this.componentclass2280138){
                this.selectedClass207287=this.componentclass228088;
                this.currentVariant207287= 'stateopenedl5'
		}}
	},mounted(){
          this.selectedClass228099 = this.componentclass228099;
          this.currentVariant228099 = 'header';

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
@import '../assets/stateopenedl3.css';
</style>