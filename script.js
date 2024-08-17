function yourAge() {
    var d1 = parseInt(document.getElementById('date').value);
    var m1 = parseInt(document.getElementById('month').value);
    var y1 = parseInt(document.getElementById('year').value);

    var date = new Date();

    var d2 = date.getDate();
    var m2 = date.getMonth() + 1;
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById('output').innerHTML = `Your age is <span> ${y}</span> years <span> ${m}</span> months <span> ${d}</span> days.`;


         // Clear input fields after calculation
    document.getElementById('date').value = '';
    document.getElementById('month').value = '';
    document.getElementById('year').value = '';

    
}

alert('Please carefully type your date of birth here!!')