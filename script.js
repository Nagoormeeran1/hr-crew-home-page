function showTab(tab) {
    // Hide both job containers
    document.getElementById('recent-jobs').style.display = 'none';
    document.getElementById('updated-jobs').style.display = 'none';

    // Remove "active" class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show the selected container and set active button
    if (tab === 'recent') {
        document.getElementById('recent-jobs').style.display = 'block';
        buttons[0].classList.add('active');
    } else if (tab === 'updated') {
        document.getElementById('updated-jobs').style.display = 'block';
        buttons[1].classList.add('active');
    }
}

// Set the default tab on page load
document.addEventListener("DOMContentLoaded", () => {
    showTab('recent');
});