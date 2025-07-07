<template>
<div class="grid-container">
 <Footer class="grid-item-2735151 component2735151"></Footer>
 <Topheader class="grid-item-2735226 component2735226"></Topheader>
 <Header class="grid-item-2735235 component2735235"></Header>
 <Line3 class="grid-item-2735271 component2735271"></Line3>
</div>

</template>

<script>
import Variantheader from '@/components/Variantheader.vue';
import Variantwishlist from '@/components/Variantwishlist.vue';
import Variantcart1withbuy from '@/components/Variantcart1withbuy.vue';
import Topheader from '@/components/Topheader.vue';
import Variantuser from '@/components/Variantuser.vue';
import Variantsearchcomponentset from '@/components/Variantsearchcomponentset.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Line3 from '@/components/Line3.vue';
export default {
    components:{
        Variantheader,
        Variantwishlist,
        Variantcart1withbuy,
        Topheader,
        Variantuser,
        Variantsearchcomponentset,
        Header,
        Footer,
        Line3
    },
    data(){
        return {
            selectedClass2734735:'',
            currentVariant2734735:'',
            selectedClass2734736:'',
            currentVariant2734736:'',
            selectedClass2734737:'',
            currentVariant2734737:'',
            selectedClass2734738:'',
            currentVariant2734738:'',
            selectedClass2734740:'',
            currentVariant2734740:'',
            selectedClass2734742:'',
            currentVariant2734742:'',
            selectedClass2734743:'',
            currentVariant2734743:'',
            selectedClass2734744:'',
            currentVariant2734744:''    
                
        }
    },
    mounted(){
          this.selectedClass2734735 = this.componentclass2734735;
          this.currentVariant2734735 = 'header';

          this.selectedClass2734736 = this.componentclass2734736;
          this.currentVariant2734736 = 'header';

          this.selectedClass2734737 = this.componentclass2734737;
          this.currentVariant2734737 = 'header';

          this.selectedClass2734738 = this.componentclass2734738;
          this.currentVariant2734738 = 'header';

          this.selectedClass2734740 = this.componentclass2734740;
          this.currentVariant2734740 = 'searchcomponentset';

          this.selectedClass2734742 = this.componentclass2734742;
          this.currentVariant2734742 = 'wishlist';

          this.selectedClass2734743 = this.componentclass2734743;
          this.currentVariant2734743 = 'cart1withbuy';

          this.selectedClass2734744 = this.componentclass2734744;
          this.currentVariant2734744 = 'user';
	}
}
</script>
<style lang="css" scoped>
@import '../assets/homepage.css';
</style>