<template >
    <component :is="selectedComponent" :class="componentprops" :key="variant"></component>
</template>
  
<script>
import Homehomehoverno from '@/components/Homehomehoverno.vue';
import Homehomehoveryes from '@/components/Homehomehoveryes.vue';

const componentsMap = {
homehomehoverno:Homehomehoverno,
homehomehoveryes:Homehomehoveryes};
export default {
    props: {
      variant: {
        type: String,
        required: true,
        validator: (value) => [
            'homehomehoverno',
            'homehomehoveryes'].includes(value),
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
    