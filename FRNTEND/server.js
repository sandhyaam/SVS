const express = require('express')
const app = express()
var images = require('path').join(__dirname, '/images');
app.use(express.static(images));

app.get('/', loadstdHtml);
app.get('/home', homepage);
app.get('/about', aboutpage);
app.get('/contact', contactPage);
app.get('/election', electionLoginPage);
app.get('/candidate', candidateLogin);
app.get('/voter', voterLogin)

app.get('/electionpage', electionpage);
app.get('/candidatePage', candidatePage);
app.get('/voterPage', voterPage);
app.get('/candidateRegistration', candidateRegistration);
app.get('/voterRegistration', voterRegistration);

app.get('/Candidateforgotpassword', Candidateforgotpassword);
app.get('/Voterforgotpassword', Voterforgotpassword);


app.get('/Election/addparty', addparty);
app.get('/Election/addConstituencys', addConstituencys);
app.get('/Election/viewCandidates', viewCandidates);
app.get('/Election/viewVoters', viewVoters)
app.get('/Election/partytable', partytable)
app.get('/Election/ViewResults', ViewResults)

app.get('/Voter/voterProfile', voterProfile);
app.get('/Voter/votingPage', votingPage);
app.get('/Voter/votingResultPage', votingResultPage);
app.get('/Voter/resultPages', resultPages);
app.get('/Voter/changePwd', changePwd);


app.get('/Candidate/ViewResult', ViewResult);
app.get('/Candidate/ViewStatusPage', ViewStatusPage);
app.get('/Candidate/changepasswrd', changepasswrd);


function loadstdHtml(req, res) {
    res.sendFile('index.html', { root: __dirname });
}
function homepage(req, res) {
    res.sendFile('home.html', { root: __dirname });
}

function aboutpage(req, res) {
    res.sendFile('aboutus.html', { root: __dirname });
}
function contactPage(req, res) {
    res.sendFile('contactus.html', { root: __dirname });
}

function electionLoginPage(req, res) {
    res.sendFile('electionLogin.html', { root: __dirname });
}
function candidateLogin(req, res) {
    res.sendFile('Candidatelogin.html', { root: __dirname });
}

function voterLogin(req, res) {
    res.sendFile('voterlogin.html', { root: __dirname });
}
function electionpage(req, res) {
    res.sendFile('ElectionCommission/Commissionerindex.html', { root: __dirname });
}
function viewCandidates(req, res) {
    res.sendFile('ElectionCommission/candidate.html', { root: __dirname });
}
function addparty(req, res) {
    res.sendFile('ElectionCommission/addParty.html', { root: __dirname });
}
function addConstituencys(req, res) {
    res.sendFile('ElectionCommission/addConstituency.html', { root: __dirname });
}

function viewVoters(req, res) {
    res.sendFile('ElectionCommission/voter.html', { root: __dirname });
}

function partytable(req, res) {
    res.sendFile('ElectionCommission/viewParty.html', { root: __dirname });
}

function ViewResults(req, res) {
    res.sendFile('ElectionCommission/viewResult.html', { root: __dirname });
}

function changePwd(req, res) {
    res.sendFile('Voter/changePassword.html', { root: __dirname });
}
function ViewResult(req, res) {
    res.sendFile('Candidate/viewResults.html', { root: __dirname });
}
function ViewStatusPage(req, res) {
    res.sendFile('Candidate/viewStatus.html', { root: __dirname });
}
function changepasswrd(req, res) {
    res.sendFile('Candidate/changePasword.html', { root: __dirname });
}
function resultPages(req, res) {
    res.sendFile('Voter/resultPage.html', { root: __dirname });
}

function candidatePage(req, res) {
    res.sendFile('Candidate/candidateindex.html', { root: __dirname });
}

function voterPage(req, res) {
    res.sendFile('Voter/voterindex.html', { root: __dirname });
}

function candidateRegistration(req, res) {
    res.sendFile('candidateRegistration.html', { root: __dirname });
}

function Candidateforgotpassword(req, res) {
    res.sendFile('CandidateforgotPassword.html', { root: __dirname });
}
function voterRegistration(req, res) {
    res.sendFile('voterRegistration.html', { root: __dirname });
}

function Voterforgotpassword(req, res) {
    res.sendFile('Voterforgotpassword.html', { root: __dirname });
}

function voterProfile(req, res) {
    res.sendFile('Voter/voterProfile.html', { root: __dirname });
}
function votingPage(req, res) {
    res.sendFile('Voter/voting.html', { root: __dirname });
}
function votingResultPage(req, res) {
    res.sendFile('Voter/voterVoting.html', { root: __dirname });
}

app.listen(3000, () => console.log(`Example app listening on port number 3000!`))