import showBurger from "../entities/burger/model/showBurger";

test('showBurger function test', () => {
  const burgerIcon = document.createElement('div');
  burgerIcon.classList.add('burger');

  const span = document.createElement('span');
  span.classList.add('burger-icon');

  const levelsList = document.createElement('div');
  levelsList.classList.add('levels__list');

  const blockContainer = document.createElement('div');
  blockContainer.classList.add('sidebar');
  
  const resetBtn = document.createElement('button');
  resetBtn.classList.add('reset-btn');

  document.body.appendChild(burgerIcon);
  document.body.appendChild(span);
  document.body.appendChild(levelsList);
  document.body.appendChild(blockContainer);
  document.body.appendChild(resetBtn);

  showBurger();

  expect(burgerIcon.classList.contains('active')).toBe(true);
  expect(span.classList.contains('active')).toBe(true);
  expect(levelsList.classList.contains('active')).toBe(true);
  expect(blockContainer.classList.contains('active')).toBe(true);
  expect(resetBtn.classList.contains('active')).toBe(true);

  showBurger();

  expect(burgerIcon.classList.contains('active')).toBe(false);
  expect(span.classList.contains('active')).toBe(false);
  expect(levelsList.classList.contains('active')).toBe(false);
  expect(blockContainer.classList.contains('active')).toBe(false);
  expect(resetBtn.classList.contains('active')).toBe(false);

});
