<template>
    <footer :style="footerStyle">
        <div id="FooterBrandContainer">
            <h2>{{footerBrand}}</h2>
        </div>
        <div v-for="footerItem in footerItems" :key="footerItem.title">
            <h3>{{footerItem.title}}</h3>
            <a v-for="titleitem in footerItem.titleItems" :key="titleitem.titleUrlName" :href="titleitem.titleurl">{{titleitem.titleUrlName}}</a>     
        </div>
    </footer>
</template>

<script lang="ts">

import { defineComponent } from 'vue'


export default defineComponent({
  name: 'FooterComponent',
  props: {
        footerBrand: {
          type: String,
          default: "Brand"
        },
        footerItems: {
          type: Array,
          default: []
        },
        footerBackgroundColor: {
          type: String,
          default: "white"
        },
        footerPadding: {
          type: String,
          default: "7%"
        },
        footerBrandFontFamily: {
          type: String,
          default: "Montserrat"
        },
        footerBrandFontWeight: {
          type: String,
          default: "800"
        },
        footerBrandFontSize: {
          type: String,
          default: "2.0vw"
        },
        footerBrandFontColor: {
          type: String,
          default: "#E94146"
        },
        footerItemTitleFontFamily: {
          type: String,
          default: "Montserrat"
        },
        footerItemTitleFontWeight: {
          type: String,
          default: "800"
        },
        footerItemTitleFontSize: {
          type: String,
          default: "1.0vw"
        },
        footerItemTitleFontColor: {
          type: String,
          default: "#E94146"
        },
        footerItemFontFamily: {
          type: String,
          default: "Fira Sans"
        },
        footerItemFontWeight: {
          type: String,
          default: "400"
        },
        footerItemFontSize: {
          type: String,
          default: "2.0vh"
        },
        footerItemFontColor: {
          type: String,
          default: "#E94146"
        },
        footerItemLineHeight: {
          type: String,
          default: "3.5vh"
        },
        footerItemPadding: {
          type: String,
          default: "0 0 2vh 0"
        },
        footerItemLetterSpacing: {
          type: String,
          default: "1.3px"
        },
  },
  computed: {
      footerStyle(): object {
          return {
              '--footer-background-color': this.footerBackgroundColor,
              '--footer-padding': this.footerPadding,
              '--footer-brand-font-family': this.footerBrandFontFamily,
              '--footer-brand-font-weight': this.footerBrandFontWeight,
              '--footer-brand-font-size': this.footerBrandFontSize,
              '--footer-brand-font-color': this.footerBrandFontColor,
              '--footer-item-title-font-family': this.footerItemTitleFontFamily,
              '--footer-item-title-font-weight': this.footerItemTitleFontWeight,
              '--footer-item-title-font-size': this.footerItemTitleFontSize,
              '--footer-item-title-font-color': this.footerItemTitleFontColor,
              '--footer-item-font-family': this.footerItemFontFamily,
              '--footer-item-font-weight': this.footerItemFontWeight,
              '--footer-item-font-size': this.footerItemFontSize,
              '--footer-item-font-color': this.footerItemFontColor,
              '--footer-item-padding': this.footerItemPadding,
              '--footer-item-line-height': this.footerItemLineHeight,
              '--footer-item-letter-spacing': this.footerItemLetterSpacing,
          }
      }
  },
})

</script>

<style lang="scss" scoped>

footer {
    display: flex;
    justify-content: space-around;
    background-color: var(--footer-background-color);
    padding: var(--footer-padding);

    h2 {
        margin: 0;
        font-family: var(--footer-brand-font-family);
        font-weight: var(--footer-brand-font-weight);
        font-size: var(--footer-brand-font-size);
        color: var(--footer-brand-font-color);
    }

    h3 {
        font-family: var(--footer-item-title-font-family);
        font-weight: var(--footer-item-title-font-weight);
        font-size: var(--footer-item-title-font-size);
        color: var(--footer-item-title-font-color);
    }

    a {
        text-decoration: none;
        color:var(--footer-item-font-color);
        display: block;
        padding: var(--footer-item-padding);
        font-family: var(--footer-item-font-family);
        letter-spacing: var(--footer-item-letter-spacing);
        line-height: var(--footer-item-line-height);
        font-size: var(--footer-item-font-size);
    }
}

</style>