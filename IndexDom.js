window.onload = function () {
    loadHeader();
    loadMainContent();
    loadSideContent();   
};
var loadHeader = function () {
    var mainwrapperDiv = document.getElementById('main-wrapper');
    var header = document.createElement('header');
    header.innerHTML = "NEWSFEED";
    

    let yetAnotherDiv = document.createElement('div');
    yetAnotherDiv.className = "yetanother";

    let spanYetAnother = document.createElement('SPAN');
    spanYetAnother.innerText = "Yet another newsfeed";
    yetAnotherDiv.appendChild(spanYetAnother);

    header.appendChild(yetAnotherDiv);
    mainwrapperDiv.appendChild(header); 
    
};

var loadSideContent = function () {

    var sideboxDiv = document.createElement("div");
    sideboxDiv.className = "side-box";

    var sidemarginDiv = document.createElement("div");
    sidemarginDiv.className = "sidemargin";
    sideboxDiv.appendChild(sidemarginDiv);

    var selectSpan = document.createElement("SPAN");
    selectSpan.innerText = "SELECT CATEGORY";
    sidemarginDiv.appendChild(selectSpan);

    //var myDiv = document.getElementById("myDiv");

    //Create array of options to be added
    var array = ["Volvo", "Saab", "Mercades", "Audi"];

    //Create and append select list
    var selectList = document.createElement("select");
    selectList.id = "mySelect";
    sideboxDiv.appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }

    var divSide = document.createElement("div");
    selectSpan.innerText = "SUBSCRIBE";
    divSide.style = "margin-top:30px";
    divSide.appendChild(selectSpan);

    var divSide2 = document.createElement("div");
    divSide2.style = "margin-top:30px";
    divSide.appendChild(divSide2);

    sidemarginDiv.appendChild(divSide);

    var mainSection = document.getElementById("main-content").parentNode;
    mainSection.appendChild(sideboxDiv);
}
    
var loadMainContent = function () {

    var mainDivElement = document.createElement('div');
    var sectionMain = document.createElement('section');
    sectionMain.id = "main-content";
 
    mainDivElement.appendChild(sectionMain);

    var mainwrapperDiv = document.getElementById('main-wrapper');
    mainwrapperDiv.appendChild(mainDivElement);

    loadSectionContent();
}

var loadSectionContent = function ()
{
    var sectionMainContent = document.getElementById('main-content');
    for (var i = 0; i < 3; i++) {

        //load three articles
        var article = document.createElement('article');
        article.className = "posts";

        var image = document.createElement('IMAGE');
        image.className = 'thumbnail';
        article.appendChild(image);

        var title = document.createElement("H1");
        title.innerText = "Title One";
        article.appendChild(title);

        var spanTextSmall = document.createElement("SPAN");
        spanTextSmall.className = "txtSmall";
        spanTextSmall.innerText = "Posted on 29 June,2019 //Category: Category One";
        article.appendChild(spanTextSmall);

        var sectionDiv = document.createElement('div');
        var contentPara = document.createElement('p');
        contentPara.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque odio tortor, vulputate at suscipit ac, hendrerit vitae lectus.Duis convallis risus et nunc tincidunt, non ornare semsagittis.Ut ut mollis lorem.Vestibulum ultrices eros id mattis bibendum.';
        sectionDiv.appendChild(contentPara);

        var element = document.createElement("input");

        //Assign different attributes to the element.
        element.className = "button";
        element.setAttribute("type", "Button");
        element.setAttribute("value", "Continue Reading");
        element.setAttribute("name", "Continue Reading");


        var continueBtn = document.createElement("BUTTON");
        continueBtn.className = "button";
        continueBtn.Name = "Continue Reading";
        continueBtn.Value = "Continue Reading";

        sectionDiv.appendChild(element);
        article.appendChild(sectionDiv);
        sectionMainContent.appendChild(article);
    //

    }
}
