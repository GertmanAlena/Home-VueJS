
Vue.component('article-component', {
  props: ['article'],
  template: `
          <div class="article">
            <h1 class="article-title">{{ article.title }}</h1>
            <img class="article-image" :src="article.image" :alt="article.name" width="100">
            <div class="article-data">
                <p>{{ article.data }}</p>
                <p>{{ article.page }}</p>
            </div>
            <p class="article-description">{{ article.description }}</p>
          </div>
        `
});

Vue.component('article-all-component', {
  props: ['t'],
  template: `
          <div class="articles-all">
            <h1 class="articles-all-title">{{ t.title }}</h1>
            <p class="articles-all-text">{{ t.text }}</p
            <div class="articles-all-list">
                <ol class="li">
                    <li class="item" v-for="item in t.items">{{ item.text }}</li>
                </ol>
                <img class="image" :src="t.image" :alt="t.name">
                <p class="articles-all-text">{{ t.imageText }}</p>
            </div>
            
          </div>
        `
});
Vue.component('sort-buttons', {
  props: ['button'],

  template: `
        <button class="btn"  @click="$emit('click')">{{button}}</button>
      `,
        
      
});

