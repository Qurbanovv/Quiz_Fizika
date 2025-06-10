const questions = [
    {
      question: "Mütləq elastiki toqquşma üçün aşağıdakılarda hansı doğrudur?",
      answers: [
        "A) Yalnız impulsun saxlanması qanununu ödənir.",
        "B) İmpulsun və tam mexaniki enerjinin saxlanması qanunları ödənmir.",
        "C) Yalnız tam mexaniki enerjinin saxlanması qanununu ödənir.",
        "D) İmpulsun və tam mexaniki enerjinin saxlanması qanunları ödənir.",
        "E) İmpulsun və tam mexaniki enerjinin saxlanması qanunları ödənə də bilər, ödənməyə də bilər."
      ],
      correct: "D) İmpulsun və tam mexaniki enerjinin saxlanması qanunları ödənir."
    },
    {
      question: "C.san2 – hansı fiziki kəmiyyətin vahidinə uyğundur?",
      answers: [
        "A) İmpuls momenti",
        "B) Qüvvə momenti",
        "C) Ətalət momenti",
        "D) Təcil",
        "E) Qüvvə impulsu"
      ],
      correct: "C) Ətalət momenti"
    },
    {
      question: "kq.m2 – hansı fiziki kəmiyyətin vahididir?",
      answers: [
        "A) Enerji sıxlığının",
        "B) Impuls momentinin",
        "C) Enerjinin",
        "D) Ətalət momentinin",
        "E) Qüvvə momentinin"
      ],
      correct: "D) Ətalət momentinin"
    },
    {
        question: "1 atom kütlə vahidi (a.k.v) neçə kq-a bərabərdir?",
        answers: [
          "A) 1,38·10²⁷ kq",
          "B) 1,38·10⁻²⁴ kq",
          "C) 1,66·10⁻²⁴ kq",
          "D) 1,66·10⁻²⁷ kq",
          "E) 9,11·10⁻³¹ kq"
        ],
        correct: "D) 1,66·10⁻²⁷ kq"
      },
      {
        question: "İdeal qazın mütləq temperaturu 4 dəfə artdıqda molekulların kvadratik orta sürəti necə dəyişir?",
        answers: [
          "A) 16 dəfə artar",
          "B) 2 dəfə artar",
          "C) 4 dəfə artar",
          "D) Dəyişməz",
          "E) 8 dəfə artar"
        ],
        correct: "B) 2 dəfə artar"
      },
      {
        question: "İdeal qazın həcmi 2 dəfə artdıqda onun daxili enerjisi necə dəyişər?",
        answers: [
          "A) 4 dəfə artar",
          "B) 2 dəfə artar",
          "C) 2 dəfə azalar",
          "D) Dəyişməz",
          "E) 4 dəfə azalar"
        ],
        correct: "D) Dəyişməz"
      },
      {
        question: "İdeal qazın həcmi 2 dəfə artdıqda onun molekullarının kvadratik orta sürəti necə dəyişir?",
        answers: [
          "A) 4 dəfə azalar",
          "B) 2 dəfə artar",
          "C) 1,4 dəfə artar",
          "D) 4 dəfə artar",
          "E) Dəyişməz"
        ],
        correct: "E) Dəyişməz"
      },
      {
        question: "Hər birinin e.h.q.-si 2V, daxili müqavimətləri 0,5 Om olan dörd sabit cərəyan mənbəyi paralel birləşdirilmişdir. Yekun e.h.q.-ni və müqaviməti hesablayın:",
        answers: [
          "A) 2V; 2Om",
          "B) 8V; 2Om",
          "C) 2V; 0,5Om",
          "D) 8V; 0,125Om",
          "E) 2V; 0,125Om"
        ],
        correct: "E) 2V; 0,125Om"
      },
      {
        question: "Elektronun yükünün modulu 1,6·10⁻¹⁹ Kl-dur. Bu yükü SQSE yük vahidi ilə ifadə edin:",
        answers: [
          "A) 4,8·10⁻¹⁰ SQSEq",
          "B) 4,8·10⁻²⁸ SQSEq",
          "C) 1,6·10⁻²⁸ SQSEq",
          "D) 9·10⁻⁹ SQSEq",
          "E) 8,85·10⁻¹² SQSEq"
        ],
        correct: "A) 4,8·10⁻¹⁰ SQSEq"
      },
      {
        question: "Protonun kütləsi aşağıdakılardan hansıdır?",
        answers: [
          "A) 1,673·10⁻³¹ kq",
          "B) 1,673·10⁻²⁴ kq",
          "C) 1,673·10⁻²¹ kq",
          "D) 1,673·10⁻²⁰ kq",
          "E) 1,673·10⁻²⁷ kq"
        ],
        correct: "E) 1,673·10⁻²⁷ kq"
      },
      {
        question: "Protonun kütləsi enerji vahidlərində necə ifadə edilir?",
        answers: [
          "A) 0,511 MeV",
          "B) 939,6 MeV",
          "C) 938,3 MeV",
          "D) 673 MeV",
          "E) 1024 MeV"
        ],
        correct: "C) 938,3 MeV"
      },
      {
        question: "Neytronun və protonun kütlələri fərqi enerji vahidləri ilə necə ifadə edilir?",
        answers: [
          "A) 13,6 MeV",
          "B) 2,5 MeV",
          "C) 0,511 MeV",
          "D) 7,1 MeV",
          "E) 1,3 MeV"
        ],
        correct: "E) 1,3 MeV"
      },
      {
        question: "Klassik mexanikada zaman anlayışı üçün aşağıdakılardan hansı doğrudur?",
        answers: [
          "A) Bir ölçülüdür, diskretdir, nisbidir",
          "B) Üç ölçülüdür, diskretdir, mütləqdir",
          "C) Bir ölçülüdür, kəsilməzdir, nisbidir",
          "D) Bir ölçülüdür, kəsilməzdir, mütləqdir",
          "E) Üç ölçülüdür, kəsilməzdir, mütləqdir"
        ],
        correct: "D) Bir ölçülüdür, kəsilməzdir, mütləqdir"
      },
      {
        question: "Klassik mexanikada fəza:",
        answers: [
          "A) Üç ölçülüdür, nisbidir, diskretdir",
          "B) Bir ölçülüdür, nisbidir, kəsilməzdir",
          "C) Bir ölçülüdür, mütləqdir, diskretdir",
          "D) Üç ölçülüdür, nisbidir, kəsilməzdir",
          "E) Üç ölçülüdür, mütləqdir, kəsilməzdir"
        ],
        correct: "E) Üç ölçülüdür, mütləqdir, kəsilməzdir"
      },
      {
        question: "Modulları F və 3F olan qüvvələr əks istiqamətdə cismin kütlə mərkəzinə tətbiq edilmişdir. Bu qüvvələr eyni istiqamətdə təsir edərsə, cismin təcilinin modulu necə dəyişər?",
        answers: [
          "A) 3 dəfə artar",
          "B) 4 dəfə artar",
          "C) 2 dəfə azalar",
          "D) 2 dəfə artar",
          "E) dəyişməz"
        ],
        correct: "B) 4 dəfə artar"
      },
      {
        question: "Sabit qüvvənin təsiri altında hərəkət edən cismin kütləsini 2kq azaltdıqda təcili 3 dəfə artmışdır. Cismin başlanğıc kütləsini təyin edin.",
        answers: [
          "A) 4 kq",
          "B) 6 kq",
          "C) 5 kq",
          "D) 8 kq",
          "E) 3 kq"
        ],
        correct: "B) 6 kq"
      },
      {
        question: "Enerjinin saxlanması qanunu nəyin nəticəsidir?",
        answers: [
          "A) Fəzanın bircinsliyi",
          "B) Zamanın izotropluğu",
          "C) Zamanın bircinsliyi",
          "D) Fəzanın izotropluğu",
          "E) Zamanın kəsilməzliyi"
        ],
        correct: "C) Zamanın bircinsliyi"
      },
      {
        question: "İmpulsun saxlanması qanunu nəyin nəticəsidir?",
        answers: [
          "A) Zamanın kəsilməzliyi",
          "B) Zamanın bircinsliyi",
          "C) Fəzanın izotropluğu",
          "D) Fəzanın mütləqliyi",
          "E) Fəzanın bircinsliyi"
        ],
        correct: "E) Fəzanın bircinsliyi"
      },
      {
        question: "İmpuls momentinin saxlanması qanunu nəyin nəticəsidir?",
        answers: [
          "A) Fəzanın izotropluğu",
          "B) Fəzanın bircinsliyi",
          "C) Zamanın bircinsliyi",
          "D) Fəzanın kəsilməzliyi",
          "E) Zamanın mütləqliyi"
        ],
        correct: "A) Fəzanın izotropluğu"
      },
      {
        question: "N·san hansı fiziki kəmiyyətin vahidinə uyğundur?",
        answers: [
          "A) İmpuls",
          "B) İmpuls momenti",
          "C) Qüvvə momenti",
          "D) Ətalət momenti",
          "E) Güc"
        ],
        correct: "A) İmpuls"
      },
      {
        question: "C·san hansı fiziki kəmiyyətin vahidinə uyğundur?",
        answers: [
          "A) İmpuls",
          "B) Qüvvə momenti",
          "C) Güc",
          "D) İmpuls momenti",
          "E) Ətalət momenti"
        ],
        correct: "D) İmpuls momenti"
      },
      {
        question: "Maddi nöqtə r radiuslu çevrə boyunca qiymətcə sabit sürətlə hərəkət edir. Maddi nöqtəyə təsir edən qüvvə hansı istiqamətdə yönəlmişdir?",
        answers: [
          "A) radius vektorun əksinə",
          "B) radius vektor istiqamətində",
          "C) fırlanma istiqamətində və çevrəyə toxunan",
          "D) fırlanma istiqamətinin əksinə və çevrəyə toxunan",
          "E) radius vektorla iti bucaq əmələ gətirir"
        ],
        correct: "A) radius vektorun əksinə"
      },
      {
        question: "Kütləsi 2 kq olan cisim qapalı trayektoriya boyunca 8m yol getmiş və əvvəlki vəziyyətinə qayıtmışdır. Ağırlıq qüvvəsinin işini hesablayın.",
        answers: [
          "A) 160 C",
          "B) 0",
          "C) 80 C",
          "D) 40 C",
          "E) 60 C"
        ],
        correct: "B) 0"
      },
      {
        question: "Kütləsi 2 kq olan cisim sərbəst düşür. Yerə düşən anda sürəti 15 m/san olmuşsa, ağırlıq qüvvəsinin gördüyü işi hesablayın.",
        answers: [
          "A) 225 C",
          "B) 450 C",
          "C) 30 C",
          "D) 300 C",
          "E) 60 C"
        ],
        correct: "A) 225 C"
      },
      {
        question: "Sistemin sərbəstlik dərəcəsi nədir?",
        answers: [
          "A) Sistemin vəziyyətini təyin edən parametrlər",
          "B) Sistemin kinetik enerjisinin dəyişməsi",
          "C) Sistemin potensial enerjisinin dəyişməsi",
          "D) Sərbəst düşən cismin təcili",
          "E) Sistem bir vəziyyətdən digər vəziyyətə keçərkən xarici qüvvələrin gördüyü iş"
        ],
        correct: "A) Sistemin vəziyyətini təyin edən parametrlər"
      },
      {
        question: "Kütləsi 2 kq olan cisim qapalı trayektoriya boyunca 8m yol getmiş və əvvəlki vəziyyətinə qayıtmışdır. Ağırlıq qüvvəsinin işini hesablayın.",
        answers: [
          "A) 160 C",
          "B) 0",
          "C) 80 C",
          "D) 40 C",
          "E) 60 C"
        ],
        correct: "B) 0"
      },
      {
        question: "Kütləsi 2 kq olan cisim sərbəst düşür. Yerə düşən anda sürəti 15 m/san olmuşsa, ağırlıq qüvvəsinin gördüyü işi hesablayın.",
        answers: [
          "A) 225 C",
          "B) 450 C",
          "C) 30 C",
          "D) 300 C",
          "E) 60 C"
        ],
        correct: "A) 225 C"
      },
      {
        question: "Sistemin sərbəstlik dərəcəsi nədir?",
        answers: [
          "A) Sistemin vəziyyətini təyin edən parametrlər",
          "B) Sistemin kinetik enerjisinin dəyişməsi",
          "C) Sistemin potensial enerjisinin dəyişməsi",
          "D) Sərbəst düşən cismin təcili",
          "E) Sistem bir vəziyyətdən digər vəziyyətə keçərkən xarici qüvvələrin gördüyü iş"
        ],
        correct: "A) Sistemin vəziyyətini təyin edən parametrlər"
      }
  

  ];





  


// {
//     question: "Verilənlərdən biri plagiata aid xüsusiyyətdir:",
//     answers: [
//         "A) digərlərinin ideyalarını, cizgi və ya fərziyyələrini onların mənbələrinə istinad göstərmədən mənimsəməkdir.",
//         "B) problemin geniş, hərtərəfli tədqiqinə və həllinə həsr edilmiş genişhəcmli elmi-tədqiqat əsəridir",
//         "C) hər hansı elmi işin, problemin öyrənilməsi və nəticəsi haqqında yazılı şəkildə qısa xülasə, eləcə də müvafiq ədəbiyyat, məxəzlər əsasında müəyyən mövzuda edilən məruzədir",
//         "D) tezis və ya dissertasiyanın sonuncu hissələrindəndir",
//         "E) titul vərəqindən sonra ikinci səhifədir"
//     ]
// },
// {
//     question: "Plagiata aid xüsusiyyətlərdən biri səhvdir:",
//     answers: [
//         "A) başqa mətn fraqmentinin mənbəyi göstərilməklə, ancaq dırnağa alınmadan köçürülməsi;",
//         "B) başqa mətnləri dırnağa almadan və mənbəyini göstərmədən birbaşa olaraq köçürmək;",
//         "C) məqalə əvvəllər çap olunmuş materialın 60 – 70% həcmini təkrarlayarsa, avtoplagiat sayılmır başqa mətn fraqmentinin mənbəyi göstərilməklə, ancaq dırnağa alınmadan köçürülməsi;",
//         "D) başqa mənbəyə aid mətnin bir neçə sözünü dəyişməklə qeyri-adekvat (hətta mənbə göstərildikdə belə) təsviri.",
//         "E) plagiator başqasının işini öz sözləri ilə yenidən yazır, nəticələri öz fikirləşdiyi kimi formulə edir."
//     ]
// }







console.log(questions.length)
// console.log(questions2.length)
// console.log(questions2[13])



let sec = document.getElementById("sec")
let sual =document.getElementById("sual")
// for(let j=1;j<=questions.length;j++){
//     sual.textContent=`Sual ${j}`
// }
let so_sual=document.getElementById("so_sual")
let ev_sual=document.getElementById("ev_sual")
let question = document.getElementById("question")
let d=2
let D_Y=document.getElementById("D_Y")

let btn_A=document.getElementById("btn_A")
let btn_B=document.getElementById("btn_B")
let btn_C=document.getElementById("btn_C")
let btn_D=document.getElementById("btn_D")
let btn_E=document.getElementById("btn_E")
let yoxla = document.getElementById("yoxla")
let variant 

sual.textContent=`Sual ${1}`
btn_A.textContent=`${questions[0].answers[0]}`
btn_B.textContent=`${questions[0].answers[1]}`
btn_C.textContent=`${questions[0].answers[2]}`
btn_D.textContent=`${questions[0].answers[3]}`
btn_E.textContent=`${questions[0].answers[4]}`
question.textContent=`${questions[0].question}`
// let qar=questions[0].question
so_sual.addEventListener("click",()=>{
    sec.style.borderColor="black"
    sual.textContent=`Sual ${d}`
    btn_A.disabled=false
    btn_B.disabled=false
    btn_C.disabled=false
    btn_D.disabled=false
    btn_E.disabled=false
    question.textContent=`${questions[d-1].question}`
    btn_A.textContent=`${questions[d-1].answers[0]}`
    btn_B.textContent=`${questions[d-1].answers[1]}`
    btn_C.textContent=`${questions[d-1].answers[2]}`
    btn_D.textContent=`${questions[d-1].answers[3]}`
    btn_E.textContent=`${questions[d-1].answers[4]}`
    d++
    console.log(d)
})
ev_sual.addEventListener("click",()=>{
    sec.style.borderColor="black"
    sual.textContent=`Sual ${d-2}`
    btn_A.disabled=false
    btn_B.disabled=false
    btn_C.disabled=false
    btn_D.disabled=false
    btn_E.disabled=false
    question.textContent=`${questions[d-3].question}`
    btn_A.textContent=`${questions[d-3].answers[0]}`
    btn_B.textContent=`${questions[d-3].answers[1]}`
    btn_C.textContent=`${questions[d-3].answers[2]}`
    btn_D.textContent=`${questions[d-3].answers[3]}`
    btn_E.textContent=`${questions[d-3].answers[4]}`
    d--
    console.log(d)
})
btn_A.addEventListener("click",()=>{
    // variant = "A"
    variant = questions[d-2].answers[0]
    btn_B.disabled=true
    btn_C.disabled=true
    btn_D.disabled=true
    btn_E.disabled=true
})
btn_B.addEventListener("click",()=>{
    // variant = "B"
    variant = questions[d-2].answers[1]
    btn_A.disabled=true
    btn_C.disabled=true
    btn_D.disabled=true
    btn_E.disabled=true
})
btn_C.addEventListener("click",()=>{
    // variant = "C"
    variant = questions[d-2].answers[2]
    btn_A.disabled=true
    btn_B.disabled=true
    btn_D.disabled=true
    btn_E.disabled=true
})
btn_D.addEventListener("click",()=>{
    variant = questions[d-2].answers[3]
    btn_A.disabled=true
    btn_B.disabled=true
    btn_C.disabled=true
    btn_E.disabled=true
})
btn_E.addEventListener("click",()=>{
  variant = questions[d-2].answers[4]
  btn_A.disabled=true
  btn_B.disabled=true
  btn_C.disabled=true
  btn_D.disabled=true
})
console.log(variant)
console.log(questions[d-2].answers[1])
// btn_A.addEventListener("click",variantsecmek)
// function variantsecmek(){
    // console.log("test")
    // console.log(`${herf}`)
    // variant=`${herf}`
    // btn_B.disabled=true
    // btn_C.disabled=true
    // btn_D.disabled=true
    // const herfler=["A","B","C","D"] // bunlari BTN_A kimi elesem "" bunsuz
    // for(let i=0;i<=herfler.length;i++){
    //     herfler[i]
    //     if(herf===herfler[i]){

    //     }
    // }
// }



// console.log(questions[d-1].correct)
yoxla.addEventListener("click",()=>{
    console.log(questions[d-2].correct)
    if(variant===questions[d-2].correct){
        sec.style.borderColor="Green"
        D_Y.textContent="Dogru"
        D_Y.style.color="Green"
        console.log("isleyir")
    }
    else if(variant!=questions[d-2].correct){
        sec.style.borderColor="red"
        D_Y.textContent="Sehv"
        D_Y.style.color="red"
    }
})