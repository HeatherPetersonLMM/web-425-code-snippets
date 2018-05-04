let firstName: string = 'Richard';
let lastName: string = 'Krasso';

// whoami function
function myName(firstName: string, lastName: string): string {
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(myName(firstName, lastName));