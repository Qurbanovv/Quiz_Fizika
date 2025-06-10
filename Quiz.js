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
        question: "Neytronun kütləsinin enerji vahidlərində qiyməti nəyə bərabərdir?",
        answers: [
          "A) 939,6 MeV",
          "B) 1024 MeV",
          "C) 0,511 MeV",
          "D) 938,3 MeV",
          "E) 673 MeV"
        ],
        correct: "A) 939,6 MeV"
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
        correct: "D) 2 dəfə artar"
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
        correct: "E) 3 kq"
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
        question: "İmpulsu saxlanan mexaniki sistemin kütlə mərkəzi necə hərəkət edir?",
        answers: [
          "A) Düzxətli bərabəryeyinləşən",
          "B) Düzxətli bərabəryavaşıyan",
          "C) Çevrə boyunca bərabəryeyinləşən",
          "D) Düzxətli bərabərsürətli",
          "E) Çevrə boyunca bərabəryavaşıyan"
        ],
        correct: "D) Düzxətli bərabərsürətli"
      },
      {
        question: "Aşağıda eyni bir cismin müxtəlif hərəkətinin tənlikləri verilmişdir: 1) υx = -3 + 6t   2) υx = 3 - 4t   3) υx = 7 - 3t   4) υx = -7t   5) υx = -t. Hansı halda cismə təsir edən əvəzləyici qüvvənin modulu ən böyükdür?",
        answers: [
          "A) 4",
          "B) 2",
          "C) 5",
          "D) 1",
          "E) 3"
        ],
        correct: "A) 4"
      },
      {
        question: "Cismin impulsu P = 3t³ + 2t² - 5t qanunu ilə dəyişir. 2-ci saniyənin sonunda cismə təsir edən qüvvənin modulunu tapın.",
        answers: [
          "A) 39 N",
          "B) 20 N",
          "C) 22 N",
          "D) 0",
          "E) 10 N"
        ],
        correct: "A) 39 N"
      },
      {
        question: "Sükunətdəki cismə təsir edən qüvvə zamandan asılı olaraq F = 4t qanunu ilə dəyişir. 3-cü saniyənin sonunda cismin impulsunu təyin edin.",
        answers: [
          "A) 7 kq∙m/san",
          "B) 12 kq∙m/san",
          "C) 4 kq∙m/san",
          "D) 18 kq∙m/san",
          "E) 36 kq∙m/san"
        ],
        correct: "D) 18 kq∙m/san"
      },
      {
        question: "Hansı qüvvə konservativ qüvvə adlanır?",
        answers: [
          "A) Sinusoidal qanunla dəyişən qüvvə",
          "B) Təbiətdə olan bütün qüvvələr",
          "C) Gördüyü iş yolun formasından asılı olan",
          "D) Qiymətcə sabit qüvvələr",
          "E) Gördüyü iş yolun formasından asılı olmayan"
        ],
        correct: "E) Gördüyü iş yolun formasından asılı olmayan"
      },
      {
        question: "Tam mexaniki enerjinin saxlanması qanunu nə ilə əlaqədardır?",
        answers: [
          "A) Zamanın izotropluğu",
          "B) Fəzanın izotropluğu",
          "C) Fəzanın bircinsliyi",
          "D) Zamanın bircinsliyi",
          "E) Impulsun saxlanması qanunu"
        ],
        correct: "D) Zamanın bircinsliyi"
      },
      {
        question: "Ətalət momenti 60 kq∙m² olan disk 3 rad/san bucaq sürəti ilə fırlanır. Diskin impuls momentini hesablayın.",
        answers: [
          "A) 57 C∙san",
          "B) 63 C∙san",
          "C) 180 C∙san",
          "D) 20 C∙san",
          "E) 540 C∙san"
        ],
        correct: "C) 180 C∙san"
      },
      {
        question: "Fırlanma hərəkətində cismin ətalət ölçüsü hansı fiziki kəmiyyətlə xarakterizə olunur?",
        answers: [
          "A) Kütlə",
          "B) İmpuls momenti",
          "C) Ətalət momenti",
          "D) Radius vektor",
          "E) Kinetik enerji"
        ],
        correct: "C) Ətalət momenti"
      },
      {
        question: "Fırlanan cismin kinetik enerjisini 16 dəfə artırdıqda onun impuls momenti necə dəyişir?",
        answers: [
          "A) 4 dəfə azalar",
          "B) 2 dəfə azalar",
          "C) 16 dəfə artar",
          "D) 16 dəfə azalar",
          "E) 4 dəfə artar"
        ],
        correct: "E) 4 dəfə artar"
      },
      {
        question: "Əyrixətli hərəkətdə tam təcil hansı istiqamətdə yönəlir?",
        answers: [
          "A) Yekun qüvvə istiqamətində",
          "B) Əyrilik mərkəzinə tərəf",
          "C) Əyriyə toxunan istiqamətində",
          "D) Yekun qüvvənin əksi istiqamətində",
          "E) İstiqaməti məlum deyil"
        ],
        correct: "A) Yekun qüvvə istiqamətində"
      },
      {
        question: "20 N qüvvənin təsiri altında cismin yerdəyişməsinin zamandan asılılığı S=6-2t-t² qanunu ilə baş verir. Cismin kütləsi nəyə bərabərdir?",
        answers: [
          "A) 10 kq",
          "B) 40 kq",
          "C) 120 kq",
          "D) 14 kq",
          "E) 60 kq"
        ],
        correct: "A) 10 kq"
      },
      {
        question: "Hərəkətin əyrixətli və düzxətli olması necə müəyyən edilir?",
        answers: [
          "A) Bucaq sürəti ilə",
          "B) υ = ωR ifadəsi ilə",
          "C) xətti və bucaq sürəti ilə",
          "D) Trayektoriyanın forması ilə",
          "E) gedilən yolun uzunluğu ilə"
        ],
        correct: "D) Trayektoriyanın forması ilə"
      },
      {
        question: "Sıxlığı 0.01 kq/m³, molekullarının orta kvadratik sürəti 480 m/san olan ideal qazın təzyiqini təyin edin.",
        answers: [
          "A) 105 Pa",
          "B) 4.8∙10⁴ Pa",
          "C) 160 Pa",
          "D) 768 Pa",
          "E) 600 Pa"
        ],
        correct: "D) 768 Pa"
      },
      {
        question: "Qaz adiobatik genişlənir. Bu zaman qazın temperaturu və təzyiqi necə dəyişir?",
        answers: [
          "A) Temperatur və təzyiq azalır",
          "B) Temperatur artır, təzyiq azalır",
          "C) Temperatur azalır, təzyiq artır",
          "D) Temperatur və təzyiq dəyişmir",
          "E) Temperatur və təzyiq artır"
        ],
        correct: "A) Temperatur və təzyiq azalır"
      },
      {
        question: "Nyutonun birinci qanunundakı təsir anlayışını təsvir etmək üçün hansı fiziki kəmiyyətdən istifadə edilir?",
        answers: [
          "A) Təcil",
          "B) Kütlə",
          "C) Qüvvə",
          "D) Sürət",
          "E) Bucaq sürəti"
        ],
        correct: "C) Qüvvə"
      },
      {
        question: "Molekulların istilik hərəkətinin orta kinetik enerjisi onların qarşılıqlı təsirinin potensial enerjisindən dəfələrlə böyükdürsə, maddə hansı aqreqat halındadır?",
        answers: [
          "A) Bərk",
          "B) Maye",
          "C) Qaz",
          "D) Qaz və maye",
          "E) Maye və bərk"
        ],
        correct: "C) Qaz"
      },
      {
        question: "Maddənin atomları bir-birinə çox yaxın və nizamlı yerləşiblərsə, periodik təkrarlanan quruluş əmələ gətiriblərsə, maddə hansı aqreqat halda olar?",
        answers: [
          "A) Qaz və maye",
          "B) Maye",
          "C) Qaz",
          "D) Kristal",
          "E) Kristal və maye"
        ],
        correct: "D) Kristal"
      },
      {
        question: "Havanın tərkibinə daxil olan N₂, O₂, H₂, CO₂, CO qazlarından verilmiş temperaturda hansının molekullarının orta ədədi sürəti ən böyükdür?",
        answers: [
          "A) H₂",
          "B) O₂",
          "C) CO",
          "D) CO₂",
          "E) N₂"
        ],
        correct: "A) H₂"
      },
      {
        question: "Qazda proseslərin izotermikliyini necə təmin etmək olar?",
        answers: [
          "A) Prosesi sürətli və istiliyi çox zəif keçirən qabda aparmaqla",
          "B) Prosesi çox sürətlə aparmaqla",
          "C) Prosesi yavaş və istiliyi yaxşı keçirən qabda aparmaqla",
          "D) Prosesi sabit həcmdə aparmaqla",
          "E) Prosesdə təzyiqi sabit saxlamaqla"
        ],
        correct: "C) Prosesi yavaş və istiliyi yaxşı keçirən qabda aparmaqla"
      },
      {
        question: "Sıxlığı 0.03 kq/m³, molekullarının orta kvadratik sürəti 300 m/san olan qazın təzyiqini təyin edin.",
        answers: [
          "A) 500 Pa",
          "B) 400 Pa",
          "C) 160 Pa",
          "D) 900 Pa",
          "E) 600 Pa"
        ],
        correct: "D) 900 Pa"
      },
      {
        question: "Eyni kütləli metal çubuqların başlanğıc temperaturları t₁ = 800°C və t₂ = 200°C – dir. Çubuqları toxundurduqda qərarlaşmış temperatur 440°C olur. Metalların xüsusi istilik tutumları nisbətini (c₁/c₂) tapın.",
        answers: [
          "A) 1/3",
          "B) 2/3",
          "C) 3/4",
          "D) 2",
          "E) 3"
        ],
        correct: "B) 2/3"
      },
      {
        question: "Hər hansı proses zamanı qaz 5 MC iş görür və onun daxili enerjisi 2 MC azalır. Bu prosesdə qaza verilən istilik miqdarını hesablayın.",
        answers: [
          "A) 4 MC",
          "B) 7 MC",
          "C) 3 MC",
          "D) 10 MC",
          "E) 2 MC"
        ],
        correct: "C) 3 MC"
      },
      {
        question: "Qabdakı ideal qazın kütləsini dəyişmədən həcmini və təzyiqini 3 dəfə artırsalar, molekulların orta kvadratik sürəti necə dəyişər?",
        answers: [
          "A) Dəyişməz",
          "B) 3 dəfə azalar",
          "C) 9 dəfə artar",
          "D) 9 dəfə azalar",
          "E) 3 dəfə artar"
        ],
        correct: "E) 3 dəfə artar"
      },
      {
        question: "Entropiya üçün Boltsman tənliyi riyazi olaraq necə ifadə edilir?",
        answers: [
          "A) S = R lnW",
          "B) S = k2 lnW",
          "C) S = k TlnW",
          "D) S = k lnW",
          "E) S = k R lnW"
        ],
        correct: "D) S = k lnW"
      },
      {
        question: "Entropiya üçün Boltsman tənliyində W fiziki kəmiyyəti nəyi ifadə edir?",
        answers: [
          "A) Halın statistik çəkisini",
          "B) Halın enerjisini",
          "C) Molekulların orta kinetik enerjisini",
          "D) Sistemin makrohallarının sayını",
          "E) Entropiyanı"
        ],
        correct: "A) Halın statistik çəkisini"
      },
      {
        question: "Karno dövrü zamanı qızdırıcıdan alınan istiliyin ¾-ü soyuducuya verilir. Qızdırıcının temperaturu 400 K-dir. Soyuducunun temperaturunu tapın.",
        answers: [
          "A) 200 K",
          "B) 300 K",
          "C) 100 K",
          "D) 50 K",
          "E) 150 K"
        ],
        correct: "A) 300 K"
      },
      {
        question: "Hansı proses zamanı sistemin entropiyası dəyişmir?",
        answers: [
          "A) İzotermik",
          "B) Adiobatik",
          "C) İzobarik",
          "D) İzoxorik",
          "E) Adiobatik və izotermik"
        ],
        correct: "B) Adiobatik"
      },
      {
        question: "Qapalı sistemin daxilində gedən dönməyən proseslərdə entropiya necə dəyişir?",
        answers: [
          "A) Məlum deyil",
          "B) Azalır",
          "C) Dəyişmir",
          "D) Artır",
          "E) Əvvəl artır, sonra azalır"
        ],
        correct: "D) Artır"
      },
      {
        question: "İstilik maşınının f.i.ə. 12%-dir. Maşın bir dövr ərzində 150 C iş görür. Dövr ərzində soyuducuya verilən istilik miqdarını hesablayın.",
        answers: [
          "A) 200 C",
          "B) 400 C",
          "C) 1100 C",
          "D) 1200 C",
          "E) 1600 C"
        ],
        correct: "D) 1100 C"
      },
      {
        question: "İstilik maşınının f.i.ə. 15%, bir dövr ərzində soyuducuya verdiyi istilik miqdarı 34 C-dir. Bir dövrdə maşının gördüyü işi hesablayın.",
        answers: [
          "A) 12 C",
          "B) 40 C",
          "C) 80 C",
          "D) 6 C",
          "E) 180 C"
        ],
        correct: "D) 6 C"
      },
      {
        question: "Qaza 15 C istilik miqdarı verilməsi və qaz üzərində işin görülməsi nəticəsində ideal qazın daxili enerjisi 20 C artmışdır. Nə qədər iş görülmüşdür?",
        answers: [
          "A) 5 C",
          "B) 35 C",
          "C) 40 C",
          "D) 8 C",
          "E) 12 C"
        ],
        correct: "A) 5 C"
      },
      {
        question: "Qazda gedən proses zamanı istənilən anda xarici qüvvələrin qaz üzərində gördüyü iş qazın ətraf cisimlərə verdiyi istilik miqdarına bərabərdir. Qazda hansı proses gedir?",
        answers: [
          "A) Adiobatik",
          "B) İzoxorik",
          "C) İzobarik",
          "D) İzotermik",
          "E) İzotermik və adiobatik"
        ],
        correct: "D) İzotermik"
      },
      {
        question: "Qaz adiobatik sıxılır. Bu zaman qazın temperaturu və təzyiqi necə dəyişir?",
        answers: [
          "A) Temperatur və təzyiq artır",
          "B) Temperatur artır, təzyiq azalır",
          "C) Temperatur azalır, təzyiq artır",
          "D) Temperatur dəyişmir, təzyiq azalır",
          "E) Temperatur artır, təzyiq dəyişmir"
        ],
        correct: "A) Temperatur və təzyiq artır"
      },
      {
        question: "Termodinamik sistemdə ixtiyari termodinamik proses baş verir. Daxili enerji (U), entropiya (S), iş (A), istilik miqdarı (Q) kimi kəmiyyətlərdən hansılar sistemin hal funksiyasıdır?",
        answers: [
          "A) U və Q",
          "B) Q və A",
          "C) U və S",
          "D) Q, U və S",
          "E) S və Q"
        ],
        correct: "C) U və S"
      },
      {
        question: "Karno prosesi üçün hansı doğrudur?",
        answers: [
          "A) İki izotermik və iki izoxorik prosesdən ibarətdir",
          "B) İki izotermik və iki izobarik prosesdən ibarətdir",
          "C) İki adiabatik və iki izoxorik prosesdən ibarətdir",
          "D) İki izotermik və iki adiabatik prosesdən ibarətdir",
          "E) İki adiabatik və iki izobarik prosesdən ibarətdir"
        ],
        correct: "D) İki izotermik və iki adiabatik prosesdən ibarətdir"
      },
      {
        question: "2 kq kütləli ideal qaz izotermik genişlənərkən 40 C iş görmüşdür. Qaza verilən istilik miqdarı nə qədər olmuşdur?",
        answers: [
          "A) 80 C",
          "B) 42 C",
          "C) 20 C",
          "D) 40 C",
          "E) C"
        ],
        correct: "D) 40 C"
      },
      {
        question: "Nernst qanunu (Termodinamikanın III qanunu) aşağıdakılardan hansıdır?",
        answers: [
          "A) Temperatur mütləq sıfıra yaxınlaşdıqda naqillərin xüsusi müqaviməti sıfra yaxınlaşır",
          "B) İrəliləmə hərəkətində hər sərbəstlik dərəcəsinə ½ kT qədər enerji düşür",
          "C) Adiabatik prosesdə sistemin entropiyasının dəyişməsi sıfıra bərabərdir",
          "D) Temperatur mütləq sıfıra yaxınlaşdıqda sistemin entropiyası sıfıra yaxınlaşır",
          "E) T = 0K almaq mümkün deyildir"
        ],
        correct: "D) Temperatur mütləq sıfıra yaxınlaşdıqda sistemin entropiyası sıfıra yaxınlaşır"
      },
      {
        question: "Aşağıdakı kəmiyyətlərdən hansı hal parametri deyil?",
        answers: [
          "A) Daxili enerji",
          "B) Entropiya",
          "C) İstilik miqdarı",
          "D) Təzyiq",
          "E) Temperatur"
        ],
        correct: "C) İstilik miqdarı"
      },
      {
        question: "SQSE sistemində elementar yük (elektronun yükünün modulu) necə ifadə edilir?",
        answers: [
          "A) 1,6·10⁻²⁸ SQSEq",
          "B) 1,6·10⁻¹⁰ SQSEq",
          "C) 4,8·10⁻¹⁹ SQSEq",
          "D) 4,8·10⁻¹⁰ SQSEq",
          "E) 1,6·10¹⁰ SQSEq"
        ],
        correct: "D) 4,8·10⁻¹⁰ SQSEq"
      },
      {
        question: "Radiusu 20 sm olan yüklü kürənin səthində elektrik sahəsinin potensialı 4V-dur. Kürənin mərkəzindən 10 sm məsafədə potensialın qiyməti nə qədər olar?",
        answers: [
          "A) 4V",
          "B) 8V",
          "C) 0",
          "D) 12V",
          "E) 6V"
        ],
        correct: "A) 4V"
      },
      {
        question: "Elektrik sahəsində müsbət yükün hərəkəti zamanı görülən işin yükün miqdarına olan nisbəti ilə təyin olunan fiziki kəmiyyət hansıdır?",
        answers: [
          "A) Mühitin dielektrik nüfuzluluğu",
          "B) Elektrostatik sahənin potensialı",
          "C) Elektrostatik sahənin enerjisi",
          "D) Elektrik tutumu",
          "E) Elektrostatik sahənin potensiallar fərqi"
        ],
        correct: "E) Elektrostatik sahənin potensiallar fərqi "
      },
      {
        question: "Yüklənmiş kürənin mərkəzində potensial 240 V, kürənin səthindən 2 sm məsafədə 200 V-dur. Kürənin radiusunu tapın.",
        answers: [
          "A) 5 sm",
          "B) 8 sm",
          "C) 10 sm",
          "D) 20 sm",
          "E) 40 sm"
        ],
        correct: "C) 10 sm"
      },
      {
        question: "İki müsbət yük arasındakı məsafəni necə dəyişmək lazımdır ki, yüklərin hər birini 4 dəfə artırdıqda qarşılıqlı təsir qüvvəsi dəyişməz qalsın?",
        answers: [
          "A) 4 dəfə azaltmaq",
          "B) 2 dəfə artırmaq",
          "C) 16 dəfə artırmaq",
          "D) 16 dəfə azaltmaq",
          "E) 4 dəfə artırmaq"
        ],
        correct: "E) 4 dəfə artırmaq"
      },
      {
        question: "Bir-birindən 1 m məsafədə vakuumda paralel yerləşdirilmiş iki düz paralel naqillərin 1m uzunluqlarının maqnit qarşılıqlı təsir qüvvəsinə görə hansı fiziki kəmiyyətin vahidi təyin edilir?",
        answers: [
          "A) Maqnit momentinin",
          "B) Gərginliyin",
          "C) İnduktivliyin",
          "D) Cərəyan şiddətinin",
          "E) Elektrik hərəkət qüvvəsinin"
        ],
        correct: "D) Cərəyan şiddətinin"
      },
      {
        question: "İdeal qazın həcmi iki dəfə artdıqda onun daxili enerjisi necə dəyişər?",
        answers: [
          "A) 4 dəfə artar",
          "B) 2 dəfə artar",
          "C) 4 dəfə azalar",
          "D) Dəyişməz",
          "E) 2 dəfə azalar"
        ],
        correct: "D) Dəyişməz"
      },
      {
        question: "İdeal qazın temperaturu 300 K–dir. Qazı 60 dərəcə qızdırdıqda onun molekullarının orta kinetik enerjisi necə dəyişər?",
        answers: [
          "A) Dəyişməz",
          "B) 5 dəfə artar",
          "C) 5 dəfə azalar",
          "D) 1.2 dəfə artar",
          "E) 2 dəfə artar"
        ],
        correct: "D) 1.2 dəfə artar"
      },
      {
        question: "Rəqsi hərəkətdə hər sərbəstlik dərəcəsinə düşən enerjinin, irəliləmə hərəkətində hər sərbəstlik dərəcəsinə düşən enerjiyə nisbəti nəyə bərabərdir?",
        answers: [
          "A) 2",
          "B) 1",
          "C) ½",
          "D) 4",
          "E) 1,2"
        ],
        correct: "A) 2"
      },
      {
        question: "R-universal qaz sabitinin fiziki mənası nədir?",
        answers: [
          "A) 1 mol qazı bir dərəcə qızdırdıqda genişlənərkən görülən iş",
          "B) Qaz sabit təzyiqdə genişlənərkən görülən iş",
          "C) Halın statistik çəkisi",
          "D) Sistemin makrohallarına uyğun mikrohalların sayı",
          "E) Sabit təzyiqdə molyar istilik tutumunun sabit həcmdə molyar istilik tutumuna nisbəti"
        ],
        correct: "A) 1 mol qazı bir dərəcə qızdırdıqda genişlənərkən görülən iş"
      },
      {
        question: "ε₀ – elektrik sabitinin ədədi qiyməti nə qədərdir?",
        answers: [
          "A) 8.95∙10⁻¹² Kl/(N∙m)",
          "B) 9.62∙10⁻¹² Kl/(N∙m)",
          "C) 6.67∙10⁻¹¹ N∙m²/kq²",
          "D) 8.85∙10⁻¹² Kl/(N∙m²)",
          "E) 8.65∙10¹² Kl²/(N∙m²)"
        ],
        correct: "D) 8.85∙10⁻¹² Kl/(N∙m²)"
      },
      {
        question: "Müsbət vahid yükə təsir göstərən qüvvə (F/q) ilə təyin olunan fiziki kəmiyyət hansıdır?",
        answers: [
          "A) Naqilin induktivliyi",
          "B) Elektrik sahəsinin potensialı",
          "C) Mənbəyin ehq-si",
          "D) Elektrostatik sahənin intensivliyi",
          "E) Maqnit sahəsinin induksiyası"
        ],
        correct: "D) Elektrostatik sahənin intensivliyi"
      },
      {
        question: "Qapalı sabit cərəyan dövrəsində cərəyan mənbəyinin sıxaclarına qoşulmuş voltmetr nəyi göstərir?",
        answers: [
          "A) Cərəyan mənbəyinin daxili müqavimətindəki gərginlik düşküsünü",
          "B) Dövrənin xarici hissəsindəki gərginlik düşküsünü",
          "C) Cərəyan mənbəyinin daxili müqavimətində və dövrənin xarici hissəsindəki gərginlik düşkülərinin fərqini",
          "D) Qısa qapanma gərginliyini",
          "E) Cərəyan mənbəyinin daxili müqavimətində və dövrənin xarici hissəsindəki gərginlik düşkülərinin cəmini"
        ],
        correct: "B) Dövrənin xarici hissəsindəki gərginlik düşküsünü"
      },
      {
        question: "Verilmiş sabit cərəyan dövrəsində qısa qapanma cərəyanı nədən asılıdır?",
        answers: [
          "A) Mənbəyin ehq-dən və daxili müqavimətindən",
          "B) Yalnız mənbəyin ehq-dən",
          "C) Dövrənin xarici hissəsinin müqavimətindən",
          "D) Yalnız mənbəyin daxili müqavimətindən",
          "E) Mənbəyin daxili müqavimətindən və dövrənin xarici hissəsinin müqavimətindən"
        ],
        correct: "A) Mənbəyin ehq-dən və daxili müqavimətindən"
      },
      {
        question: "n-sayda sabit cərəyan mənbəyi paralel birləşdirilmişdir. Bütün cərəyan mənbələrinin ehq-ri eynidir və ε-a bərabərdir. Batareyanın yekun ehq-si nəyə bərabərdir?",
        answers: [
          "A) ε",
          "B) nε",
          "C) (n+1)ε",
          "D) ε/n",
          "E) ε/n+1"
        ],
        correct: "A) ε"
      },
      {
        question: "N/kulon hansı fiziki kəmiyyətin ölçü vahididir?",
        answers: [
          "A) Cərəyan sıxlığının",
          "B) Elektrik tutumunun",
          "C) Cərəyan şiddətinin",
          "D) Elektrik sahəsinin intensivliyinin",
          "E) Potensialın"
        ],
        correct: "D) Elektrik sahəsinin intensivliyinin"
      },
      {
        question: "Amper qüvvəsinin istiqaməti hansı qaydaya əsasən təyin edilir?",
        answers: [
          "A) Sağ əl",
          "B) Lens",
          "C) Sol əl",
          "D) Kirxhof",
          "E) Henri"
        ],
        correct: "C) Sol əl"
      },
      {
        question: "Maqnit sabitinin (μ₀) ədədi qiyməti nə qədərdir?",
        answers: [
          "A) 4π·10⁻⁷ N/A²",
          "B) 10⁻⁷ N/A²",
          "C) 2π·10⁻⁷ N/A²",
          "D) 4π·10⁻⁵ N/A²",
          "E) 2π·10⁻⁵ N/A²"
        ],
        correct: "A) 4π·10⁻⁷ N/A²"
      },
      {
        question: "Vakuumda yerləşən I₁ = I₂ = 1A, R = 1m olan iki paralel cərəyanlı naqilin hər vahid uzunluğuna düşən qarşılıqlı təsir qüvvəsi nə qədərdir?",
        answers: [
          "A) 2·10⁻⁷ N",
          "B) 2·10⁻⁸ N",
          "C) 2·10⁻⁶ N",
          "D) 2·10⁻⁵ N",
          "E) 2·10⁻⁴ N"
        ],
        correct: "A) 2·10⁻⁷ N"
      },
      {
        question: "Elektromaqnit induksiyası hadisəsini ilk dəfə kim kəşf etmişdir?",
        answers: [
          "A) G. Om",
          "B) İ. Nyuton",
          "C) M. Faradey",
          "D) F. Savar",
          "E) E. Holl"
        ],
        correct: "C) M. Faradey"
      },
      {
        question: "Yükləri +6q və –4q olan iki eyni radiuslu metal kürələri toxundurub ayırdılar. Hər bir kürənin yükü nə qədər olar?",
        answers: [
          "A) q",
          "B) -q",
          "C) 5q",
          "D) 2q",
          "E) -5q"
        ],
        correct: "A) q"
      },
      {
        question: "Yükləri q və 5q olan eyni ölçülü metal kürələr arasında məsafə r-dir. Kürələri bir-birinə toxundurub əvvəlki məsafəyə qədər uzaqlaşdırsaq, onlar arasındakı Kulon təsirinin modulu necə dəyişir?",
        answers: [
          "A) 5 dəfə azalar",
          "B) Dəyişməz",
          "C) 1,8 dəfə artar",
          "D) 5 dəfə artar",
          "E) 4 dəfə azalar"
        ],
        correct: "C) 1,8 dəfə artar"
      },
      {
        question: "Om⁻¹·sm⁻¹ hansı fiziki kəmiyyətin vahididir?",
        answers: [
          "A) Cərəyan sıxlığının",
          "B) Xüsusi müqavimətin",
          "C) Elektrik tutumunun",
          "D) Xüsusi elektrik keçiriciliyinin",
          "E) İnduktivliyin"
        ],
        correct: "D) Xüsusi elektrik keçiriciliyinin"
      },
      {
        question: "Hər birinin elektrik hərəkət qüvvəsi 2V olan on ədəd sabit cərəyan mənbəyi paralel birləşdirilmişdir. Batareyanın elektrik hərəkət qüvvəsi nə qədər olar?",
        answers: [
          "A) 8V",
          "B) 20V",
          "C) 12V",
          "D) 2V",
          "E) 5V"
        ],
        correct: "D) 2V"
      },
      {
        question: "Elektrik hərəkət qüvvəsi 6V olan sabit cərəyan mənbəyi R = 3,4 Om xarici müqavimətə qoşulmuşdur. Dövrədən 1500 mA cərəyan keçərsə, qısa qapanma cərəyanını təyin edin.",
        answers: [
          "A) 15 A",
          "B) 5,6 A",
          "C) 4 A",
          "D) 12,4 A",
          "E) 10 A"
        ],
        correct: "E) 10 A"
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
let d=40
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