<script lang="ts">
  import type { Experience } from "$lib/types/Types";
  import ExperienceItem from "./ExperienceItem.svelte";
  export let experiences: Experience[] = [
    {
      companyName: "Simpl Technologies",
      designation: "Software Development Engineer",
      duration: "October 2023 - Present",
      companyIconUrl: "simpl.png",
      works: [
        {
          subteam: "Tachyon (One Click Checkout)",
          projects: [
            "Working on building one click payment checkout for D2C brands.",
            "As a backend developer, building in-house coupons",
            "Developed APIs for generating and validating coupons, uploading card bins and phone number csv files to AWS S3 using presigned URL in Golang",
            "Also, added custom file validation logic, added APIs to download files, generate unique filename etc.",
          ],
        },
      ],
    },
    {
      companyName: "Juspay Technologies",
      designation: "Associate Software Development Engineer",
      duration: "September 2020 - October 2023",
      companyIconUrl: "juspay.png",
      works: [
        {
          subteam: "Breeze (One Click Checkout)",
          projects: [
            "Designed a well typed, scalable logging system with support of transporting logs to multiple consumers in multiple formats like Google protobuf, JSON etc.",
            "Designed and implemented all components of ETL based Data pipeline. Built a custom sessionizer to extract and transform raw data and load it into Database. Added APIs to extract data and built custom dashboards",
            "Built a middleware library which stores data in asynchronous context for passing data like requestId, sessionId etc to server. Added support to fetch data from request headers, body, url params.",
            "Implemented Card Device Tokenization as per RBI guidelines",
            "Implemented cross merchant VPA sharing",
            "Added APIs for Merchant Onboarding Automation to seamlessly onboard merchants on breeze.",
            "Worked as weekly scrum master. Also, managed a team of 7 people",
            "Connected and on boarded merchants like Royce Chocolates, Snitch, Beyours, Provenance gifts on Breeze.",
          ],
        },
        {
          subteam: "Payment Page",
          projects: [
            "Developed cross-platform features like Surcharge, Food cards, Gift Cards",
            "Wrote components while developing cross platform ui components library and added configurations to cater a wide range of design requirements",
            "Generated production ready SDKs for merchants like VI, Ixigo, Truefan, Okcredit and went on developer support calls to help them on integration related issues.",
            "Played a crucial role in development of an internal product integration tool and made it scalable to integrate with multiple microapps.",
            "Created a Storybook.js like application using which the component library can be tested with different permutations of configurations and the same configuration can be used to theme the entire product.",
            "Worked closely for hiring new folks by taking interviews and help them in onboarding and mentoring",
          ],
        },
      ],
    },
    {
      companyName: "Amazon",
      designation: "Software Development Engineer Intern",
      duration: "February 2020 - July 2020",
      companyIconUrl: "amazon.png",
      works: [
        {
          subteam: null,
          projects: [
            "Developed a generic SQS poller which polls messages from different queues and processes messages according to different use cases.",
            "Designed an end to end solution for a web tool in Java -Spring boot.",
            "Config migration from static to dynamic environment."
          ],
        },
      ],
    },
  ];
</script>

<div class="container">
  <div class="experience">
    <div class="title">Experience</div>
    <div class="content">
      <ExperienceItem {experiences}></ExperienceItem>
    </div>
  </div>
</div>

<style>
  .experience {
    color: rgb(63, 63, 77);
    text-align: left;
    font-size: 40px;
  }
  .title {
    font-weight: bold;
    font-size: 40px;
    margin-left: 20px;
  }
  .content {
    display: flex;
  }
</style>
