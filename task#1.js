let birthday = prompt('input date of your birthday');
console.log(birthday)
let plOfBirth = prompt('input place of your birthday');
console.log(plOfBirth)
let sport = prompt('input your favourite sport');
console.log(sport)

switch (plOfBirth) {
    case 'Kiev':
        console.log('You live in Kiev');
        break;
    case 'London':
        console.log('You live in London');
        break;
    case 'Washington':
        console.log('You live in Washington')
        break;
    default:
        console.log('Too bad...');
}

switch (sport) {
    case 'boxing':
        console.log('Cool! Do you want to be Mike Tyson?');
        break;
    case 'swimming':
        console.log('Cool! Do you want to be Michael Phelps?');
        break;
    case 'tennis':
        console.log('Cool! Do you want to be Roger Federer')
        break;
    default:
        console.log('Too bad...');
}