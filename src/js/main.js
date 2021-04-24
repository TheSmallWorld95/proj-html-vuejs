Vue.config.devtools = true;


var app = new Vue (
  {
    el: "#root",
    data:{
      navbarItem: [
        {
          title: 'Home',
        },
        {
          title: 'About',
        },
        {
          title: 'Departments',
        },
        {
          title: 'Articles',
        },
      ],
      contacts: [
        {
          name: 'Facebook',
          link: 'https://it-it.facebook.com/',
        },
        {
          name: 'Instagram',
          link: 'https://www.instagram.com/',
        },
        {
          name: 'Twitter',
          link: 'https://twitter.com/?lang=it',
        },
      ],
    },
    mounted() {
    },
    methods: {
    },
  }
);
