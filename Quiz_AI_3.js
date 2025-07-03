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
  },
  {
    question: "52. Türinq maşının şərhi neçə cəhətlə verilir?",
    answers: [
      "A) sonlu sayda",
      "B) bir",
      "C) sonsuz sayda",
      "D) bir neçə",
      "E) üç"
    ],
    correct: "C) sonsuz sayda"
  },
  {
    question: "53. Türinq maşının proqramı neçə sətr və neçə sütun olan cədvəl şəklində verilir?",
    answers: [
      "A) (k+2) sətr və (m+1) sütun",
      "B) (k-1) sətr və k sütun",
      "C) k sətr və m sütun",
      "D) (k+1) sətr və m sütun",
      "E) sözlərlə"
    ],
    correct: "C) k sətr və m sütun"
  },
  {
    question: "57. Türinq maşını nə vaxt verilmişdir deyirlər?",
    answers: [
      "A) eynilikdirsə",
      "B) köhnə hərf silinir",
      "C) mənasızdırsa",
      "D) sadə bərabərlik olarsa",
      "E) proqram"
    ],
    correct: "E) proqram"
  },
  {
    question: "56. Türinq maşının işi nə vaxt başa çatır?",
    answers: [
      "A) Qk+1 olursa",
      "B) Qk olursa",
      "C) Qo veziyyetine gelirse",
      "D) Sk veziyyetine gelirse",
      "E) Si veziyyetine gelirse"
    ],
    correct: "E) Si veziyyetine gelirse"
  },
//   56. Türinq maşının işi nə vaxt başa çatır?
//   Çətinlik dərəcəsi -1
//  A)   vəziyyətinə gəlirsə 
//  B)   olursa
//  C)   vəziyyətinə gəlirsə
//  D) Sk vəziyyətinə gəlirsə
//  E) qk+1 olursa
 


  {
    question: "59. Türinq maşının kompozisiyası əməli komutativlik xassəsinə malikdirmi?",
    answers: [
      "A) bir neçə dəfə",
      "B) yox",
      "C) sonlu sayda",
      "D) hə",
      "E) müəyyən sayda"
    ],
    correct: "C) sonlu sayda"
  },
  {
    question: "61. Türinq maşınında 0 (sıfır) rəqəmi hansı ədədin simvolu ilə göstərilir?",
    answers: [
      "A) 7",
      "B) 2",
      "C) 1",
      "D) K",
      "E) III"
    ],
    correct: "C) 1"
  },
  {
    question: "62. 0011110101110 nəyi bildirir?",
    answers: [
      "A) 3 və 1 ədədləri",
      "B) 7-3 ədədini",
      "C) 2 və 5 ədədləri",
      "D) 2+1 ədədini",
      "E) solda 3, sağda 2 ədədi yerləşir"
    ],
    correct: "A) 3 və 1 ədədləri"
  },
  {
    question: "63. n=3, x1=2, x2=1, x3=3 ədədləri lentdə necə yerləşir?",
    answers: [
      "A) 0000111",
      "B) 0001011100",
      "C) 111001",
      "D) 00110",
      "E) 00111011011110"
    ],
    correct: "A) 0000111"
  },
  {
    question: "64. Türinq maşının işinin nəticəsi nədir?",
    answers: [
      "A) söz",
      "B) funksiya",
      "C) tənlik",
      "D) alqoritm",
      "E) bərabərlik"
    ],
    correct: "D) alqoritm"
  },
  {
    question: "65. Türinq maşının tam vəziyyəti necə adlanır?",
    answers: [
      "A) konfiqurasiya",
      "B) əlifba",
      "C) proqram",
      "D) vəziyyət",
      "E) lent"
    ],
    correct: "C) proqram"
  },
  {
    question: "66. Türinq maşınında simvolların artması hansı vəziyyətin azalmasına gətirilir?",
    answers: [
      "A) hərflərin",
      "B) daxili vəziyyətin",
      "C) interpretasiyanın",
      "D) simvolların",
      "E) ədədlərin"
    ],
    correct: "C) interpretasiyanın"
  },
  {
    question: "67. Türinq maşını üçün proqram yazılışı və konkret quruluşunun yazılışı necə adlanır?",
    answers: [
      "A) interpretasiya",
      "B) proqram",
      "C) simvol",
      "D) tənlik",
      "E) ardıcıllıq"
    ],
    correct: "B) proqram"
  },
  {
    question: "68. “Hər bir alqoritmi icra edən maşın var” tezisi kimə məxsusdur?",
    answers: [
      "A) K.Qeldə",
      "B) A.Türinqə",
      "C) R.Məmmədova",
      "D) Markova",
      "E) Pifaqora"
    ],
    correct: "A) K.Qeldə"
  },
  {
    question: "69. f(x,y)=xy necə funksiyadır?",
    answers: [
      "A) primitiv-rekursiv",
      "B) həll olan",
      "C) azalan",
      "D) loqarifmik",
      "E) həll olmayan",
      "A) artan"
    ],
    correct: "A) primitiv-rekursiv"
  },
  {
    question: "70. Universal maşında arqument rolunu nə oynayır?",
    answers: [
      "A) tam ədədlər",
      "B) interpretasiya",
      "C) arqument",
      "D) türinq maşını",
      "E) funksiya"
    ],
    correct: "B) interpretasiya"
  },
  {
    question: "74. Elementar funksiyalar necə funksiyalardır?",
    answers: [
      "A) hesabi",
      "B) loqarifmik",
      "C) mürəkkəb",
      "D) kəsilməz",
      "E) sadə"
    ],
    correct: "C) mürəkkəb"
  },
  {
    question: "75. Elementar funksiyaların qurulması üçün başlanğıc kimi hansı ədəd götürülür?",
    answers: [
      "A) rum rəqəmi",
      "B) bir",
      "C) iki",
      "D) beş",
      "E) natural ədəd"
    ],
    correct: "A) rum rəqəmi"
  },
  {
    question: "81. Rekursif funksiyalar sinfi necə təyin olunur?",
    answers: [
      "A) intiutiv",
      "B) birqiymətli",
      "C) təcmini",
      "D) dəqiq",
      "E) çox qiyməyli"
    ],
    correct: "D) dəqiq"
  },
  {
    question: "88. Hansı funksiyalar primitiv-rekursivdir?",
    answers: [
      "A) həmişə",
      "B) müəyyən hallarda",
      "C) x=1 olduqda",
      "D) müsbət qiymətlərdə",
      "E) əvəzetmə və rekursiya ilə alındıqda"
    ],
    correct: "B) müəyyən hallarda"
  },
  {
    question: "89. Bütün rekursiv funksiyalar primitiv rekursivdirmi?",
    answers: [
      "A) x=y olduqda",
      "B) hə",
      "C) yox",
      "D) bəzən",
      "E) y=x+1 olduqda"
    ],
    correct: "E) y=x+1 olduqda"
  },
  {
    question: "93. Hesabi funksiyalar hansı üsullarla alınır?",
    answers: [
      "A) azaltma",
      "B) əvəzləmə, dəyişmə",
      "C) Evklid üsulu",
      "D) çoxaltma",
      "E) “eyniliklə sıfır”, bilavasitə sonra gələn “proyeksiyalama”"
    ],
    correct: "C) Evklid üsulu"
  },
  {
    question: "93. Hesabi funksiyalar hansı üsullarla alınır?",
    answers: [
      "A) azaltma",
      "B) əvəzləmə, dəyişmə",
      "C) Evklid üsulu",
      "D) çoxaltma",
      "E) “eyniliklə sıfır”, bilavasitə sonra gələn “proyeksiyalama”"
    ],
    correct: "C) Evklid üsulu"
  },
  {
    question: "95. Rekursiya operatoru qaydası zamanı hansı funksiya alınır?",
    answers: [
      "A) əvvəlki funksiya",
      "B) artan funksiya",
      "C) x+2=y-1 dəyişənli",
      "D) k+2 dəyişənli yeni funksiya",
      "E) n dəyişənli yeni funksiya"
    ],
    correct: "D) k+2 dəyişənli yeni funksiya"
  },
  {
    question: "96. Rekursiya operatorunda dəyişənlərdən 2-ci dəyişənin rolu nədən ibarətdir?",
    answers: [
      "A) köməkçi",
      "B) dəyişəni yox etmək",
      "C) əlavə",
      "D) əsas",
      "E) arqument əlavə etmək"
    ],
    correct: "B) dəyişəni yox etmək"
  },
    {
    question: "97. f1 ve f2 funksiyalarından R operatorunun tətbiqi nəticəsində f funksiyasının alınması prosesi necə göstərilir ",
    answers: [
      "A) f=A(x)",
      "B) R=f(x)",
      "C) F=x+y",
      "D) f(x,y)",
      "E) R[f1,f2(x,y)]"
    ],
    correct: "C) F=x+y"
  },
  {
    question: "99. Bütün hesablanan funksiyalar primitiv-rekursiv kimi yazmaq olarmı?",
    answers: [
      "A) f =A(x)  olduqda hə",
      "B) hə",
      "C) yox",
      "D) bir neçə qiymətdə olar",
      "E) yalnız x=1 olduqda olmaz"
    ],
    correct: "A) f =A(x)  olduqda hə"
  },
  {
    question: "100. Hasil hansı əməldən tez böyüyür?",
    answers: [
      "A) toplama",
      "B) vurma",
      "C) çıxma",
      "D) bölmə",
      "E) qüvvətə yüksəltmə"
    ],
    correct: "C) çıxma"
  },
  {
    question: "101. Qüvvətə yüksəltmə hansı əməldən tez yarır?",
    answers: [
      "A) bölmə",
      "B) vurma",
      "C) kök alma",
      "D) çıxma",
      "E) toplama"
    ],
    correct: "B) vurma"
  },
  {
    question: "102. P0(a,x)=a+x  yazılışında toplama hansı əməl hesab edilir?",
    answers: [
      "A) ikinci",
      "B) birinci",
      "C) (n+1)-ci",
      "D) n-ci",
      "E) sıfırıncı"
    ],
    correct: "E) sıfırıncı"
  },
  {
    question: "103. P1(a,x)=ax  yazılışında vurma necenci əməl hesab edilir?",
    answers: [
      "A) ikinci",
      "B) birinci",
      "C) (n+1)-ci",
      "D) n-ci",
      "E) sıfırıncı"
    ],
    correct: "A) ikinci"
  },
  {
    question: "110. Akkerman funksiyası primitiv-rekursiv dirmi?",
    answers: [
      "A) hə",
      "B) x=1 qiymətində",
      "C) heç vaxt",
      "D) yox",
      "E) x=y olanda"
    ],
    correct: "B) x=1 qiymətində"
  },
  {
    question: "111. Akkerman funksiyası sürətlə böyüyür yoxsa, primitiv-rekursiv funksiyalar?",
    answers: [
      "A) y= logx funksiyası",
      "B) Primitiv-Rekursiv",
      "C) y=x^2 funksiyası",
      "D) Akkerman",
      "E) y=kokalti x funksiyası"
    ],
    correct: "A) y= logx funksiyası"
  },
  {
    question: "112. Akkerman funksiyası necə hesablanan funksiyadır?",
    answers: [
      "A) sürətlə",
      "B) artan",
      "C) kəsilməz",
      "D) total",
      "E) azalan"
    ],
    correct: "C) kəsilməz"
  },
  {
    question: "113. Alqoritm necə obyektlərlə işləyir?",
    answers: [
      "A) sabit",
      "B) dəyişən",
      "C) konstruktiv",
      "D) təzə",
      "E) köhnə"
    ],
    correct: "B) dəyişən"
  },
  {
    question: "114. İşarələrdən ibarət sonlu çoxluq dedikdə nə başa düşülür?",
    answers: [
      "A) rasional ədədlər",
      "B) natural ədədlər",
      "C) əlifba",
      "D) kəsrlər",
      "E) kodlar"
    ],
    correct: "B) natural ədədlər"
  },
  {
    question: "115. Türinq maşınıdakı “söz” anlayışı təbii dildəki “söz” anlayışından fərqlənirmi?",
    answers: [
      "A) yox",
      "B) x-in bir neçə qiymətində",
      "C) hə",
      "D) x=1 olduqda",
      "E) olduqda"
    ],
    correct: "C) hə"
  },
  {
    question: "116. Sonsuz xanalara bölünmüş maşın hansı maşındır?",
    answers: [
      "A) Türinq",
      "B) K.Qeld",
      "C) Markov",
      "D) Yük maşını",
      "E) avtomobil"
    ],
    correct: "C) Markov"
  },
  {
    question: "117.S0 hərfi T.M.-də nə vaxt yazılır?",
    answers: [
      "A) heç vaxt",
      "B) həmişə",
      "C) S0=1 olduqda",
      "D) dentin xanası boş olduqda",
      "E) S1=S0 olduqda"
    ],
    correct: "C) S0=1 olduqda"
  },
  {
    question: "166. Alqoritmlər çoxluğu necə çoxluqdur?",
    answers: [
      "A) mürəkkəb",
      "B) rekursiv",
      "C) hesabi",
      "D) normal",
      "E) primitiv-rekursiv"
    ],
    correct: "A) mürəkkəb"
  },
  {
    question: "167. Primitiv-rekursiv funksiyalar hansı əlamətlərinə görə siniflərə ayrılır?",
    answers: [
      "A) artmasına görə",
      "B) sabit olmasına görə",
      "C) dəyişənlərinə görə",
      "D) arqumentlərinə görə",
      "E) ekvivalentliyinə görə"
    ],
    correct: "A) artmasına görə"
  },
  {
    question: "168. Eynilik çevirmələri necə yazılır?",
    answers: [
      "A) aa və bb",
      "B) a+b",
      "C) a-b",
      "D)",
      "E) aa+bb"
    ],
    correct: "A) aa və bb"
  },
  {
    question: "169. Akkerman funksiyası necə yazılır?",
    answers: [
      "A) A(x)",
      "B) A(x,x)",
      "C) A(x)+B(x)",
      "D) B(n,x)",
      "E) B(x)"
    ],
    correct: "C) A(x)+B(x)"
  },
  {
    question: "170. Akkermanın dioqanal funksiyası necə yazılır",
    answers: [
      "A) A(x) B(x)",
      "B) A(x)+B(x)",
      "C) A(x)=B(x,x)",
      "D) A(x)",
      "E) B(x)"
    ],
    correct: "C) A(x)=B(x,x)"
  },
  {
    question: "171. Avtomatlar nəzəriyyəsinin predmeti nədir?",
    answers: [
      "A) mülahizələr",
      "B) nəzəri kibernetika",
      "C) riyazi modellər",
      "D) məntiq elementi",
      "E) registrlər"
    ],
    correct: "D) məntiq elementi"
  },
  {
    question: "172. Avtomat termini ilk dəfə neçənci ildə işlənmişdir?",
    answers: [
      "A) 2006",
      "B) 1931",
      "C) 1950",
      "D) 1930",
      "E) 1961"
    ],
    correct: "E) 1961"
  },
  {
    question: "173. Potensial sonsuz yaddaşa malik maşın hansı maşındır",
    answers: [
      "A) EHM",
      "B) Markov maşını",
      "C) Kərəm maşını",
      "D) Türinq maşını",
      "E) Cörc maşını"
    ],
    correct: "B) Markov maşını"
  },
  {
    question: "174. Türinq maşını necə maşındır?",
    answers: [
      "A) xəyali",
      "B) iri həcmli",
      "C) bacarıqlı",
      "D) formal",
      "E) kiçik maşındır"
    ],
    correct: "A) xəyali"
  },
  {
    question: "178. Sıfırlaşdırıcı; vahid əlavə etmə, ünvan ötürən, şərti keçid əmrləri hansı maşında yerinə yetirilir?",
    answers: [
      "A) QMRM",
      "B) Türinq",
      "C) Markov",
      "D) Evklid",
      "E) Akkerman"
    ],
    correct: "B) Türinq"
  },
  {
    question: "179. Növbəti əmr olmadıqda QMRM –də nə baş verir",
    answers: [
      "A) hesablama davam edir",
      "B) hesablama dayanır",
      "C) yaddaş artır",
      "D) əməliyyat təkrarlanır",
      "E) sonsuzluğa gedir"
    ],
    correct: "C) yaddaş artır"
  },
  {
    question: "180. Hesablanan funksiyalar sinfi kimə görə üst-üstə düşür?",
    answers: [
      "A) Türinqə görə",
      "B) Markova görə",
      "C) Akkormana görə",
      "D) Cörrə görə",
      "E) Nəsimiyə görə"
    ],
    correct: "C) Akkormana görə"
  },
  {
    question: "181. Müasir kompüterlərdən hansı maşın fərqlənir?",
    answers: [
      "A) Türinq",
      "B) Evklid",
      "C) EHM",
      "D) Cörc",
      "E) Albert"
    ],
    correct: "B) Evklid"
  },
  {
    question: "182. Assosiativ sistem müəyyən əlifbanın hansı çoxluğuna deyilir?",
    answers: [
      "A) kəsilməyən",
      "B) sözlər",
      "C) müəyyən",
      "D) artan",
      "E) universal"
    ],
    correct: "A) kəsilməyən"
  },
  {
    question: "183. Bütün QMRM- də hesablanan funksiyalar sinfi  üst-üstə düşürmü?",
    answers: [
      "A) boş sözdür",
      "B) yox",
      "C) eynilikdir",
      "D) hə",
      "E) bəzi halda"
    ],
    correct: "A) boş sözdür"
  },
  {
    question: "184. Akkorman funksiyası hesablanandırmı?",
    answers: [
      "A) yox",
      "B) x=y  olduqda",
      "C) müəyyən qiymətlərdə",
      "D) hə",
      "E) x=1 olduqda"
    ],
    correct: "B) x=y  olduqda"
  },
  {
    question: "185. Türinq maşını necə avtomatdır?",
    answers: [
      "A) özü yeriyən",
      "B) sonsuz",
      "C) sonlu",
      "D) artan",
      "E) azalan"
    ],
    correct: "B) sonsuz"
  },
  {
    question: "186. Alqoritmlər və releli qurğular nəzəriyyəsində hansı anlayış meydana gəlmişdir?",
    answers: [
      "A) Evklid",
      "B) Türinq",
      "C) normal",
      "D) avtomat",
      "E) Markov"
    ],
    correct: "E) Markov"
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


let isVertical = true;

document.getElementById("toggle_layout").addEventListener("click", () => {
  const variDiv = document.querySelector(".vari");
  isVertical = !isVertical;

  if (isVertical) {
    variDiv.classList.remove("row-layout");
    variDiv.classList.add("column-layout");
  } else {
    variDiv.classList.remove("column-layout");
    variDiv.classList.add("row-layout");
  }
});


document.querySelector(".vari").classList.add("column-layout");
