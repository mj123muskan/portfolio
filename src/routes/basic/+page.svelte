<script lang="ts">
  import Contact from "$lib/Components/Contact.svelte";
  import Education from "$lib/Components/Education.svelte";
  import Experience from "$lib/Components/Experience.svelte";
  import Profile from "$lib/Components/Profile.svelte";
  import Skills from "$lib/Components/Skills.svelte";
  import SocialProfiles from "$lib/Components/SocialProfiles.svelte";
</script>

<div class="container">
  <div class="left-column">
    <Profile/>
    <Skills />
    <Education />
    <SocialProfiles />
    <Contact/>
  </div>
  <div class="right-column">
    <Experience />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .left-column {
    flex: 3;
    background-color: #04114a;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: scroll;
  }

  .left-column::-webkit-scrollbar {
    display: none;
  }

  .right-column::-webkit-scrollbar {
    display: none;
  }

  .right-column {
    flex: 7;
    background-color: rgb(228, 219, 219);
    height: 100vh;
    overflow: scroll;
    padding: 40px;
    box-sizing: border-box;
  }
</style>
