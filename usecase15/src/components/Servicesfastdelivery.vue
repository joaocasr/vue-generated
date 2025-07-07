<template>
<div>
 <Variantservices :componentprops="selectedClass28792936" :variant="currentVariant28792936"></Variantservices>
 <div class="grid-item-28792922 container28792937">
  <p class="grid-item-28792922 text28792938">
   FREE AND FAST DELIVERY
  </p>
  <p class="grid-item-28792922 text28792939">
   Free delivery for all orders over $140
  </p>
 </div>
</div>

</template>
    
<script>
import Variantgroup1000005938 from '@/components/Variantgroup1000005938.vue';
import Variantservices from '@/components/Variantservices.vue';
import Icondelivery from '@/components/Icondelivery.vue';
export default {
    components:{
        Variantgroup1000005938,
        Variantservices,
        Icondelivery
    },
    data(){
        return {
        componentclass28792823:"grid-item-28792823 component28792823",
            componentclass28792831:"grid-item-28792831 component28792831",
            componentclass28792839:"grid-item-28792839 component28792839",
            componentclass28792848:"grid-item-28792848 component28792848",
            componentclass28792857:"grid-item-28792857 component28792857",
            componentclass28792868:"grid-item-28792868 component28792868",
            componentclass28792879:"grid-item-28792879 component28792879",
            componentclass28792885:"grid-item-28792885 component28792885",
            componentclass28792891:"grid-item-28792891 component28792891",
            componentclass28792898:"grid-item-28792898 component28792898",
            componentclass28792905:"grid-item-28792905 component28792905",
            componentclass28792913:"grid-item-28792913 component28792913",
            selectedClass1201421:'',
            currentVariant1201421:'',
            selectedClass28792936:'',
            currentVariant28792936:''   
        }
    },
    mounted(){
          this.selectedClass28792936 = this.componentclass28792936;
          this.currentVariant28792936 = 'services';

          this.selectedClass1201421 = this.componentclass1201421;
          this.currentVariant1201421 = 'group1000005938';
	}
}
</script>
<style lang="css" scoped>
@import '../assets/servicesfastdelivery.css';
</style>