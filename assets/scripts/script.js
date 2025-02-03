document.addEventListener('DOMContentLoaded', () => {
    const websiteContainerButtons = document.querySelectorAll('.website-top-container');
    const hiddenContainers = document.querySelectorAll('.website-bottom-container');
    const showMoreLessTexts = document.querySelectorAll('.website-top-container p');

    // Ensure all elements start hidden on page load
    hiddenContainers.forEach(container => {
        container.classList.add('hidden');
    });

    websiteContainerButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (hiddenContainers[index]) {
                hiddenContainers[index].classList.toggle('hidden');
            }

            if (showMoreLessTexts[index]) {
                showMoreLessTexts[index].innerText = 
                    hiddenContainers[index].classList.contains('hidden') ? 'Show More' : 'Show Less';
            }
        });
    });
});

