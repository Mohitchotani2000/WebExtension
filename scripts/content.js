document.addEventListener("mouseup", () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
        chrome.runtime.sendMessage({ action: "paraphrase", text: selectedText }, response => {
            // Handle the response (paraphrased text) here
            console.log("Paraphrased text:", response);
        });
    }
});
