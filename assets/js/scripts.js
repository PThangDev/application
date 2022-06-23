const init = () => {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const data = [
    {
      id: 1,
      title: 'How do I apply ?',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam alias qui veritatis odit modi magni iste hic, eaque, quidem esse eligendi architecto dolores incidunt, sit deleniti dolorum velit cumque dignissimos!',
    },
    {
      id: 2,
      title: 'How do I apply ?',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam alias qui veritatis odit modi magni iste hic, eaque, quidem esse eligendi architecto dolores incidunt, sit deleniti dolorum velit cumque dignissimos!',
    },
    {
      id: 3,
      title: 'How do I apply ?',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam alias qui veritatis odit modi magni iste hic, eaque, quidem esse eligendi architecto dolores incidunt, sit deleniti dolorum velit cumque dignissimos!',
    },
    {
      id: 4,
      title: 'How do I apply ?',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam alias qui veritatis odit modi magni iste hic, eaque, quidem esse eligendi architecto dolores incidunt, sit deleniti dolorum velit cumque dignissimos!',
    },
  ];
  //
  const tabList = $('.tab-list');

  const tabItemHtmls = data
    .map(
      (item) =>
        `
          <li class="tab-item">
            <div class="tab-item-header">
              <h2 class="order">0${item.id}</h2>
              <h3 class="title">${item.title}</h3>
              <span class="tab-item-plus"> + </span>
            </div>
            <div class="content">
              <p class="content-text">
                ${item.content}
              </p>
            </div>
            <h2 class="order-sub">0${item.id}</h2>
          </li>
    `
    )
    .join('');

  tabList.innerHTML = tabItemHtmls;

  // Handle click tab item
  const tabItemPluses = $$('.tab-item-plus');
  const tabItems = $$('.tab-item');

  const handleToggleTab = (index) => {
    tabItems.forEach((item, tabItemIndex) => {
      if (index === tabItemIndex) {
        item.classList.toggle('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  tabItemPluses.forEach((tabItemPlus, index) => {
    tabItemPlus.addEventListener('click', () => handleToggleTab(index));
  });
};

document.addEventListener('DOMContentLoaded', init, false);
