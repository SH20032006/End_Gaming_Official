function copyGameId() {
    const gameIdInput = document.getElementById('game-id');
    gameIdInput.select();
    gameIdInput.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(gameIdInput.value).then(() => {
        alert('Game ID copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy Game ID. Please try again.');
    });
}
