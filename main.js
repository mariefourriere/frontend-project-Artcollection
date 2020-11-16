const startswithU = []
for (let element of collection) {
    if (element.title.match('U')) {
        startswithU.push(element)
    }

}





// // removes the HTML of cards for the first section
document.querySelector("section").innerHTML = "";

// adding the section and search bar
const section = document.querySelector('section');

const navsection = document.createElement('nav');

const columns = document.createElement('div');
columns.className = 'columns is-multiline';

const searchBar = document.createElement('div');
searchBar.className = 'field fieldsize pb-6 control has-icons-left';

const inputSearch = document.createElement('input');
inputSearch.className = 'input has-text-white has-background-black is-rounded';


const holdIcon = document.createElement('span');
holdIcon.className = 'icon is-small is-left';

const iconSearch = document.createElement('i');
iconSearch.className = "fas fa-search";


section.appendChild(columns);
navsection.appendChild(searchBar);
searchBar.appendChild(inputSearch);
inputSearch.appendChild(holdIcon);
holdIcon.appendChild(iconSearch);


// Sorting 





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

    for (let tag of element.category) {
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