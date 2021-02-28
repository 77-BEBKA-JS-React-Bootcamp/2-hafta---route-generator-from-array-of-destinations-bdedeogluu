const tickets = [ ['USA', 'BRA'], ['JPN', 'PHL'], ['UAE', 'JPN'], ['BRA', 'UAE'];

const flyFrom = tickets.map((i) => i[0]);
const flyDestination = tickets.map((i) => i[1]);

const initialLocation = flyFrom.filter((country) => !flyDestination.includes(country))[0];

let path = [initialLocation];
let current = initialLocation;

while( path.length < tickets.length + 1 ){
    tickets.map(( country ) => {
        if( country[0] == current ){
            current = country[1];
            path.push(current);
        }
    });
}

console.log(path);
path.reverse();
console.log(path);