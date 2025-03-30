
// Function to create and add a div to the page
function addWeekPreview() {
    // Create the div element
    const newDiv = document.createElement('div');

    // Style the div
    newDiv.style.position = 'fixed';
    newDiv.style.top = '100';
    newDiv.style.left = '0';
    newDiv.style.width = '100vw';
    newDiv.style.height = '300px';
    newDiv.style.backgroundColor = '#f2e6d7';
    newDiv.style.paddingTop = '40px';
    newDiv.style.fontSize = '16px';
    newDiv.style.zIndex = '1000';
    newDiv.id = "week_preview";

    // Append the div to the body of the page
    document.body.appendChild(newDiv);

    greetButton = document.getElementById('test');
}

function updateWeekPreview(daylist) {
    let newDiv = document.getElementById("week_preview");

    let daybody = '';
    let dayTotal = {};
    for(day in daylist) {
        weekday = new Date(day).getDay();
        if(!(day in dayTotal)) {
            dayTotal[day] = 0;
        }
        daybody += `<div style="grid-column: ${weekday};" class="day">`;
        for(item in daylist[day]) {
            daybody += `<div class="element" style="height: ${daylist[day][item]}%;">${daylist[day][item]}%|${item}</div>`
            dayTotal[day] += daylist[day][item];
        }
        daybody += `</div>`;
    }
    console.log(dayTotal);

    let dayheader = '';
    let daycount = 0;
    for(day in daylist) {
        let date = new Date(day);
        weekday = date.getDay();
        console.log({day});
        console.log({weekday});

        const weekdays = ['Sunday', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayString = `${weekdays[weekday]} ${date.getDate()}/${date.getMonth()}`;
        if (dayTotal[day] === 100) {
            dayheader += `<div style="grid-column: ${weekday}; background: #a1e868;" class="dayheader">${dayString} ${dayTotal[day]}%</div>`
        } else {
            dayheader += `<div style="grid-column: ${weekday}; background: orange;" class="dayheader">${dayString} ${dayTotal[day]}% &#x26A0;</div>`
        }
        daycount += 1;
    }

    newDiv.innerHTML = `
<style>
.container{ 
display: grid;
grid-template-columns: repeat(5, 1fr);
}
.dayheader {
grid-row: 1;
display: flex;
border: 1px solid black;
border-radius: 5px 5px 0px 0px;
}
.day {
display: flex;
flex-direction: column;
height: 200px;
border: 1px solid black;
border-radius: 0px 0px 5px 5px;
}
.element {
background: white;
border: 1px solid black;
margin: -1px;
width: 100%;
border-radius: 5px;
}
</style>
<div class="container">
    ${dayheader}
    ${daybody}
</div>
`;
    
}

daylist = {
    "2025-03-03": {"cofee": 20, "coffee": 50, "stuff":10},
    "2025-03-04": {"cofee": 30, "coffee": 50, "stuff":10},
    "2025-03-06": {"cofee": 50, "coffee": 50, "more_stuff":50},
}

addWeekPreview();
updateWeekPreview(daylist);
console.log("test");
