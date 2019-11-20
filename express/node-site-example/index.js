const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

  const superheroes = [
    { id: 1,name: 'SPIDER-MAN', image: 'th.jpg' },
    { id: 2, name: 'CAPTAIN MARVEL', image: 'captain.jpg' },
    { id: 3,name: 'Batman', image: 'batman.jpg' },
  ];


app.get('/', (req, res) => {
   
    res.render('index', { superheroes: superheroes });
  });


  app.get('/superhero/:id', (req, res) => {
    const selectedId = req.params.id;
  
    let selectedSuperhero = superheroes.filter(superhero => {
      return superhero.id === +selectedId;
    });
  
    selectedSuperhero = selectedSuperhero[0];
    
    res.render('superhero', { superheroe: selectedSuperhero });
  });

  // app.get('/superheros/:id', (req, res) => {
  //   const superheroes = superheroes.find(x => {
  //       return x.id === +req.params.id
  //   })
  
  //   res.render('superhero', { superheroes: superheroes });
  // });

  app.post('/superhero', urlencodedParser,(req,res)=>{
    const newId = superheroes[superheroes.length - 1].id + 1;
    const newSuperHero = {
      id: newId, 
      name: req.body.superhero.toUpperCase(), 
      image: 'lukecage.jpg'
    }
    
    superheroes.push(newSuperHero);
    
    res.redirect('/');
  })

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});