document.addEventListener('DOMContentLoaded', function() {
    const infoButtons = document.querySelectorAll('.info-btn');
    const popups = {
        workbench: document.getElementById('popup-workbench'),
        preview: document.getElementById('popup-preview'),
        source: document.getElementById('popup-source')
    };

    infoButtons.forEach(button => {
        const popupId = button.getAttribute('data-popup');
        const popup = popups[popupId];

        button.addEventListener('mouseenter', function(event) {
            const rect = button.getBoundingClientRect();
            const popupWidth = popup.offsetWidth;

            popup.style.left = `${rect.left + window.scrollX - popupWidth - 10}px`;

            popup.style.top = `${rect.top + window.scrollY}px`;
            popup.style.display = 'block';
            setTimeout(() => {
                popup.style.opacity = '1';
            }, 10);
        });

        button.addEventListener('mouseleave', function() {
            setTimeout(() => {
                if (!popup.matches(':hover')) {
                    popup.style.opacity = '0';
                    setTimeout(() => {
                        popup.style.display = 'none';
                    }, 300);
                }
            }, 300); 
        });

        popup.addEventListener('mouseleave', function() {
            popup.style.opacity = '0';
            setTimeout(() => {
                popup.style.display = 'none';
            }, 300);
        });

        popup.addEventListener('mouseenter', function() {
            popup.style.opacity = '1';
            popup.style.display = 'block';
        });
    });
});
