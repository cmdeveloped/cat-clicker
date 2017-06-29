var model = {
  currentCat: null,
  cats: [
    {
      name:'Bluesy',
      id:'bluesy',
      img:'img/bluesy.jpg',
      clickCount: 0,
    },
    {
      name:'Baby Blue',
      id:'babyblue',
      img:'img/babyblue.jpg',
      clickCount: 0,
    },
    {
      name:'Huggers',
      id:'huggers',
      img:'img/huggers.jpg',
      clickCount: 0,
    },
    {
      name:'Tiny',
      id:'tiny',
      img:'img/tiny.jpg',
      clickCount: 0,
    },
    {
      name:'Gingy',
      id:'gingy',
      img:'img/gingy.jpg',
      clickCount: 0,
    }
  ]
};

var octopus = {
  init: function() {
    model.currentCat = model.cats[0];
    catListView.init();
    catView.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  catCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  }
};
