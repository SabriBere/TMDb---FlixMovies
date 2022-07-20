

const favorites = [{ id: 2, code: 157336, title: 'Interstellar', ovwerview: null, imagen: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
{ id: 3, code: 274285, title: 'Sector 4: Extraction', ovwerview: null, imagen: '/52HibuY7ynRne1vPABNn9Fv44eO.jpg' },
{ id: 4, code: 2538, title: 'Hi, Are You Alone?', ovwerview: null, imagen: '/vAeqRXgYrCJF9LkC4dEQRI0N5s4.jpg' },
/* { id: 1, code: 2538, title: 'Hi, Are You Alone?', ovwerview: null, imagen: null } */]

favorites.map((fav, i) => fav.imagen !==  null)
favorites.filter((fav, i) => fav.imagen)

