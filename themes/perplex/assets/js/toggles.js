/* let toggle = document.querySelector('.toggle');

let toggleInterface = document.querySelector('.toggle-interface');

function handleToggle(e) {
    if(e.keyCode == 32 || e.keyCode == 13){
        toggleControl.checked = !toggleControl.checked;
    }
}

toggleInterface.addEventListener('keydown', handleToggle); */


let sbBtn1 = document.querySelector('#tgl-sb1');
let sbBtn2 = document.querySelector('#tgl-sb2');
let sb = document.querySelector('#sidebar');
let main = document.querySelector('#main');


let tocBtn = document.querySelector('#toggle-toc');
let toc = document.querySelector('#toc');


if( sbBtn1 ) {
    sbBtn1.addEventListener('click', function () {
        if ( sb ) {
            sbBtn1.classList.toggle('is-visible');
            sbBtn2.classList.toggle('is-visible');
            sb.classList.toggle('is-visible');
            main.classList.toggle('is-locked');
        }
        if ( sb.classList.contains( 'is-visible' ) ) {
            sbBtn1.title = "Close the sidebar navigation.";
            sbBtn2.title = "Close the sidebar navigation.";
        } else {
            sbBtn2.title = "Open the sidebar navigation.";
        }
        if( tocBtn ) {
            tocBtn.disabled = !tocBtn.disabled;
        }
    })
}

if( sbBtn2 ) {
    sbBtn2.addEventListener('click', function () {
        if ( sb ) {
            sbBtn1.classList.toggle('is-visible');
            sbBtn2.classList.toggle('is-visible');
            sb.classList.toggle('is-visible');
            main.classList.toggle('is-locked');
        }
        if ( sb.classList.contains( 'is-visible' ) ) {
            sbBtn1.title = "Close the sidebar navigation.";
            sbBtn2.title = "Close the sidebar navigation.";
        } else {
            sbBtn1.title = "Open the sidebar navigation.";
            sbBtn2.title = "Open the sidebar navigation.";
        }
        if( tocBtn ) {
            tocBtn.disabled = !tocBtn.disabled;
        }
    })
}


if ( tocBtn ) {
    tocBtn.addEventListener('click', function () {
        tocBtn.classList.toggle( 'is-visible' );
        toc.classList.toggle('is-closed');
    })
}
