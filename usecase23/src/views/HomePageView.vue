<template>
<div class="grid-container">
 <Variantcategoryphone :componentprops="selectedClass2811228" :variant="currentVariant2811228" @mouseleave="changeToDefault2811228" @mouseover="changeToHovered2811228"></Variantcategoryphone>
 <Variantcategoryphone :componentprops="selectedClass2830108" :variant="currentVariant2830108" @mouseleave="changeToDefault2830108" @mouseover="changeToHovered2830108"></Variantcategoryphone>
 <Variantframe725 :componentprops="selectedClass285824" :variant="currentVariant285824" @mouseleave="changeToDefault285824" @mouseover="changeToHovered285824" v-on:click="gotoSecondaryPage285720()"></Variantframe725>
 <Variantframe726 :componentprops="selectedClass287324" :variant="currentVariant287324" v-on:click="gotoThirdPage287324()"></Variantframe726>
</div>

</template>

<script>
import Variantframe726 from '@/components/Variantframe726.vue';
import Variantframe725 from '@/components/Variantframe725.vue';
import Variantcategoryphone from '@/components/Variantcategoryphone.vue';
export default {
    components:{
        Variantframe726,
        Variantframe725,
        Variantcategoryphone
    },
    data(){
        return {
            componentclass2811228:"grid-item-2811228 component2811228",
            componentclass281195:"grid-item-281195 component281195",
            componentclass281198:"grid-item-281198 component281198",
            componentclass2811101:"grid-item-2811101 component2811101",
            componentclass2811104:"grid-item-2811104 component2811104",
            componentclass2811107:"grid-item-2811107 component2811107",
            componentclass2811110:"grid-item-2811110 component2811110",
            componentclass2811113:"grid-item-2811113 component2811113",
            componentclass2811116:"grid-item-2811116 component2811116",
            componentclass2811119:"grid-item-2811119 component2811119",
            componentclass2811122:"grid-item-2811122 component2811122",
            componentclass2811125:"grid-item-2811125 component2811125",
            componentclass285718:"grid-item-285718 component285718",
            componentclass285720:"grid-item-285720 component285720",
            componentclass287321:"grid-item-287321 component287321",
            selectedClass2811228:'',
            currentVariant2811228:'',
            componentclass2830108:"grid-item-2830108 component2830108",
            selectedClass2830108:'',
            currentVariant2830108:'',
            componentclass285824:"grid-item-285824 component285824",
            selectedClass285824:'',
            currentVariant285824:'',
            componentclass287324:"grid-item-287324 component287324",
            selectedClass287324:'',
            currentVariant287324:''    
                
        }
    },
    methods:{
		changeToHovered2811228(){
                this.selectedClass2811228=this.componentclass281195;
                this.currentVariant2811228= 'categoryphonephonehoveryes'
    		},
		changeToDefault2811228(){
            this.selectedClass2811228=this.componentclass2811228;
            this.currentVariant2811228= 'categoryphonephonehoverno'
		},
		changeToHovered2830108(){
                this.selectedClass2830108=this.componentclass2811101;
                this.currentVariant2830108= 'categoryphonecomputerhoveryes'
    		},
		changeToDefault2830108(){
            this.selectedClass2830108=this.componentclass2830108;
            this.currentVariant2830108= 'categoryphonecomputerhoverno'
		},
		changeToHovered285824(){
                this.selectedClass285824=this.componentclass285720;
                this.currentVariant285824= 'property1variant2'
    		},
		changeToDefault285824(){
            this.selectedClass285824=this.componentclass285824;
            this.currentVariant285824= 'property1default'
		},
		gotoSecondaryPage285720(){
            if(this.selectedClass285824==this.componentclass285720){
                this.$router.push({path:"/secondarypage"});
            }
    	},
        gotoThirdPage287324(){
            this.$router.push({path:"/thirdpage"});
        }
	},mounted(){
          this.selectedClass2811228 = this.componentclass2811228;
          this.currentVariant2811228 = 'categoryphonephonehoverno';

          this.selectedClass2830108 = this.componentclass2830108;
          this.currentVariant2830108 = 'categoryphonecomputerhoverno';

          this.selectedClass285824 = this.componentclass285824;
          this.currentVariant285824 = 'property1default';

          this.selectedClass287324 = this.componentclass287324;
          this.currentVariant287324 = 'property1default';
	}
}
</script>
<style lang="css" scoped>
@import '../assets/homepage.css';
</style>