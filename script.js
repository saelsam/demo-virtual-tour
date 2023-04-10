var container = document.querySelector('#container');
var panorama = new PANOLENS.ImagePanorama('https://live.staticflickr.com/65535/52765301105_198e34e77f_6k.jpg');
var panorama2 = new PANOLENS.ImagePanorama('https://live.staticflickr.com/65535/52750877528_5517877d33_6k.jpg');
var panorama3 = new PANOLENS.ImagePanorama('https://live.staticflickr.com/836/41489899742_0d39c51885_6k.jpg');

var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama,panorama2,panorama3);

var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
panorama.add(infospot);

infospot.addEventListener('click', function () {
    onButtonClick(panorama2);
});

var infospot2 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot2.position.set(0, -2000, -5000);
panorama2.add(infospot2);

infospot2.addEventListener('click', function () {
    onButtonClick(panorama3);
});

var infospot3 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot3.position.set(0, -2000, -5000);
panorama3.add(infospot3);

infospot3.addEventListener('click', function () {
    onButtonClick(panorama);
});

var bar = document.querySelector( '#bar' );

function onProgressUpdate ( event ) {
    var percentage = event.progress.loaded / event.progress.total * 100;
    bar.style.width = percentage + "%";
    if (percentage >= 100){
        bar.classList.add( 'hide' );
        setTimeout(function(){
        bar.style.width = 0;
        }, 1000);
    }
}
 
function onButtonClick(targetPanorama) {
    bar.classList.remove('hide');
    viewer.setPanorama(targetPanorama);
}

panorama.addEventListener('progress', onProgressUpdate);
panorama2.addEventListener('progress', onProgressUpdate);
panorama3.addEventListener('progress', onProgressUpdate);