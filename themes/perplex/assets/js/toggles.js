/* let toggle = document.querySelector('.toggle');

let toggleInterface = document.querySelector('.toggle-interface');

function handleToggle(e) {
    if(e.keyCode == 32 || e.keyCode == 13){
        toggleControl.checked = !toggleControl.checked;
    }
}

toggleInterface.addEventListener('keydown', handleToggle); */


let sidebarBtn = document.querySelector('#toggle-sidebar');
let closeBtn = document.querySelector('#close-sidebar');
let sidebar = document.querySelector('#sidebar');


let tocBtn = document.querySelector('#toggle-toc');
let toc = document.querySelector('#toc');


if( sidebarBtn ) {
    sidebarBtn.addEventListener('click', function () {
        if ( sidebar ) {
            sidebarBtn.classList.toggle('is-visible');
            sidebar.classList.toggle('is-visible');
        }
        if ( sidebar.classList.contains( 'is-visible' ) ) {
            sidebarBtn.title = "Close the sidebar navigation.";
        } else {
            sidebarBtn.title = "Open the sidebar navigation.";
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
