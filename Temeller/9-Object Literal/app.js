let value;

const programmer = {
    name : "Ömer Faruk CANBAZ",
    age : 25,
    email: "cnbz06@yandex.com",
    langs:["python","java","js"],
    
    address: {
        city:"Ankara",
        street:"Yenimahalle"
    },

    work : function(){
        console.log("Programcı Çalışıyor...");
    }
}


value = programmer;
value = programmer.email;
value=programmer.langs;
value=programmer.address.city;
programmer.work();




console.log(value);