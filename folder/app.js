document.getElementById('processBtn').addEventListener('click', () => {
    const pdfFile = document.getElementById('pdfUpload').files[0];
    const style = document.getElementById('styleSelect').value;
    const frequency = document.getElementById('imageFrequency').value;

    if (!pdfFile) {
        alert('Please upload a PDF file.');
        return;
    }

    const formData = new FormData();
    formData.append('pdf', pdfFile);
    formData.append('style', style);
    formData.append('frequency', frequency);

    fetch('/process-pdf', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        displayBook(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function displayBook(data) {
    const bookDisplay = document.getElementById('bookDisplay');
    bookDisplay.innerHTML = '';

    data.pages.forEach(page => {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page';
        pageDiv.innerHTML = `<img src="${page.image}" alt="Page Image"><p>${page.text}</p>`;
        bookDisplay.appendChild(pageDiv);
    });
}
