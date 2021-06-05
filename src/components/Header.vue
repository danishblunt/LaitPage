<template>
  <div id="HeaderContainer">
    <img :src="HeaderImage" alt="Alpha Hotels Header"/>
    <navigation :routerItems="routerItems" />
    <div id="IntroTextContainer"> 
      <header-intro-text-content :headline-text="headerIntroText"/>
    </div>
    <custom-button :btn-text="btnText" />
  </div>
</template>

<script lang="ts">

import CustomButton from '../components/BaseButton.vue'
import HeaderIntroTextContent from './HeadlineText.vue'
import Navigation from '../components/Navigation.vue'
import { defineComponent } from 'vue'



export default defineComponent({
  name: 'HeaderComponent',
    props: {
        btnText: {
          type: String,
          default: "Button"
        },
        headerIntroText: {
          type: String,
          default: "Intro Text"
        },
        HeaderImage: {
          type: String,
          default: "/"
        },
        routerItems: {
          type: Array,
          default: []
        },
  },
  components: {
    CustomButton,
    HeaderIntroTextContent,
    Navigation
  },
})

</script>

<style scoped>
#HeaderContainer {
  width: 100%;
  position: relative;
}

#IntroTextContainer {
  position: absolute;
  top: 32%;
  left: 22%;
}

img {
  width: 100%;
}

button {
  position: absolute;
  top: 77%;
  left: 22%;
}

nav{
  position: absolute;
  top: 0;
  left: 0;
}

</style>
