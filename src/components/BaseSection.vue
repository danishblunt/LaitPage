<template>
    <section :style="sectionStyle">
        <div v-if="sectionContentTitle !== ''" class="TitleContainer">
            <h1>{{sectionContentTitle}}</h1>
        </div>
        <div v-if="spacing" class="TitleContainer"></div>
        <div :style="sectionUrlStyle">
            <div class="SectionContent" :style="sectionContentStyle">
                {{sectionContent}} 
            </div>
            <a v-if="sectionContentLink.urlname !== ''" :href="sectionContentLink.url">{{sectionContentLink.urlname}} <img :src="RedArrow" alt="Proceed arrow next"/></a> 
        </div>
    </section>    
</template>

<script lang="ts">

import RedArrow from '../assets/images/arrow_red.png'
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'SectionContent',
  components: {
      RedArrow
  },
  props: {
        sectionContent: {
            type: String,
            required: true,
            default: "Here is some content for our section.",
        },
        sectionContentLink: {
            type: Array,
            default: {
              url: "",
              urlname: "",
          }
        },
        sectionContentTitle: {
            type: String,
            default: "",
        },
        spacing: {
            type: Boolean,
            default: false,
        },
        sectionPadding: {
            type: String,
            default: "15px 15px 40px 15px",
        },
        sectionFontSize: {
            type: String,
            default: "1.1vw",
        },
        sectionLineHeight: {
            type: String,
            default: "2.0vw",
        },
        sectionFontFamily: {
            type: String,
            default: "Fira Sans",
        },
        sectionFontColor: {
            type: String,
            default: "#E94146",
        },
        sectionUrlFontSize: {
            type: String,
            default: "0.7vw",
        },
        sectionUrlLineHeight: {
            type: String,
            default: "0.8vw",
        },
        sectionUrlFontFamily: {
            type: String,
            default: "Montserrat",
        },
        sectionUrlFontWeight: {
            type: String,
            default: "Bold",
        },
        sectionUrlFontColor: {
            type: String,
            default: "#E94146",
        },
        sectionContentWhitespace: {
            type: String,
            default: "break-spaces",
        },
        sectionContentPadding: {
            type: String,
            default: "0 0 8vh 0",
        },
        sectionTitleContainerWidth: {
            type: String,
            default: "70vw",
        },
        sectionTitleFontFamily: {
            type: String,
            default: "Montserrat",
        },
        sectionTitleFontSize: {
            type: String,
            default: "0.8vw",
        },
        sectionTitleLineHeight: {
            type: String,
            default: "0.9vw",
        },
        sectionTitleFontWeight: {
            type: String,
            default: "800",
        },
        sectionTitleLetterSpacing: {
            type: String,
            default: "2.5px",
        },
        sectionContentWidth: {
            type: String,
            default: "150vh",
        },
  },
  data: () => {
    return {
        RedArrow: RedArrow,
      }
  },
  computed: {
      sectionStyle(): object {
          return {
              '--section-padding': this.sectionPadding,
              '--section-font-size': this.sectionFontSize,
              '--section-line-height': this.sectionLineHeight,
              '--section-font-family': this.sectionFontFamily,
              '--section-font-color': this.sectionFontColor,
              '--section-title-container-width': this.sectionTitleContainerWidth,
              '--section-title-font-family': this.sectionTitleFontFamily,
              '--section-title-font-size': this.sectionTitleFontSize,
              '--section-title-line-height': this.sectionTitleLineHeight,
              '--section-title-font-weight': this.sectionTitleFontWeight,
              '--section-title-letter-spacing': this.sectionTitleLetterSpacing,
          }
      },
      sectionUrlStyle(): object {
          return {
              '--section-url-font-size': this.sectionUrlFontSize,
              '--section-url-line-height': this.sectionUrlLineHeight,
              '--section-url-font-family': this.sectionUrlFontFamily,
              '--section-url-font-weight': this.sectionUrlFontWeight,
              '--section-url-font-color': this.sectionUrlFontColor,
          }
      },
      sectionContentStyle(): object {
          return {
              '--section-content-whitespace': this.sectionContentWhitespace,
              '--section-content-padding': this.sectionContentPadding,
              '--section-content-width': this.sectionContentWidth,
          }
      },
  },
})

</script>

<style lang="scss" scoped>
section {
    display: flex;
    padding: var(--section-padding);
    font-size: var(--section-font-size);
    line-height: var(--section-line-height);
    font-family: var(--section-font-family);
    color: var(--section-font-color);
}

a{
    font-size: var(--section-url-font-size);
    line-height: var(--section-url-line-height);
    font-family: var(--section-url-font-family);
    font-weight: var(--section-url-font-weight);
    color: var(--section-url-font-color);
    text-decoration: none;
}

.SectionContent {
    width: var(--section-content-width);
    white-space: var(--section-content-whitespace);
    padding: var(--section-content-padding);
}

.TitleContainer {
    width: var(--section-title-container-width);
    h1{
        font-family: var(--section-title-font-family);
        font-size: var(--section-title-font-size);
        line-height: var(--section-title-line-height);
        font-weight: var(--section-title-font-weight);
        letter-spacing: var(--section-title-letter-spacing);
    }
}
</style>