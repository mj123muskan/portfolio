<script lang="ts">
    let startBox: HTMLElement | null;
    let endBox: HTMLElement | null;
  
    function drag(event: DragEvent) {
      const target = event.target as HTMLElement;
      startBox = target;
    }
  
    function dragEnd(event: DragEvent) {
      const target = event.target as HTMLElement;
      endBox = target;
      drawArrow(startBox, endBox);
    }
  
    function drawArrow(startBox: HTMLElement | null, endBox: HTMLElement | null): void {
      const arrow = document.getElementById('arrow');
  
      if (!startBox || !endBox || !arrow) return;
  
      const startRect = startBox.getBoundingClientRect();
      const endRect = endBox.getBoundingClientRect();
  
      const startX = startRect.left + startRect.width / 2;
      const startY = startRect.top + startRect.height / 2;
  
      const endX = endRect.left + endRect.width / 2;
      const endY = endRect.top + endRect.height / 2;
  
      arrow.innerHTML = ''; // Clear previous arrow
  
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', startX.toString());
      line.setAttribute('y1', startY.toString());
      line.setAttribute('x2', endX.toString());
      line.setAttribute('y2', endY.toString());
      line.setAttribute('stroke', 'black');
      line.setAttribute('stroke-width', '2');
  
      arrow.appendChild(line);
    }
  
    function clearArrow() {
      const arrow = document.getElementById('arrow');
      while (arrow && arrow.firstChild) {
        arrow.removeChild(arrow.firstChild);
      }
      drawArrow(document.getElementById('div1'), document.getElementById('div2'));
    }
  </script>
  
  <div id="container">
    <div id="div1" class="box" draggable="true" aria-grabbed="false" on:drag={(e) => drag(e)} on:dragend={(e) => dragEnd(e)}></div>
    <div id="div2" class="box" draggable="true" aria-grabbed="false" on:drag={(e) => drag(e)} on:dragend={(e) => dragEnd(e)}></div>
    <svg id="arrow"></svg>
  </div>
  
  
  