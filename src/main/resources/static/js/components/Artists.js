import Albums from './Albums'
import ArtistComments from './ArtistComments'

export default function Artists(artists) {
    return `
      <ul id="artists" class="grid-list">
        ${artists.map(artist => {
        return `
                <li id="artist" class="grid-list--item">
                  <div class="grid-item-container">
                    <img class="grid-image btn-artist" src="${artist.artistImage}" alt="Artist Image">
                    <h3 class="item-name">${artist.artistName}</h3>
                  </div>

                  <div id ="artist-modal" class="hidden modal">
                    <div class="modal-content">
                      <div class="modal-content--header">
                        <img class="model--header-image" src="${artist.artistImage}" alt="Artist Image">
                        <h2>${artist.artistName}</h2>
                        <ul>
                          <li>Artist Rating: ${artist.artistRating}/10</li>
                          <li>Albums: ${artist.albums.length}</li>
                          <li class="artistCommentOn">Comments</li>
                          <li class="artistCommentOff hidden">Close Comments</li>
                        </ul>
                      </div>
                      <div class="modal-content--body albums">${Albums(artist.albums)}</div>
                      <div class="modal-content--body comments hidden">${ArtistComments(artist.artistComments)}</div>
                    </div>
                  </div>
                </li>
            `;
    }).join('')}
    </ul>
    <section class="add-artist">
    <input class= "add-artist__artistName" type = "text" placeholder= "Artist Name">
    <input class= "add-artist__artistImage" type = "text" placeholder= "Artist Image">
    <input class= "add-artist__artistRating" type = "text" placeholder= "Artist Rating">
    <input class= "add-artist__tag" type = "text" placeholder= "Add a Tag">
    <button class="add-artist__submit">Submit</button>
    </section>

    <section class="add-tag">
    <input class= "add-tag__tag" type = "text" placeholder= "Add a New Tag">
    <button class="add-tag__submit">Submit</button>
    </section>

    <section class="add-song">
    <input class= "add-song__songTitle" type = "text" placeholder= "Song name">
    <input class= "add-song__album" type = "text" placeholder= "Album Name">
    <input class= "add-song__duration" type = "text" placeholder= "Song Duration">
    <input class= "add-song__songRating" type = "text" placeholder= "Song Rating">
    <input class= "add-song__tag" type = "text" placeholder= "Tag">
    <button class="add-song__submit">Submit</button>
    </section>
  `;
}