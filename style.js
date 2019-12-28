let arr = [{
    "id": 1,
    "first_name": "Barris",
    "last_name": "Tuckey",
    "email": "btuckey0@toplist.cz",
    "gender": "Male",
    "ip_address": "133.240.116.39"
}, {
    "id": 2,
    "first_name": "Katherine",
    "last_name": "Le Galle",
    "email": "klegalle1@umn.edu",
    "gender": "Female",
    "ip_address": "177.249.170.105"
}, {
    "id": 3,
    "first_name": "Lyon",
    "last_name": "Linnemann",
    "email": "llinnemann2@technorati.com",
    "gender": "Male",
    "ip_address": "236.24.113.84"
}, {
    "id": 4,
    "first_name": "Gloriana",
    "last_name": "Kembley",
    "email": "gkembley3@bandcamp.com",
    "gender": "Female",
    "ip_address": "62.10.105.12"
}, {
    "id": 5,
    "first_name": "Bertha",
    "last_name": "Wattingham",
    "email": "bwattingham4@instagram.com",
    "gender": "Female",
    "ip_address": "115.154.50.117"
}, {
    "id": 6,
    "first_name": "Marcos",
    "last_name": "Swyne",
    "email": "mswyne5@mit.edu",
    "gender": "Male",
    "ip_address": "207.106.233.205"
}, {
    "id": 7,
    "first_name": "Keene",
    "last_name": "Norcliffe",
    "email": "knorcliffe6@vistaprint.com",
    "gender": "Male",
    "ip_address": "147.181.54.181"
}, {
    "id": 8,
    "first_name": "Aubry",
    "last_name": "Tofanelli",
    "email": "atofanelli7@ucsd.edu",
    "gender": "Female",
    "ip_address": "23.189.63.90"
}, {
    "id": 9,
    "first_name": "Obediah",
    "last_name": "Stonner",
    "email": "ostonner8@sciencedaily.com",
    "gender": "Male",
    "ip_address": "217.183.242.126"
}, {
    "id": 10,
    "first_name": "Martica",
    "last_name": "Poole",
    "email": "mpoole9@sciencedirect.com",
    "gender": "Female",
    "ip_address": "8.51.60.158"
}, {
    "id": 11,
    "first_name": "Angelia",
    "last_name": "Core",
    "email": "acorea@accuweather.com",
    "gender": "Female",
    "ip_address": "51.247.149.161"
}, {
    "id": 12,
    "first_name": "Jacintha",
    "last_name": "McGeachie",
    "email": "jmcgeachieb@guardian.co.uk",
    "gender": "Female",
    "ip_address": "161.121.145.166"
}, {
    "id": 13,
    "first_name": "Rafe",
    "last_name": "Endle",
    "email": "rendlec@wufoo.com",
    "gender": "Male",
    "ip_address": "1.13.217.154"
}, {
    "id": 14,
    "first_name": "Shayne",
    "last_name": "Klimko",
    "email": "sklimkod@jimdo.com",
    "gender": "Female",
    "ip_address": "65.103.61.5"
}, {
    "id": 15,
    "first_name": "Chandler",
    "last_name": "Munkton",
    "email": "cmunktone@gov.uk",
    "gender": "Male",
    "ip_address": "205.11.84.11"
}, {
    "id": 16,
    "first_name": "Adelind",
    "last_name": "Fortune",
    "email": "afortunef@shutterfly.com",
    "gender": "Female",
    "ip_address": "48.142.190.94"
}, {
    "id": 17,
    "first_name": "Damien",
    "last_name": "Kennler",
    "email": "dkennlerg@cisco.com",
    "gender": "Male",
    "ip_address": "103.156.15.4"
}, {
    "id": 18,
    "first_name": "Elnora",
    "last_name": "Sante",
    "email": "esanteh@ucsd.edu",
    "gender": "Female",
    "ip_address": "156.161.34.222"
}, {
    "id": 19,
    "first_name": "Alphard",
    "last_name": "Anwyl",
    "email": "aanwyli@t.co",
    "gender": "Male",
    "ip_address": "26.117.33.145"
}, {
    "id": 20,
    "first_name": "Giselbert",
    "last_name": "Suckling",
    "email": "gsucklingj@fastcompany.com",
    "gender": "Male",
    "ip_address": "26.214.213.41"
}]





//     <p id="id_no">20</p>
//     <p id="name">Ravi Srivastava</p>
//     <p id="gender">Male</p>
//     <p id="mail">gsucklingj@fastcompany.com</p>
//     <p id="ip">26.214.213.41</p>


let search = document.getElementById("search");
let output1 = document.getElementsByClassName("output");

// Output Module 
let view = (id, name, gender1, mail, ip) => {
    let card = document.createElement("div");
    card.className = "card";
    let id_no = document.createElement('p');
    id_no.id = "id_no";
    id_no.innerHTML = id;
    let name_1 = document.createElement('p');
    name_1.id = "name";
    name_1.innerHTML = name;
    let gender = document.createElement('p');
    gender.className = "gender";
    gender.innerHTML = gender1;
    if (gender.innerHTML == "Female") {
        gender.style.backgroundColor = "lightpink";
    }
    let mail_id = document.createElement('p');
    mail_id.id = "mail";
    mail_id.innerHTML = mail;
    let ip_add = document.createElement('p');
    ip_add.id = "ip";
    ip_add.innerHTML = ip;
    card.append(id_no);
    card.append(name_1);
    card.append(gender);
    card.append(mail_id);
    card.append(ip_add);
    return card;
}
search.addEventListener("input", (event) => {
            output1[0].innerHTML=null;
    for (let i = 0; i < arr.length; i++) {
        if (search.value == arr[i].id || search.value == arr[i].first_name || search.value == arr[i].gender || search.value == arr[i].email) {
            output1[0].append(view(arr[i].id, arr[i].first_name + " " + arr[i].last_name, arr[i].gender, arr[i].email, arr[i].ip_address));


        } else if (search.value == "" ) {
            output1[0].innerHTML=null;
        }

    }
})
