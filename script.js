const githubReposBtn = document.getElementById("githubReposBtn");
const viewMyPortfolioContainer = document.getElementById("viewMyGithubRepos");

const githubReposSection = document.createElement("section");
githubReposSection.setAttribute("id", "githubReposSection");

githubReposBtn.addEventListener("click", function () {

    viewMyPortfolioContainer.insertAdjacentElement("afterend", githubReposSection)
    githubReposSection.innerHTML = ""

    function fetchRepos() {

        fetch("https://api.github.com/users/tovehydmark/repos")
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {

                console.log("github API", json)

                for (i = 0; i < json.length; i++) {

                    githubReposSection.insertAdjacentHTML("beforeend", "<a href='" + json[i].html_url + "'target='_blank'><div class='githubRepo'>" + json[i].name + "</div")
                }
            });
    }
    fetchRepos()
})