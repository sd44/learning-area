var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (var guest of people) {
  if (guest === 'Phil' || guest === 'Lola') {
    refused.textContent += guest + ', ';
  } else {
    admitted.textContent += guest + ', ';
  }
}

if (refused.textContent.endsWith(', ')) {
  refused.textContent = refused.textContent.slice(0, -2);
}
if (admitted.textContent.endsWith(', ')) {
  admitted.textContent = admitted.textContent.slice(0, -2);
}
// var i = 0;

// refused.textContent += ;
// admitted.textContent += ;
