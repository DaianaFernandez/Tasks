const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.send("test");
});


function translate(word) {
    if ( word == "hello") {
      return "hola";
    }
    else if ( word == "foo") {
      return "bar";
    }
    else {
        return "error";
    }

  }

  console.log(translate("hello"));


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});