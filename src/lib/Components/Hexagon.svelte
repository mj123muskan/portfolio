<script lang="ts">
  export let text: string;
  export let size: number = 220;
</script>

<div class="hexagon">
  <div class="icon">
    <svg width="264" height="286" viewBox="0 0 264 286" fill="none" xmlns="http://www.w3.org/2000/svg" style={`height: ${size}px; width: ${size}px;`}>
      <path d="M255.204 67.2314L138.731 3.45939C134.228 0.993735 128.777 1.00252 124.281 3.48267L8.75384 67.222C3.97033 69.8612 1 74.8924 1 80.3557V211.714C1 217.403 4.21929 222.603 9.31236 225.14L124.838 282.682C129.035 284.772 133.969 284.78 138.172 282.702L254.647 225.129C259.762 222.6 263 217.388 263 211.682V80.3883C263 74.9077 260.011 69.8634 255.204 67.2314Z" stroke="white" stroke-width="3"/>
      </svg>
  </div>
  <div class="text">
    {text}
  </div>
</div>

<style>
  .hexagon {
    height: 220px;
    width: 220px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
     transition: ease-in-out 0.2s;
  }

  .hexagon:hover{
    cursor: pointer;
  }


  .hexagon:hover .text{
    color: black;
  }

  .text {
    display: flex;
    position: absolute;
    color:var(--text-color, aliceblue);
  }

.text:hover + .icon svg {
  fill: aliceblue;
}

.icon svg:hover {
  fill: aliceblue;
}


</style>
