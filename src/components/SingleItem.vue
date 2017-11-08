<template>
  <div>
    <div class="columns" v-if="item">
      <div class=" column is-one-third">
        <figure class="image is-3by2">
          <img :src="item.url"/>
        </figure>
      </div>
      <div class="column">
        <div class="title">
          {{ item.title }}
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus pariatur architecto itaque maxime quae consectetur explicabo! Debitis tempore atque, modi soluta at, quia quas corrupti, non libero unde tempora beatae vitae vero dolores deleniti placeat quae odio adipisci repudiandae ipsa illo harum hic nihil natus! Nostrum aliquid maxime quasi.
        </div>
        <router-link to="/"> < Back </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'singe-item',

    props: {
      id: {
        type: String,
        required: true,
      },
    },

    data() {
      return {
        endpoint: 'https://jsonplaceholder.typicode.com/photos',
        item: null,
        isLoading: true,
      };
    },

    methods: {
      getItem() {
        axios.get(`${this.endpoint}/${this.id}`)
          .then((response) => {
            this.item = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },

    mounted() {
      this.getItem();
    },
  };
</script>

<style scoped>

</style>