
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
  props: ['kitchen'],
  template: `
          <div class="articles-all">
            <h1 class="articles-all-title">{{ kitchen.title }}</h1>
            <p class="articles-all-text">{{ kitchen.text }}</p
            <div class="articles-all-list">
                <ol class="li">
                    <li class="item" v-for="item in kitchen.items">{{ item.text }}</li>
                </ol>
                <img class="image" :src="kitchen.image" :alt="kitchen.name">
                <p class="articles-all-text">{{ kitchen.imageText }}</p>
            </div>
            
          </div>
        `
});
Vue.component('sort-buttons', {
  props: ['button'],
  template: `
        <button @click="sortByTags()" class="btn">{{button}}</button>
      `,
  methods: {
    sortByTags() {
      if (this.button === 'Bedroom') {
        console.log(`${this.button}`);
        return component = 'all-bedrooms';
      }
      
      
      return this.component    }
  },
});

Vue.component('all-bedrooms', {
  props: ['bedroom'],
  template: `
          <div class="all-bedrooms">
            <h1 class="all-bedrooms-title">{{ bedroom.title }}</h1>
            <p class="all-bedrooms-text">{{ bedroom.text }}</p
            <div class="all-bedrooms-list">
                <ol class="li">
                    <li class="item" v-for="item in bedroom.items">{{ item.text }}</li>
                </ol>
                <img class="image" :src="bedroom.image" :alt="bedroom.name">
                <p class="all-bedrooms-text">{{ bedroom.imageText }}</p>
            </div>
            
          </div>
        `
});