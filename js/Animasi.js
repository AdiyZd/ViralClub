// ini untuk animasi dark mode 
document.addEventListener("DOMContentLoaded", function() {
    const idA = document.getElementById("Darkmode");
    const idIcon = document.getElementById("icon");
    const kondisi = document.getElementById("Kondisi");

    var kondisiAwal;

    if (document.body.classList.contains('dark-mode')) {
        kondisi.innerHTML = `<span>Mode Terang <i id="icon" class="bi bi-sun"></i></span>`;
    } else {
        kondisi.innerHTML = `<span>Mode Gelap <i id="icon" class="bi bi-moon"></i></span>`;
    }


    function DarkmodeSaya(dom) {
        dom.preventDefault() // mencari item defauld dengan fungsu dom

        document.body.classList.toggle('dark-mode');

        // ganti icon jika dark mode berubah style
        if (document.body.classList.contains('dark-mode')) {
            idIcon.classList.replace("bi-moon", "bi-sun");
            kondisi.innerHTML = `<span>Mode Terang   <i id="icon" class="bi bi-sun"></i></span>` 
        } else {
            idIcon.classList.replace("bi-sun", "bi-moon");
            kondisi.innerHTML = `<span>Mode Gelap    <i id="icon" class="bi bi-moon"></i></span>`
        }
    }

    idA.addEventListener("click", DarkmodeSaya);
});

// end mode 
