
// JavaScript to load works from JSON
document.addEventListener('DOMContentLoaded', () => {
    fetch('works.json')
        .then(response => response.json())
        .then(data => {
            const worksContainer = document.getElementById('works');
            data.works.forEach(work => {
                const workItem = document.createElement('div');
                workItem.className = 'work-item';
                workItem.innerHTML = `<iframe src="${work.link}" frameborder="0" allowfullscreen></iframe>`;
                worksContainer.appendChild(workItem);
            });
        })
        .catch(error => console.error('Error loading works:', error));
});
