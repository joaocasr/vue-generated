<template>
<div class="grid-container">
 <Variantcategoryphone :componentprops="selectedClass2811228" :variant="currentVariant2811228" @mouseleave="changeToDefault2811228" @mouseover="changeToHovered2811228"></Variantcategoryphone>
</div>

</template>

<script>
import Variantcategoryphone from '@/components/Variantcategoryphone.vue';
export default {
    components:{
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
            selectedClass2811228:'',
            currentVariant2811228:''    
                
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
		}
	},mounted(){
          this.selectedClass2811228 = this.componentclass2811228;
          this.currentVariant2811228 = 'categoryphonephonehoverno';
	}
}
</script>
<style lang="css" scoped>
@import '../assets/homepage.css';
</style>