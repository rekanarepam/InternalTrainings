// ============== Model =========================

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
  
  getArticles(){
  article

  };
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

// const BBC = new article("BBCNEWS","Adams","International","Description","url","urlToImage","PublishedTa");
// console.log(BBC.channel);
const contactsData = [
    {
      'fname': 'Anbu',
      'lname': 'Arasan',
      'phone': '190-309-6101',
      'email': 'anbu.arasan@email.com'
    },
    {
      'fname': 'Arivu',
      'lname': 'Mugilan',
      'phone': '490-701-7102',
      'email': 'arivu.mugilan@email.com'
    },
    {
      'fname': 'Bob',
      'lname': 'Johnson',
      'phone': '574-909-3948',
      'email': 'bob.johnson@email.com'
    },
    {
      'fname': 'Raja',
      'lname': 'Tamil',
      'phone': '090-909-0101',
      'email': 'raja.tamil@email.com'
    },
    {
      'fname': 'Sundar',
      'lname': 'Kannan',
      'phone': '090-909-0101',
      'email': 'sundar.kannan@email.com'
    }
  ]
  //================ Controller ==================
class AddressBookCtrl {
	constructor(addressBookView) {
        this.addressBookView = addressBookView;
        
	}
        init() {
            this.addressBookView.init();
           
        }
        getContacts() {
          return contactsData;
      }
        
}
class NewsChannelCtrl{
  constructor(NewChannelView){
    this.NewChannelView = NewChannelView;
  }
  init(){
    this.NewChannelView.init();
  }
    // getNewsChannels = () =>
    // {
    //   //This method will API call NEWS API using Promise and Fetch
    // }



}

// ============== View ========================= 
class AddressBookView {
	init() {
           //console.log("render HTML here");
            //this.renderContactListModule();
            this.renderNewChannelModule();
            console.log("render HTML here");
        }
        // -----------------------------------

    // RENDER 
    // -----------------------------------
    renderContactListModule() {

      // model
      const contacts = addressBookApp.getContacts();

      // view 
      const $ContactListUI = document.getElementById('contact-list')
      $ContactListUI.innerHTML = '';
      

      // ctrl
      for (let i = 0, len = contacts.length; i < len; i++) {

          // list item
          let $li = document.createElement('li');
          $li.setAttribute('class', 'contact-list-item');
          $li.setAttribute('data-index', i);

          // label div
          let $div = document.createElement('div');
          $div.innerHTML = `${contacts[i]['fname']}, <strong>${contacts[i]['lname']}</strong> `;

          $li.append($div);

          $ContactListUI.append($li);
      }

  }

  
}
// create an object from the class AddressBookView
const addressBookView = new AddressBookView();

// create an object from AddressBookCtrl and passing addressBookView in the constructor as a dependent
const addressBookApp = new AddressBookCtrl(addressBookView);

// App starting...
//addressBookApp.init();
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//News Channel view starts Here
class NewsChannelView
{
  init()
    {
      console.log("Hi");
        this.renderNewChannelModule();
    }
    renderNewChannelModule()
    {
    var ArticlesReuslt = []; 
    const ul = document.getElementById('articles');
    const url = 'https://newsapi.org/v1/articles?source=the-verge&apiKey=49de02235d5b41bd987a58f1d1871071';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log('Parsed Josn',data);
      
      let articles = data.articles;
      console.log('authors',articles);
      return articles.map(function(article) {
        console.log('Parsed article Josn',article);
        let articleObj = new Article(data.source,article.author,article.title,article.description,article.url,article.urlToImage,article.publishedAt);
        console.log('data articleObj',articleObj);
        ArticlesReuslt.push(articleObj);
        
        
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
        img.src = article.urlToImage;
        span.innerHTML = `${article.title} ${article.title}`;
        append(li, img);
        append(li, span);
        append(ul, li);
      })
      console.log('Parsed result',ArticlesReuslt);
    })
    .catch(function(error) {
      console.log(error);
    });   
  
  
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