<template >
    <component :is="selectedComponent" :class="componentprops" :key="variant"></component>
</template>
  
<script>
import Percent0statedefault from '@/components/Percent0statedefault.vue';
import Percent0stateactive from '@/components/Percent0stateactive.vue';
import Percent100stateactive from '@/components/Percent100stateactive.vue';
import Percent100statedefault from '@/components/Percent100statedefault.vue';

const componentsMap = {
percent0statedefault:Percent0statedefault,
percent0stateactive:Percent0stateactive,
percent100stateactive:Percent100stateactive,
percent100statedefault:Percent100statedefault};
export default {
    props: {
      variant: {
        type: String,
        required: true,
        validator: (value) => [
            'percent0statedefault',
            'percent0stateactive',
            'percent100stateactive',
            'percent100statedefault'].includes(value),
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
    