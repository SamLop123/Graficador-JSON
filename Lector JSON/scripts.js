const uploadContainer = document.getElementById('uploadContainer');
const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const graphButton = document.getElementById('graphButton');

uploadContainer.addEventListener('click', () => fileInput.click());

uploadContainer.addEventListener('dragover', (event) => {
    event.preventDefault();
    event.stopPropagation();
    uploadContainer.classList.add('dragover');
});

uploadContainer.addEventListener('dragleave', (event) => {
    event.preventDefault();
    event.stopPropagation();
    uploadContainer.classList.remove('dragover');
});

uploadContainer.addEventListener('drop', (event) => {
    event.preventDefault();
    event.stopPropagation();
    uploadContainer.classList.remove('dragover');
    handleFiles(event.dataTransfer.files);
});

fileInput.addEventListener('change', () => {
    handleFiles(fileInput.files);
});

graphButton.addEventListener('click', () => {
    alert('Graficar archivos JSON'); 
    // LUEGO AÑADIRE LA LOGICA MEDIA VEZ LO ENTIENDA
});

function handleFiles(files) {
    preview.innerHTML = '';
    for (const file of files) {
        const fileDiv = document.createElement('div');
        fileDiv.textContent = file.name;
        preview.appendChild(fileDiv);
    }
}
