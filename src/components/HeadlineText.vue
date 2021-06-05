<template>  
    <div class="HeadlineContainer" :style="HeadlineContainerStyle">
      <h1 :style="HeadlineFontStyle">
        {{headlineText}}
      </h1>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue'


export default defineComponent({
  name: 'HeadlineText',
  props: {
      headlineText: {
          type: String,
          required: true,
          default: "I am a headline text"
      },
      headlineWidth: {
          type: String,
          default: "50%"
      },
      headlineHeight: {
          type: String,
          default: "auto"
      },
      headlineColor: {
          type: String,
          default: "white"
      },
      headlineFontFamily: {
          type: String,
          default: "Montserrat"
      },
      headlineFontWeight: {
          type: String,
          default: "bold"
      },
      headlineFontSize: {
          type: String,
          default: "5.4vw"
      },
  },
  computed: {
      HeadlineContainerStyle(): object {
          return {
              '--headline-width': this.headlineWidth,
              '--headline-height': this.headlineHeight,
          }
      },
      HeadlineFontStyle(): object {
          return{
              '--headline-color': this.headlineColor,
              '--headline-font-family': this.headlineFontFamily,
              '--headline-font-weight': this.headlineFontWeight,
              '--headline-font-size': this.headlineFontSize,
          }
      }
  },
})

</script>

<style lang="scss" scoped>
.HeadlineContainer {
    width: var(--headline-width);
    height: var(--headline-height);
}

h1 {
    color: var(--headline-color);
    font-family: var(--headline-font-family);
    font-weight: var(--headline-font-weight);
    font-size: var(--headline-font-size);
}
</style>