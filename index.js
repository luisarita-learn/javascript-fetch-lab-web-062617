function getIssues() {
  const repo = 'luisarita/javascript-fetch-lab'
  const url = `https://api.github.com/repos/${repo}/issues`

  fetch(url)
  .then(resp => resp.json())
  .then(json => console.log(json));
}

function showIssues(json) {
  var issues = {
    //name: json.name,
    //html_url: json.html_url,
    body: ''
  }

  var template = Handlebars.compile(document.getElementById("issues-template").innerHTML);
  var html = template(issues);
}

function createIssue() {
  //const repo = 'luisarita/javascript-fetch-lab-web-062617'
  const repo = 'luisarita/javascript-fetch-lab'
  const url = `https://api.github.com/repos/${repo}/issues`
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value

  fetch(url, {
    method: 'POST',
    body: {
      title: title,
      body: body
    },
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showResults(json) {
  if (json == undefined){
    json = {name: "TEST", html_url: "https://api.github.com/"}
  }
  var repo = {
    name: json.name,
    html_url: json.html_url,
  }

  var template = Handlebars.compile(document.getElementById("repo-template").innerHTML);
  var html = template(repo);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const url = `https://api.github.com/repos/${repo}/forks`

  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

function getToken() {
  return ''
}
