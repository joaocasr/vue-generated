<template >
    <component :is="selectedComponent" :class="componentprops" :key="variant"></component>
</template>
  
<script>
import Property1default from '@/components/Property1default.vue';

const componentsMap = {
property1default:Property1default};
export default {
    props: {
      variant: {
        type: String,
        required: true,
        validator: (value) => [
            'property1default'].includes(value),
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
    