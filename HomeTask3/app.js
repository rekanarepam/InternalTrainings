const url = 'https://newsapi.org/v1/articles?source=the-verge&apiKey=49de02235d5b41bd987a58f1d1871071';
// ============== Model =========================
//Move this to another .js file
class NewsChannel{
  constructor(channelCode){
    this._channelCode = channelCode;
    this._articles = [];
  }
  get channel()
  {
    return this._channelCode;
  }
  set channel(channelCode)
  {
    this._channelCode = channelCode;
  }
 
}
class Article extends NewsChannel
{
  constructor(channelCode,author,title,description,url,urlToImage,publishedAt)
  {
    super(channelCode);
    this.author = author;
    this.title = title;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;
    this.publishedAt = publishedAt;
  }

}
//End of Move

  //================ Controller ==================

class NewsChannelCtrl{
  constructor(NewChannelView){
    this.NewChannelView = NewChannelView;
  }
  init(){
    this.NewChannelView.init();
  }
    
}

// ============== View ========================= 

//News Channel view starts Here
class NewsChannelView
{
  init()
    {
      const ul = document.getElementById('main-wrapper');
        this.renderHeaderModule();
        this.renderMainContentModule();
        this.renderSectionWithDataContentModule();
        //this.renderNewChannelModule();
        this.renderSideContent();
        this.renderFooter();
    }
    renderFooter()
    {
      
      var mainwrapperDiv = GetElement('main-wrapper');
      var footer = createNode('footer');
      footer.innerHTML = " &copy; News Feed 2019";
      append(mainwrapperDiv,footer);
    }
    //Below module will create Header
    renderHeaderModule()
    {
      
      var mainwrapperDiv = GetElement('main-wrapper');
      var header = createNode('header');
      header.innerHTML = "NEWSFEED";
      let yetAnotherDiv = CreateDiv('yetanother'); 
      let spanYetAnother = createNode('SPAN');
      spanYetAnother.innerText = "Yet another newsfeed";
      append(yetAnotherDiv,spanYetAnother);
      append(header,yetAnotherDiv);
      append(mainwrapperDiv,header);
    }
    //End of Module Header

    //Below Module will create Main content section
    renderMainContentModule()
    {
      var mainDivElement = createNode('div');
      var sectionMain = createNode('section');
      var mainwrapperDiv = GetElement('main-wrapper');
      sectionMain.id = "main-content";
      append(mainDivElement,sectionMain);
      append(mainwrapperDiv,mainDivElement);

    }
    //End of Main Content

    //Load Data with content
    renderSectionWithDataContentModule()
    {
        
        fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
          let articles = data.articles;
          
          return articles.map(function(article) {
          
            let articleObj = new Article(data.source,article.author,article.title,article.description,article.url,article.urlToImage,article.publishedAt);

            generateBody(articleObj);
            
            
            
          })
          
        })
        .catch(function(error) {
          console.log(error);
        }); 
    }

    renderSideContent(){

      var sideboxDiv = CreateDiv('side-box');
      var sidemarginDiv = CreateDiv('sidemargin');
      var selectSpan = createNode("SPAN");

      selectSpan.innerText = "SELECT CATEGORY";
      append(sidemarginDiv,selectSpan);
      append(sideboxDiv,sidemarginDiv);

    //Create array of options to be added
    var array = ["TV9", "NDTV", "AAJTAK","EPSN","STAR","NTV","AASTHA","EETV","MAATV","MUSIC"];

    //Create and append select list
    var selectList = createNode("select");
    selectList.id = "mySelect";
    selectList.className = "select";
    append(sideboxDiv,selectList);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        var option = createNode("option");
        option.value = array[i];
        option.text = array[i];
        append(selectList,option);
    }

    selectList.addEventListener(
        'change',
        function () { loadSectionContentByDropDown(this.selectedIndex) },
        false
    );

    var divSide =createNode("div");
    divSide.style = "margin-top:30px";
    var subscribeSpan = createNode("SPAN");
    subscribeSpan.innerText = "SUBSCRIBE";
    append(divSide,subscribeSpan);
    append(sideboxDiv,divSide);
    
    var divSide2 = createNode("div");
    divSide2.style = "margin-top:10px";
    append(sideboxDiv,divSide2);

    var subscribeTxtBox = createNode("input");
    subscribeTxtBox.className = "txtbox";
    subscribeTxtBox.setAttribute("type", "text");
    subscribeTxtBox.setAttribute("name", "SUBSCRIBE");
    append(divSide2,subscribeTxtBox);

    
    var subscribeButton = createNode("input");
    subscribeButton.className = "buttonSubscribe";
    subscribeButton.setAttribute("type", "button");
    subscribeButton.setAttribute("name", "SUBSCRIBE");
    subscribeButton.setAttribute("value", "SUBSCRIBE");
    append(divSide2,subscribeButton);

    var mainSection = GetElement("main-content").parentNode;
    append(mainSection,sideboxDiv);

    }
    
}
const newsChannelView = new NewsChannelView();
const newChannelApp = new NewsChannelCtrl(newsChannelView);
//NewChannel App starting
newChannelApp.init();


function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}
function CreateDiv(className) {
  let divElement = createNode('div');
      divElement.className = className;
      return divElement;
};
function GetElement(id)
{
  return document.getElementById(id);
}
function removeRow(input) {
  document.getElementById(input).removeChild(input.parentNode);
}
function ShowContentInPopUp(id)
{
    var modal = GetElement("myModal");
     modal.style.display = "block";
     var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
        modal.style.display = "none";
    }
}
function loadSectionContentByDropDown(selectedIndex)
{

  var mainDivElement = createNode('div');
      var sectionMain = createNode('section');
      var mainwrapperDiv = GetElement('main-wrapper');
      sectionMain.id = "main-content";
      append(mainDivElement,sectionMain);
      append(mainwrapperDiv,mainDivElement);
      
  //removeRow('main-wrapper');
  var element = document.getElementById('main-content');
    element.parentNode.removeChild(element);
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let articles = data.articles;
      
      return articles.map(function(article) {
      
        let articleObj = new Article(data.source,article.author,article.title,article.description,article.url,article.urlToImage,article.publishedAt);

        generateBody(articleObj);
        
        
        
      })
      
    })
    .catch(function(error) {
      console.log(error);
    }); 
}
function generateBody(articleObj){
            var sectionMainContent = GetElement('main-content');
            var article = createNode('article');
            article.className = "posts";
            
            var image = createNode('IMAGE');
            image.className = 'thumbnail';
            image.urlToImage = articleObj.urlToImage;
            append(article,image);
            
            var title = createNode("H1");
            title.innerText = articleObj.title;
            append(article,title);

            var spanTextSmall = createNode("SPAN");
            spanTextSmall.className = "txtSmall";
            spanTextSmall.innerText = articleObj.publishedAt;
            append(article,spanTextSmall);

            var sectionDiv = createNode('div');
            var contentPara = createNode('p');
            contentPara.innerText = articleObj.description;
            sectionDiv.appendChild(contentPara);

            var btncontinue = createNode("input");
            btncontinue.className = "button";
            btncontinue.setAttribute("type", "Button");
            btncontinue.setAttribute("value", "Continue Reading");
            btncontinue.setAttribute("name", "Continue Reading");

            btncontinue.addEventListener(
                'click',
                function () { ShowContentInPopUp(this)},
                false
            );

          append(sectionDiv,btncontinue);
          append(article,sectionDiv);
          append(sectionMainContent,article);
}