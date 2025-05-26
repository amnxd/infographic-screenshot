document.getElementById('screenshot-btn').addEventListener('click', async function() {
  const btn = this;
  const spinner = document.getElementById('spinner');
  btn.disabled = true;
  btn.textContent = 'Processing...';
  spinner.style.display = 'block';
  try {
    // Call the backend endpoint to get the screenshot
    const response = await fetch('/api/screenshot');
    if (!response.ok) throw new Error('Failed to capture screenshot');
    const blob = await response.blob();
    // Create a link and trigger download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'infographic.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  } catch (err) {
    alert('Error capturing screenshot. Please try again.');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Take Screenshot';
    spinner.style.display = 'none';
  }
}); 