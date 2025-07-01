const questions = [
  {
    question: "Alqoritmlər nəzəriyyəsi nəyi öyrənir?",
    answers: [
      "A. ümumi xassələrini öyrənir",
      "B. ardıcıllıqları öyrənir",
      "C. əməliyyatları öyrənir",
      "D. çoxluqları öyrənir",
      "E. birləşmələri öyrənir"
    ],
    correct: "B. ardıcıllıqları öyrənir"
  },
  {
    question: "Alqoritmlər nəzəriyyəsinin inkişafı kim tərəfindən başlamışdır?",
    answers: [
      "A. Turind",
      "E. posta",
      "K.Qeld",
      "Evklid",
      "A.Cerc"
    ],
    correct: "E. posta"
  },
  {
    question: "Normal alqoritmlər ideyası kim tərəfindən irəli sürülmüşdür?",
    answers: [
      "S.Klini",
      "A.Cerc",
      "A.Turind",
      "A.Markov",
      "E.Posta"
    ],
    correct: "A.Turind"
  },
  {
    question: "Alqoritmlərin cətinliyinə nə vaxt rast gəlinir?",
    answers: [
      "Məsələnin həllinin optimal həllinin tapılması zamanı",
      "Məsələnin məntiqi həlli zamanı",
      "Məsələnin tənlik qurmaqla həlli zamanı",
      "Məsələnin planla həlli zamanı",
      "Məsələnin şifahi həlli zamanı"
    ],
    correct: "Məsələnin həllinin optimal həllinin tapılması zamanı"
  },
  {
    question: "Alqoritm sözü hansı alimin adının latınca yazılışıdır?",
    answers: [
      "Əl-Xarəzm",
      "A.Şaiqin",
      "N.Tusinin",
      "A.Ceza",
      "A.Turinqin"
    ],
    correct: "Əl-Xarəzm"
  },
  {
    question: "Avropalılır mövqeli say sistemini hansı alimin yazdığı traktat əsasında öyrənmişlər?",
    answers: [
      "A.Cerc",
      "Əl-Xarəzm",
      "K.Qeld",
      "A.Turind",
      "N.Tusi"
    ],
    correct: "N.Tusi"
  },
  {
    question: "Hesablama maşınların əsas fərqləndirici xüsusiyyətləri hansıdır?",
    answers: [
      "komputerlə işləməsi",
      "şəkil çəkməsi",
      "proqramla idarə olunması",
      "avtomatlarla işləməsi",
      "özünü idarə etməsi"
    ],
    correct: "şəkil çəkməsi"
  },
  {
    question: "Alqoritmin mərhələlərinin qurtarması alqoritmin hansı xassəsidir?",
    answers: [
      "kütləvilik",
      "nəticəlik",
      "sonluluq",
      "azadlıq",
      "dövrülük"
    ],
    correct: "sonluluq"
  },
  {
    question: "Alqoritmin qirqiymətli təyin olunması alqoritmin hansı xassəsidir?",
    answers: [
      "kütləvilik",
      "diskretlik",
      "müəyyənlik",
      "özbaşınalıq",
      "yumşaqlıq"
    ],
    correct: "diskretlik"
  },
  {
    question: "Alqoritmin ümumi olması onun hansı xassəsidir?",
    answers: [
      "ümumilik",
      "kütləvilik",
      "diskretlik",
      "ardıcıllıq",
      "nəticəvilik"
    ],
    correct: "nəticəvilik"
  },
  {
    question: "Alqoritmin təsvir üsulundan 3-cu üsul hansıdır?",
    answers: [
      "mətn",
      "cədvəl",
      "qrafik-blok",
      "daşınma",
      "proqram"
    ],
    correct: "cədvəl"
  },
  {
    question: "Alqoritm nələrlə işləyir?",
    answers: [
      "triqonometriya ilə",
      "ədədlərlə",
      "funksiyalarla",
      "tənliklərlə",
      "obyektlərlə"
    ],
    correct: "ədədlərlə"
  },
  {
    question: "Proqramlaşdırmada məsələni alqoritmləşdirməkdən qabaq birinci hansı addım yerinə yetirilməlidir?",
    answers: [
      "dəyişənlərin sadalanması",
      "ədədlərin verilməsi",
      "quraşdırma",
      "bölmə əməli",
      "məsələnin riyazi qoyuluşu"
    ],
    correct: "quraşdırma"
  },
  {
    question: "Nəticələri almaq üçün lazım olan bütün qayda və qanunlar necə adlanır?",
    answers: [
      "A) misal",
      "B) riyazi model",
      "C) tənlik",
      "D) məsələ",
      "E) alqoritm"
    ],
    correct: "E) alqoritm"
  },
  {
    question: "Riyazi modelin istifadə olunması necə adlanır?",
    answers: [
      "A) misal həlli",
      "B) məsələ həlli",
      "C) kitabxana",
      "D) həll metodu",
      "E) çalışma"
    ],
    correct: "D) həll metodu"
  },
  {
    question: "Nizamlanmış kəmiyyətlər yığımı necə adlanır?",
    answers: [
      "A) ədədlər",
      "B) kəmiyyət",
      "C) massiv",
      "D) natural",
      "E) kompleks"
    ],
    correct: "C) massiv"
  },
  {
    question: "Massivin hər bir nömrəsi necə adlanır?",
    answers: [
      "nömrə",
      "məlum",
      "indeks",
      "məchul",
      "arqument"
    ],
    correct: "məchul"
  },
  {
    question: "Interpretasiya nədir?",
    answers: [
      "yazılı tərcümə",
      "tənlik",
      "şifahi tərcümə",
      "kitab",
      "dəftər"
    ],
    correct: "yazılı tərcümə"
  },
  {
    question: "Kompilyasiya nəyə bənzəyir?",
    answers: [
      "komputere",
      "proqrama",
      "şifahi tərcüməyə",
      "tam ədədlərə",
      "yazılı tərcüməyə"
    ],
    correct: "proqrama"
  },
  {
    question: "Proqramın işi nədən ibarətdir?",
    answers: [
      "A) rəqs edir",
      "B) dillər üzərində işləyir",
      "C) proqramı yazır və onu yerinə yetirir",
      "D) komputerləri acıb baqlayır",
      "E) proqram yazır və onu silir"
    ],
    correct: "E) proqram yazır və onu silir"
  },
  {
    question: "Fayllar proqramlaşdırmanın nəyi hesab olunur?",
    answers: [
      "simvolu",
      "tipi",
      "məntiqi",
      "dili",
      "ədədləri"
    ],
    correct: "dili"
  },
  {
    question: "Tərtib olunmuş proqramı maşın koduna nə çevirir?",
    answers: [
      "avtomobil",
      "proqramcı",
      "komputer",
      "translyator",
      "düstur"
    ],
    correct: "translyator"
  },
  {
    question: "Təlimatlar və yaxud əmrlər toplusu necə adlanır?",
    answers: [
      "proqram",
      "düstur",
      "alqoritm",
      "tənlik",
      "funksiya"
    ],
    correct: "alqoritm"
  },
  {
    question: "Xətti, budaqlanma dövrü üsulları Alqoritmin nəyini göstərir?",
    answers: [
      "A) xassəsini",
      "B) cəmini",
      "C) tipini",
      "D) kəmiyyətini",
      "E) növünü"
    ],
    correct: "E) növünü"
  },
  {
    question: "Dəyişənlərin konkret qiymətlərində mülahizəyə cevrilən cümlələr necə adlanır?",
    answers: [
      "A) alqoritm",
      "B) mülahizə",
      "C) funksiya",
      "D) predikat",
      "E) ədəd"
    ],
    correct: "B) mülahizə"
  },
  {
    question: "“Hə” və “yox” cavabını verən ümumi metod nəyi müəyyən edir?",
    answers: [
      "A) diskretliyi",
      "B) həll olmayan sinfi",
      "C) kütləviyi",
      "D) həll olunan sinfi",
      "E) cavabları"
    ],
    correct: "E) cavabları"
  },
  {
    question: "Müəyyən sinif məsələlər ümumi metodun olub-olmaması necə adlanır?",
    answers: [
      "A) hesablama problemi",
      "B) kəmiyyət problemi",
      "C) həll problemi",
      "D) mərtəbə problemi",
      "E) inkar üsulu"
    ],
    correct: "C) həll problemi"
  },
  {
    question: "Yeganə giriş və çıxış saxlayan, lazım olmayan fraqmentləri saxlamayan blok necə adlanır?",
    answers: [
      "A) predikat",
      "B) fraqment",
      "C) funksional blok",
      "D) mülahizə",
      "E) durğunluq"
    ],
    correct: "D) mülahizə"
  },
  {
    question: "Predikatın yoxlanılması necə adlanır?",
    answers: [
      "A) izah",
      "B) həll metodu",
      "C) prosedura",
      "D) struktur",
      "E) təkrar struktur"
    ],
    correct: "C) prosedura"
  },
  {
    question: "Tanıyan nə deməkdir?",
    answers: [
      "A) zənciri düzgün olub-olmadığını yoxlayır və bu zəncirin qurulmasına dair əmr verir",
      "B) alqoritmləri tanıyır və kompüterdə işləyir",
      "C) sözləri komputerdə dəyişir",
      "D) sözləri yaddaşdan silir",
      "E) sözləri toplayır."
    ],
    correct: "A) zənciri düzgün olub-olmadığını yoxlayır və bu zəncirin qurulmasına dair əmr verir"
  },
    {
      question: "Alqoritmin hansı tipləri vardır?",
      answers: [
        "A) arqumentli",
        "B) sadə, mürəkkəb",
        "C) xətti, budaqlanan, dövrü",
        "D) dəyişənli",
        "E) sadələşmə"
      ],
      correct: "A) arqumentli"
    },
    {
      question: "Yazıldığı ardıcıllıqla icra olunan alqoritmin tipi necə adlanır?",
      answers: [
        "A) budaqlanan",
        "B) doğru",
        "C) xətti",
        "D) dəyişənli",
        "E) ifadə"
      ],
      correct: "A) budaqlanan"
    },
    {
      question: "Nəzərdə tutulan şərtdən asılı olaraq istiqamətini dəyişən alqoritmin tipi necə adalnır?",
      answers: [
        "A) dəyişənli",
        "B) dövrü",
        "C) budaqlanan",
        "D) xətti",
        "E) əsaslı"
      ],
      correct: "A) dəyişənli"
    },
    {
      question: "Mürəkkəb dövrü əmələ gətirən sadə dövrlər kəsişə bilərmi?",
      answers: [
        "A) hərdən bir",
        "B) hər vaxt",
        "C) bəli",
        "D) bəzən",
        "E) xeyr"
      ],
      correct: "A) hərdən bir"
    },
    {
      question: "Alqoritmin icrasının maşına tapşırıla bilməsi ideyasını hansı alim vermişdir?",
      answers: [
        "A) K.Qeld",
        "B) Aristotel",
        "C) A.Türinq",
        "D) S.Vurğun",
        "E) Markov"
      ],
      correct: "A) K.Qeld"
    },
    {
      question: "Alqoritm icra edən maşının ideyası A.Türinq tərəfindən neçənçi ildə verilmişdir?",
      answers: [
        "A) 1939",
        "B) 2010",
        "C) 1937",
        "D) 1831",
        "E) 1936"
      ],
      correct: "A) 1939"
    },
    {
      question: "Türinq maşını bizim işlətdiyimiz maşınlarda neçə mühüm faktla fərqlənir?",
      answers: [
        "A) fərqlənmir",
        "B) iki",
        "C) bir",
        "D) üç",
        "E) dörd"
      ],
      correct: "A) fərqlənmir"
    },
    {
      question: "Türinq maşınını adamdan fərqləndirən birinci mühüm cəhət hansıdır?",
      answers: [
        "A) səhv edə bilməz",
        "B) düzgün hesablama aparır",
        "C) cəld hesablayır",
        "D) yaddaşda saxlayır",
        "E) unudur"
      ],
      correct: "A) səhv edə bilməz"
    },
    {
      question: "Turinq maşınının adamdan fərqləndirən 2-ci mühüm xüsusiyyət hansıdır?",
      answers: [
        "A) yaddaşda saxlamır",
        "B) alqoritmi özü həll edir",
        "C) cəld hesablayır",
        "D) tez xarab olur",
        "E) sonsuz yaddaşa malikdir"
      ],
      correct: "A) yaddaşda saxlamır"
    },
    {
      question: "Türinq maşının lenti neçə xanaya bölünür?",
      answers: [
        "A) sonsuz",
        "B) beş yüz",
        "C) yüz",
        "D) əlli",
        "E) iki"
      ],
      correct: "A) sonsuz"
    },
    {
      question: "Türinq maşının lenti neçə xanaya bölünmüşdür?",
      answers: [
        "A) sola doğru",
        "B) sağa doğru",
        "C) aşağıya doğru",
        "D) hər iki tərəfə",
        "E) yuxarıya doğru"
      ],
      correct: "A) sola doğru"
    },
      {
        question: "Türinq maşınının hər bir xanasında neçə hərf var?",
        answers: [
          "A) sonsuz sayda",
          "B) iki",
          "C) bir",
          "D) bir neçə hərf",
          "E) müəyyən sayda"
        ],
        correct: "A) sonsuz sayda"
      },
      {
        question: "Türinq maşının iş prinsipində yerləşdirilmiş hərflər dəyişdirilə bilərmi?",
        answers: [
          "A) müəyyən sayda",
          "B) yox",
          "C) hə",
          "D) iki hərf",
          "E) bir hərf"
        ],
        correct: "A) müəyyən sayda"
      },
  {
    question: "Türinq maşınında idarəedici başlıq neçə xananı oxuya bilər?",
    answers: [
      "A) üç",
      "B) iki",
      "C) bir",
      "D) on",
      "E) beş"
    ],
    correct: "C) bir"
  },
  {
    question: "Türinq maşınında soldakı xana hansı hərflə göstərilir?",
    answers: [
      "A) R",
      "B) L",
      "C) S",
      "D) D",
      "E) K"
    ],
    correct: "B) L"
  },
  {
    question: "Türinq maşınında sağdakı xana hansı hərflə göstərilir?",
    answers: [
      "A) M",
      "B) L",
      "C) R",
      "D) K",
      "E) A"
    ],
    correct: "E) A"
  }
]







  // Oyun dəyişənləri
  const originalQuestions = JSON.parse(JSON.stringify(questions));
  let answersGiven = new Array(questions.length).fill(null);
  let currentIndex = 0;
  let selectedAnswer = null;

  // HTML elementləri
  const sual = document.getElementById("sual");
  const question = document.getElementById("question");
  const sec = document.getElementById("sec");
  const D_Y = document.getElementById("D_Y");
  const [btn_A, btn_B, btn_C, btn_D, btn_E] =
    ["btn_A", "btn_B", "btn_C", "btn_D", "btn_E"].map(id => document.getElementById(id));
  const yoxla = document.getElementById("yoxla");
  const so_sual = document.getElementById("so_sual");
  const ev_sual = document.getElementById("ev_sual");
  const resultArea = document.getElementById("result_area");
  const showResultBtn = document.getElementById("show_result");
  const gotoInput = document.getElementById("goto_input");
  const gotoBtn = document.getElementById("goto_btn");
//   const shuffleBtn = document.getElementById("shuffle_partial");
  const resetBtn = document.getElementById("reset_btn");
  const mixCount = document.getElementById("mix_count");
  const shuffleRangeBtn = document.getElementById("shuffle_range");
  const mixStart = document.getElementById("mix_start");
  const mixEnd = document.getElementById("mix_end");

  // Sualı yükləyən funksiya
  function loadQuestion(index) {
    if (index < 0 || index >= questions.length) return;

    currentIndex = index;
    selectedAnswer = answersGiven[index] || null;

    sual.textContent = `Sual ${index + 1}`;
    question.textContent = questions[index].question;
    sec.style.borderColor = "black";
    D_Y.textContent = "";

    [btn_A, btn_B, btn_C, btn_D, btn_E].forEach((btn, i) => {
      btn.textContent = questions[index].answers[i];
      btn.classList.toggle("selected", btn.textContent === selectedAnswer);
      btn.disabled = false;
    });
  }

  // Variant seçmək
  function selectAnswer(index) {
    selectedAnswer = questions[currentIndex].answers[index];
    answersGiven[currentIndex] = selectedAnswer;

    [btn_A, btn_B, btn_C, btn_D, btn_E].forEach((btn, i) => {
      btn.classList.toggle("selected", i === index);
    });
  }

  // Variant düymələrinə click
  [btn_A, btn_B, btn_C, btn_D, btn_E].forEach((btn, i) => {
    btn.addEventListener("click", () => selectAnswer(i));
  });

  // Yoxla düyməsi
  yoxla.addEventListener("click", () => {
    if (!selectedAnswer) return;
    const correct = questions[currentIndex].correct;
    const isCorrect = selectedAnswer === correct;

    sec.style.borderColor = isCorrect ? "green" : "red";
    D_Y.textContent = isCorrect ? "Doğru" : "Səhv";
    D_Y.style.color = isCorrect ? "green" : "red";
  });

  // İrəli və geri
  so_sual.addEventListener("click", () => currentIndex < questions.length - 1 && loadQuestion(currentIndex + 1));
  ev_sual.addEventListener("click", () => currentIndex > 0 && loadQuestion(currentIndex - 1));

  // Nəticəni göstər
  showResultBtn.addEventListener("click", () => {
    const correctCount = answersGiven.filter((ans, i) => ans === questions[i].correct).length;
    resultArea.textContent = `Sən ${questions.length} sualdan ${correctCount} düzgün cavab verdin.`;
  });

  // İstənilən suala get
  gotoBtn.addEventListener("click", () => {
    const value = parseInt(gotoInput.value);
    if (!isNaN(value) && value >= 1 && value <= questions.length) {
      loadQuestion(value - 1);
    }
  });

  // Sual siyahısını tam və ya qismən qarışdır
  function partialShuffle(array, start, end) {
    const part = array.slice(start, end + 1);
    for (let i = part.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [part[i], part[j]] = [part[j], part[i]];
    }
    for (let i = start; i <= end; i++) {
      array[i] = part[i - start];
    }
  }

  // Başdan `n` ədədini qarışdır
//   shuffleBtn.addEventListener("click", () => {
//     const count = parseInt(mixCount.value);
//     if (isNaN(count) || count < 1 || count > questions.length) {
//       alert(`1 ilə ${questions.length} arasında bir ədəd daxil edin.`);
//       return;
//     }
//     partialShuffle(questions, 0, count - 1);
//     answersGiven = new Array(questions.length).fill(null);
//     loadQuestion(0);
//   });

  // İstənilən aralığı qarışdır
  shuffleRangeBtn.addEventListener("click", () => {
    const start = parseInt(mixStart.value) - 1;
    const end = parseInt(mixEnd.value) - 1;
    if (isNaN(start) || isNaN(end) || start < 0 || end >= questions.length || start > end) {
      alert(`Zəhmət olmasa düzgün aralıq daxil edin. (1 ilə ${questions.length} arasında)`);
      return;
    }
    partialShuffle(questions, start, end);
    answersGiven = new Array(questions.length).fill(null);
    loadQuestion(start);
  });

  // Sıfırla
  resetBtn.addEventListener("click", () => {
    questions.splice(0, questions.length, ...JSON.parse(JSON.stringify(originalQuestions)));
    answersGiven = new Array(questions.length).fill(null);
    loadQuestion(0);
  });

  // İlk sualı göstər
  loadQuestion(0);
