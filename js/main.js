

document.addEventListener('DOMContentLoaded', loaded)
function loaded() {
    var loadingScreen = document.getElementById('loading-screen');
    var content = document.getElementById('content');
    loadingScreen.style.display = 'none';
    content.style.display = 'block';
    console.log('done')
}
(() => {
    let modelViewer = document.querySelector('.main');
    let orbitCycle = [
        '75deg 55deg 4m',
        '-60deg 110deg 2m',
        '-180deg 90deg 2.4m',
        modelViewer.cameraOrbit
    ];
    setInterval(() => {
        let currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
        modelViewer.cameraOrbit =
            orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
    }, 4000); 
    })(); 

    window.onscroll = function () {
        let windowHeight = this.innerHeight;
        let windowScrollTop = this.scrollY;
        let about = document.querySelector('.about');
        let aboutTop = about.offsetTop;
        let aboutHeight = about.offsetHeight;
        if (windowScrollTop > (aboutTop + aboutHeight - windowHeight -300)) {
            document.querySelector('.main').classList.add('animation');
            let aboutContainer = document.querySelector('.about .container');
            aboutContainer.classList.add('animation')
            let details = document.querySelectorAll('.informations-container .details');
            details.forEach((e)=> {
                e.classList.add('margin-bottom');
            })
            let point = document.querySelectorAll('.boxs-container .box .point')
            point.forEach((e)=> {
                e.classList.add('animation')
            })
        }
        else if(windowScrollTop < (aboutTop + aboutHeight - windowHeight -500)) {
            document.querySelector('.main').classList.remove('animation');
            let details = document.querySelectorAll('.informations-container .details');
            details.forEach((e)=> {
                e.classList.remove('margin-bottom');
            })
            let point = document.querySelectorAll('.boxs-container .box .point')
            point.forEach((e)=> {
                e.classList.remove('animation')
            })
            let aboutContainer = document.querySelector('.about .container');
            aboutContainer.classList.remove('animation')
        }
    }



    let grabbedItem = null;

    document.addEventListener('mousedown', function(event) {
      if (event.target.classList.contains('grabbable')) {
        grabbedItem = event.target;
        grabbedItem.classList.add('grabbed');
      }
    });
    
    document.addEventListener('mousemove', function(event) {
      if (grabbedItem) {
        grabbedItem.style.left = event.clientX + 'px';
        grabbedItem.style.top = event.clientY + 'px';
      }
    });
    
    document.addEventListener('mouseup', function() {
      if (grabbedItem) {
        grabbedItem.classList.remove('grabbed');
        grabbedItem = null;
      }
    });
    
