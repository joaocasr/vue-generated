<template >
    <component :is="selectedComponent" :class="componentprops" :key="variant"></component>
</template>
  
<script>
import Categoryphonephonehoverno from '@/components/Categoryphonephonehoverno.vue';
import Categoryphonephonehoveryes from '@/components/Categoryphonephonehoveryes.vue';
import Categoryphonecomputerhoverno from '@/components/Categoryphonecomputerhoverno.vue';
import Categoryphonecomputerhoveryes from '@/components/Categoryphonecomputerhoveryes.vue';
import Categoryphonesmartwatchhoverno from '@/components/Categoryphonesmartwatchhoverno.vue';
import Categoryphonesmartwatchhoveryes from '@/components/Categoryphonesmartwatchhoveryes.vue';
import Categoryphonecamerahoverno from '@/components/Categoryphonecamerahoverno.vue';
import Categoryphonecamerahoveryes from '@/components/Categoryphonecamerahoveryes.vue';
import Categoryphoneheadphonehoverno from '@/components/Categoryphoneheadphonehoverno.vue';
import Categoryphoneheadphonehoveryes from '@/components/Categoryphoneheadphonehoveryes.vue';
import Categoryphonegaminghoverno from '@/components/Categoryphonegaminghoverno.vue';
import Categoryphonegaminghoveryes from '@/components/Categoryphonegaminghoveryes.vue';

const componentsMap = {
categoryphonephonehoverno:Categoryphonephonehoverno,
categoryphonephonehoveryes:Categoryphonephonehoveryes,
categoryphonecomputerhoverno:Categoryphonecomputerhoverno,
categoryphonecomputerhoveryes:Categoryphonecomputerhoveryes,
categoryphonesmartwatchhoverno:Categoryphonesmartwatchhoverno,
categoryphonesmartwatchhoveryes:Categoryphonesmartwatchhoveryes,
categoryphonecamerahoverno:Categoryphonecamerahoverno,
categoryphonecamerahoveryes:Categoryphonecamerahoveryes,
categoryphoneheadphonehoverno:Categoryphoneheadphonehoverno,
categoryphoneheadphonehoveryes:Categoryphoneheadphonehoveryes,
categoryphonegaminghoverno:Categoryphonegaminghoverno,
categoryphonegaminghoveryes:Categoryphonegaminghoveryes};
export default {
    props: {
      variant: {
        type: String,
        required: true,
        validator: (value) => [
            'categoryphonephonehoverno',
            'categoryphonephonehoveryes',
            'categoryphonecomputerhoverno',
            'categoryphonecomputerhoveryes',
            'categoryphonesmartwatchhoverno',
            'categoryphonesmartwatchhoveryes',
            'categoryphonecamerahoverno',
            'categoryphonecamerahoveryes',
            'categoryphoneheadphonehoverno',
            'categoryphoneheadphonehoveryes',
            'categoryphonegaminghoverno',
            'categoryphonegaminghoveryes'].includes(value),
      },
      componentprops: {
        type: String,
        required: true,
        default: '',
      },
    },
    computed: {
      selectedComponent() {
        return componentsMap[this.variant];
      },
    }
  };
  </script>
    