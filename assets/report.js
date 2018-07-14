// Hide ignored rows and add a "show ignored" button
for (const tbody of document.querySelectorAll('.results tbody')) {
  const ignored = tbody.querySelectorAll('tr.ignore');
  if (ignored.length > 3) {
    tbody.classList.add('hideIgnore');
    tbody.querySelector('.ignore')
      .insertAdjacentHTML(
        'beforebegin',
        `<tr class="ignore-header"><td colspan="3">
          <button><span>Show</span><span>Hide</span>
          skipped elements (${ignored.length})</button></td></tr>`
      );
    tbody.querySelector('.ignore-header button')
      .addEventListener('click', () => {
        tbody.classList.toggle('hideIgnore');
      });
  }
}

// Add the show/hide buttons for body source
for (const source of document.querySelectorAll('.results .result-body')) {
  const dest = source.previousElementSibling
    ? source.previousElementSibling.querySelector('td.dest')
    : null;
  if (dest) {
    dest.insertAdjacentHTML(
      'beforeend',
      `<br><button>Show HTML</button>`
    );
    dest.querySelector('button')
      .addEventListener('click', () => {
        source.hidden = !source.hidden;
      });
  }
}
