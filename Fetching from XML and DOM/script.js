function generateData(){
    fetch('comics.xml')
    .then(response=> response.text())
    .then(xml => {


        const parser= new DOMParser();
        const xmlDoc= parser.parseFromString(xml,'application/xml');


        const peoples= xmlDoc.getElementsByTagName('people');
        const table= document.createElement('table');
        table.innerHTML=`
        <tr>
        <th>Name</th>
        <th>Place</th>

        </tr>
        
        
        
        `;



        for(const people of peoples){
            const name= people.getElementsByTagName('name')[0].textContent;
            alert(name);


            const place=people.getElementsByTagName('place')[0].textContent;



            const row= document.createElement('tr');

            row.innerHTML=`
            <td>${name}</td>
            <td>${place}</td>
            
            `
            table.appendChild(row);
        }

        document.getElementById('registered-peeps').appendChild(table);

    })

    .catch(error => console.error('Error:', error));
}