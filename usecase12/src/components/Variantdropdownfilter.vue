<template >
    <component :is="selectedComponent" :class="componentprops" :key="variant"></component>
</template>
  
<script>
import Stateopenedl5 from '@/components/Stateopenedl5.vue';
import Stateopenedl4 from '@/components/Stateopenedl4.vue';
import Stateopenedl3 from '@/components/Stateopenedl3.vue';
import Stateopenedl2 from '@/components/Stateopenedl2.vue';
import Stateopenedl1 from '@/components/Stateopenedl1.vue';
import Stateopened from '@/components/Stateopened.vue';
import Stateclosed from '@/components/Stateclosed.vue';
import Stateclosedl1 from '@/components/Stateclosedl1.vue';
import Stateclosedl2 from '@/components/Stateclosedl2.vue';
import Stateclosedl3 from '@/components/Stateclosedl3.vue';
import Stateclosedl4 from '@/components/Stateclosedl4.vue';
import Stateclosedl5 from '@/components/Stateclosedl5.vue';

const componentsMap = {
stateopenedl5:Stateopenedl5,
stateopenedl4:Stateopenedl4,
stateopenedl3:Stateopenedl3,
stateopenedl2:Stateopenedl2,
stateopenedl1:Stateopenedl1,
stateopened:Stateopened,
stateclosed:Stateclosed,
stateclosedl1:Stateclosedl1,
stateclosedl2:Stateclosedl2,
stateclosedl3:Stateclosedl3,
stateclosedl4:Stateclosedl4,
stateclosedl5:Stateclosedl5};
export default {
    props: {
      variant: {
        type: String,
        required: true,
        validator: (value) => [
            'stateopenedl5',
            'stateopenedl4',
            'stateopenedl3',
            'stateopenedl2',
            'stateopenedl1',
            'stateopened',
            'stateclosed',
            'stateclosedl1',
            'stateclosedl2',
            'stateclosedl3',
            'stateclosedl4',
            'stateclosedl5'].includes(value),
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
    