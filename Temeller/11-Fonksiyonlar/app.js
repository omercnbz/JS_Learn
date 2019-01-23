// // Fonksiyon Tanımlama

// function merhaba(name,age){
//     console.log(`İsim ${name} Yaş: ${age}`);   
// }

// merhaba("ömer",21);  // Fonksiyon çağrısı (Function call)

// merhaba("ayşe", 30);

// merhaba();

// if (typeof name === "undefined") name = "Bilgi yok";


// //Undefined yerine varsayılan değer bilgiyok yazdırma
// function varsayilanDeger (name="Bilgi yok", age = "Bilgi yok"){
//     console.log(`isim: ${name} Yaş: ${age}`);
// }

// varsayilanDeger();

// varsayilanDeger("kadir");

                            //FONKSIYONLARDA RETURN

                            // * return fonksiyonu sonlandırır

function square(x){
    return x*x;
}
function cube (x){
    return x*x*x;
}

let a = square(12);
a=cube(a);


console.log(a);




