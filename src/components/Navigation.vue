<template>
<nav>
    <div id="NavContainer" :style="navigationContainerStyle">
        <div id="CompanyName" :style="navigationBrandStyle">
            <h1>alpha hotels</h1>
        </div>

        <div id="Navigation" :style="navigationItemStyle">
          <router-link v-for="routeritem in routerItems" :to="routeritem.url" :key="routeritem.id">{{routeritem.urlname}}</router-link>
        </div>
    </div>
</nav>
</template>

<script lang="ts">

import { defineComponent } from 'vue'


export default defineComponent({
  name: 'Navigation',
  props: {
        navigationWidth: {
          type: String,
          default: "85%"
        },
        navigationBrandColor: {
          type: String,
          default: "white"
        },
        navigationBrandFontFamily: {
          type: String,
          default: "Montserrat"
        },
        navigationBrandFontSize: {
          type: String,
          default: "2.0vw"
        },
        navigationBrandLineHeight: {
          type: String,
          default: "2.1vw"
        },
        navigationItemPadding: {
          type: String,
          default: "20px"
        },
        navigationItemFontSize: {
          type: String,
          default: "0.9vw"
        },
        navigationItemLineHeight: {
          type: String,
          default: "0.9vw"
        },
        navigationItemFontFamily: {
          type: String,
          default: "Montserrat"
        },
        navigationItemColor: {
          type: String,
          default: "#fefefe"
        },
        navigationItemFontWeight: {
          type: String,
          default: "600"
        },
        routerItems: {
            type: Array,
            default: []
        }
  },
  computed: {
      navigationContainerStyle(): object {
        return {
              '--navigation-container-width': this.navigationWidth
          }
      },
      navigationBrandStyle(): object {
        return {
              '--navigation-brand-color': this.navigationBrandColor,
              '--navigation-brand-font-family': this.navigationBrandFontFamily,
              '--navigation-brand-font-size': this.navigationBrandFontSize,
              '--navigation-brand-line-height': this.navigationBrandLineHeight,
          }
      },
      navigationItemStyle(): object {
        return {
              '--navigation-item-padding': this.navigationItemPadding,
              '--navigation-item-font-size': this.navigationItemFontSize,
              '--navigation-item-line-height': this.navigationItemLineHeight,
              '--navigation-item-font-family': this.navigationItemFontFamily,
              '--navigation-item-color': this.navigationItemColor,
              '--navigation-item-font-weight': this.navigationItemFontWeight,
          }
      },
  },
})

</script>

<style lang="scss" scoped>
nav{
    display: flex;
    width: 100%;
    justify-content: center;
}

#NavContainer{
    display: flex;
    justify-content: space-between;
    width: var(--navigation-container-width);

    h1{
        color: var(--navigation-brand-color);
        font-family: var(--navigation-brand-font-family);
        font-size: var(--navigation-brand-font-size);
        line-height: var(--navigation-brand-line-height);
    }
}

#CompanyName {
    justify-content: start;
}

#Navigation {
    align-self: center;

    a{
        padding: var(--navigation-item-padding);
        font-size: var(--navigation-item-font-size);
        line-height: var(--navigation-item-line-height);
        font-family: var(--navigation-item-font-family);
        color: var(--navigation-item-color);
        text-decoration: none;
        font-weight: var(--navigation-item-font-weight);
    }
}

</style>