Vue.config.devtools = true;


var app = new Vue (
  {
    el: "#root",
    data:{
      contacts: [
        {
          name: 'Facebook',
          link: 'https://it-it.facebook.com/',
        },
        {
          name: 'Facebook',
          link: 'https://it-it.facebook.com/',
        },
        {
          name: 'Facebook',
          link: 'https://it-it.facebook.com/',
        },
      ],
    },
    mounted() {
    },
    methods: {
    },
  }
);
