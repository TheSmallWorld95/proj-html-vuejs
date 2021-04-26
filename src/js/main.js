Vue.config.devtools = true;


var app = new Vue (
  {
    el: "#root",
    data:{
      navbarItem: [
        {
          title: 'Home',
          url: '#'
        },
        {
          title: 'About',
          url: '#'
        },
        {
          title: 'Departments',
          url: '#'
        },
        {
          title: 'Articles',
          url: '#'
        },
      ],
      footerItem: [
        {
          name: 'Medical Departments',
          links: [
            {
              title: 'Cardiology',
              url: '#'
            },
            {
              title: 'Pediatrics',
              url: '#'
            },
            {
              title: 'Diabetes Care',
              url: '#'
            },
            {
              title: 'Pre-natel Care',
              url: '#'
            },
            {
              title: 'Ultrasound Echocardiogram',
              url: '#'
            },
          ],
        }
      ],
      doctorInfo: [
        {
          name: 'Jon Snow',
          img: '1',
          job: 'Anesthesiologist',
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
          socials: [
            {
              name: 'facebook',
              url: 'https://it-it.facebook.com/',
            },
            {
              name: 'instagram',
              url: 'https://www.instagram.com/',
            },
            {
              name: 'twitter',
              url: 'https://twitter.com/?lang=it',
            },
          ],
        },
        {
          name: 'Tony Stark',
          img: '2',
          job: 'Cardiologist',
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
          socials: [
            {
              name: 'facebook',
              url: 'https://it-it.facebook.com/',
            },
            {
              name: 'instagram',
              url: 'https://www.instagram.com/',
            },
            {
              name: 'twitter',
              url: 'https://twitter.com/?lang=it',
            },
          ],
        },
        {
          name: 'Anna Smith',
          img: '3',
          job: 'Nurse Practitioner',
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
          socials: [
            {
              name: 'facebook',
              url: 'https://it-it.facebook.com/',
            },
            {
              name: 'instagram',
              url: 'https://www.instagram.com/',
            },
            {
              name: 'twitter',
              url: 'https://twitter.com/?lang=it',
            },
          ],
        }

      ],
      footerContacts: [
        {
          name: 'facebook',
          link: 'https://it-it.facebook.com/',
        },
        {
          name: 'twitter',
          link: 'https://twitter.com/?lang=it',
        },
        {
          name: 'youtube',
          link: 'https://www.youtube.com/',
        },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/',
        },
      ],
      name: '',
      email: '',
      number: '',
      date: '',
      text: '',
    },
    mounted() {
    },
    methods: {
      goto: function(refName) {
        var element = this.$refs[refName];
        var top = element.offsetTop;
        window.scrollTo(0, top);
      },
      send: function () {
        this.name = '';
        this.email = '';
        this.number = '';
        this.date = '';
        this.text = '';
      }
    },
  }
);
