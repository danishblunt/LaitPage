<template>
  <header-component :btnText="btnText" :headerIntroText="headerIntroText" :HeaderImage="HeaderImage" :routerItems="routerItems" />
  <div id="ContentContainer">
    <intro-section :section-content-link="introSectionData" :section-content-title="sectionIntroTitle" :section-content="sectionIntroContent"/>
  </div>
  <div id="CardContainer">
    <card :cardItems="roomItems.slice(0,4)" cardLinkTitle="LÆS MERE"/>
  </div>
  <div id="AboutSectionContainer">
    <about-section :sectionContent="aboutSectionContent" :spacing="true" :sectionContentLink="aboutSectionUrl" />
  </div>
  <div id="FooterContainer">
    <footer-component :footerItems="footerItems" />
  </div>
</template>

<script lang="ts">
import HeaderComponent from '../components/Header.vue'
import IntroSection from '../components/BaseSection.vue'
import Card from '../components/Card.vue'
import AboutSection from '../components/BaseSection.vue'
import FooterComponent from '../components/Footer.vue'
import HeaderImage from '../assets/images/header.jpg'
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'Home',
  components: {
      HeaderComponent,
      IntroSection,
      Card,
      AboutSection,
      FooterComponent,
  },
  // Methods for Home view
  methods: {
    // fetching data from API
    async fetchRooms() {
      const res = await fetch('https://5dd653dfce4c3000144036d1.mockapi.io/rooms')
      const data = await res.json()
      return data
    },
  },
  data: () => {
    return {
        // Defining variables
        introSectionData: {url: "/", urlname: ""},
        sectionIntroTitle: "OM ALPHA",
        sectionIntroContent: "Alpha Hotels er Odenses nyeste hotel beliggende i hjertet af Odense C. Hotellet åbner officielt dørende for gæster i vinter 2020. \n \nHotellet tilbyder 390 helt nyrenoverede værelser, en smuk ny café og en fredfyldt grøn gårdhave åben for hotellets gæster, lokale og forbipasserende. Cafeen og gårdhaven er indrettet til at få alle til at føle sig velkomne uanset anledningen.",
        HeaderImage: HeaderImage,
        btnText: "BOOK VÆRELSE",
        headerIntroText: "Nyt Hotel i centrum af Odense",
        routerItems: [] as Array<object>,
        roomItems: [] as Array<object>,
        footerItems: [] as Array<object>,
        aboutSectionUrl: {
          url: "/",
          urlname: "SE ALLE VÆRELESER"
        },
        aboutSectionContent: "Omgivet af bøgeskov og med udsigt til fjorden ligger vores smukke hotel - også kaldet 'Slottet i skoven'.\n\nDu kan bestille hotel overnatninger - men ogs¨dejlige spaophold, som på Hotel Alpha ALTID er inklusiv adgang til De Termiske Bade & Thalasso Spa, middag, overnatning og morgenbuffet.",
      }
    },
    async created() {
      // Assign navigation variables to application
      this.routerItems = [
          {
            id: 1,
            urlname: "FORSIDE",
            url: "/"
          },
          {
            id: 2,
            urlname: "VÆRELSER",
            url: "/"
          },
          {
            id: 3,
            urlname: "OM HOTELS",
            url: "/"
          },
          {
            id: 4,
            urlname: "KONTAKT",
            url: "/"
          },
          {
            id: 5,
            urlname: "BOOK",
            url: "/"
          },
      ]

      // fetching data from API for the cards.
      this.roomItems = await this.fetchRooms()

      // Assigning footer data to footerItems variable
      this.footerItems = [
          {
            id: 1,
            title: "Om Os",
            titleItems: [
                {
                    titleUrlName: "Om Alpha Hotels",
                    titleurl: "/"
                },
                {
                    titleUrlName: "Hotel & Spa",
                    titleurl: "/"
                }
            ]
          },
          {
            id: 2,
            title: "Kontakt",
            titleItems: [
                {
                    titleUrlName: "Slotsgade 26",
                    titleurl: "/"
                },
                {
                    titleUrlName: "DK",
                    titleurl: "/"
                }
            ]
          },
          {
            id: 3,
            title: "Social",
            titleItems: [
                {
                    titleUrlName: "Facebook",
                    titleurl: "https://www.facebook.com/"
                },
                {
                    titleUrlName: "Instagram",
                    titleurl: "https://www.instagram.com/"
                }
            ]
          }
      ]
  }
})
</script>

<style>
#ContentContainer {
  padding: 7% 7% 0 7%;
}

#CardContainer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 7% 0 7%;
}

#AboutSectionContainer {
  padding: 0 7% 7% 7%;
}
</style>
