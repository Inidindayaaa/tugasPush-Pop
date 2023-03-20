const user = [{
    mobil:`Jeep Wrangler Rubicon`,
    pintu:`2`,
    keluaranTahun:'2003'
},
{
    mobil:`Chrysler Imperial Ghia`,
    pintu:`4`,
    keluaranTahun:'1957'
},
{
    mobil:`mini cooper`,
    pintu:`4`,
    keluaranTahun:'1962'
},
{
    mobil:`Bugatti Chiron`,
    pintu:`2`,
    keluaranTahun:'2016'
    
}
];
let nama =prompt("masukan nama Mobil");
const userNama = user.filter((user) => user.mobil === nama );
console.log(userNama); 
   