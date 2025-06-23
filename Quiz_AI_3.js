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
    },
    {
      question: "102.0. Qədim romalılar vicdanı necə dəyərləndiridilər?",
      answers: [
        "a) Fəzilətin ən gərəklisi hesab edirdilər",
        "b) On şahidə bərabər tuturdular",
        "c) Əqlin zəkası hesab edirdilər",
        "d) Mükəmməllik cizgisi sayırdılar",
        "e) İnsanlıq vergisi sayırdılar"
      ],
      correct: "b) On şahidə bərabər tuturdular"
    },
    {
      question: "103.0. Freydin xidmətləri hansı sahədə böyükdür?",
      answers: [
        "a) Baxışların mənasının tədqiqi",
        "b) Həzzin rolunun öyrənilməsi",
        "c) Gülüşün əhəmiyyətinin tədqiqi",
        "d) Mənəvi dəyərlərin tədqiq olunması sahəsində",
        "e) Görkəmin insan taleyində rolunun öyrənilməsi"
      ],
      correct: "b) Həzzin rolunun öyrənilməsi"
    },
    {
      question: "104.0. Etikanın bir elm kimi müəyyən dəyişikliyə uğramasına səbəb olan amil.",
      answers: [
        "a) Cəmiyyətin mahiyyət və məzmununun dəyişikliyə uğraması",
        "b) İnsan biliyinin və texnoloji imkanlarının inkişafı",
        "c) İnsan münasibətlərinin dəyişməsi",
        "d) Yer kürəsində kataklizmanın yaranması",
        "e) Dünyanın qloballaşması"
      ],
      correct: "b) İnsan biliyinin və texnoloji imkanlarının inkişafı"
    },
    {
      question: "105.0. İ. Kant ilk dəfə görmüşdür?",
      answers: [
        "a) Elmlə təhsil arasındakı fərqi",
        "b) Nəzəriyyə ilə praktika arasındakı fərqi",
        "c) Hislə emosiya arasındakı fərqi",
        "d) Zəka ilə təfəkkür arasındakı fərqi",
        "e) Niyyətlə əməl arasındakı fərqi"
      ],
      correct: "b) Nəzəriyyə ilə praktika arasındakı fərqi"
    },
    {
      question: "106.0. İ.Kant “təcrübi zəka”nı aşağıdakılardan hansıların sinonimi kimi işlətmişdir?",
      answers: [
        "a) Əxlaqi idrak və davranışın",
        "b) Hiss və emosiyanın",
        "c) Niyyət və davranışın",
        "d) Zəka və təfəkkürün",
        "e) Xeyirxahlıq və humanizmin"
      ],
      correct: "a) Əxlaqi idrak və davranışın"
    },
    {
      question: "107.0. Tətbiqi etikanın müəyyən təsnifatlar çərçivəsində tərtib olunduğu kitabın müəllifi:",
      answers: [
        "a) Fridin",
        "b) P.Brok",
        "c) L.V. Knavolova",
        "d) Saltzmn",
        "e) Polman"
      ],
      correct: "c) L.V. Knavolova"
    },
    {
      question: "108.0. Peşə etikasının yaranmasının səbəbləri?",
      answers: [
        "a) Əməyin mahiyyət və məzmununun dəyişməsi ilə əlaqədar",
        "b) Cəmiyyətin mənəvi dəyərlərinin yüksəlməsi ilə əlaqədar",
        "c) Peşələrin, spesifik peşə əxlaqının meydana gəlməsi ilə əlaqədar",
        "d) Cəmiyyətdə əxlaq münasibətlərinin təkmilləşməsi ilə əlaqədar",
        "e) Elmi texniki tərəqqi ilə əlaqədar"
      ],
      correct: "c) Peşələrin, spesifik peşə əxlaqının meydana gəlməsi ilə əlaqədar"
    },
    {
      question: "109.0. Tarixən formalaşmış peşə etikası normaları nə qədər yaşayacaq?",
      answers: [
        "a) Mənəvi dəyərlər tam kamilləşənə qədər",
        "b) İnsan münasibətləri ən yüksək zirvəsinə çatana kimi",
        "c) Cəmiyyətin tərəqqisi başa çatana qədər",
        "d) Peşələrin xarakteri tam mükəmməlləşənə qədər",
        "e) Peşələr mövcud olduqca"
      ],
      correct: "e) Peşələr mövcud olduqca"
    },
    {
      question: "110.0. Tibbi etika anlayışı nə zaman formalaşıb?",
      answers: [
        "a) E.ə. II-I əsrlər",
        "b) E.ə. IV-III əsrlər",
        "c) E.ə. VII-VI əsrlər",
        "d) E.ə. V-IV əsrlər",
        "e) E.ə. VI-V əsrlər"
      ],
      correct: "e) E.ə. VI-V əsrlər"
    },
    {
      question: "111.0. Həkimlik etikası anlayışına daxildir?",
      answers: [
        "a) Həkim əxlaqı, həkimin şəxsi mən'i",
        "b) Həkimin borcu haqqında təlim, həkimlik sosiologiyası",
        "c) Həkim fenomeni, həkim şəxsiyyətin spesifikası",
        "d) Həkimin iş prinsipi, peşəkarlıq təlimi",
        "e) Həkimin xəstəyə humanist yanaşma tərzi"
      ],
      correct: "b) Həkimin borcu haqqında təlim, həkimlik sosiologiyası"
    },
    {
      question: "112.0. Əxlaq haqqında elm olan etikanı nə yaradır?",
      answers: [
        "a) Sadə əxlaq normalarının dərk olunması",
        "b) Əxlaqın nəzəri cəhətdən dərk olunması və əsaslandırılması",
        "c) Dövlətin, qanunların formalaşması",
        "d) İqtisadi yüksəlişin təmin olunması",
        "e) İnsanlıq dəyərlərinin formalaşması"
      ],
      correct: "b) Əxlaqın nəzəri cəhətdən dərk olunması və əsaslandırılması"
    },
    {
      question: "113.0. Tarixən dəyişikliyə məruz qalmışdır?",
      answers: [
        "a) Siyasi və əxlaqi şüurun qarşılıqlı münasibətinin xarakteri",
        "b) Sadə əxlaq normaları",
        "c) İbtidai dövrün adətləri",
        "d) Ailə münasibətləri",
        "e) İctimai şüurun formaları"
      ],
      correct: "a) Siyasi və əxlaqi şüurun qarşılıqlı münasibətinin xarakteri"
    },
    {
      question: "114.0. Etikanı qanunculuqla bağlamağa çalışan filosoflar?",
      answers: [
        "a) Hegel, Pifoqor, Solon",
        "b) Demokrit, Kor, Helvetsi",
        "c) Feyerbax, Biruni, Mərban",
        "d) Sokrat, Platon, Aristotel",
        "e) Pifoqor, Kant, Hobbs"
      ],
      correct: "d) Sokrat, Platon, Aristotel"
    },
    {
      question: "115.0. Həm incəsənət, həm də əxlaqın əsasını təşkil edir...?",
      answers: [
        "a) Dinlə incəsənətin vəhdəti",
        "b) Etiklik və estetikliyin vəhdəti",
        "c) Elmlə incəsənətin vəhdəti",
        "d) Fəlsəfə ilə dinin vəhdəti",
        "e) Hüquqla siyasətin vəhdəti"
      ],
      correct: "b) Etiklik və estetikliyin vəhdəti"
    },
    {
      question: "116.0. Əxlaqi davranış nədir?",
      answers: [
        "a) İnsanın başqalarına nümunə ola biləcək hərəkətidir.",
        "b) İnsanın əxlaqi dəyərləri ilə müşayiət olunan hərəkət tərzidir.",
        "c) İnsanın daxili zənginliyinin ifadəsidir.",
        "d) İnsanın mənəvi dəyərlərinin hərəkətlərlə ifadə tərzidir.",
        "e) İnsanın şüur və ifadəsi ilə bağlı olan əxlaqi əməllərin məcmusudur."
      ],
      correct: "e) İnsanın şüur və ifadəsi ilə bağlı olan əxlaqi əməllərin məcmusudur."
    },
    {
      question: "117.0. Motivin seçilməsi, dərk edilməsi, başqaları və özü qarşısında əsaslandırılmasına nə deyilir?",
      answers: [
        "a) Məntiq",
        "b) Münasibət",
        "c) Motivasiya",
        "d) Yaşantı",
        "e) İstiqamət"
      ],
      correct: "c) Motivasiya"
    },
    {
      question: "118.0. Paternalist davranış hansı fikrə əsaslanır?",
      answers: [
        "a) Kliyentin arzu-istəyi hadisələri ləngidir.",
        "b) Sosial işçi prosesin gedişini özü nizamlayır.",
        "c) Təcrübəçi kliyentin seçim hüququna müdaxilə edə bilər.",
        "d) İşin gedişi proqnoz söyləməyə imkan verir.",
        "e) Kliyent müstəqil qərar qəbul edə bilər."
      ],
      correct: "c) Təcrübəçi kliyentin seçim hüququna müdaxilə edə bilər."
    },
    {
      question: "119.0. Paternalizmə bəraət qazandıran 4 şərti qəbul edən alim?",
      answers: [
        "a) Ştetnzak",
        "b) Halsted",
        "c) Volker",
        "d) Abramson",
        "e) Brok"
      ],
      correct: "d) Abramson"
    },
    {
      question: "120.0. Etik kateqoriyalar nəyi ifadə edir?",
      answers: [
        "a) Əxlaqın bütün tərəflərini",
        "b) Cəmiyyət qanunlarını",
        "c) Milli-mənəvi dəyərləri",
        "d) Yaşam tərzinin məzmununu",
        "e) Elmi idrakın müxtəlif pillələrini"
      ],
      correct: "e) Elmi idrakın müxtəlif pillələrini"
    },
    {
      question: "121.0. Kant və Hegel etika ilə bağlı nə düşünürdülər?",
      answers: [
        "a) Onlar etikanı insanlığı dəyişdirəcək amil hesab edirdilər.",
        "b) Onlar etikanı həyatdan ayırmağa çalışırdılar.",
        "c) Onlar etikanın inkişafını zəruri hesab edirdilər.",
        "d) Onlar etikanın elmi səciyyəsini yüksəltməyə cəhd edirdilər.",
        "e) Onlar etikanın gələcək inkişafını cəmiyyətin maariflənməsində axtarırdılar."
      ],
      correct: "b) Onlar etikanı həyatdan ayırmağa çalışırdılar."
    },
    {
      question: "122.0. Zərdüşt inamına görə bütün şəxsiyyət idealı neçə amilin vəhdətindən yaranıb?",
      answers: [
        "a) 2",
        "b) 4",
        "c) 5",
        "d) 1",
        "e) 3"
      ],
      correct: "e) 3"
    },
    {
      question: "123.0. Tusinin “Əxlaqi Nasir” əsəri neçə məqalə, neçə fəsildən ibarətdir?",
      answers: [
        "a) 10 məqalə, 25 fəsil",
        "b) 3 məqalə, 30 fəsil",
        "c) 5 məqalə, 20 fəsil",
        "d) 5 məqalə, 16 fəsil",
        "e) 8 məqalə, 30 fəsil"
      ],
      correct: "b) 3 məqalə, 30 fəsil"
    },
    {
      question: "124.0. “Əxlaqi Nasir” əsərinin adı ilə bağlı Tusinin qeydləri ...?",
      answers: [
        "a) “İsmayıl hökmdarı Nasirin xalqı çox sevdiyi üçün mən əsərimi “Əxlaqi Nasir” adlandırdım.",
        "b) “Bu kitabın yazılması hökmdar Nasirin əmri və təşviqi ilə olduğu üçün onu “Əxlaqi Nasir” adlandırdım.",
        "c) “Kitab İsmayıl hökmdarı Nasirin mənə ənam göndərməsi səbəbilə belə adlandırılır”.",
        "d) “İsmayıl hökmdarı Nasirin əmri ilə belə adlandırıldı”.",
        "e) İsmayıl hökmdarı Nasirin hərbi qələbələrinin şərəfinə kitab “Əxlaqi Nasir”i adlandırıldı."
      ],
      correct: "b) “Bu kitabın yazılması hökmdar Nasirin əmri və təşviqi ilə olduğu üçün onu “Əxlaqi Nasir” adlandırdım."
    },
    {
      question: "125.0. Tusinin əxlaqi sifətlərlə bağlı fikirləri...?",
      answers: [
        "a) Əxlaq insanın bəzəyidir.",
        "b) Əxlaqi sifətlər yalnız ictimai həyatda yaranır, heç də anadangəlmə proses deyil.",
        "c) Əxlaq insanı heyvandan fərqləndirən başlıca keyfiyyətdir.",
        "d) Əxlaqsız insan cəmiyyət üçün qara yaradır.",
        "e) Əxlaq insani duyğudur."
      ],
      correct: "b) Əxlaqi sifətlər yalnız ictimai həyatda yaranır, heç də anadangəlmə proses deyil."
    },
    {
      question: "126.0. Füzulinin etik, estetik görüşlərinin tədqiqatçısı F.Qasımzadənin əsəri necə adlanır?",
      answers: [
        "a) “Sevgi nuru”",
        "b) “Dünyanın gözü”",
        "c) “Qəm karvanı”",
        "d) “Şərqin işığı”",
        "e) “Fəzilətlər sahibi”"
      ],
      correct: "c) “Qəm karvanı”"
    },
    {
      question: "127.0. Füzuli əxlaqi əməllərin təyinində əqlə verdiyi yüksək rola yekun vuraraq, yazır...?",
      answers: [
        "a) “Elmlə ilə, ədəblə tapılar şərəf”.",
        "b) “Ədəbsiz insan yalnız qaranlığa gedir”.",
        "c) “Əxlaq çətin sınaqları asanlaşdırır”.",
        "d) “Əvvəl fikir, sonra əməl”.",
        "e) “Yaxşı de, yaxşı eşit”."
      ],
      correct: "d) “Əvvəl fikir, sonra əməl”."
    },
    {
      question: "128.0. Zeynalabdin Şirvani insanın kamil olması, təkmilləşməsi üçün neçə keyfiyyət qazanmasını zəruri hesab edirdi?",
      answers: [
        "a) 20",
        "b) 25",
        "c) 40",
        "d) 50",
        "e) 30"
      ],
      correct: "d) 50"
    },
    {
      question: "129.0. İnsanın kamilləşməsi, təkmilləşməsi üçün 50 keyfiyyəti zəruri hesab edən Azərbaycan mütəfəkkiri?",
      answers: [
        "a) Əfzələddin Xaqani",
        "b) Abbasqulu Ağa Bakıxanov",
        "c) Mirzə Fətəli Axundzadə",
        "d) Zeynalabdin Şirvani",
        "e) Nizami Gəncəvi"
      ],
      correct: "d) Zeynalabdin Şirvani"
    },
    {
      question: "130.0. Məhəmməd Peyğəmbər hansı keyfiyyətləri insanda ən naqis cəhət hesab edirdi?",
      answers: [
        "a) Qeyri – təvazökarlıq, lovğalıq",
        "b) Yalançılıq, qeyri - təvazökarlıq",
        "c) Həsəd, paxıllıq, özündən müştəbehlik",
        "d) Kinlilik, acı dil, paxıllıq",
        "e) Xəsislik, hiylə, kinlilik, həsəd"
      ],
      correct: "e) Xəsislik, hiylə, kinlilik, həsəd"
    },
    {
      question: "131.0. Mənəvi borc nədir?",
      answers: [
        "a) İnsanların bir-birinə vicdan borcu",
        "b) Gözəl hisslərin paylaşdırılması",
        "c) Başqaları üçün yaşaya bilmək",
        "d) Başqalarını ağır situasiyalardan çıxarmağı bacarmaq",
        "e) İnsanların birgə yaşayış prosesində yaranan öhdəçiliyi"
      ],
      correct: "e) İnsanların birgə yaşayış prosesində yaranan öhdəçiliyi"
    },
    {
      question: "132.0. Kantın etikasını necə adlandırmaq olar?",
      answers: [
        "a) Xeyir etikası",
        "b) Şərəf etikası",
        "c) Ləyaqət etikası",
        "d) Borc etikası",
        "e) Vicdan etikası"
      ],
      correct: "d) Borc etikası"
    },
    {
      question: "133.0. Demokrit utancaqlıqdan danışarkən hansı etik kateqoriyanı nəzərdə tuturdu?",
      answers: [
        "a) Ləyaqət",
        "b) Vicdan",
        "c) Şərəf",
        "d) Borc",
        "e) Xoşbəxtlik"
      ],
      correct: "b) Vicdan"
    },
    {
      question: "134.0. Bütün ümidlərini vicdana bağlayan filosof?",
      answers: [
        "a) Anaksimen",
        "b) Paskal",
        "c) Epikür",
        "d) Demokrit",
        "e) Siseron"
      ],
      correct: "e) Siseron"
    },
    {
      question: "135.0. “Vicdan ən yumuşaq yastıqdır” fikrinin müəllifi?",
      answers: [
        "a) Heminquey",
        "b) Yedesi",
        "c) Tatarkeviç",
        "d) Yertsen",
        "e) H.İbsen"
      ],
      correct: "e) H.İbsen"
    },
    {
      question: "136.0. İntibah dövründə Mirondola, Valla, Erazm tərəfindən nəzəri cəhətdən daha çox əsaslandırılan kateqoriyalar?",
      answers: [
        "a) Xoşbəxtlik, utancaqlıq",
        "b) Xeyir, şər",
        "c) Borc, vicdan",
        "d) Şərəf və ləyaqət",
        "e) Xoşbəxtlik, həyatın mənası"
      ],
      correct: "d) Şərəf və ləyaqət"
    },
    {
      question: "137.0. Şərəfin inkişafının ikinci dövrünü A.İ.Gertsen hansı dövr adlandırır?",
      answers: [
        "a) Tərəqqi dövrü",
        "b) Renesans dövrü",
        "c) İntibah dövrü",
        "d) Yunan – Roma",
        "e) Tənəzzül dövrü"
      ],
      correct: "d) Yunan – Roma"
    },
    {
      question: "138.0. L.S.Lixaçova etiketin neçə prinsipini ayırır?",
      answers: [
        "a) yeddi",
        "b) dörd",
        "c) altı",
        "d) üç",
        "e) beş"
      ],
      correct: "b) dörd"
    },
    {
      question: "139.0. Etika fəlsəfənin hansı sahəsidir?",
      answers: [
        "a) Etika cəmiyyətin mənəvi sahəsini öyrənir.",
        "b) İnsan həyatının praktik məsələləri ilə bağlı olan sahəsidir.",
        "c) İdrak qanunlarını öyrənən sahədir.",
        "d) Etika fəlsəfədə idrak, təfəkkür qanunlarını öyrənir.",
        "e) Etika fəlsəfənin varlıq materiya məsələlərini öyrənir."
      ],
      correct: "b) İnsan həyatının praktik məsələləri ilə bağlı olan sahəsidir."
    },
    {
      question: "140.0. Dəqiqlik aşağıdakılardan hansında təzahür edir?",
      answers: [
        "a) həyatın hər anında",
        "b) verilmiş sözə sadiq olmaqda",
        "c) ağır psixo-emosional vəziyyətdə",
        "d) insanı pis vəziyyətdə qoyan sualları verməmək qabiliyyətində",
        "e) özünü qiymətləndirmədə"
      ],
      correct: "b) verilmiş sözə sadiq olmaqda"
    },
    {
      question: "141.0. Quldarlıq dövrünə xas olan əxlaq hansı vətəndaşlar arasındakı münasibətə aid idi?",
      answers: [
        "a) Zadəganlarla kəndlilər",
        "b) Azad vətəndaşlar",
        "c) Ər-arvad",
        "d) Hakim zümrə ilə qullar",
        "e) Ata və oğul"
      ],
      correct: "b) Azad vətəndaşlar"
    },
    {
      question: "142.0. Etik nəzəriyyələr tam ifadəsini hansı ölkələrdə tapmışdır?",
      answers: [
        "a) Qədim Çin, qədim Babilistan",
        "b) Qədim Yunanıstan, qədim Roma",
        "c) Qədim Hindistan, qədim Misir",
        "d) Qədim Misir, qədim Çin",
        "e) Qədim Misir, qədim Babilistan"
      ],
      correct: "b) Qədim Yunanıstan, qədim Roma"
    },
    {
      question: "143.0. Hansı tarixdə Buddizm yaranıb?",
      answers: [
        "a) II – I əsrlərdə",
        "b) III – II əsrlərdə",
        "c) VII – VI əsrlərdə",
        "d) IV – III əsrlərdə",
        "e) VI – V əsrlərdə"
      ],
      correct: "e) VI – V əsrlərdə"
    },
    {
      question: "144.0. Aşağıdakı fəlsəfi məktəblərdən hansı Konfutsinin etik-siyasi konsepsiyası ilə rəqabət aparırdı?",
      answers: [
        "a) Daosizm",
        "b) Leqizm",
        "c) Çayinzm",
        "d) Moizm",
        "e) Buddizm"
      ],
      correct: "d) Moizm"
    },
    {
      question: "145.0. Aşağıdakılardan hansı Çaynist etikasında mühüm yer tutur?",
      answers: [
        "a) İnsanın genetik quruluşu",
        "b) İnsanın ruhu",
        "c) İnsanın nəsil şəcərəsi",
        "d) İnsanın əzələlərinin gücü",
        "e) İnsanın fiziki görkəmi"
      ],
      correct: "b) İnsanın ruhu"
    },
    {
      question: "146.0. 8 fəzilətə çatmağı insan üçün vacib hesab edən cərəyan?",
      answers: [
        "a) Dualizm",
        "b) Caynizm",
        "c) Şamanizm",
        "d) Marksizm",
        "e) Buddizm"
      ],
      correct: "e) Buddizm"
    },
    {
      question: "147.0. “Şər konkretdir, onun daşıyıcı isə varlılardır” fikirləri kimə məxsusdur?",
      answers: [
        "a) Buddizm cərəyanının tərəfdarlarına",
        "b) Yoqa cərəyanının tərəfdarlarına",
        "c) Caynizm cərəyanının tərəfdarlarına",
        "d) Moizm cərəyanının tərəfdarlarına",
        "e) Dasizm cərəyanının tərəfdarlarına"
      ],
      correct: "d) Moizm cərəyanının tərəfdarlarına"
    },
    {
      question: "148.0. Materializmə yaxın olan ilk optimist konsepsiyanın müəllifi kimdir?",
      answers: [
        "a) Tenon",
        "b) Protoqar",
        "c) Fales",
        "d) Epikür",
        "e) Anaksimen"
      ],
      correct: "d) Epikür"
    },
    {
      question: "149.0. Latın sözü olan «Kateqoriya» Azərbaycan dilində mənası nədir?",
      answers: [
        "a) Özünəməxsus «dili», «mühakimə», «tərif»",
        "b) «Mühakimə», «məntiq»",
        "c) «Məntiq», «tərif»",
        "d) «Mühakimə», «təfəkkür»",
        "e) «Qavrayış», «tərif»"
      ],
      correct: "b) «Mühakimə», «məntiq»"
    },
    {
      question: "150.0. Hər hansı bir təlimin (estetik, siyasi, dini və s.) öz əsas ideyalarını ifadə etməsi üçün nədən istifadə edir?",
      answers: [
        "a) Anlayışlardan, özünəməxsus «dili»-indən",
        "b) Anlayışlar aparatı məntiqdən, özünəməxsus «dili»-indən",
        "c) Özünəməxsus «dili»-indən və təfəkkür əməliyyatlardan",
        "d) Məntiqdən, özünəməxsus «dili»-indən",
        "e) Anlayışlar aparatı, özünəməxsus «dili»-indən"
      ],
      correct: "e) Anlayışlar aparatı, özünəməxsus «dili»-indən"
    },
    {
      question: "151.0. “Fəzilətlər elm və təhsillə əldə edildiyi üçün əxlaqın mahiyyəti intellektual inkişafdır” cümləsinin müəllifi kimdir?",
      answers: [
        "a) Diogen",
        "b) M.F.Axundzadə",
        "c) S.Ə.Şirvani",
        "d) Sokrat",
        "e) İbn Sina"
      ],
      correct: "d) Sokrat"
    },
    {
      question: "152.0. Stoiklərin fikrincə insan müdrik, əxlaqlı olmaq üçün nə etməlidir?",
      answers: [
        "a) Elmini artırmalıdır.",
        "b) Qəlbinin səsinə qulaq asmalıdır.",
        "c) Vicdanının səsinə qulaq asmalıdır.",
        "d) Haqsızlığa göz yummamalıdır.",
        "e) Daim özünü tərbiyə etməlidir."
      ],
      correct: "e) Daim özünü tərbiyə etməlidir."
    },
    {
      question: "153.0. Aşağıdakılardan hansı Lukretski Karın məşhur poemasıdır?",
      answers: [
        "a) “Pritorika”",
        "b) ”Ali nemət və şər haqqında”",
        "c) “Özümə qarşı düşüncələr”",
        "d) “Politika”",
        "e) “Şeylərin təbiəti haqqında”"
      ],
      correct: "e) “Şeylərin təbiəti haqqında”"
    },
    {
      question: "154.0. Roma stoisizminin son nümayəndəsi?",
      answers: [
        "a) Seneka",
        "b) Y.Kar",
        "c) Spinoza",
        "d) Siseron",
        "e) Mark Avreli"
      ],
      correct: "e) Mark Avreli"
    },
    {
      question: "155.0. Etiket nə deməkdir?",
      answers: [
        "a) Modern həyat tərzi deməkdir",
        "b) Insanlara münasibətlərin xarici təzahürlərinə aid olan davranış qaydalarının məcmusudur",
        "c) Son modalı cavan mənasında işlənir",
        "d) Insanların xarici görünüşünün mənasini ifadə edir",
        "e) Geyimə verilən tələb deməkdir"
      ],
      correct: "b) Insanlara münasibətlərin xarici təzahürlərinə aid olan davranış qaydalarının məcmusudur"
    },
    {
      question: "156.0. Etiket termini müasir mənasında ilk dəfə harada işlənmişdir?",
      answers: [
        "a) Ingilis kral sarayında",
        "b) Qədim misirdə",
        "c) XIV Yüdovikin qəbul mərasimlərindən birində",
        "d) Şərq saraylarında",
        "e) I Pyotrun təşkil etdiyi gecə ballarında"
      ],
      correct: "c) XIV Yüdovikin qəbul mərasimlərindən birində"
    },
    {
      question: "157.0. Insana məxsus olan hansi xüsusiyyət özünün mənəvi təməli sayəsində sosial cəhətdən zəruri və dəyərli keyfiyyət kimi cıxış edir?",
      answers: [
        "a) Ekaloji mədəniyyət",
        "b) Davranış mədəniyyəti",
        "c) Siyasi düşünmə tərzi",
        "d) Məişət mədəniyyəti",
        "e) Geyim mədəniyyəti"
      ],
      correct: "b) Davranış mədəniyyəti"
    },
    {
      question: "158.0. Etiketə riayət olunması əmək kollektivində nəyə nail olunmasına imkan verir?",
      answers: [
        "a) Sağlam psixoloji mühitin formalaşmasına",
        "b) Işgüzar mühitin yaradılmasına",
        "c) əmək məhsuldarlığının artmasına",
        "d) əmək intizamının yüksəlməsinə",
        "e) Yaradıcı mühitin yaradılması"
      ],
      correct: "e) Yaradıcı mühitin yaradılması"
    },
    {
      question: "159.0. Dahi İbn Sina hansı əsərində müalicə üsulları ilə yanaşı xəstənin şəxsiyyətinə münasibət həkimin əxlaqi simasında verilən tələblər məsələlərində şərh edilmişdir?",
      answers: [
        "a) “Xoş rəftar haqqında”",
        "b) “Nəsihətlər”",
        "c) “Həkim haqqında”",
        "d) “And”",
        "e) “Həkimlik elminin qanunları”"
      ],
      correct: "e) “Həkimlik elminin qanunları”"
    },
    {
      question: "160.0. “Ptaxattepin vəziri və şəhər rəisinin nəsihətləri” əsərinə harada rast gəlinir?",
      answers: [
        "a) Qədim Cin mənbələrində",
        "b) Qədim hind mənbələrində",
        "c) “Veda” adlı dini ədəbiyyatda",
        "d) Qədim misir yazilarında",
        "e) Qədim Şumer yazılarında"
      ],
      correct: "d) Qədim misir yazilarında"
    },
    {
      question: "161.0. Estetika haqqında ən erkən konseptual anlayışlar kim tərəfindən tərtib edilmişdir?",
      answers: [
        "a) Platon",
        "b) Materialistlər",
        "c) Pifaqorçular",
        "d) Heraklit",
        "e) Aristotel"
      ],
      correct: "c) Pifaqorçular"
    },
    {
      question: "162.0. “Sofist”, “Parmenid”, “Teetet”, “Dövlət” əsərləri aiddir:",
      answers: [
        "a) Aristotel",
        "b) Heroklit",
        "c) Platon",
        "d) Fales",
        "e) Sokrat"
      ],
      correct: "c) Platon"
    },
    {
      question: "163.0. Bu alimin ictimai-siyasi və fəlsəfi görüşləri özünün “ən mükəmməl sistem” saydığı quldarlığın möhkəmlənməsinə yönəlmişdi:",
      answers: [
        "a) Sokrat",
        "b) Platon",
        "c) Aristotel",
        "d) Fales",
        "e) Heroklit"
      ],
      correct: "c) Aristotel"
    },
    {
      question: "164.0. Canlı həyata, insan ehtiraslarına, sevgi və faciələrə maraq formasının ortaya çıxdığı dövr:",
      answers: [
        "a) Sosialist realizm dövrü",
        "b) İntibah dövrü",
        "c) Maarifçilik dövrü",
        "d) Realizm dövrü",
        "e) Romantizm dövrü"
      ],
      correct: "b) İntibah dövrü"
    },
    {
      question: "165.0. Dünya mədəniyyətində maarifçi ədəbi tərəqqinin bir dövrüdür:",
      answers: [
        "a) Maarifçilik",
        "b) Sosialist realizm dövrü",
        "c) Realizm dövrü",
        "d) Romantizm",
        "e) İntibah dövrü"
      ],
      correct: "c) Realizm dövrü"
    },
    {
      question: "166.0. Substansional kateqoriyaların tərkib hissələrini göstərin?",
      answers: [
        "a) Hərbi and, ədalət, borc, ədalətsizlik",
        "b) Xeyir, şər, borc, vicdan, ədalət",
        "c) Hərbi and, şər, borc, ədalətsizlik",
        "d) Hərbi and, şər, borc, vicdan, ədalət",
        "e) Vicdan, ədalət, şər, ədalətsizlik"
      ],
      correct: "b) Xeyir, şər, borc, vicdan, ədalət"
    },
    {
      question: "167.0. “Yer üzündə ən böyük gözəllik insan gözəlliyidir” fikri aiddir:",
      answers: [
        "a) Fizuli",
        "b) Pestalotsi",
        "c) Nizami",
        "d) Çernışevski",
        "e) Höte"
      ],
      correct: "b) Pestalotsi"
    },
    {
      question: "168.0. -Reallığın bədii əksidir:",
      answers: [
        "a) Estetika",
        "b) İncəsənət",
        "c) Dünyagörüşü",
        "d) Zövq",
        "e) Etika"
      ],
      correct: "b) İncəsənət"
    },
    {
      question: "169.0. “Maarifçilik dövrü” terminini tarixə bəxş etmişdir:",
      answers: [
        "a) Didro",
        "b) Volter",
        "c) Monteskye",
        "d) Hegel",
        "e) Russo"
      ],
      correct: "b) Volter"
    },
    {
      question: "170.0. Etika elminə həm də -- deyirdilər:",
      answers: [
        "a) hissi fəlsəfə",
        "b) nəzəri fəlsəfə",
        "c) ənənə fəlsəfəsi",
        "d) məntiqi fəlsəfə",
        "e) praktik fəlsəfə"
      ],
      correct: "e) praktik fəlsəfə"
    },
    {
      question: "171.0. Əxlaqi dəyərlər problemi də təhlil olunur :",
      answers: [
        "a) Pozitivizm",
        "b) Aksiologiya",
        "c) Deontologiya",
        "d) Eqoizm",
        "e) Deskriptiv etika"
      ],
      correct: "b) Aksiologiya"
    },
    {
      question: "172.0. Müxtəlif cəmiyyətlərdə əxlaq məsələlərin konkret-sosioloji tədqiqatlarını aparır :",
      answers: [
        "a) Aksiologiya",
        "b) Deskriptiv etika",
        "c) Eqoizm",
        "d) Deontologiya",
        "e) Pozitivizm"
      ],
      correct: "b) Deskriptiv etika"
    },
    {
      question: "173.0. Əxlaq dedikdə burada subyektin şəxsi və özəl qarşılıqlı münasibətlərini əhatə edən əxlaqını başa düşürdü:",
      answers: [
        "a) N.Gəncəvi",
        "b) Nitşe",
        "c) Hegel",
        "d) N.Tusi",
        "e) Nəsimi"
      ],
      correct: "c) Hegel"
    },
    {
      question: "174.0. Etika elminin xüsusi sahəsidir: burada bu və ya digər cəmiyyət əxlaqi, sosioloji və tarixi baxımından öyrənilir:",
      answers: [
        "a) Aksiologiya",
        "b) Eqoizm",
        "c) Deskriptiv etika",
        "d) Deontologiya",
        "e) Pozitivizm"
      ],
      correct: "c) Deskriptiv etika"
    },
    {
      question: "175.0. Etika nəzəriyyəsinin istiqmətlərindən biridir və əxlaqi hərəkətləri alınan nəticədən asılı olaraq müəyyən edir:",
      answers: [
        "a) Pozitivizm",
        "b) Konsekvensial etika",
        "c) Aksiologiya",
        "d) Deskriptiv etika",
        "e) Deontologiya"
      ],
      correct: "b) Konsekvensial etika"
    },
    {
      question: "Etik kateqoriya deyil:",
      answers: [
        "a) namus",
        "b) borc",
        "c) vicdan",
        "d) vəzifə",
        "e) asketizm"
      ],
      correct: "e) asketizm"
    },
    {
      question: "Etik prinsiplərə aid edilmir:",
      answers: [
        "a) hümanizm",
        "b) fərdiyyətçilik",
        "c) xəyanət",
        "d) namus",
        "e) fərdiyyətçilik"
      ],
      correct: "d) namus"
    },
    {
      question: "Əsas kateqoriyanı xeyir hesab edirdi:",
      answers: [
        "a) Homer",
        "b) Aristotel",
        "c) Sokrat",
        "d) Kyerkeqor",
        "e) Platon"
      ],
      correct: "e) Platon"
    },
    {
      question: "Asketizm sözünün mahiyyəti:",
      answers: [
        "a) fanatizm",
        "b) fərdiyyətçilik",
        "c) insanilik",
        "d) bölünməzlik",
        "e) məşq etmək"
      ],
      correct: "e) məşq etmək"
    },
    {
      question: "Fatalizm sözünün mənası:",
      answers: [
        "a) Bölünməzlik",
        "b) Qismət",
        "c) Ağıl",
        "d) Ciddilik",
        "e) İnsanilik"
      ],
      correct: "b) Qismət"
    },
    {
      question: "Rigorizm sözünün mənası:",
      answers: [
        "a) fanatizm",
        "b) ciddilik",
        "c) fərdiyyətçilik",
        "d) insanilik",
        "e) bölünməzlik"
      ],
      correct: "b) ciddilik"
    },
    {
      question: "Həm fərdiyyətçilik həm də nihilizmin əsasında durur:",
      answers: [
        "a) Riqorizm",
        "b) Volyuntarizm",
        "c) Fanatizm",
        "d) Rasionalizm",
        "e) Asketizm"
      ],
      correct: "b) Volyuntarizm"
    },
    {
      question: "Latıncadan hədsiz özündən çıxan deməkdir:",
      answers: [
        "a) Riqorizm",
        "b) Rasionalizm",
        "c) Asketizm",
        "d) Fanatizm",
        "e) Volyuntarizm"
      ],
      correct: "d) Fanatizm"
    },
    {
      question: "“Yalan danışma. Ən vacib olanı qoru”, Allahlara ehtiram, valideynlərə şərəf fikrinin müəllifi:",
      answers: [
        "a) Fales",
        "b) Hilon",
        "c) Solon",
        "d) Kleobul",
        "e) Pittak"
      ],
      correct: "c) Solon"
    },
    {
      question: "Əxlaqı insan fəaliyyətinin bütün sahələrində təhlil etməyə çalışırdı:",
      answers: [
        "a) Platon",
        "b) Aristotel",
        "c) Sokrat",
        "d) Fales",
        "e) Anaksimand"
      ],
      correct: "c) Sokrat"
    },
    {
      question: "Stoiklərin əsas saydığı 4 məziyyətə aid deyil:",
      answers: [
        "a) müdriklik",
        "b) ədalətllilik",
        "c) sağlam düşüncə (mötədillik)",
        "d) savad",
        "e) comərdlik"
      ],
      correct: "d) savad"
    },
    {
      question: "Stoiklərin əsas saydığı 4 ehtiras:",
      answers: [
        "a) kədər",
        "b) qorxu",
        "c) həzzalma",
        "d) sevgi",
        "e) istəklər"
      ],
      correct: "d) sevgi"
    },
    {
      question: "Daxili dönməzlik cərəyanıdır:",
      answers: [
        "a) intellektualizm",
        "b) Skeptisizm",
        "c) epikürçülük",
        "d) hedonizm",
        "e) stoisizm"
      ],
      correct: "b) Skeptisizm"
    },
    {
      question: "Qədim Yunanıstanda Demokrit və Aristipp -- olmuşlar:",
      answers: [
        "a) Epikürçü",
        "b) Evdemonist",
        "c) Materialist",
        "d) Stoik",
        "e) Hedonist"
      ],
      correct: "e) Hedonist"
    },
    {
      question: "“Bu, əsasən insanın daxili borcu və ləyaqət hissidir...” – bu anlayış aiddir:",
      answers: [
        "a) Buddizmin",
        "b) Asketizmin",
        "c) Lamaizim",
        "d) “Li” anlayışının",
        "e) Konfutsiliyin"
      ],
      correct: "d) “Li” anlayışının"
    },
    {
      question: "O, “estetika” sözünü bir termin kimi tanıtdı və elmə çevirdi:",
      answers: [
        "a) J.J.Russo",
        "b) G.Leybnits",
        "c) A.Baumharten",
        "d) Sokrat",
        "e) Aristotel"
      ],
      correct: "c) A.Baumharten"
    },
    {
      question: "Estetikanın mərkəzi fiqurlarından biridir:",
      answers: [
        "a) Məntiqi düşüncə",
        "b) incəsənət bilikləri",
        "c) sənətşünaslıq elmləri",
        "d) Bədii obraz",
        "e) Hissiyyat"
      ],
      correct: "d) Bədii obraz"
    },
    {
      question: "Fransada bu hərəkat klassik ədəbiyyatın əsasına çevrildi:",
      answers: [
        "a) Romantizm",
        "b) Sosialist realizm",
        "c) İntibah",
        "d) Realizm",
        "e) Maarifçilik"
      ],
      correct: "e) Maarifçilik"
    },
    {
      question: "Bədii yaradıcılığın təsir xüsusiyyətlərinin öyrənilməsi ilə sıx bağlıdır:",
      answers: [
        "a) Estetik baxış",
        "b) Estetik düşüncə",
        "c) Estetik hiss",
        "d) Estetik dünyagörüşü",
        "e) Estetik qavrayış"
      ],
      correct: "e) Estetik qavrayış"
    },
    {
      question: "İncəsənətin sosioloji kateqoriyasına aid deyil:",
      answers: [
        "a) ideoloji",
        "b) sinif",
        "c) milliyyət",
        "d) xalq",
        "e) Bədiilik"
      ],
      correct: "e) Bədiilik"
    },
    {
      question: "İncəsənətin dialektika kateqoriyasına aid deyil:",
      answers: [
        "a) bədii tərəqqi",
        "b) yenilik",
        "c) ənənələr",
        "d) xalq",
        "e) təsir"
      ],
      correct: "d) xalq"
    },
    {
      question: "İncəsənətin yaradıcı genetikasının kateqoriyası deyil:",
      answers: [
        "a) eskiz",
        "b) qaralama",
        "c) variant",
        "d) düşünmə",
        "e) yenilik"
      ],
      correct: "e) yenilik"
    },
    {
      question: "İncəsənətin psixologiyası kateqoriyası deyil:",
      answers: [
        "a) istedad",
        "b) düşünmə",
        "c) dahilik",
        "d) qabiliyyət",
        "e) ilham"
      ],
      correct: "b) düşünmə"
    },
    {
      question: "İncəsənətin quruluş kateqoriyasına aid edilmir:",
      answers: [
        "a) kompozisiya",
        "b) bədii zaman",
        "c) bədii mətn",
        "d) dahilik",
        "e) məkan"
      ],
      correct: "d) dahilik"
    },
    {
      question: "Müxtəlifliyin birliyidir, ziddiyyətlilərin razılığıdır, kainatla uzlaşmadır:",
      answers: [
        "a) Mədəniyyət",
        "b) İncəsənət",
        "c) Evdemonizm",
        "d) Harmoniya",
        "e) Hedonizm"
      ],
      correct: "d) Harmoniya"
    },
    {
      question: "Əxlaqın ümumnəzəri modeli hələ formalaşmamışdı:",
      answers: [
        "a) XX əsrin II yarısına qədər",
        "b) XV əsrə qədər",
        "c) XX əsrin əvvəlinə qədər",
        "d) XIX əsrin ikinci yarısına qədər",
        "e) XVIII əsrə qədər"
      ],
      correct: "d) XIX əsrin ikinci yarısına qədər"
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
  