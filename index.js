const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <style>
          /* Add your CSS styles here */
          h1 {
            color: #0074D9; /* Blue color */
            font-size: 24px;
            background-color:"grey";
            padding: 50px;
            margin-top: 50px;
            margin-left:50px;
            margin-right:50px;
            justify-content:center;
            
            


          }
          hello{
           
          }
        </style>
      </head>
      <body >
      <div class="hello">

        <h1>Hey Developer you have Successfully Published to Docker Hub!</h1>
     </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
