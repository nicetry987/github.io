
// JavaScript to load works from JSON with Google Drive support
document.addEventListener('DOMContentLoaded', () => {
    fetch('works.json')
        .then(response => response.json())
        .then(data => {
            const worksContainer = document.getElementById('works');
            data.works.forEach(work => {
                const workItem = document.createElement('div');
                workItem.className = 'work-item';
                
                // Check if it's a Google Drive link and convert if needed
                let embedLink = work.link;
                const googleDriveMatch = work.link.match(/drive.google.com.*?\/d\/(.*?)(?:\/|$)/);
                if (googleDriveMatch) {
                    const fileId = googleDriveMatch[1];
                    embedLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
                }

                // Set iframe with the modified link or original link
                workItem.innerHTML = `<iframe src="${embedLink}" frameborder="0" allowfullscreen></iframe>`;
                worksContainer.appendChild(workItem);
            });
        })
        .catch(error => console.error('Error loading works:', error));
});
