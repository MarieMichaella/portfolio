// retrieve the stored articles from local storage
const storedArticles = JSON.parse(localStorage.getItem('articles'));

// loop through the articles and display them on the page
const articleList = document.getElementById('article-list');
storedArticles.forEach(article => {
  const articleElement = document.createElement('div');
  articleElement.innerHTML = `
    <h2>${article.Articlename}</h2>
    <img src="${article.ArticlePicture}" alt="${article.Articlename}">
    <p>${article.ArticleDescription}</p>
    <p>${article.message}</p>
  `;
  articleList.appendChild(articleElement);
});



/*const articlesContainer = document.getElementById('articles-container');

// Get the articles array from local storage
const articles = JSON.parse(localStorage.getItem('articles'));

// Loop through the articles array and create a HTML element for each article
articles.forEach(article => {
  const articleElement = document.createElement('div');
  articleElement.classList.add('article');

  const imageElement = document.createElement('img');
  imageElement.src = article.ArticlePicture;
  articleElement.appendChild(imageElement);

  const nameElement = document.createElement('h2');
  nameElement.innerText = article.Articlename;
  articleElement.appendChild(nameElement);

  // Add the article element to the articles container
  articlesContainer.appendChild(articleElement);
});*/
