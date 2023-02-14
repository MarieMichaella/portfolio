const storeId = "ADD BLOGS";

var row=1;

function addArticles (){
    const Article_name = document.getElementById('Articlename').value;
    const Article_description = document.getElementById('ArticleDesciption').value;
    const Article_category = document.getElementById('ArticleCategory').value;


const articles = {
    Article_name: Article_name,
    Article_description: Article_description,
    Article_category: Article_category,
}


let newArticles = []
const storedArticles = localStorage.getItem(storeId);

if(storedCtalogs){
    newArticles = JSON.parse(storedArticles)
}
newArticles.push(articles)

localStorage.setItem(storeId, JSON.stringify(newArticles))

}


function displayArticles () {
    const storedArticles =
    localstorage.getItem(storeId);
    const articlecontainer = document.getElementById('enterblog')
  
    if(storedArticles){
        const articles = JSON.parse(storedArticles)
        console.log("=====?",articles)

        for(i=0; i<articles.length;i++){
            
        }
    }

}

