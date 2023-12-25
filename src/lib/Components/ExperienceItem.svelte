<script lang="ts">
  import type {Experience} from '../types/Types';

  export let experiences: Experience[];
</script>

<div class="container">
  {#each experiences as { companyName, designation, companyIconUrl, duration, works }}
    <div class="company-info"> 
      <img src={companyIconUrl} alt="Company Icon" class="company-icon" />
      <div class="companyName">{companyName+ " "}</div>
    </div>

    <div class="designation">{designation}</div>
    <div class="duration">{duration}</div>
    {#if works.length > 0}
      <div class="works">
        {#each works as work}
          {#if work.subteam != null}
            <div class="subteam">{work.subteam}</div>
          {/if}
          <ul>
            {#each work.projects as project}
              <li>{project}</li>
            {/each}
          </ul>
        {/each}
      </div>
    {/if}
  {/each}
</div>

<style>
  .container {
    color: rgb(63, 63, 77);
    text-align: left;
    padding: 20px;
  }

  .company-info {
    display: flex;
    align-items: center;
  }

  .company-icon {
    width: 80px;
    object-fit: cover;
    margin-right: 10px;
  }

  .companyName {
    font-weight: 600;
    font-size: 24px;
  }

  .designation {
    font-weight: 400;
    font-size: 18px;
    font-style: italic;
  }

  .duration {
    font-size: 12px;
    margin-bottom: 8px;
  }

  .subteam {
    font-size: 16px;
    font-weight: 600;
  }

  ul {
    margin: 16px 0px;
    padding: 0px 20px;
  }

  li {
    font-size: 14px;
    margin: 8px 0px;
  }
</style>
