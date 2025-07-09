<template >
    <component :is="selectedComponent" :class="componentprops" :key="variant"></component>
</template>
  
<script>
import Moviesmovieshoverno from '@/components/Moviesmovieshoverno.vue';
import Moviesmovieshoveryes from '@/components/Moviesmovieshoveryes.vue';

const componentsMap = {
moviesmovieshoverno:Moviesmovieshoverno,
moviesmovieshoveryes:Moviesmovieshoveryes};
export default {
    props: {
      variant: {
        type: String,
        required: true,
        validator: (value) => [
            'moviesmovieshoverno',
            'moviesmovieshoveryes'].includes(value),
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
    