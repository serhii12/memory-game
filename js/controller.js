class Controller {
  constructor() {
    
  }
}
class View {
  constructor(selector) {
    this.view = document.querySelector(selector);
    this.show();
  }
  show() {
    this.view.classList.remove('hidden');
    // TODO: Add some elements
  }
  destroy() {
    this.view.classList.add('hidden');
    // TODO: Remove some elements
  }
  addItem() {}
}
class GameController extends View {
  constructor() {
    super('#game');
    console.log('GameController');
    // this.view.innerHTML = "<div>AAAAAAAAAAA</div>";
  }
  show() {
    super.show();
    // TODO: Add some elements
  }
  destroy() {
    super.destroy();
    // TODO: Remove some elements
  }
}
class IntroController extends View {
  constructor() {
    super('#intro');
    console.log('IntroController');
  }
  show() {
    super.show();
    // TODO: Add some elements
  }
  destroy() {
    super.destroy();
    // TODO: Remove some elements
  }
}
const PageControllers = {
  IntroController,
  GameController
};
class AppController {
  constructor() {
    this.activePage = null;
  }
  hidePage() {
    if (this.activePage && this.activePage.destroy) this.activePage.destroy();
  }
  showPage(pageId) {
    this.hidePage();
    const pageControllerName = `${pageId}Controller`;
    if (!PageControllers[pageControllerName]) return;
    this.activePage = new PageControllers[pageControllerName]();
    console.log(pageControllerName);
  }
}
const app = new AppController();
app.showPage('Game');