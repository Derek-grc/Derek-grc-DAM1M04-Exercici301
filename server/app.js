app.get('/', (req, res) => {
  const siteData = readJSON('site.json');
  res.render('index', siteData);
});

app.get('/informe', (req, res) => {
  const siteData = readJSON('site.json');
  const citiesData = readJSON('cities.json');
  const countriesData = readJSON('countries.json');
  
  const data = {
    title: siteData.title,
    cities: citiesData.cities,
    countries: countriesData.countries
  };
  
  res.render('informe', data);
});

hbs.registerHelper('lte', function(a, b) {
  return a <= b;
});