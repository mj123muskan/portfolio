<script lang="ts">
  </script>
  
  <div class="container">
    <div class="img"><img src="muskan.jpeg" alt="profile" /></div>
    <div class="title">
      <div class="name">Muskan Jain</div>
      <div class="designation">Software Development Engineer</div>
    </div>
  </div>
  
  <style>
    .container {
      display: flex;
      flex-direction: row;
      padding: 16px;
      border-bottom: .5px dotted grey;
    }
  
    .img {
      flex: 1;
    }
  
    .img img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 25px;
    }
  
    .title {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center; /* Vertically center the content */
    }
  
    .title > * {
      padding: 10px; /* Reduced padding */
    }
  
    .name {
      font-size: 30px;
      color: rgb(160, 169, 177);
      font-weight: bold;
      align-items: center;
      text-align: center;
      margin-bottom: 5px; /* Reduced gap between name and designation */
    }
  
    .designation {
      font-size: 20px;
      color: rgb(160, 169, 177);
      text-align: center; /* Center align the text */
    }
  </style>
  