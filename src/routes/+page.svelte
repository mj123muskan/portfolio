<script>
  import Hexagon from "$lib/Components/Hexagon.svelte";
  let category1 = ["EXPERIENCE", "PROJECTS", "SKILLS"];
  let category2 = ["EDUCATION", "HOBBIES"];
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container">
  <div class="introduction">
    <div class="name">Muskan Jain</div>
    <div class="designation">Software Development Engineer</div>
    <div class="description">Hi I am Muskan, Software Development Engineer with a proven track record in Backend, Frontend, and Data technologies</div>
  </div>
  <div class="items">
    <div class="category1">
      {#each category1 as category}
        <Hexagon text={category} />
      {/each}
    </div>

    <div class="category2">
      {#each category2 as category}
        <Hexagon text={category} />
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 40px 40px;
  }

  .introduction {
    flex: 1;
    /* border: 1px solid yellow; */
    flex-direction: column;
    display: flex;
  }

  .items {
    flex: 1;
    /* border: 1px solid rgb(47, 168, 170); */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
   
  }

  .name {
    /* flex: 1; */
    /* border: 1px solid rgb(174, 120, 135); */
    font-weight: bold;
    color: aliceblue;
    font-family: 'Open Sans', sans-serif;
    font-size: 50px;
   
  }
  .designation {
    /* flex: 1; */
    font-weight:lighter;
    color: aliceblue;
    font-family: 'Open Sans', sans-serif;
    font-size: 40px;
    /* border: 1px solid rgb(159, 63, 19); */
    margin-top: 15px;
  }
  .description {
    font-weight:lighter;
    color: aliceblue;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    width: 50%;
    /* border: 1px solid rgb(159, 63, 19); */
    margin-top: 15px;
  }

  .category1{
    /* flex: 1; */
    /* border: 1px solid rgb(159, 63, 19); */
    display: flex;
    align-items: center;
  }
  .category2{
    /* flex: 1; */
    /* border: 1px solid rgb(159, 63, 19); */
    display: flex;
    align-items: center;
    margin-top: -40px;
  }
</style>
