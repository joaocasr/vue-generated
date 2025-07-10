<template >
    <component :is="selectedComponent" :class="componentprops" :key="variant"></component>
</template>
  
<script>
import Hoverfalse from '@/components/Hoverfalse.vue';
import Hovertrue from '@/components/Hovertrue.vue';

const componentsMap = {
hoverfalse:Hoverfalse,
hovertrue:Hovertrue};
export default {
    props: {
      variant: {
        type: String,
        required: true,
        validator: (value) => [
            'hoverfalse',
            'hovertrue'].includes(value),
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
    