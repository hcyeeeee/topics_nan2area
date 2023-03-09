/* eslint-disable */
<template>
  <div id="app">



    <HelloWorld />
    <ReReason />
    <CandIntro />
    <HotNews />
    <HotVideo />
    <ShareIcon />
  </div>
</template>

<script>
import ReReason from './components/ReReason.vue'
import HelloWorld from './components/HelloWorld.vue'
import CandIntro from './components/CandIntro.vue'
import HotNews from './components/HotNews.vue'
// eslint-disable-next-line
import HotVideo from './components/HotVideo.vue'
import ShareIcon from './components/ShareIcon.vue'
export default {
  name: 'App',
  components: {

    HelloWorld,
    ReReason,
    CandIntro,
    HotNews,
    HotVideo,
    ShareIcon
  }
}
</script>

<style>
#app {
  text-align: center;
  overflow: hidden;
}

.nav-link {
  color: black !important;
  padding: .5rem 1rem !important;
  font-size: 1rem !important;
  background: #f4f4f4 !important;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 100px;
  border: 0px;
  margin: 0.5rem;
}

.nav-link:hover {
  padding: 1rem 2rem;
  color: white !important;
  background: #ff8400 !important;

}

.nav-link:active {
  color: white !important;
  padding: 1rem 2rem;
  background: #ff8400 !important;

}

.nav {
  display: flex !important;
  justify-content: center !important;

}


.p {
  color: #3F3F3F;
  margin-bottom: 0;
}
</style>


