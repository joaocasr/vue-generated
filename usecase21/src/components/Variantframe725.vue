<template >
    <component :is="selectedComponent" :class="componentprops" :key="variant"></component>
</template>
  
<script>
import Property1default from '@/components/Property1default.vue';
import Property1variant2 from '@/components/Property1variant2.vue';

const componentsMap = {
property1default:Property1default,
property1variant2:Property1variant2};
export default {
    props: {
      variant: {
        type: String,
        required: true,
        validator: (value) => [
            'property1default',
            'property1variant2'].includes(value),
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
    