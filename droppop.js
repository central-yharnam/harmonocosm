let html = '';


var nodeValues = new Array(12);

for (let i = 1; i <= 12; ++i) {
    
  html+= `
  <li>Node <span class="qnum">${i}</span>:
    <select id="menu${i}">
      <option val = "${i}">select a note for node ${i}</option>
      <option val="1">A</option>
      <option val="2">A# / B♭</option>
      <option val="3">B</option>
      <option val="4">C</option>
      <option val="5">C# / D♭</option>
      <option val="6">D</option>
      <option val="7">D# / E♭</option>
      <option val="8">E</option>
      <option val="9">F</option>
      <option val="10">F# / G♭</option>
      <option val="11">G</option>
      <option val= "12"> G# / A♭</option>           
    </select>
    <span>(value selected is <span class="selected">0</span>)</span>
  </li>`;
  }  
    $('ul').append(html);