(async function () {

  async function renderTable(students) {

    function calculateAge(userDate) {
      let birthDate = new Date();
      userDate = new Date(userDate);

      let years = (birthDate.getFullYear() - userDate.getFullYear());

      if (years == "") {
        alert('Число,месяц и год рождения')
        return ''
      }
      let birthMonth = birthDate.getMonth()
      birthMonth++

      let userMonth = userDate.getMonth(userDate)
      userMonth++

      let birthGetDate = birthDate.getDate()
      // birthGetDate++

      let userGetDate = userDate.getDate(userDate)
      // userGetDate++

      if (birthMonth < userMonth ||
        birthMonth == userMonth && birthGetDate < userGetDate) {

        years--; // если день рождения еще не наступил, уменьшим возраст на 1
      }

      let years2 = years + "(лет)"
      let years3 = years + "(года)"

      let count = years % 100;
      if (count >= 10 && count <= 20) {
        return years2;
      } else {
        count = years % 10
        if (count === 1) {
          return years3

        } else if (count >= 2 && count <= 4) {
          return years3;

        } else {
          return years2
        }
      }


    }
    let userYare = document.getElementById('yare').value.trim()

    function calculationDateCourse(userYare) {

      if (userYare == "") {
        return ''
      }
      let userYar = new Date(userYare).getFullYear() // Дата поступления
      let userMonth = new Date().getMonth()
      userMonth++

      let userGetMonth = new Date(userYare).getMonth()
      userGetMonth++

      if (userYar < 2000) {
        // let userNo = alert("Вы ввели не верную дату поступления")
        // return userNo
      }
      b = userYar + 4
      let result = userYar

      let yare = new Date().getFullYear()
      let ageYare = yare - result

      userStudentYare = userYar + "-" + b

      if (userMonth <= userGetMonth && ageYare >= 4) {
        userStudentYare = userYar + "-" + b + " " + '(Закончил)'
        return userStudentYare


      } else if (ageYare == 4) {
        userStudentYare = userYar + "-" + b + " " + '(4 курс)'

        return userStudentYare



      } else if (ageYare == 3) {
        userStudentYare = userYar + "-" + b + " " + '(3 курс)'

        return userStudentYare

      } else if (ageYare == 2) {
        userStudentYare = userYar + "-" + b + " " + '( 2курс)'

        return userStudentYare
      } else if (ageYare == 1) {
        userStudentYare = userYar + "-" + b + " " + '(1 курс)'

        return userStudentYare
      }


      else (ageYare <= -1)

      return userStudentYare


    }


    const tableBody = document.getElementById('table-body');
    let table = document.createElement('table')
    table.classList.add("table", "table-bordered", "border-primary")
    tableBody.innerHTML = ''; // Очищаем содержимое таблицы



    // Проходимся по массиву студентов и добавляем каждого студента в таблицу
    students.forEach((student) => {

      tableBody.appendChild(table)


      let row = document.createElement('tr');
      row.classList.add('list-tr', "table-bordered", "border-primary")
      table.appendChild(row)

      let nameCell = document.createElement('th');
      nameCell.classList.add('th1')
      let nameFacultyCell = document.createElement('th');
      nameFacultyCell.classList.add("th2")
      let ageStudentCell = document.createElement('th')
      ageStudentCell.classList.add("th3")
      let gradeCell = document.createElement('th')
      gradeCell.classList.add("th4")

      row.append(nameCell)
      row.append(nameFacultyCell)
      row.append(ageStudentCell)
      row.append(gradeCell)

      let deletButton = document.createElement('button')

      deletButton.classList.add("btn", "btn-danger")
      deletButton.textContent = "Удалить"


      deletButton.addEventListener('click', async () => {
        await serverDeleteSudent(student.id)
        row.remove()
        console.log(student)
      })


      row.append(deletButton)
      age = calculateAge(student.birthday)
      yare = calculationDateCourse(student.studyStart)



      function formatDate(date) {

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = date.getFullYear();
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
      }


      nameCell.textContent = student.surname + " " + student.name + " " + student.lastname
      nameFacultyCell.textContent = student.faculty;
      gradeCell.textContent = yare
      ageStudentCell.textContent = formatDate(new Date(student.birthday)) + " " + age

      tableBody.appendChild(table);
    })
  }

  //  Отправляем запрос на список дел
  async function serverGet() {
    const response = await fetch('http://localhost:3000/api/students')
    console.log(response)
    data = await response.json();
    return data
  }
  const studentsList = await serverGet()

  studentsList.birthday = new Date(studentsList.birthday)

  if (studentsList !== null) {
    renderTable(studentsList)
  }

  async function serverDeleteSudent(id) {

    let response = await fetch('http://localhost:3000/api/students/' + id, {
      method: 'DELETE',
    })
    if (!confirm('Вы уверены')) {
      student == false
      return renderTable(studentsList)
    }
    let data = await response.json()
    return data
  }

  document.getElementById('form').addEventListener('submit', async function (event) {
    event.preventDefault()

    let userName = document.getElementById('name-inp').value.trim()
    if (userName == "") {
      alert('Вы не ввели имя')
      return ''
    }

    let userSurname = document.getElementById('surname').value.trim()
    if (userSurname == "") {
      alert('Вы не ввели фамилию')
      return ''
    }
    let userPatronymic = document.getElementById('patronymic').value.trim()
    if (userPatronymic == "") {
      alert('Вы не ввели дату отчество')
      return ''
    }


    let userDate = new Date(document.getElementById('date').value.trim())
    console.log(userDate)
    if (userDate == "") {
      alert('Вы не ввели дату рождения')
      return ''
    }

    if (new Date(userDate) < new Date(1900, 0, 1)) {
      alert("Не верно указана дата рождения")
      return '';
    }

    function calculateAge(userDate) {

      let birthDate = new Date();
      userDate = new Date(userDate);
      console.log(userDate)
      let years = (birthDate.getFullYear() - userDate.getFullYear());


      if (years == "") {
        alert('Число,месяц и год рождения')
        return ''
      }

      let birthMonth = birthDate.getMonth()
      birthMonth++

      let userMonth = userDate.getMonth(userDate)
      userMonth++

      let birthGetDate = birthDate.getDate()

      let userGetDate = userDate.getDate(userDate)

      if (birthMonth < userMonth ||
        birthMonth == userMonth && birthGetDate < userGetDate) {

        years--; // если день рождения еще не наступил, уменьшим возраст на 1
      }

      let years2 = years + "(лет)"
      let years3 = years + "(года)"

      let count = years % 100;
      if (count >= 10 && count <= 20) {
        return years2;
      } else {
        count = years % 10
        if (count === 1) {
          return years3

        } else if (count >= 2 && count <= 4) {
          return years3;

        } else {
          return years2
        }
      }

    }

    let userYare = document.getElementById('yare').value.trim()
    if (userYare == "") {
      alert('Вы не ввели число,месц и год начала обучения')
      return ''
    }

    let userFaculty = document.getElementById('faculty').value.trim()
    if (userFaculty == "") {
      alert('Вы не ввели факультет')
      return ''
    }

    let ageStudent = calculateAge(userDate); // Format: MM/DD/YYYY


    let yearStudey = document.getElementById('date').value.trim();
    if (yearStudey == "") {
      alert('Вы не ввели дату рождения')
      return ''
    }
    let result = ""
    let b = ""

    const response = await fetch('http://localhost:3000/api/students', {

      method: 'POST',
      body: JSON.stringify({

        name: userName,
        surname: userSurname,
        lastname: userPatronymic,
        birthday: userDate,
        studyStart: userYare,
        faculty: userFaculty
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let todoItem = await response.json()
    studentsList.push(todoItem)
    renderTable(studentsList)

    userName = document.getElementById('name-inp').value = ''
    userSurname = document.getElementById('surname').value = ''
    userPatronymic = document.getElementById('patronymic').value = ''
    userDate = document.getElementById('date').value = ''
    userYare = document.getElementById('yare').value = ''
    userFaculty = document.getElementById('faculty').value = ''
  })


  let formBtn = document.querySelector('#formControl')
  formBtn.addEventListener('click', function () {
    let result = []

    let fio = document.querySelector('.formFio').value

    function filter(arr, prop, value) {

      for (const item of arr) {
        if (String(item[prop]).includes(value) == true) result.push(item)
      }
      if (fio == "") {
        alert('Вы не ввели данные для поиска')
        return
      }
    }
    filter(studentsList, 'name', fio)
    renderTable(result)
  })


  let btnFaculty = document.querySelector('#formFaculty')
  btnFaculty.addEventListener('click', function () {
    let result = []

    let fioInput = document.querySelector('.inputFaculty').value

    function filter(arr, prop, value) {
      for (const item of arr) {
        if (String(item[prop]).includes(value) == true) result.push(item)
      }
      if (fioInput == "") {
        alert('Вы не ввели данные для поиска')
        return
      }
    }
    filter(studentsList, 'faculty', fioInput)
    renderTable(result)
  })

  console.log(yare)

  let btnformYare = document.querySelector('#formYare')
  btnformYare.addEventListener('click', function () {

    let result = []

    let beginningInput = document.querySelector('.inputBeginning').value

    function filter(arr, prop, value) {
      for (const item of arr) {
        if (String(item[prop]).includes(value) == true) result.push(item)
      }
      if (beginningInput == "") {
        alert('Вы не ввели данные для поиска')
        return
      }
    }
    filter(studentsList, 'studyStart', beginningInput)
    renderTable(result)
  })

  console.log(studentsList.studyStart)


  let btnformAge = document.querySelector('#formAge')
  btnformAge.addEventListener('click', function () {
    console.log('aaaa')
    let result = []
    console.log(result)
    let endingInput = document.querySelector('.inputEnding').value

    function filter(studeyFinish) {
      for (const item of studentsList) {
        let userDate = item.studyStart

        const dateObj = new Date(userDate).getFullYear()
        studeyFinish = dateObj + 4
        console.log(studeyFinish)

        if (studeyFinish == endingInput)
          result.push(item)
      }
      if (endingInput == "") {
        alert('Вы не ввели данные для поиска')
        return
      }
    }
    filter(studentsList)
    renderTable(result)
  })


  let btnfio = document.querySelector('#fio')
  btnfio.addEventListener('click', function () {

    function sortUsers(students) {

      let result = students.sort(function (a, b) {
        if (a['name'] < b['name']) return -1
      })
      return result
    }

    let arrSort = sortUsers(studentsList)
    renderTable(arrSort)
  })

  let btnFacult = document.querySelector('#btnFaculty')
  btnFacult.addEventListener('click', function () {

    function sortUsers(students) {
      let result = students.sort(function (a, b) {
        if (a['faculty'] < b['faculty']) return -1
      })
      return result
    }

    let a = sortUsers(studentsList)
    renderTable(a)
  })

  let btnAge = document.querySelector('#btnAge')
  btnAge.addEventListener('click', function () {

    function sortUsers(studentsList) {
      let result = studentsList.sort(function (a, b) {
        if (a['birthday'] > b['birthday']) return -1
      })
      return result
    }

    let arrAge = sortUsers(studentsList)
    renderTable(arrAge)
  })


  let btnYare = document.querySelector('#btnYare')
  btnYare.addEventListener('click', function () {
    console.log('wwwwww')
    function sortUsers(studentsList) {

      let result = studentsList.sort(function (a, b) {
        if (a['studyStart'] > b['studyStart']) return -1
      })
      return result
    }

    let arrYare = sortUsers(studentsList)
    console.log(arrYare)
    renderTable(arrYare)
  })

})();


