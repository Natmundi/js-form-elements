document.querySelector('.form__button').onclick = () => {
  const form = document.getElementById('form')
  const username = document.getElementById('username')

  console.log(username.reportValidity())

  if (!username.reportValidity()) {
    if (username.value.length === 0) {
      username.setCustomValidity(
        'Error: Hay que poner el nombre',
      )
    }
  }
  // if (form.reporValidity()) {
  //   form.submit()
  // } else {
  //   form.reset()
  // }
}

// document.querySelector('.form__button--add').onclick =
//   () => {
//     const age = document.getElementById('age')

//     age.stepUp(10)
//   }

document
  .querySelectorAll('.form__button--add')
  .forEach((element) => {
    // console.log(element)

    element.onclick = () => {
      if (element.getAttribute('operator') === '+') {
        return age.stepUp(
          Number(element.getAttribute('value')),
        )
      }

      if (element.getAttribute('operator') === '-') {
        return age.stepDown(
          Number(element.getAttribute('value')),
        )
      }
    }
  })

document.querySelector('.form__button--save').onclick =
  () => {
    const value = document.getElementById('username').value
    if (value.length === 0) alert('Данних нема')

    navigator.clipboard
      .writeText(value)
      .then(() => alert('Данні зберегли'))
  }
