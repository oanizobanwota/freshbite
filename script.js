
    document.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('nav a');
        const body = document.getElementById('body');

        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const href = this.href;

                body.classList.add('dissolve');

                setTimeout(() => {
                    window.location.href = href;
                }, 500); // Match this duration with the CSS transition duration
            });
        });
    });
    const bsTab = new bootstrap.Tab('#myTab')
    const tabEl = document.querySelector('button[data-bs-toggle="tab"]')
tabEl.addEventListener('shown.bs.tab', event => {
  event.target // newly activated tab
  event.relatedTarget // previous active tab
})