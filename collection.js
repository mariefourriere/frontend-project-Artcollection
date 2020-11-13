const collection = [{
    title: 'Unknown',
    artist: 'Lillian Bassans',
    category: [{
      name: 'Photography',
      style: 'tag has-background-grey-dark has-text-light has-text-weight-medium has-text-weight-medium'
    }],
    image: './img/LillianBassan.jpg',
    link: 'http://www.artnet.com/artists/lillian-bassman',
    description: 'Lillian Bassman was a famed American fashion photographer renowned for her work at Harper’s Bazaar magazine. Bassman’s hallmark images are high-contrast black-and-white images of society women, actresses, and models from the 1950s and 1960s—especially of contemporary top model Barbara Mullen, who was her muse.'
  },
  {
    title: 'Three forms, 1935',
    artist: 'Barbara Hepworth',
    category: [{
        name: 'Sculpture',
        style: 'tag has-background-grey has-text-light has-text-weight-medium has-text-weight-medium m-3'
      },
      {
        name: 'Marble',
        style: 'tag has-background-grey-light has-text-grey-dark has-text-weight-medium has-text-weight-medium m-3'
      }
    ],
    image: './img/BarbaraHepworth.jpg',
    link: 'http://barbarahepworth.org.uk',
    description: '"Carving is interrelated masses conveying an emotion; a perfect relationship between the mind and the colour, light and weight which is the stone, made by the hand which feels. It must be so essentially sculpture that it can exist in no other way, something completely the right size but which has growth, something still and yet having movement, so very quiet and yet with a real vitality."_(B.Hepworth)_ '
  },
  {
    title: 'Sleeping Muse, 1910',
    artist: 'Constantin Brancusi',
    category: [{
        name: 'Sculpture',
        style: 'tag has-background-grey has-text-light has-text-weight-medium has-text-weight-medium m-3'
      },
      {
        name: 'Marble',
        style: 'tag has-background-grey-light has-text-grey-dark has-text-weight-medium has-text-weight-medium m-3'
      }
    ],
    image: './img/Brancusi.jpg',
    link: 'https://www.bozar.be/fr/activities/150143-brancusi',
    description: 'What is real is not the external form, but the essence of things... it is impossible for anyone to express anything essentially real by imitating its exterior surface._(C.Brancusi)_ '
  },
  {
    title: 'Draped reclining Mother and Baby 1983',
    artist: 'Henry Moore',
    category: [{
        name: 'Sculpture',
        style: 'tag has-background-grey has-text-light has-text-weight-medium has-text-weight-medium m-3'
      },
      {
        name: 'Bronze',
        style: 'tag has-background-light has-text-grey-dark has-text-weight-medium has-text-weight-medium m-3'
      }
    ],
    image: './img/Burberry.jpg',
    link: 'https://www.henry-moore.org/#',
    description: 'Moore wrote: ‘There are three fundamental poses of the human figure. One is standing, the other is seated, and the third is lying down… But of all the three poses, the reclining figure gives me the most freedom compositionally and spatially.’_(H. Moore)_ This sculpture was part of a collaboration with the fashion Burberry House'
  },
  {
    title: 'La femme au violon, 1911',
    artist: 'Pablo Picasso',
    category: [{
      name: 'Painting',
      style: 'tag has-background-grey-light has-text-black has-text-weight-medium has-text-weight-medium m-3'
    },
  ],
    image: './img/Picasso.jpg',
    link: 'https://www.museepicassoparis.fr/fr',
    description: 'Painting is a blind man\'s profession. He paints not what he sees, but what he feels, what he tells himself about what he has seen. _(P.Picasso)_'
  },
  {
    title: 'Fall Fathom Five, 1947',
    artist: 'Jackson Pollock',
    category: [{
      name: 'Painting',
      style: 'tag has-background-grey-light has-text-black has-text-weight-medium has-text-weight-medium m-3'
    },
  ],
    image: './img/Pollock.jpg',
    link: 'http://jacksonpollock.org/',
    description: 'Something in me knows where I’m going, and - well, painting is a state of being. ... Painting is self-discovery. Every good artist paints what he is. _(J.Pollock)_'
  },
  {
    title: 'Femme dans la nuit, 1973',
    artist: 'Joan Miro',
    category: [{
      name: 'Painting',
      style: 'tag has-background-grey-light has-text-black has-text-weight-medium has-text-weight-medium m-3'
    },
  ],
    image: './img/Miro.jpg',
    link: 'https://www.fmirobcn.org/en/',
    description: 'You can look at a picture for a week and never think of it again. You can also look at the picture for a second and think of it all your life. _(J.Miro)_'
  },
  {
    title: 'Margiela Coat',
    artist: 'Benjamin Shine',
    category: [{
      name: 'Sculpture',
      style: 'tag has-background-grey has-text-light has-text-weight-medium has-text-weight-medium m-3'
    },
  ],
    image: './img/BenjaminShine.jpg',
    link: 'https://www.benjaminshine.com/',
    description: 'Created in collaboration with John Galliano for Maison Margiela, black tulle lining from inside the white trench coat escapes from the back seam, flowing around the body to reveal an intricately formed face. Constructed via the process of hand-sewing, the piece floats over the trench coat so as to move independently. The piece took over 300 hours to make over the course of several months before being shown at Paris Couture Fashion Week. The piece has been purchased by the Metropolitan Museum of Art, New York.'
  },
  {
    title: 'Unknown',
    artist: 'Hom Nguyen',
    category: [{
      name: 'Painting',
      style: 'tag has-background-grey-light has-text-black has-text-weight-medium has-text-weight-medium m-3'
    },
  ],
    image: './img/HomNguyen.jpg',
    link: 'http://www.hom-nguyen.com/',
    description: 'His subtle representations deal with the duality of the visible and the invisible, the material and the immaterial. Thus, Hom Nguyen pushes each of us to a reflection, an introspection, on what we show of ourselves, what we are trying to hide and what we really are.'
  },
  {
    title: 'Untitled',
    artist: 'Mark Rothko',
    category: [{
      name: 'Painting',
      style: 'tag has-background-grey-light has-text-black has-text-weight-medium has-text-weight-medium m-3'
    },
  ],
    image: './img/MarkRothko.jpg',
    link: 'http://www.markrothko.org',
    description: 'The most interesting painting is one that expresses more of what one thinks than of what one sees. _(M.Rothko)_'
  },

]

// // removes the HTML of cards for the first section
document.querySelector("section").innerHTML = "";

const section = document.querySelector('section');

const columns = document.createElement('div');
columns.className = 'columns is-multiline';

section.appendChild(columns);



for (let element of collection) {

  const column = document.createElement('div');
  column.className = 'column is-one-quarter pt-6 pb-2';

  const card = document.createElement('div');
  card.className = 'card';

  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';

  const figure = document.createElement('figure');
  figure.className = 'image has-ratio';

  const imageFigure = document.createElement('img');
  imageFigure.src = element.image;

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content has-background-black';

  const contentTags = document.createElement('span');
  
  const media = document.createElement('div');
  contentTags.className = 'media';

  const mediaLeft = document.createElement('div');
  mediaLeft.className = 'media-left';

  const mediaContent = document.createElement('div');
  mediaContent.className = 'media-content';

  const title = document.createElement('p');
  title.className = 'title is-5  has-text-grey-light';
  title.textContent = element.title;

  const artist = document.createElement('p');
  artist.className = 'subtitle is-6  has-text-light';
  artist.textContent = element.artist;

  const description = document.createElement('p');
  description.className = 'content has-text-grey-light has-text-weight';
  description.textContent = element.description;

  const hr = document.createElement('hr');
  hr.className = 'my-hr';

  const contentIcon = document.createElement('div');
  contentIcon.className = 'content';

  const icon = document.createElement('span');
  icon.className = 'icon';

  const iconLink = document.createElement('a');
  iconLink.setAttribute('href', element.link);
  iconLink.target = '_blank';


  const iconSymbol = document.createElement('i');
  iconSymbol.className = 'fas fa-info-circle fa-2x';
  iconSymbol.style.color = '#4A4A4A';

  for (let tag of element.category){
    const Tag1 = document.createElement('span');
    Tag1.innerText = tag.name
    Tag1.className = tag.style
  
    contentTags.appendChild(Tag1);
  
  }


  columns.appendChild(column);
  column.appendChild(card);
  card.appendChild(cardImage);
  cardImage.appendChild(figure);
  figure.appendChild(imageFigure);
  card.appendChild(cardContent);
  cardContent.appendChild(contentTags);
  cardContent.appendChild(media);
  media.appendChild(mediaLeft);
  mediaLeft.appendChild(mediaContent);
  media.appendChild(title);
  media.appendChild(artist);
  media.appendChild(description);
  description.appendChild(hr);
  cardContent.appendChild(contentIcon);
  contentIcon.appendChild(icon);
  icon.appendChild(iconLink);
  iconLink.appendChild(iconSymbol);

}