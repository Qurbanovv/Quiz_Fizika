const questions = [
  {
    question: "1.0. Hansı, hüquq etikasında mövcud olan problemdir?",
    answers: [
      "a) Şəxsiyyətlə cəmiyyət arasında ziddiyət doğuran hallar",
      "b) Ölüm hökmü",
      "c) Bəzi məhkəmə qərarlarının antihumanizmi",
      "d) Qanunların işlənməməsi",
      "e) Bəzən qanunların işlək mexanizminin olmaması"
    ],
    correct: "b) Ölüm hökmü"
  },
  {
    question: "2.0. Hansı əsrdə həkimin davranış normalarının sistemləşdirilmiş variantlarına rast gəlinir?",
    answers: [
      "a) IV-II",
      "b) VII-V",
      "c) III-I",
      "d) VIII-VI",
      "e) V-IV"
    ],
    correct: "d) VIII-VI"
  },
  {
    question: "3.0. İbn Sinanın həkim peşəkarlığı və həkim etikasına həsr olunmuş məşhur əsəri hansıdır?",
    answers: [
      "a) “Xoş rəftar haqqında”",
      "b) “Həkim haqqında”",
      "c) “Həkimlik elminin qanunları”",
      "d) “And”",
      "e) “Həkimlərə nəsihətlər”"
    ],
    correct: "c) “Həkimlik elminin qanunları”"
  },
  {
    question: "4.0. Hansı tibb sahəsində peşə və əxlaqi problemlərin vəhdəti özünü aydın büruzə verir?",
    answers: [
      "a) Ginekologiya",
      "b) Ticarət",
      "c) Psixologiya",
      "d) Dermatologiya",
      "e) Psixoterapiya"
    ],
    correct: "e) Psixoterapiya"
  },
  {
    question: "5.0. Bu hissələrin təsiri ilə hər bir şəxs ictimai mənafeyi öz şəxsi mənafedən daha üstün tutur:",
    answers: [
      "a) Namus və qeyrət",
      "b) Xeyir və şər",
      "c) Vicdan və borc",
      "d) Ləyaqət və şərəf",
      "e) Ədalət və hüquq"
    ],
    correct: "c) Vicdan və borc"
  },
  {
    question: "6.0. Bu funksiya təkcə əxlaqın deyil, digər ictimai şüur formalarının da funksiyalarından biridir:",
    answers: [
      "a) Dünyagörüş",
      "b) Qiymətləndirmə",
      "c) Tənzimləyici",
      "d) İdraki",
      "e) Tərbiyəvi"
    ],
    correct: "b) Qiymətləndirmə"
  },
  {
    question: "7.0. Hansı funksiya qiymətləndirmə funksiyası ilə geniş mənada uzlaşır?",
    answers: [
      "a) Dünyagörüşü",
      "b) Proqnozlaşdırma",
      "c) Humanizm",
      "d) İzah",
      "e) İdrak"
    ],
    correct: "e) İdrak"
  },
  {
    question: "8.0. Hansı funksiya digər funksiyaların özünəməxsus sintezidir?",
    answers: [
      "a) İdrak",
      "b) İdeoloji",
      "c) Tərbiyəvi",
      "d) Tənzimləyici",
      "e) Təsvir"
    ],
    correct: "d) Tənzimləyici"
  },
  {
    question: "9.0. Gertsen şərəf və namusun inkişafını neçə dövrə bölür?",
    answers: [
      "a) beş",
      "b) altı",
      "c) dörd",
      "d) iki",
      "e) üç"
    ],
    correct: "e) üç"
  },
  {
    question: "10.0. Gertsenin nəzərincə şərəf və ləyaqətin qəti formalaşıb, özünün ən yüksək nöqtəsinə çatdığı dövr?",
    answers: [
      "a) Yunan – Roma dövrü",
      "b) Feodalizm dövrü",
      "c) Kapitalizm dövrü",
      "d) İntibah dövrü",
      "e) Orta əsrlər dövrü"
    ],
    correct: "e) Orta əsrlər dövrü"
  },
  {
    question: "11.0. Aşağıdakılardan hansı “Hedone” sözünün mənasıdır?",
    answers: [
      "a) Sevinc",
      "b) Həzz",
      "c) Kədər",
      "d) Emosiya",
      "e) İztirab"
    ],
    correct: "b) Həzz"
  },
  {
    question: "12.0. Ədalətin çıxış nöqtəsi, prinsipi nədir?",
    answers: [
      "a) Humanizm",
      "b) Həssaslıq",
      "c) Bərabərlik",
      "d) Xoşbəxtlik",
      "e) Xeyirxahlıq"
    ],
    correct: "c) Bərabərlik"
  },
  {
    question: "13.0. Vicdanı on şahidə bərabər tutanlar?",
    answers: [
      "a) Qədim romalılar",
      "b) Skif tayfaları",
      "c) Qədim şumerlər",
      "d) Qədim hindlilər",
      "e) Qədim misirlilər"
    ],
    correct: "a) Qədim romalılar"
  },
  {
    question: "14.0. Tətbiqi elm termini ilk dəfə nəyin tərkibində yaranıb?",
    answers: [
      "a) Təbiətşünaslıqda, fundamental elmlərin tərkibində",
      "b) İctimai şüur formalarının tərkibində",
      "c) Mənəvi mədəniyyətin tərkibində",
      "d) Təbabət elmlərinin tərkibində",
      "e) Ekoloji biliklərin tərkibində"
    ],
    correct: "a) Təbiətşünaslıqda, fundamental elmlərin tərkibində"
  },
  {
    question: "15.0. L.V.Kanavalovanın eyni adlı kitabında tətbiqi etika necə tərtib edilmişdir?",
    answers: [
      "a) Nəzəri biliklər səviyyəsində",
      "b) Təcrübi biliklər əsasında",
      "c) Elmi tədqiqat nəticələri formasında",
      "d) Dəqiq nəticələr çərçivəsində",
      "e) Müəyyən təsnifat çərçivəsində"
    ],
    correct: "e) Müəyyən təsnifat çərçivəsində"
  },
  {
    question: "16.0. Peşə etikası öyrənir?",
    answers: [
      "a) Peşələrin insan psixologiyasına və şəxsi həyatına təsirini",
      "b) Ayrı-ayrı peşələrin xarakteri",
      "c) Peşələrin spesifik cəhətləri",
      "d) Müxtəlif peşələrin əxlaq problemləri ilə əlaqədar konkret hadisələri",
      "e) Peşələrin insan mənəviyyatına təsirini"
    ],
    correct: "d) Müxtəlif peşələrin əxlaq problemləri ilə əlaqədar konkret hadisələri"
  },
  {
    question: "17.0. Müxtəlif peşələrin əxlaq problemləri ilə əlaqədar konkret hadisələri öyrənən sahə:",
    answers: [
      "a) Sosial etika",
      "b) Tətbiqi etika",
      "c) Məişət etikası",
      "d) Peşə etikası",
      "e) Əməyin etikası"
    ],
    correct: "d) Peşə etikası"
  },
  {
    question: "18.0. Peşə əxlaqını öyrənən peşə etikası nəyin əsas bölməsidir?",
    answers: [
      "a) Milli mədəniyyətin",
      "b) Bəşəri mədəniyyətin",
      "c) Dini mədəniyyətin",
      "d) Əxlaq mədəniyyətinin",
      "e) Mənəvi mədəniyyətin"
    ],
    correct: "d) Əxlaq mədəniyyətinin"
  },
  {
    question: "19.0. Peşə sözünün mənası?",
    answers: [
      "a) Əmək növü",
      "b) İş üsulları",
      "c) Maraq dairəsi",
      "d) İstiqamət",
      "e) İxtisas, rəsmi məşğuliyyət"
    ],
    correct: "e) İxtisas, rəsmi məşğuliyyət"
  },
  {
    question: "20.0. Peşə sözü hansı dildən olan “professio” sözündən götürülüb?",
    answers: [
      "a) Ərəb",
      "b) Yunan",
      "c) Rus",
      "d) Portuqal",
      "e) Latın"
    ],
    correct: "e) Latın"
  },
  {
    question: "21.0. Ən qədim tarixə malik olan peşələr?",
    answers: [
      "a) Kulinar, aşpaz",
      "b) Həkim, müəllim",
      "c) Nalbənd, bənna",
      "d) Mühəndis, etnoqraf",
      "e) Ekoloq, dərzi"
    ],
    correct: "b) Həkim, müəllim"
  },
  {
    question: "22.0. Siyasi şüuru istiqamətləndirən ictimai şüur forması?",
    answers: [
      "a) Dini şüur",
      "b) Estetik şüur",
      "c) Əxlaqi şüur",
      "d) Ekoloji şüur",
      "e) Fəlsəfi şüur"
    ],
    correct: "c) Əxlaqi şüur"
  },
  {
    question: "23.0. Dövlətin başlıca tərkib hissəsi:",
    answers: [
      "a) Din",
      "b) Fəlsəfə",
      "c) Elm",
      "d) Siyasət",
      "e) Hüquq"
    ],
    correct: "e) Hüquq"
  },
  {
    question: "24.0. Əxlaqın əsas katekoriyası?",
    answers: [
      "a) Ləyaqət",
      "b) Qeyrət",
      "c) Vicdan",
      "d) Xeyir",
      "e) Şərəf"
    ],
    correct: "d) Xeyir"
  },
  {
    question: "25.0. Hüququn əsas kateqoriyası?",
    answers: [
      "a) Qanun",
      "b) Ədalət",
      "c) Ləyaqət",
      "d) Xeyir",
      "e) Borc"
    ],
    correct: "b) Ədalət"
  },
  {
    question: "26.0. Elm nəyə əsaslanır?",
    answers: [
      "a) Praktik fəaliyyətə",
      "b) Nəzəri təfəkkürə",
      "c) Ümumi dünyagörüşə",
      "d) Emprik tədqiqat metoduna",
      "e) İdrak fəaliyyətinə"
    ],
    correct: "b) Nəzəri təfəkkürə"
  },
  {
    question: "27.0. Etiklik və estetikliyin əsasını təşkil edən ictimai şüur formaları...?",
    answers: [
      "a) Elm və incəsənət",
      "b) Hüquq və əxlaq",
      "c) Fəlsəfə və əxlaq",
      "d) İncəsənət və əxlaq",
      "e) Din və incəsənət"
    ],
    correct: "d) İncəsənət və əxlaq"
  },
  {
    question: "28.0. Əməl nədir?",
    answers: [
      "a) İnsanın mənəvi xislətinin ifadəsidir",
      "b) İnsanın şüurla həyata keçirdiyi praktik fəaliyyətdir",
      "c) İnsanın fərdi məninin təsdiqidir",
      "d) İnsanın müsbət və ya mənfi münasibətə səbəb olan ictimai əhəmiyyətli hərəkətdir",
      "e) İnsanın fəaliyyət imkanların təsdiqidir"
    ],
    correct: "d) İnsanın müsbət və ya mənfi münasibətə səbəb olan ictimai əhəmiyyətli hərəkətdir"
  },
  {
    question: "29.0. Abramson paternalizmə bəraət qazandıran neçə şərti qəbul edir?",
    answers: [
      "a) 6",
      "b) 2",
      "c) 5",
      "d) 4",
      "e) 3"
    ],
    correct: "d) 4"
  },
  {
    question: "30.0. Tərbiyəvi funksiya hansı ictimai şüur formaları üçün ümumidir?",
    answers: [
      "a) Din və estetiklik",
      "b) Əxlaq və siyasət",
      "c) Siyasət və din",
      "d) Əxlaq və incəsənət",
      "e) Hüquq və siyasət"
    ],
    correct: "d) Əxlaq və incəsənət"
  },
  {
    question: "31.0. Hansı əsərlərdə təvazökarlıq xoşbəxtlik əldə etməyin mühüm vasitəsi hesab olunur?",
    answers: [
      "a) “Kitabi Dədə Qorqud”, “Koroğlu” dastanı",
      "b) “İsgəndərnamə”, “Leyli və Məcnun”",
      "c) “Kəlilə Dimnə” və “Qabusnamə”",
      "d) “Əxlaqi Nasir” və “Qabusnamə”",
      "e) “Təhzibi-əxlaq” və “Nəsihətnamə”"
    ],
    correct: "e) “Təhzibi-əxlaq” və “Nəsihətnamə”"
  },
  {
    question: "32.0. Şərq xalqlarının etik ideyalarla zəngin abidəsi?",
    answers: [
      "a) “Politika”",
      "b) “Şeylərin təbiəti”",
      "c) “Avesta”",
      "d) “Ritorika”",
      "e) “Kitabi Dədə Qorqud”"
    ],
    correct: "c) “Avesta”"
  },
  {
    question: "33.0. Zərdüşt inamına görə bütün varlıq hansı əks qüvvələrin mübarizəsi üzərində qurulub?",
    answers: [
      "a) Yaxın, uzaq",
      "b) İşıq, zülmət",
      "c) Gecə, gündüz",
      "d) Xeyir, şər",
      "e) Asan, çətin"
    ],
    correct: "b) İşıq, zülmət"
  },
  {
    question: "34.0. Azərbaycan etik fikir tarixində mühüm hadisə olan əsər?",
    answers: [
      "a) Xosrov Şirin",
      "b) Rind və Zahid",
      "c) Əxlaqi Nasir",
      "d) Yeddi gözəl",
      "e) Metofizika"
    ],
    correct: "c) Əxlaqi Nasir"
  },
  {
    question: "35.0. Tusinin etik sisteminə əsasən insanlar öz xarakterinə görə neçə qrupa bölünür?",
    answers: [
      "a) 5",
      "b) 2",
      "c) 6",
      "d) 3",
      "e) 4"
    ],
    correct: "e) 4"
  },
  {
    question: "36.0. İslam yaranandan sonra formalaşan “müsəlman etikası” hansı mənbələrə əsaslanır?",
    answers: [
      "a) İslamın tarixinin mənbələrinə",
      "b) Din tədqiqatçılarının əsərlərinə",
      "c) Quran və Sünnəyə",
      "d) Quran ayələrinə",
      "e) Ayrı-ayrı hədislərə"
    ],
    correct: "c) Quran və Sünnəyə"
  },
  {
    question: "37.0. Sünnə sözünün mənası?",
    answers: [
      "a) Keyfiyyət",
      "b) Əməl",
      "c) İstiqamət",
      "d) Nümunə, yol",
      "e) Görüntü"
    ],
    correct: "d) Nümunə, yol"
  },
  {
    question: "38.0. Sünnə sözü hansı dilə aiddir?",
    answers: [
      "a) Fars",
      "b) Türk",
      "c) Ərəb",
      "d) Qırğız",
      "e) Özbək"
    ],
    correct: "c) Ərəb"
  },
  {
    question: "39.0. Borc anlayışı dilimizdə neçə mənada işlədilir?",
    answers: [
      "a) 4",
      "b) 5",
      "c) 6",
      "d) 2",
      "e) 3"
    ],
    correct: "d) 2"
  },
  {
    question: "40.0. “Səhih” hədis müəllifləri:",
    answers: [
      "a) Əl-Maliki və Məsihi",
      "b) Əl-Buxari və Müslimi",
      "c) Əl – Biruni və Şeyx Əbdül",
      "d) Əl-Ubeyd və Osman",
      "e) Əl-Qasimi və Faruq"
    ],
    correct: "b) Əl-Buxari və Müslimi"
  },
  {
    question: "41.0. Aristotelin əxlaq problemlərini dərindən ifadə etdiyi traktat?",
    answers: [
      "a) “Pritorika”",
      "b) “Qəzəb haqqında”",
      "c) “Poetika”",
      "d) “Nikomax etikası”",
      "e) “Şeylərin təbiəti haqqında”"
    ],
    correct: "d) “Nikomax etikası”"
  },
  {
    question: "42.0. Antik etikanın mövqeyidir:",
    answers: [
      "a) Stoisizm",
      "b) Vedant",
      "c) Caynizm",
      "d) Hedonizm",
      "e) Materializm"
    ],
    correct: "d) Hedonizm"
  },
  {
    question: "43.0. – fərdin şüurundakı formalaşmış meyar sistemidir:",
    answers: [
      "a) Estetik idrak",
      "b) Estetik düşüncə",
      "c) Estetik məntiq",
      "d) Estetik zövq",
      "e) Estetik dünya görüşü"
    ],
    correct: "d) Estetik zövq"
  },
  {
    question: "44.0. “İnsan dünyanın əşrəfidir” düşüncəsinn müəllifi:",
    answers: [
      "a) Höte",
      "b) Nəsrəddin Tusi",
      "c) İmmanuil Kant",
      "d) İmadəddin Nəsimi",
      "e) Nizami Gəncəvi"
    ],
    correct: "e) Nizami Gəncəvi"
  },
  {
    question: "45.0. \"Estetika\" sözünün mahiyyəti:",
    answers: [
      "a) Reallıq",
      "b) Həssaslıq",
      "c) Gözəllik",
      "d) Əxlaq",
      "e) Zəriflik"
    ],
    correct: "b) Həssaslıq"
  },
  {
    question: "46.0. Estetika - müstəqil bir elm olaraq meydana gəldi:",
    answers: [
      "a) XX əsrdə",
      "b) XVIII əsrdə",
      "c) XVI əsrdə",
      "d) XIX əsrdə",
      "e) XVII əsrdə"
    ],
    correct: "b) XVIII əsrdə"
  },
  {
    question: "47.0. “Etika” sözünün mənası:",
    answers: [
      "a) Müdriklik",
      "b) Bildiriş",
      "c) Mentalitet",
      "d) Adət",
      "e) Görünüş"
    ],
    correct: "d) Adət"
  },
  {
    question: "48.0. “Etika” sözü hansı dildədir?",
    answers: [
      "a) Ərəb",
      "b) Latın",
      "c) Yunan",
      "d) İngilis",
      "e) Fars"
    ],
    correct: "c) Yunan"
  },
  {
    question: "49.0. Etika elminin tədqiqat obyektini təşkil edir?",
    answers: [
      "a) Estetika",
      "b) Əxlaq",
      "c) Fəlsəfə",
      "d) İncəsənət",
      "e) Mədəniyyət"
    ],
    correct: "b) Əxlaq"
  },
  {
    question: "50.0. “Etika” anlayışını təklif edən mütəfəkkir:",
    answers: [
      "a) Platon",
      "b) Empedokl",
      "c) Pifaqor",
      "d) Aristotel",
      "e) Sokrat"
    ],
    correct: "d) Aristotel"
  },
  {
    question: "51.0. Insanın praktik fəaliyyətinin ən tipik və dolğun nümunəsi?",
    answers: [
      "a) Estetik fəaliyyəti",
      "b) Təbiət elmlərini öyrənmək prosesi",
      "c) Əmək fəaliyyəti",
      "d) Milli ənənələri tədqiq etmək prosesi",
      "e) Dini dünyagörüş"
    ],
    correct: "c) Əmək fəaliyyəti"
  },
  {
    question: "52.0. Peşə etikası nədir?",
    answers: [
      "a) Estetik qanunları öyrənən elmdir",
      "b) Professional əxlaq haqqında elmdir?",
      "c) Milli adətləri öyrənən elmdir",
      "d) Cəmiyyət qanunlarını öyrənən elmdir",
      "e) Qədim əlyazmaları öyrənən elmdir"
    ],
    correct: "b) Professional əxlaq haqqında elmdir?"
  },
  {
    question: "53.0. “Mən xəstələrin rejimini onların xeyrinə yönəldərkən öz biliyimi nəzərər alır, xəstəyə qarşı hər cür ziyan və ədalətsizlikdən uzaq olmağa calışıram”-cümlələrinin müəllifi və əsər?",
    answers: [
      "a) İbn Sina – “Həkim haqqında” əsərindən",
      "b) Aristotel – “Politika” əsərindən",
      "c) Hippokrat – “And” əsərindən",
      "d) Helvetsi – “Fəzilətlər” əsərindən",
      "e) Əl Fərabi – “İztiraba son”"
    ],
    correct: "c) Hippokrat – “And” əsərindən"
  },
  {
    question: "54.0. Eqoizmin əksi:",
    answers: [
      "a) Eqzestensializm",
      "b) Altruizim",
      "c) Realizm",
      "d) İdealizm",
      "e) Materializm"
    ],
    correct: "b) Altruizim"
  },
  {
    question: "55.0. Predmetin həm təbii, həm də sosial xüsusiyyətləri ifadə olunur:",
    answers: [
      "a) Estetik dünyagörüşündə",
      "b) Estetik kateqoriyada",
      "c) Estetik funksiyada",
      "d) Estetik görünüşdə",
      "e) Estetik düşüncədə"
    ],
    correct: "b) Estetik kateqoriyada"
  },
  {
    question: "56.0. Xüsusi təhlil olmadan həyat və incəsənətdə gözəllik və çirkinlik haqqında mülahizələr sürməyə imkan verir:",
    answers: [
      "a) Estetik kateqoriya",
      "b) Estetik görünüş",
      "c) Estetik zövq",
      "d) Estetik düşüncə",
      "e) Estetik funksiya"
    ],
    correct: "c) Estetik zövq"
  },
  {
    question: "57.0. Fərd tərəfindən reallığa olan estetik münasibətin bilavasitə emosional yaşanmasıdır:",
    answers: [
      "a) Estetik düşüncə",
      "b) Estetik funksiya",
      "c) Estetik hiss",
      "d) Estetik zövq",
      "e) Estetik kateqoriya"
    ],
    correct: "c) Estetik hiss"
  },
  {
    question: "58.0. “Mona Liza” kimin əsəridir?",
    answers: [
      "a) Van Qoq",
      "b) İvan Кramskoy",
      "c) Leonardo da Vinçi",
      "d) Mikelanjelo",
      "e) Dali"
    ],
    correct: "c) Leonardo da Vinçi"
  },
  {
    question: "59.0. Gerçəkliyin dərk edilməsi -- başlanır:",
    answers: [
      "a) dünyagörüşü ilə",
      "b) biliyin mənimsənilməsi ilə",
      "c) onun hissi qavrayışı ilə",
      "d) əqli dərketmə ilə",
      "e) məntiqi qavrayışı ilə"
    ],
    correct: "c) onun hissi qavrayışı ilə"
  },
  {
    question: "60.0. Estetik fəaliyyətin və mədəniyyətin subyektidir:",
    answers: [
      "a) mücərrəd fərd",
      "b) ictimai varlıq",
      "c) əqli nəticə",
      "d) bioloji varlıq",
      "e) məntiqi düşüncə"
    ],
    correct: "b) ictimai varlıq"
  },
  {
    question: "61.0. Estetik fəaliyyətin maddi istehsal sistemində yeni növü hesab olunur:",
    answers: [
      "a) İncəsənət",
      "b) Reklam",
      "c) Texnika",
      "d) Dizayn",
      "e) Brend"
    ],
    correct: "d) Dizayn"
  },
  {
    question: "62.0. Psixoanaliz metodunu elmə gətirmişdir:",
    answers: [
      "a) Hegel",
      "b) Kyerkoqor",
      "c) Kant",
      "d) Nitsşe",
      "e) Freyd"
    ],
    correct: "e) Freyd"
  },
  {
    question: "63.0. Etik kateqoriyalara aid deyil:",
    answers: [
      "a) əxlaqi azadlıq",
      "b) əxlaqi normalar",
      "c) əxlaqi ziddiyyətlər",
      "d) əxlaqi məsuliyyət",
      "e) fərdiyyətçilik"
    ],
    correct: "e) fərdiyyətçilik"
  },
  {
    question: "64.0. Etik kateqoriya deyil:",
    answers: [
      "a) əxlaqi məqsəd",
      "b) ləyaqət",
      "c) xəyanət",
      "d) əxlaqi sərvətlər",
      "e) xoşbəxtlik"
    ],
    correct: "c) xəyanət"
  },
  {
    question: "65.0. Etik prinsiplərə aid edilmir:",
    answers: [
      "a) hümanizm",
      "b) əxlaqi norma",
      "c) irrasionalizm",
      "d) riqorizm",
      "e) konformizm"
    ],
    correct: "b) əxlaqi norma"
  },
  {
    question: "66.0. Əxlaqın qızıl qaydasının müəllifliyi aid edilir:",
    answers: [
      "a) Pittaka",
      "b) Falesə",
      "c) Kleobula",
      "d) Hilona",
      "e) Bianta"
    ],
    correct: "b) Falesə"
  },
  {
    question: "67.0. “Etika” sözündən ilk dəfə olaraq istifadə edib, həm də onun tərifini verib:",
    answers: [
      "a) Platon",
      "b) Anaksimand",
      "c) Fales",
      "d) Heraklit",
      "e) Aristotel"
    ],
    correct: "e) Aristotel"
  },
  {
    question: "68.0. “Nikomax etikası” kimin əsəridir?",
    answers: [
      "a) Fales",
      "b) Anaksimand",
      "c) Heraklit",
      "d) Aristotel",
      "e) Platon"
    ],
    correct: "d) Aristotel"
  },
  {
    question: "69.0. “Nikomax etikası”, “Evdem etikası”, “Böyük etika” əsərləri aiddir:",
    answers: [
      "a) Platon",
      "b) Anaksimand",
      "c) Aristotel",
      "d) Fales",
      "e) Heraklit"
    ],
    correct: "c) Aristotel"
  },
  {
    question: "70.0. “Həzz xoşbəxt həyatın alfası və omeqasıdır” fikri aiddir:",
    answers: [
      "a) Aristotel",
      "b) Heraklit",
      "c) Anaksimand",
      "d) Fales",
      "e) Epikür"
    ],
    correct: "e) Epikür"
  },
  {
    question: "71.0. Psixoanaliz metodu aiddir:",
    answers: [
      "a) Volter",
      "b) Fromm",
      "c) Russo",
      "d) Makiavelli",
      "e) Freyd"
    ],
    correct: "e) Freyd"
  },
  {
    question: "72.0. Müasir etik nəzəriyyələrdə yaşamağın mənasını fövqəltarixi vəzifələrin reallaşmasında görür:",
    answers: [
      "a) normativ etika",
      "b) metaetika",
      "c) nəzəri etika",
      "d) praktiki etika",
      "e) dini etika"
    ],
    correct: "e) dini etika"
  },
  {
    question: "73.0. Yunanca məşq etmək deməkdir:",
    answers: [
      "a) emotivizm",
      "b) asketizm",
      "c) individualizm",
      "d) aeoprotestantizm",
      "e) Amoralizm"
    ],
    correct: "b) asketizm"
  },
  {
    question: "74.0. Etik mədəniyyət hansi şüur formasıdır?",
    answers: [
      "a) Mənəvi şüur",
      "b) Əqli şüur",
      "c) İctimai şüur",
      "d) Sosial şüur",
      "e) Maddi şüur"
    ],
    correct: "c) İctimai şüur"
  },
  {
    question: "75.0. Nəzəri etika nəyi tənqidi təhlil edir?",
    answers: [
      "a) Əxlaqi münasibətlərin təbiətini (mahiyyətini)",
      "b) Əxlaqi dəyərlər və əxlaqi keyfiyyətləri",
      "c) Əxlaqi şüur, əxlaqi dəyərlər və əxlaqi münasibətlərin təbiətini (mahiyyətini)",
      "d) Ruhi fəaliyyətin, əxlaqi şüur, əxlaqi dəyərlər və əxlaqi münasibətlərin təbiətini (mahiyyətini)",
      "e) Ruhi fəaliyyətin əxlaqi şüuru"
    ],
    correct: "d) Ruhi fəaliyyətin, əxlaqi şüur, əxlaqi dəyərlər və əxlaqi münasibətlərin təbiətini (mahiyyətini)"
  },
  {
    question: "76.0. Etika elminin əsas vəzifəsi nədir?",
    answers: [
      "a) Cəmiyyətin mənəvi problemlərini öyrənmək və insanların əxlaqını təkmilləşdirmək",
      "b) İnsan və cəmiyyətin maddi və mənəvi problemlərini öyrənmək, insanların əxlaqını təkmilləşdirmək",
      "c) İnsan və cəmiyyətin maddi - mənəvi və əxlaqi problemlərini öyrənmək, insanların əxlaqını təkmilləşdirmək",
      "d) İnsan və cəmiyyətin mənəvi problemlərini öyrənmək, insanların əxlaqını təkmilləşdirmək",
      "e) İnsanların mənəvi - əxlaqını öyrənmək, insanların əxlaqını təkmilləşdirmək"
    ],
    correct: "d) İnsan və cəmiyyətin mənəvi problemlərini öyrənmək, insanların əxlaqını təkmilləşdirmək"
  },
  {
    question: "77.0. Etika elmi insanların həyat və fəaliyyətdə hansı əhəmiyyətə malikdir?",
    answers: [
      "a) Düzgün anlayış, duyğular və təfəkkür formalaşdırır",
      "b) Düzgün anlayış, duyğular və təsəvvür formalaşdırır",
      "c) Düzgün anlayış, təsəvvür və təfəkkür formalaşdırır",
      "d) Düzgün anlayış, duyğular və diqqət formalaşdırır",
      "e) Düzgün qabiliyyət, duyğular və təfəkkür formalaşdırır"
    ],
    correct: "c) Düzgün anlayış, təsəvvür və təfəkkür formalaşdırır"
  },
  {
    question: "78.0. Etika elminin qanunauyğunluqların aşkar edilməsinə hansı elmlər imkan verir?",
    answers: [
      "a) Dünya hərb tarixi",
      "b) Dünya mədəniyyət tarixi",
      "c) Dünya coğrafiya tarixi",
      "d) Dünya təhlükəsizlik tarixi",
      "e) Dünya riyaziyyat tarixi"
    ],
    correct: "b) Dünya mədəniyyət tarixi"
  },
  {
    question: "79.0. Etika termini ilk dəfə elmi leksikona kim tərəfindən qəbul edilmişdir?",
    answers: [
      "a) Epikur",
      "b) Dekart",
      "c) Didro",
      "d) Aristotel",
      "e) Sipnoza"
    ],
    correct: "d) Aristotel"
  },
  {
    question: "80.0. “Metaetika“ əxlaqın sosialogiyası ilə birlikdə hansının tərkib hissəsidir?",
    answers: [
      "a) Tətbiqi etikanın",
      "b) Tibbi etikanın",
      "c) Peşə etikasının",
      "d) Normativ etikanın",
      "e) Dini etikanın"
    ],
    correct: "d) Normativ etikanın"
  },
  {
    question: "81.0. Əxlaq problemlərində azad, sırf elmi nəzəriyyə:",
    answers: [
      "a) Həkimlik sosialogiyası nəzəriyyəsi",
      "b) Metaetika",
      "c) Tibbi etika nəzəriyyəsi",
      "d) Davranış nəzəriyyəsi",
      "e) Peşə etikası prinsipi"
    ],
    correct: "b) Metaetika"
  },
  {
    question: "82.0. Aşağıdakılardan hansı normativ etika ilə bağlıdır?",
    answers: [
      "a) əxlaqın funksiyaları",
      "b) Əxlaqi qiymətləndirmə",
      "c) əxlaq dəyərləri",
      "d) əxlaqın prinsipləri",
      "e) əxlaq nəzəriyyəsi"
    ],
    correct: "b) Əxlaqi qiymətləndirmə"
  },
  {
    question: "83.0. Bu problemlərdən hansılar bioetikada mövcud olan problemlərdir?",
    answers: [
      "a) Şəxsiyyət azadlığına, insan hüquqlarına zidd olan elmi araşdırmalar",
      "b) Bəzi təcrübələrin antihumanistliyi",
      "c) Bəzi elmi təcrübələrin cəmiyyətdə doğura biləcəyi fəsadlar",
      "d) Bəzi alimlərin öz fəaliyyətlərində mənəvi dəyərləri nəzərə almaması",
      "e) Gen mühəndisliyi, klonlaşdırma"
    ],
    correct: "e) Gen mühəndisliyi, klonlaşdırma"
  },
  {
    question: "84.0. Bu ölkələrin hansında həkimlərin qarşısına qoyulan əxlaqi tələblər haqqında ilk yazılara rast gəlinmişdir?",
    answers: [
      "a) Qədim Çin və Azərbaycan",
      "b) Qədim Roma və Yunanıstan",
      "c) Qədim Hindistan və İrlandiya",
      "d) Qədim Roma və Rusiya",
      "e) Qədim Misir və Çin"
    ],
    correct: "e) Qədim Misir və Çin"
  },
  {
    question: "85.0. Həkimin davranış normalarının sistemləşdirilmiş variantına bu ölkədə həkimlərinin təlimlərində rast gəlinir?",
    answers: [
      "a) Qədim Babilistan",
      "b) Qədim Misir",
      "c) Qədim Yunanıstan",
      "d) Qədim Roma",
      "e) Qədim Hindistan"
    ],
    correct: "e) Qədim Hindistan"
  },
  {
    question: "86.0. Öz əsərlərində Hippokrat ilk dəfə olaraq həkimlik sənətinin zəngin təcrübəsini ümumiləşdirmiş və hansı vacib məsələni elmi cəhətdən formalaşdırmışdır?",
    answers: [
      "a) Həkimlərin öz peşələrini daha yaxşı icra etmələrin üçün güclü peşə vərdişlərini",
      "b) Həkimlik fəaliyyətinin uzun illər əhəmiyyətini itirməyən əsas əxlaqi prinsip və normalarını",
      "c) Həkim humanizmini",
      "d) Həkimliyin psixoloji tərəflərinin xəstənin müalicələrə daha tez cavab verdiyini",
      "e) Həkim peşəsinin mənəvi amillərdən çox istifadə edilən avadanlıqlara əsaslandığını"
    ],
    correct: "b) Həkimlik fəaliyyətinin uzun illər əhəmiyyətini itirməyən əsas əxlaqi prinsip və normalarını"
  },
  {
    question: "87.0. Cəmiyyətin ictimai tərəqqisi gedişində əxlaqda aşağıdakılardan hansı baş verir?",
    answers: [
      "a) Yenidən şərh edilir",
      "b) Arxa plana atılır",
      "c) Dəyişir, inkişaf edir",
      "d) Əsl məğzinə qayıdır",
      "e) Daha sadələşir və yayılır"
    ],
    correct: "c) Dəyişir, inkişaf edir"
  },
  {
    question: "88.0. Əxlaq bir formadan digərinə keçərkən aşağıda qeyd olunanlardan hansı reallaşır?",
    answers: [
      "a) Yeni çalarlar kəsb edir",
      "b) Məzmun mahiyyətcə dəyişir",
      "c) Münasibətlərdə humanizm prinsipləri artır",
      "d) Tənəzzülə uğrayır",
      "e) Qədim ənənələrə qayıdır"
    ],
    correct: "c) Münasibətlərdə humanizm prinsipləri artır"
  },
  {
    question: "89.0. Əxlaqın inkişafında bəşər mədəniyyətinin tarixi tərəqqisini əks etdirən elementlərə rast gəlinir ki, bu da ....................... adlanır.",
    answers: [
      "a) İnkişaf",
      "b) Varislik",
      "c) Müasirlik",
      "d) Tərəqqi",
      "e) Geriyə dönüş"
    ],
    correct: "b) Varislik"
  },
  {
    question: "90.0. Aşağıdakılardan hansı insanın əxlaq qaydalarını mənimsəmə prosesini əks etdirir?",
    answers: [
      "a) Cəmiyyətin iqtisadi yüksəlişi ilə",
      "b) Çətinliklə",
      "c) Əxlaqi dəyərlə birgə doğulur",
      "d) Tədricən",
      "e) Birdən-birə"
    ],
    correct: "d) Tədricən"
  },
  {
    question: "91.0. Aşağıdakılardan hansı tərbiyənin mərkəzində dayanır?",
    answers: [
      "a) İnsana yönəldilmiş məqsədyönlü fəaliyyət",
      "b) Şəxsiyyətin mənəvi özəyini formalaşdıran əxlaq tərbiyəsi",
      "c) İnsanın mənəvi xisləti",
      "d) Məqsədyönlü ardıcıl fəaliyyət",
      "e) Fərd və şəxsiyyət"
    ],
    correct: "b) Şəxsiyyətin mənəvi özəyini formalaşdıran əxlaq tərbiyəsi"
  },
  {
    question: "92.0. Tənzimləyici funksiya aşağıdakılardan hansına əsaslanır?",
    answers: [
      "a) İnsanın şəxsi temperamentinə",
      "b) İnsanın şüuraltı daxili dünyasına",
      "c) İnsanın milli-mənəvi səviyyəsinə",
      "d) İnsanın əxlaqi əqidəsinə, vicdana, ictimai rəyin nüfuzuna",
      "e) İnsanın intellektual imkanlarına"
    ],
    correct: "d) İnsanın əxlaqi əqidəsinə, vicdana, ictimai rəyin nüfuzuna"
  },
  {
    question: "93.0. Aşağıdakılardan hansı ibtidai cəmiyyətin ilk əxlaq normalarıdır?",
    answers: [
      "a) Milli mentalitet qaydalarına",
      "b) Sadə əxlaq normalarına",
      "c) Vərdişlər və məcburetmə üsulu",
      "d) Adətlər şəklində reallaşan tənzimləmə",
      "e) Dostluq münasibətlərinə"
    ],
    correct: "d) Adətlər şəklində reallaşan tənzimləmə"
  },
  {
    question: "94.0. Aşağıdakılardan hansı cəmiyyət həyatının mənəvi tərəflərini tənzimləyir?",
    answers: [
      "a) Sadəcə əxlaq normaları",
      "b) Təbii qanunlar",
      "c) Siyasi münasibətlər",
      "d) Cəmiyyətin mexaniki birliyi",
      "e) İnsanlıq dəyərləri"
    ],
    correct: "c) Siyasi münasibətlər"
  },
  {
    question: "95.0. Gertsen şərəf və namusun inkişafı üçün birinci dövr hesab edir...?",
    answers: [
      "a) Yunan – Roma dövrünü",
      "b) İntibah dövrünü",
      "c) Feodalizm dövrünü",
      "d) Qəbilə quruluşu dövrünü",
      "e) Kapitalizm dövrünü"
    ],
    correct: "d) Qəbilə quruluşu dövrünü"
  },
  {
    question: "96.0. “Sənə qüssə gətirəcək həzzdən qaç” fikrininin müəllifi?",
    answers: [
      "a) Rus yazıçısı L.Tolstoy",
      "b) Fransız mütəfəkkiri O.Kant",
      "c) Azərbaycan filosofu Bəhmənyar",
      "d) Qədim yunan qanunvericisi Solon",
      "e) Qədim Yunan filosofu Platon"
    ],
    correct: "d) Qədim yunan qanunvericisi Solon"
  },
  {
    question: "97.0. Sadəliyi prinsipsizlik və acizlik səviyyəsinə endirməməyi tələb edən Azərbaycan mütəfəkkiri?",
    answers: [
      "a) N.Gəncəvi",
      "b) S.Ə.Şirvani",
      "c) A.A.Bakıxnov",
      "d) M.F.Axundzadə",
      "e) H.Cavid"
    ],
    correct: "c) A.A.Bakıxnov"
  },
  {
    question: "98.0. Həyatın mənasını insanın dünyəvi maraqlarından ayırmağa qarşı qətiyyətlə çıxış edənlər kim idi?",
    answers: [
      "a) XIX əsr fransız materialistləri",
      "b) Sufizmin tərəfdarları",
      "c) Spektizmin tərəfdarları",
      "d) Ekzistensializmin tərəfdarları",
      "e) XVIII əsr fransız materialistləri"
    ],
    correct: "e) XVIII əsr fransız materialistləri"
  },
  {
    question: "99.0. Qədim dövrdə icad edilən tərəzi nəyin simvolu idi?",
    answers: [
      "a) Haqq - ədalətin",
      "b) Ədalət ilahəsi Femidanın",
      "c) Tarazlığın qədim cəmiyyət üçün priaritet olması vacibliyinin",
      "d) Humanizm dəyərlərinin",
      "e) Qanunların aliliyinin"
    ],
    correct: "b) Ədalət ilahəsi Femidanın"
  },
  {
    question: "100.0. Davranış qaydaları və normaları pozanların cəzalanmasını tələb etmək hansı cəmiyyət üçün ədalət kimi başa düşülürdü?",
    answers: [
      "a) Sosializm",
      "b) Feodalizm",
      "c) Quldarlıq",
      "d) Kapitalizm",
      "e) İbtidai"
    ],
    correct: "e) İbtidai"
  },
  {
    question: "101.0. Xristian etikasının bəhs etdiyi 3 fəzilət?",
    answers: [
      "a) Həssaslıq, diqqətlilik, ümid",
      "b) Emosionallıq, həssaslıq, ümid",
      "c) Etiqad, sevgi, qayğıkeşlik",
      "d) Xeyirxahlıq, ümid, təvazökarlıq",
      "e) İnam, ümid, məhəbbət"
    ],
    correct: "e) İnam, ümid, məhəbbət"
  }
];














let answersGiven = new Array(questions.length).fill(null); // hər sual üçün null başlanğıc


let currentIndex = 0;
let selectedAnswer = null;

function loadQuestion(index) {
  if (index < 0 || index >= questions.length) return;

  sec.style.borderColor = "black";
  D_Y.textContent = "";

  sual.textContent = `Sual ${index + 1}`;
  question.textContent = questions[index].question;

  const answers = questions[index].answers;
  [btn_A, btn_B, btn_C, btn_D, btn_E].forEach((btn, i) => {
    btn.textContent = answers[i];
    btn.classList.remove("selected");
    btn.disabled = false;
  });

  selectedAnswer = null;
  currentIndex = index;
}

function selectAnswer(index) {
  selectedAnswer = questions[currentIndex].answers[index];

  const buttons = [btn_A, btn_B, btn_C, btn_D, btn_E];
  buttons.forEach((btn, i) => {
    btn.classList.toggle("selected", i === index);
  });
}

[btn_A, btn_B, btn_C, btn_D, btn_E].forEach((btn, i) => {
  btn.addEventListener("click", () => {
    selectAnswer(i);
  });
});


yoxla.addEventListener("click", () => {
    if (!selectedAnswer) return;
  
    const correct = questions[currentIndex].correct;
  
    // Cavabı yadda saxla
    answersGiven[currentIndex] = selectedAnswer;
  
    if (selectedAnswer === correct) {
      sec.style.borderColor = "green";
      D_Y.textContent = "Doğru";
      D_Y.style.color = "green";
    } else {
      sec.style.borderColor = "red";
      D_Y.textContent = "Səhv";
      D_Y.style.color = "red";
    }
  });


  const resultArea = document.getElementById("result_area");
  const showResultBtn = document.getElementById("show_result");
  
  showResultBtn.addEventListener("click", () => {
    let correctCount = 0;
  
    for (let i = 0; i < questions.length; i++) {
      if (answersGiven[i] === questions[i].correct) {
        correctCount++;
      }
    }
  
    resultArea.textContent = `Sən ${questions.length} sualdan ${correctCount} düzgün cavab verdin.`;
  });
  

// İrəli
so_sual.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) {
    loadQuestion(currentIndex + 1);
  }
});

// Geri
ev_sual.addEventListener("click", () => {
  if (currentIndex > 0) {
    loadQuestion(currentIndex - 1);
  }
});

// İstənilən suala keç
document.getElementById("goto_btn").addEventListener("click", () => {
  const value = parseInt(document.getElementById("goto_input").value);
  if (!isNaN(value) && value >= 1 && value <= questions.length) {
    loadQuestion(value - 1);
  }
});

// İlk sualı yüklə
loadQuestion(0);
   