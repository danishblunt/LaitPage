<template>
  <button :style="btnStyle">{{btnText}}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseButtonComponent',
  props: {
      btnText: {
          type: String,
          required: true,
          default: "BUTTON"
      },
      btnColor: {
          type: String,
          default: "#e94146"
      },
      btnWidth: {
          type: String,
          default: "11.5vw"
      },
      btnHeight: {
          type: String,
          default: "3.5vw"
      },
      btnFontSize: {
          type: String,
          default: "0.7vw"
      },
      btnBorder: {
          type: String,
          default: "0"
      },
      btnFontColor: {
          type: String,
          default: "white"
      },
      btnFamily: {
          type: String,
          default: "Montserrat"
      },
      btnFontWeight: {
          type: String,
          default: "bold"
      }

  },
  computed: {
      btnStyle(): object {
          return{
              '--background-color': this.btnColor,
              '--btn-width': this.btnWidth,
              '--btn-height': this.btnHeight,
              '--btn-font-size': this.btnFontSize,
              '--btn-border': this.btnBorder,
              '--btn-font-color': this.btnFontColor,
              '--btn-family': this.btnFamily,
              '--btn-font-weight': this.btnFontWeight
          }
      }
  },
})

</script>

<style lang="scss" scoped>
button{
    background-color: var(--background-color);
    border: var(--btn-border);
    height: var(--btn-height);
    width: var(--btn-width);
    font-size: var(--btn-font-size);
    color:var(--btn-font-color);
    font-family: var(--btn-family);
    font-weight: var(--btn-font-weight);
}
</style>