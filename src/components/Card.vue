<template>
    <div class="ItemContainer" v-for="cardItem in cardItems" :key="cardItem.id" :style="cardStyle"> 
        <img class="CardImage" :src="cardItem.img" :alt="cardItem.type" />
        <h2>{{cardItem.type}}</h2>
        <a href="/">LÆS MERE <img :src="RedArrow" alt="Proceed arrow next"/></a> 
    </div>
</template>

<script lang="ts">

import RedArrow from '../assets/images/arrow_red.png'
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'CardComponent',
  props: {
        cardItems: {
          type: Array,
          required: true,
          default: []
        },
        cardWidth: {
          type: String,
          default: "100%"
        },
        itemContainerPadding: {
          type: String,
          default: "0 0 5% 0%"
        },
        itemContainerTitleFontFamily: {
          type: String,
          default: "Montserrat"
        },
          itemContainerTitleFontSize: {
          type: String,
          default: "2.0vw"
        },
          itemContainerTitleLineHeight: {
          type: String,
          default: "1.8vw"
        },
          itemContainerTitleFontWeight: {
          type: String,
          default: "800"
        },
          itemContainerTitleColor: {
          type: String,
          default: "#E94146"
        },
          itemContainerUrlFontFamily: {
          type: String,
          default: "Montserrat"
        },
          itemContainerUrlFontSize: {
          type: String,
          default: "0.7vw"
        },
          itemContainerUrlLineHeight: {
          type: String,
          default: "0.8vw"
        },
          itemContainerUrlFontWeight: {
          type: String,
          default: "800"
        },
          itemContainerUrlColor: {
          type: String,
          default: "#E94146"
        },
  },
  computed: {
      cardStyle(): object {
          return {
              '--card-width': this.cardWidth,
              '--item-container-padding': this.itemContainerPadding,
              '--item-container-title-font-family': this.itemContainerTitleFontFamily,
              '--item-container-title-font-size': this.itemContainerTitleFontSize,
              '--item-container-title-font-weight': this.itemContainerTitleLineHeight,
              '--item-container-title-line-height': this.itemContainerTitleFontWeight,
              '--item-container-title-color': this.itemContainerTitleColor,
              '--item-container-url-font-family': this.itemContainerUrlFontFamily,
              '--item-container-url-font-size': this.itemContainerUrlFontSize,
              '--item-container-url-font-weight': this.itemContainerUrlFontWeight,
              '--item-container-url-line-height': this.itemContainerUrlLineHeight,
              '--item-container-url-color': this.itemContainerUrlColor,
          }
      }
  },
  data: () => {
    return {
        RedArrow: RedArrow,
      }
  }
})

</script>

<style lang="scss" scoped>
.ItemContainer{

    h2{
        font-family: var(--item-container-title-font-family);
        font-size: var(--item-container-title-font-weight);
        line-height: var(--item-container-title-font-size);
        font-weight: var(--item-container-title-line-height);
        color:var(--item-container-title-color);
    }

    a {
        font-size: var(--item-container-url-font-size);
        line-height: var(--item-container-url-line-height);
        font-family: var(--item-container-url-font-family);
        font-weight: var(--item-container-url-font-weight);
        color: var(--item-container-url-color);
        text-decoration: none;
    }
    padding: var(--item-container-padding);

}

.CardImage {
    width: var(--card-width);
    height: auto;
}
</style>