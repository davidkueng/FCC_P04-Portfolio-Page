import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-search-bar',    
    templateUrl: './search-bar.component.html'
        
     
})

export class Search_barComponent {    

    articleTitle:string = ""; 
    articleContent:string = ""; 
    inputEntry:string="";         

   // get wiki article from API
   constructor( private http: HttpClient) {} 

    getArticle(url, callback = 'callback') {
       return this.http.jsonp('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='
       + this.inputEntry + '&format=json', callback)
       .subscribe((json: any[]) => {     
            this.articleContent = json["query"]["search"]                                     
        })
    }  

}




