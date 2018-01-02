
import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import './styles/app.css';
import $ from "jquery";

let subscriptionKey = '3f06274994304067b75b413d59a5b251';
let host = 'https://api.cognitive.microsoft.com';
let path = '/bing/v7.0/search';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchResults: [],
        };
    }
    // I admit this took me a really long time to figure out the Bing API isn't as straightforward as the NY Times API..It took me pretty much the entire 
    // time to figure out. What really stomped me was the api key it’s not like other API keys where you can just input at the end. I had to set a header. 
    // I had never set a header before and it honestly wasn't easy to set this one I kept getting error codes. So, I turned to Stack overflow, Kirupa.com, 
    // Slack, and Freecodecamp forum. Although all had some really good info and pointed me in the general direction none really helped me figure out what 
    // I was doing wrong I read the docs on React fetch from there I went to the jquery Ajax documentation. Before I get carried away with the endless hole 
    // I went down let me explain my process. I hadn't done a API React API in quite a while, so I first decided to take a look at some tutorials and videos 
    // on making a React app incorporating an API. I first decided after watching the videos that I wanted to go with Axios because I could download an npm 
    // package to help. I read the documentation on that but I ran into several authorization errors then I decided ok everyone on seems to like the Fetch 
    // API so I took a look at that maybe it’s because I've dealt more with Jquery that fetch didn't seem as straightforward as everyone suggested.  
    // I decided after 3 days of reading fetch documentation, axios documentation and JQuery documentation that maybe I should go down the Jquery route 
    // which is what I have here. Again, never setheaders before the jquery ajax documentation isn't the best to navigate especially when I had no clue what 
    // to search. I spent all my time on just figuring out this API.I finally found the answer which was beforeSend turns out that this will set the header 
    // before it throws the AJAX call which is what I needed. I spent these past two days trying to figure out how to get my AJAX call incorporated into a React.
    // Things I learned where that there are several different methods to make an AJAX call Fetch is the newest of the methods and depending on what browser you 
    // use you might need polyfillers. That although there are endless resources out there for a multitude of things knowing what exactly you are looking for will 
    // greatly help you filter through the results. That I need to greatly improve my understanding of React. Lastly that even when you get frustrated you can’t 
    // give up there were times were I just thought maybe I’m not good at this, but I stuck through it.  Although my app is not by any means complete I’m proud of 
    // it and myself. I not only challenged myself, but I learned valuable things through the process and I now know more than I had before. 
    handleTermChange(term) {
        $.ajax({
            method: "GET",
            url:host+path+'?q='+ encodeURIComponent(term),
            dataType:'text',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Ocp-Apim-Subscription-Key', subscriptionKey);
            },
            success: function(searchResults) {
                var json = JSON.stringify(searchResults, ['name', 'id', 'url', 'website']); 
                document.querySelector('.paging1').innerHTML= json;
                console.log(searchResults);
            } 
        });
    }

    render() {
        return (
            <div>
                <SearchBar onTermChange={term  => this.handleTermChange(term)}/>
                <SearchResults searchResults={this.state.searchResults}/>
                
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));