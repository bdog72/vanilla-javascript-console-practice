var age = 25

if (age <= 20) {
  console.log('John is a teenager')
} else if (age > 20 && age < 30) {
  console.log('John is a young man')
} else {
  console.log('John is a man')
}

var job = 'teacher'

// job = prompt('what does john do')

switch (job) {
  case 'teacher':
    console.log('john teaches kids')
    break
  case 'driver':
    console.log('John drives a cab')
    break
  case 'cop':
    console.log('john helps fight crime')
    break
  default:
    console.log('John does something else')
}
