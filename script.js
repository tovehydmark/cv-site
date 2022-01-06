const githubReposBtn = document.getElementById("githubReposBtn");
const viewMyPortfolioContainer = document.getElementById("viewMyGithubRepos");

githubReposBtn.addEventListener("click", function () {

    const githubReposSection = document.createElement("section");
    githubReposSection.setAttribute("id", "githubReposSection");

    viewMyPortfolioContainer.insertAdjacentElement("afterend", githubReposSection)
})