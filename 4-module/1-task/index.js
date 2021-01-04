/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {

  let list = document.createElement('ul');

  friends.forEach(({firstName, lastName}) => {
    let item = document.createElement('li');
    item.innerHTML = `${firstName}${lastName}`;
    list.append(item);
  });

  return list;
}
