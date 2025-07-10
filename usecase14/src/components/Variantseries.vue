<template >
    <component :is="selectedComponent" :class="componentprops" :key="variant"></component>
</template>
  
<script>
import Seriesserieshoverno from '@/components/Seriesserieshoverno.vue';
import Seriesserieshoveryes from '@/components/Seriesserieshoveryes.vue';

const componentsMap = {
seriesserieshoverno:Seriesserieshoverno,
seriesserieshoveryes:Seriesserieshoveryes};
export default {
    props: {
      variant: {
        type: String,
        required: true,
        validator: (value) => [
            'seriesserieshoverno',
            'seriesserieshoveryes'].includes(value),
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
    