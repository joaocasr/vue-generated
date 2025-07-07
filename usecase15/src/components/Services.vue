<template>
<div>
 <Variantgroup1000005938 :componentprops="selectedClass1201441" :variant="currentVariant1201441"></Variantgroup1000005938>
 <Iconsecure class="grid-item-1201442 component1201442"></Iconsecure>
</div>

</template>
    
<script>
import Iconsecure from '@/components/Iconsecure.vue';
import Variantgroup1000005938 from '@/components/Variantgroup1000005938.vue';
export default {
    components:{
        Iconsecure,
        Variantgroup1000005938
    },
    data(){
        return {
           
        }
    },
    mounted(){
          this.selectedClass1201441 = this.componentclass1201441;
          this.currentVariant1201441 = 'group1000005938';
	}
}
</script>
<style lang="css" scoped>
@import '../assets/services.css';
</style>