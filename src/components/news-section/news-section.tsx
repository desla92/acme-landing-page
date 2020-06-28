import { Component, ComponentInterface, h, State } from '@stencil/core';
import { Post } from './posts.interface';

@Component({
  tag: 'news-section',
  styleUrl: 'news-section.scss',
  shadow: true,
})
export class NewsSection implements ComponentInterface {
  @State() posts: Array<Post> =[];

  
  private getNews(){
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => (response.json()))
      .then(json=> {this.posts = json.filter((element, i)=> i<6)}
      )
  }
  componentWillRender(){
    this.getNews();
  }
  render() {
    return (
      <section class="container">
        <div class="flex">
          <h2>Le ultime News dal mondo ACME</h2>
          <a href="javascript:void(0)">Leggi tutte le news<ion-icon name="arrow-forward-outline"></ion-icon></a>
        </div>
        <div class="newsContainer">
          {this.posts.map(post => 
            <article class="singleArticle">
            <img src="https://via.placeholder.com/300x150/12A6E6/FFFFFF/?text=AcmeEnterprise" alt=""/>
            <h3 class="articleTitle">{post.title}</h3>
            <p class="articleDescription">{post.body}</p>
            <div class="right"><a href="javascript:void(0)">leggi di più<ion-icon name="arrow-forward-outline"></ion-icon></a></div>
          </article>
          )}
        </div>
      </section>
    );
  }

}
