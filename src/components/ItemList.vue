<template>
  <div>
    <div class="columns" v-if="items">
      <div 
        class="column is-one-quarter"
        v-for="item in filteredItems"
      >
        <div
          class="card"
        >
          <div class="card-image">
            <figure class="image is-square">
              <img :src="item.thumbnailUrl"/>
            </figure>
          </div>
          <div class="card-content">
            <router-link :to="`/${item.id}`">
              <h2>{{ item.title }}</h2>
            </router-link>
          </div>
        </div>
      </div>
      <button
      class="button is-primary"
        v-if="itemsCount >= itemsPerPage"
        @click="showNext(12)"
      >
        Show next 12
      </button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import 'bulma/css/bulma.css';

  export default {
    name: 'item-list',

    data() {
      return {
        endpoint: 'https://jsonplaceholder.typicode.com/photos',
        items: null,
        itemsPerPage: 12,
      };
    },

    computed: {
      filteredItems() {
        return this.items.slice(0, this.itemsPerPage);
      },

      itemsCount() {
        return this.items.length;
      },
    },

    methods: {
      getItems() {
        axios.get(this.endpoint)
          .then((response) => {
            this.items = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      showNext(num) {
        this.itemsPerPage += num;
      },
    },

    mounted() {
      this.getItems();
    },
  };
</script>

<style scoped>
  .columns {
    flex-wrap: wrap;
  }
  .button {
    width: 100%;
  }
</style>