function calculateGrades()
{
// Load XML file
fetch('students.xml')
  .then(response => response.text())
  .then(xml => {
    // Parse XML using DOMParser
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'application/xml');

    // Get student elements
    const students = xmlDoc.getElementsByTagName('student');

    // Create HTML table to display grades
    const table = document.createElement('table');
    table.innerHTML = `
      <tr>
        <th>Name</th>
        <th>Subject 1</th>
        <th>Subject 2</th>
        <th>Subject 3</th>
        <th>Subject 4</th>
        <th>Subject 5</th>
        <th>Total</th>
        <th>Grade</th>
      </tr>
    `;

    // Loop through students and add rows to table
    for (const student of students) {
      const name = student.getElementsByTagName('name')[0].textContent;
      alert(name);
      
      const subject1 = parseInt(student.getElementsByTagName('subject1')[0].textContent);
      const subject2 = parseInt(student.getElementsByTagName('subject2')[0].textContent);
      const subject3 = parseInt(student.getElementsByTagName('subject3')[0].textContent);
      const subject4 = parseInt(student.getElementsByTagName('subject4')[0].textContent);
      const subject5 = parseInt(student.getElementsByTagName('subject5')[0].textContent);

      const total = subject1 + subject2 + subject3 + subject4 + subject5;
      let grade;
      if (total >= 450) {
        grade = 'A';
      } else if (total >= 350) {
        grade = 'B';
      } else if (total >= 250) {
        grade = 'C';
      } else {
        grade = 'F';
      }

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${name}</td>
        <td>${subject1}</td>
        <td>${subject2}</td>
        <td>${subject3}</td>
        <td>${subject4}</td>
        <td>${subject5}</td>
        <td>${total}</td>
        <td>${grade}</td>
      `;
      table.appendChild(row);
    }

    // Add table to HTML page
    document.getElementById('student-grades').appendChild(table);
  })
  .catch(error => console.error('Error:', error));
}