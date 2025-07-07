<template>
<div>
 <Variantservices :componentprops="selectedClass28792926" :variant="currentVariant28792926"></Variantservices>
 <div class="grid-item-28792924 container28792927">
  <p class="grid-item-28792924 text28792928">
   MONEY BACK GUARANTEE
  </p>
  <p class="grid-item-28792924 text28792929">
   We reurn money within 30 days
  </p>
 </div>
</div>

</template>
    
<script>
import Variantgroup1000005938 from '@/components/Variantgroup1000005938.vue';
import Iconsecure from '@/components/Iconsecure.vue';
import Variantservices from '@/components/Variantservices.vue';
export default {
    components:{
        Variantgroup1000005938,
        Iconsecure,
        Variantservices
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
            selectedClass1201441:'',
            currentVariant1201441:'',
            selectedClass28792926:'',
            currentVariant28792926:''   
        }
    },
    mounted(){
          this.selectedClass28792926 = this.componentclass28792926;
          this.currentVariant28792926 = 'services';

          this.selectedClass1201441 = this.componentclass1201441;
          this.currentVariant1201441 = 'group1000005938';
	}
}
</script>
<style lang="css" scoped>
@import '../assets/servicesmoneyback.css';
</style>