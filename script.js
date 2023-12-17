albums = [
    { "artist": "Forest Swords", "title": "Bolted", "genres": "Post-Industrial / Electronic", "spotify": "https://open.spotify.com/intl-fr/album/0BxkPi0ivE10et9zJ576x4", "youtube": "https://music.youtube.com/playlist?list=OLAK5uy_lylG8ivcY6fFLpCtd15NLwDX5HfjTCynQ", "apple": "https://music.apple.com/album/bolted/1700293725", "cover": "forestswordsbolted" },
    { "artist": "Heinali", "title": "Kyiv Eternal", "genres": "Ambient / Field Recordings", "spotify": "https://open.spotify.com/album/1EhYNTo1vAEab5N5DhohYM", "youtube": "https://music.youtube.com/playlist?list=OLAK5uy_nJA7ie5DKbfMpz547lV2vayh8uzgG5bzA", "apple": "https://music.apple.com/album/kyiv-eternal/1658790591", "cover": "heinalikyiveternal" },
    { "artist": "James Blake", "title": "Playing Robots Into Heaven", "genres": "Future Garage / Electronic Dance Music", "spotify": "https://open.spotify.com/album/2ZwNcWl8h9blysDE8i4juL", "youtube": "https://music.youtube.com/playlist?list=OLAK5uy_kLDqXplIq_8uqg77_eyG2pB_VGG5Kg8FI", "apple": "https://music.apple.com/album/playing-robots-into-heaven/1694554543", "cover": "jamesblakeplayingrobotsintoheaven" },
    { "artist": "Karkwa", "title": "Dans la seconde", "genres": "Art Rock / Indie Rock", "spotify": "https://open.spotify.com/album/7HnrrSMdDJHGb3rlvLEqNx", "youtube": "https://music.youtube.com/playlist?list=OLAK5uy_nNZAsKif2JpBC8fMDhBHbTKZTO1WczmAo", "apple": "https://music.apple.com/album/dans-la-seconde/1701383406", "cover": "karkwadanslaseconde" },
    { "artist": "MacGray", "title": "Collapse", "genres": "Deep House", "spotify": "https://open.spotify.com/album/2sAuHTAPOrofiAKFZiq0KA", "youtube": "https://music.youtube.com/playlist?list=OLAK5uy_lQ6RrNriwV3SiWreJZggkcQ7qd__81HpM", "apple": "https://music.apple.com/album/collapse/1677781737", "cover": "macgraycollapse" },
    { "artist": "Oneohtrix Point Never", "title": "Again", "genres": "Progressive Electronic", "spotify": "https://open.spotify.com/album/2zz6j2mGH5JHk0ihNvy6KM", "youtube": "https://music.youtube.com/playlist?list=OLAK5uy_m9cqOsv7YzWC3uGHmfcIDbfZr3hoLRlsY", "apple": "https://music.apple.com/album/again/1701849976", "cover": "oneohtrixpointneveragain" },
    { "artist": "Peter Gabriel", "title": "i/o", "genres": "Art Rock / Art Pop", "spotify": "https://open.spotify.com/album/1mhuLKVEwZH4aTJXCLuhec", "youtube": "https://music.youtube.com/playlist?list=OLAK5uy_nP0fjlhGJABK2Gwk70kPpiSLLAj5SNmDQ", "apple": "https://music.apple.com/album/i-o-bright-side-and-dark-side-mixes/1712314837", "cover": "petergabrielio" },
    { "artist": "Ryuichi Sakamoto", "title": "12", "genres": "Ambient / Modern Classical", "spotify": "https://open.spotify.com/album/0kvmLk15RUoNqsn8acxqf4", "youtube": "https://music.youtube.com/playlist?list=OLAK5uy_lPEUI9obEoGMUWCSI8wkOzpXm5bcA37iM", "apple": "https://music.apple.com/album/12/1653999635", "cover": "ryuichisakamoto12" },
    { "artist": "Sigur Rós", "title": "ÁTTA", "genres": "Ambient / Chamber Music / Modern Classical", "spotify": "https://open.spotify.com/album/0PhjFcIDPt9cBRfYSJou3v", "youtube": "https://music.youtube.com/playlist?list=OLAK5uy_m0lTlZUAww32wvyU8q9sGL_1aGYD0dm_k", "apple": "https://music.apple.com/album/%C3%A1tta/1688702511", "cover": "sigurrosatta" },
    { "artist": "Zaho de Sagazan", "title": "La symphonie des éclairs", "genres": "Synthpop / Nouvelle chanson française", "spotify": "https://open.spotify.com/album/5GoDO8a03bxSSxMCeYKfaW", "youtube": "https://music.youtube.com/playlist?list=OLAK5uy_kwLLs5zuoIbWkj4al0_31WjVI8O9XOtVM", "apple": "https://music.apple.com/album/la-symphonie-des-%C3%A9clairs/1708455052", "cover": "zahodesagazanlasymphoniedeseclairs" }
];

function addAlbum(album) {

    var clone = document.getElementById('album-prototype').cloneNode(true);
    clone.removeAttribute('id');

    var coverElement = clone.querySelector('.cover');
    coverElement.src = `./img/covers/${album.cover}.webp`;
    coverElement.alt = `${album.artist} - ${album.title}`;

    clone.querySelector('.artist').textContent = album.artist;
    clone.querySelector('.title').textContent = album.title;
    clone.querySelector('.genres').innerHTML = album.genres.replaceAll("/","<br/>");

    var streamingLinks = clone.querySelectorAll('.streaming a');
    streamingLinks[0].href = album.spotify;
    streamingLinks[1].href = album.youtube;
    streamingLinks[2].href = album.apple;

    var streamingLinks = clone.querySelectorAll('.streaming img');
    streamingLinks[0].alt = `Écouter ${album.title} de ${album.artist} sur Spotify`;
    streamingLinks[1].alt = `Écouter ${album.title} de ${album.artist} sur Youtube Music`;
    streamingLinks[2].alt = `Écouter ${album.title} de ${album.artist} sur Apple Music`;

    document.getElementById("albums-container").appendChild(clone);
}

albums.forEach(album => addAlbum(album));
document.getElementById('album-prototype').remove();

const isHoverSupported = window.matchMedia('(hover: hover)').matches;
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

const nodes = document.querySelectorAll('.album');
const [eventType, eventHandler] = isHoverSupported ? ['mouseenter', handleHover] : ['click', handleClick];

function handleHover(event) {
    event.target.classList.add('active');
}

function handleHoverExit(event) {
    event.target.classList.remove('active');
}

function handleClick(event) {
    const clickedAlbum = event.currentTarget;
    nodes.forEach(album => album !== clickedAlbum && album.classList.remove('active'));
    clickedAlbum.classList.toggle('active');
}

nodes.forEach(album => {
    album.addEventListener(eventType, eventHandler);
    album.addEventListener('mouseleave', handleHoverExit);
});