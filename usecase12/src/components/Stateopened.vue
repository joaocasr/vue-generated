<template>
<div>
 <Variantheader :componentprops="selectedClass2280114" :variant="currentVariant2280114" @click="changeVariant2280114"></Variantheader>
 <div class="grid-item-2280113 container2280115">
  <Itemslist class="grid-item-2280116 component2280116"></Itemslist>
 </div>
 <div @dragstart="goto2280117()" class="grid-item-2280113 rectangle2280117" draggable="true">
 </div>
</div>

</template>
    
<script>
import Iconsregularplus from '@/components/Iconsregularplus.vue';
import Menulabel from '@/components/Menulabel.vue';
import Itemslist from '@/components/Itemslist.vue';
import Label5 from '@/components/Label5.vue';
import Label3 from '@/components/Label3.vue';
import Variantheader from '@/components/Variantheader.vue';
import Variantitemhover from '@/components/Variantitemhover.vue';
import Label2 from '@/components/Label2.vue';
import Iconsregularchevrondowns from '@/components/Iconsregularchevrondowns.vue';
import Label4 from '@/components/Label4.vue';
import Iconsregularchevronups from '@/components/Iconsregularchevronups.vue';
import Label1 from '@/components/Label1.vue';
export default {
    components:{
        Iconsregularplus,
        Menulabel,
        Itemslist,
        Label5,
        Label3,
        Variantheader,
        Variantitemhover,
        Label2,
        Iconsregularchevrondowns,
        Label4,
        Iconsregularchevronups,
        Label1
    },
    data(){
        return {
           
        }
    },
    methods:{
		changeVariant2280114(){
        if(this.selectedClass2280114==this.componentclass2280114){
                this.selectedClass2280114=this.componentclass2280118;
                this.currentVariant2280114= 'stateclosed'
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
		}},
        goto2280117(){
            this.$router.push({path:"/"});
        }
	},mounted(){
          this.selectedClass2280114 = this.componentclass2280114;
          this.currentVariant2280114 = 'header';

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
@import '../assets/stateopened.css';
</style>