// Used exclusively for User Story #6 - tally-contest.html
const tallyContestsURL =  window.location.origin + "/web-api/tally_contests";

// Display the git log with the necessay links
function displayStdout(vote_store_id, stdoutTextArray, digestURL, tallyURL) {
    const rootElement = document.getElementById("lowerSection");
    let jsonString = JSON.stringify(stdoutTextArray, undefined, 2);
    let paragraph = document.createElement('p');
    paragraph.innerHTML = syntaxHighlightStdout(vote_store_id, stdoutTextArray, digestURL, tallyURL);
    rootElement.appendChild(paragraph);
}

// ################
// __main__
// ################
function main(vote_store_id, stdoutTextArray) {
    // Display the STDOUT linking digests to contest-cvr.html
    // and contest names to tally-contest.html
    displayStdout(vote_store_id, stdoutTextArray, "show-contest.html", "tally-contests.html");
}

// To mock or not to mock
if (MOCK_WEBAPI) {
    // Create the ballotCheck javascript object from the blankBallotJSON JSON object literal
    try {
        const stdoutText = JSON.parse(tallyOutputJSON);
    } catch (e) {
        console.error(e);
    }
    main(MOCK_GUID, stdoutText);
} else {
    // Get the comma separated contests and digests parameters
    const urlParams = new URLSearchParams(window.location.search);
    const vote_store_id = urlParams.get('vote_store_id');
    const contests = urlParams.get('contests');
    const digests = urlParams.get('digests');
    const verbosity = urlParams.get('verbosity');
    console.log("fetching the tally-contests output for contest(s) " + contests);
    console.log("while tracking digest(s) " + digests);
    // Need the JSON data for just about everything.  However, the way to get
    // external json is with a fetch, which is asynchronous.  Which means that
    // 'just about everything' on this page needs to run within the callback to
    // the async function (called only when !MOCK_WEBAPI).
    let url = tallyContestsURL + "/" + vote_store_id + "/" + contests;
    if (digests) {
        url += "/" + digests
        url += "/" + verbosity
    } else {
        url += "/null/" + verbosity
    }
    fetch(url)
        .then(response => response.json())
        .then(json => {
            // Access json only inside the `then`
            if (json.webapi_error) {
                throw new Error(json.webapi_error);
            }
            console.log("retrieved the tally for contest(s) " + contests);
            main(vote_store_id, json.tally_election_stdout);
        })
        .catch(error => console.log("tally_contests web-api fetch returned an error: " + error));
}
