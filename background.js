chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "paraphrase") {
        // Implement paraphrasing logic here
        //sending back the paraphrased text using sendResponse(paraphrasedText);
    }
});
