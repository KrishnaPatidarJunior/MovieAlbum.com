// Side Nav Bar //
function openActionMovie() {
  document.getElementById("myActionMovie").style.display = "flex";
  document.getElementById("myComedyMovie").style.display = "none";
  document.getElementById("myHorrorMovie").style.display = "none";
  document.getElementById("myThrillerMovie").style.display = "none";
  document.getElementById("myRomanceMovie").style.display = "none";

}
function openComedyMovie() {
  document.getElementById("myActionMovie").style.display = "none";
  document.getElementById("myComedyMovie").style.display = "flex";
  document.getElementById("myHorrorMovie").style.display = "none";
  document.getElementById("myThrillerMovie").style.display = "none";
  document.getElementById("myRomanceMovie").style.display = "none";
}
function openHorrorMovie() {
  document.getElementById("myActionMovie").style.display = "none";
  document.getElementById("myComedyMovie").style.display = "none";
  document.getElementById("myHorrorMovie").style.display = "flex";
  document.getElementById("myThrillerMovie").style.display = "none";
  document.getElementById("myRomanceMovie").style.display = "none";
}
function openthriller() {
  document.getElementById("myActionMovie").style.display = "none";
  document.getElementById("myComedyMovie").style.display = "none";
  document.getElementById("myHorrorMovie").style.display = "none";
  document.getElementById("myThrillerMovie").style.display = "flex";
  document.getElementById("myRomanceMovie").style.display = "none";
}
function openRomanceMovie() {
  document.getElementById("myActionMovie").style.display = "none";
  document.getElementById("myComedyMovie").style.display = "none";
  document.getElementById("myHorrorMovie").style.display = "none";
  document.getElementById("myThrillerMovie").style.display = "none";
  document.getElementById("myRomanceMovie").style.display = "flex";
}
// Movie_Details //

const details = [
  {
    id: "tiger_zinda_hai",
    img: "images/movie-1.jpg",
    name: "Tiger Zinda Hai",
    directed_by: "Ali Abbas Zafar",
    produced_by: "Aditya Chopra",
    starring: "Salman Khan,Katrina Kaif,Sajjad Delafrooz,Angad Bedi,Kumud Mishra,Girish Karnad"

  },
  {
    id: "tanhaji",
    img: "images/tanhaji.png",
    name: "Tanhaji",
    directed_by: "Om Raut",
    produced_by: "Ajay Devgn,Bhushan Kumar,Krishan Kumar",
    starring: "Ajay Devgn,Kajol,Saif Ali Khan,Sharad Kelkar"
  },
  {
    id: "singham",
    name: "Singham",
    img: "images/singham.png",
    directed_by: "Rohit Shetty",
    produced_by: "Ajay Devgn,Rohit Shetty,Yunus Sajawal,Prakash Raj",
    starring: "Ajay Devgn,Kajal Aggarwal,Prakash Raj"
  },
  {
    id: "war",
    name: "War",
    img: "images/war.png",
    directed_by: "Siddharth Anand",
    produced_by: "Aditya Chopra",
    starring: "	Hrithik Roshan,Tiger Shroff,Vaani Kapoor"
  },
  {
    id: "shershaah",
    name: "Shershaah",
    img: "images/shershaah.png",
    directed_by: "Vishnuvardhan",
    produced_by: "Hiroo Yash,Karan Johar,Apoorva Mehta,Shabbir Boxwala,Ajay Shah,Himanshu Gandhi",
    starring: "Sidharth Malhotra,Kiara Advani"
  },
  {
    id: "don",
    name: "Don-2",
    img: "images/Don-2.png",
    directed_by: "Farhan Akhtar",
    produced_by: "Farhan Akhtar,Ritesh Sidhwan,Shah Rukh Khan",
    starring: "	Shah Rukh Khan,Priyanka Chopra,Boman Irani,Kunal Kapoor,Ally Khan,Nawab Shah,Sahil Shroff,Om Puri,Lara Dutta"
  },
  {
    id: "pagalpanti",
    name: "Pagalpanti",
    img: "images/pagalpanti.jpg",
    directed_by: "Anees Bazmee",
    produced_by: "	Bhushan Kumar,Abhishek Pathak,Krishan Kumar,Kumar Mangat Pathak",
    starring: "		Anil Kapoor,John Abraham,Ileana D'Cruz,Arshad Warsi,Urvashi Rautela,Pulkit Samrat,Kriti Kharbanda,Saurabh Shukla,Inaamulhaq"
  },
  {
    id: "dhol",
    name: "Dhol",
    img: "images/dhol.png",
    directed_by: "Priyadarshan",
    produced_by: "Shailendra Singh,Sarita Patil",
    starring: "	Rajpal Yadav,Sharman Joshi,Tusshar Kapoor,Kunal Khemu,Tanushree Dutta,Arbaaz Khan,Om Puri,Murli Sharma,Tiku Talsania"
  },
  {
    id: "herapheri",
    name: "Herapheri",
    img: "images/herapheri.png",
    directed_by: "Priyadarshan",
    produced_by: "A. G. Nadiadwala",
    starring: "	Akshay Kumar,Sunil Shetty,Paresh Rawal,Tabu"
  },
  {
    id: "khosla_ka_ghosla",
    name: "Khosla Ka Ghosla",
    img: "images/khoslakaghosla.png",
    directed_by: "Dibakar Banerjee",
    produced_by: "Savita Raj Hiremath,Ronnie Screwvala",
    starring: "Anupam Kher,Boman Irani,Parvin Dabas,Vinay Pathak,Ranvir Shorey,Tara Sharma"
  },
  {
    id: "non_stop_dhamaal",
    name: "Non Stop Dhamaal",
    img: "images/nonstopdhamaal.png",
    directed_by: "Irshad Khan",
    produced_by: "Suresh Gondaliya",
    starring: "Annu Kapoor,Manoj Joshi,Rajpal Yadav,Asrani,Priyanshu Chatterjee,Rajesh Jais"
  },
  {
    id: "welcome",
    name: "Welcome",
    img: "images/welcome.png",
    directed_by: "Anees Bazmee",
    produced_by: "Firoz Nadiadwala",
    starring: "Feroz Khan,Anil Kapoor,Nana Patekar,Akshay Kumar,Katrina Kaif,Paresh Rawal,Mallika Sherawat"
  },
  {
    id: "1920",
    name: "1920",
    img: "images/1920.jpg",
    directed_by: "Krishna Bhatt",
    produced_by: "Vikram Bhatt,Raj Kishor Khaware,Rakesh Juneja",
    starring: "Avika Gor,Rahul Dev,Barkha Bisht,Danish Pandor"
  },
  {
    id: "aatma",
    name: "Aatma",
    img: "images/aatma.jpg",
    directed_by: "Suparn Verma",
    produced_by: "Kumar Mangat Pathak,Abhishek Pathak",
    starring: "Bipasha Basu,Nawazuddin Siddiqui"
  },
  {
    id: "bhoot",
    name: "Bhoot",
    img: "images/bhoot.jpg",
    directed_by: "Bhanu Pratap Singh",
    produced_by: "Hiroo Yash Johar,Karan Johar,Apoorva Mehta,Shashank Khaitan",
    starring: "Vicky Kaushal,Bhumi Pednekar,Inayah Chowdhry"
  },
  {
    id: "darr",
    name: "Darr",
    img: "images/darr.webp",
    directed_by: "Pavan Kirpalani",
    produced_by: "Abhimanyu Singh,MSM Motion Pictures",
    starring: "Jimmy Sheirgill,Nushrat Bharucha,Arif Zakaria,Asif Basra,Nivedita Bhattacharya,Shradha Kaul,Neeraj Sood,Josi Hasi"
  },
  {
    id: "horror_story",
    name: "Horror Story",
    img: "images/horrorstory.jpg",
    directed_by: "Ayush Raina",
    produced_by: "ASA Productions and Enterprises Pvt. Ltd.",
    starring: "Karan Kundra,Radhika Menon,Nishant Singh Malkani,Ravish Desai,Hasan Zaidi,Aparna Bajpai,Nandini Vaid,Sheetal Singh"

  },
  {
    id: "raaz",
    name: "Raaz",
    img: "images/raaz.jpg",
    directed_by: "Vikram Bhatt",
    produced_by: "Mahesh Bhatt,Mukesh Bhatt",
    starring: "Bipasha Basu,Emraan Hashmi,Esha Gupta"
  },
  {
    id: "drishyam",
    name: "Drishyam",
    img: "images/drishyam.webp",
    directed_by: "Nishikant Kamat",
    produced_by: "Kumar Mangat Pathak,Ajit Andhare,Abhishek Pathak",
    starring: "	Ajay Devgn,Tabu,Shriya Saran,Ishita Dutta,Mrunal Jadhav,Rajat Kapoor"
  },
  {
    id: "kahaani",
    name: "Kahaani",
    img: "images/kahaani.jpg",
    directed_by: "Sujoy Ghosh",
    produced_by: "Sujoy Ghosh,Kushal Kantilal Gada",
    starring: "	Vidya Balan,Parambrata Chatterjee,Nawazuddin Siddiqui,Indraneil Sengupta,Saswata Chatterjee"
  },
  {
    id: "raman_raghav",
    name: "Raman Raghav-2.0",
    img: "images/raman_raghav.webp",
    directed_by: "Anurag Kashyap",
    produced_by: "Anurag Kashyap,Vikas Bahl,Vikramaditya Motwane,Madhu Mantena",
    starring: "Nawazuddin Siddiqui,Sobhita Dhulipala,Vicky Kaushal"
  },
  {
    id: "runway",
    name: "Runway-34",
    img: "images/runway.jpeg",
    directed_by: "Ajay Devgn",
    produced_by: "Ajay Devgn",
    starring: "Ajay Devgn,Amitabh Bachchan,Rakul Preet Singh,Boman Irani,Angira Dhar,Aakanksha Singh"
  },
  {
    id: "talwar",
    name: "Talwar",
    img: "images/talwar.jpg",
    directed_by: "Meghna Gulzar",
    produced_by: "Vineet Jain,Vishal Bhardwaj",
    starring: "Irrfan Khan,Konkona Sen Sharma,Neeraj Kabi"
  },
  {
    id: "badla",
    name: "Badla",
    img: "images/badla.webp",
    directed_by: "Sujoy Ghosh",
    produced_by: "Gauri Khan,Sunir Khetarpal,Akshai Puri",
    starring: "Amitabh Bachchan,Taapsee Pannu,Amrita Singh,Tony Luke,Manav Kaul"
  },
  {
    id: "veerzaara",
    name: "Veer-Zaara",
    img: "images/veerzara.jpg",
    directed_by: "Yash Chopra",
    produced_by: "Yash Chopra,Aditya Chopra",
    starring: "Shah Rukh Khan,Preity Zinta,Rani Mukerji"
  },
  {
    id: "sitaraman",
    name: "Sita-Ramam",
    img: "images/Sita-Ramam.jpg",
    directed_by: "Hanu Raghavapudi",
    produced_by: "C. Aswani Dutt",
    starring: "Mrunal Thakur,Dulquer Salmaan"
  },
  {
    id: "ddlj",
    name: "DDLJ",
    img: "images/dilwale_Dulhania.jpg",
    directed_by: "Aditya Chopra",
    produced_by: "Yash Chopra",
    starring: "	Shah Rukh Khan,Kajol"
  },
  {
    id: "Jabtakhaijaan",
    name: "Jab Tak Hai Jaan",
    img: "images/jabtakhaijaan.jpeg",
    directed_by: "Yash Chopra",
    produced_by: "Aditya Chopra",
    starring: "Shah Rukh Khan,Katrina Kaif,Anushka Sharma"
  },
  {
    id: "raanjhanaa",
    name: "Raanjhanaa",
    img: "images/raanjhanaa.jpg",
    directed_by: "Aanand L. Rai",
    produced_by: "	Krishika Lulla,Aanand L. Rai",
    starring: "	Dhanush,Sonam Kapoor,Abhay Deol"
  },
  {
    id: "satyapremkikatha",
    name: "Satya Prem ki Katha",
    img: "images/satyapremkikatha.avif",
    directed_by: "Sameer Vidwans",
    produced_by: "Sajid Nadiadwala,Shareen Mantri Kedia,Kishor Arora",
    starring: "Kartik Aaryan,Kiara Advani"
  }
]

const urlParams = new URLSearchParams(window.location.search);
const movie_id = urlParams.get('id');
console.log(movie_id);

for (let i = 0; i < details.length; i++) {
  const element = details[i];
  if (element.id === movie_id) {
    const movie_detail_container = document.createElement('div')
    movie_detail_container.id = 'movie_detail_container';
    console.log(movie_detail_container)
    movie_detail_container.innerHTML =
      `
        <img src=${element.img}>
         <h2>Movie Name:-${element.name}</h2>
         <h4>Directed by:- ${element.directed_by}</h4>
         <h4>Produced by:- ${element.produced_by}</h4>
         <h4>Starring:-	${element.starring}.</h4>
      `
    const movie_detail_box = document.querySelector("#movie_detail_box")
    movie_detail_box.appendChild(movie_detail_container);
  }

}
