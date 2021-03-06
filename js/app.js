var model = {
  currentCat: null,
  cats: [
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
    },
    {
      name:'Bluesy',
      id:'bluesy',
      img:'img/bluesy.jpg',
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

var catView = {

  init: function() {
    this.catElem = document.getElementById('cat');
    this.catName = document.getElementById('name');
    this.catImage = document.getElementById('image');
    this.countClicks = document.getElementById('count');

    this.catImage.addEventListener('click', function() {
      octopus.catCounter();
    });

    this.render();
  },

  render: function() {
    var currentCat = octopus.getCurrentCat();
    this.countClicks.textContent = currentCat.clickCount;
    this.catName.textContent = currentCat.name;
    this.catImage.src = currentCat.img;
  }
};

var catListView = {

  init: function() {
    this.catListElem = document.getElementById('catList');
    this.render();
  },

  render: function() {
    var cat, elem, i;
    var cats = octopus.getCats();
    this.catListElem.innerHTML = '';

    for (i = 0; i < cats.length; i++) {
      cat = cats[i];
      elem = document.createElement('li');
      elem.textContent = cat.name;
      elem.addEventListener('click', (function(sirCat) {
        return function() {
          octopus.setCurrentCat(sirCat);
          catView.render();
        };
      })(cat));

      this.catListElem.appendChild(elem);
    }
  }
};

octopus.init();
