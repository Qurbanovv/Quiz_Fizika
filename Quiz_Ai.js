const questions = [
    {
      question: "İbtidai icma dövrünün sonunda tərbiyənin kollektiv ənənələri uşaq və yeniyetmələr üçün ...........meydana gəlməsinə səbəb oldu?",
      answers: [
        "A) Məktəblərin",
        "B) Zikkuratların",
        "C) Liseylərin",
        "D) «Gənclər evi»nin",
        "E) Gimnasilərin"
      ],
      correct: "D) «Gənclər evi»nin"
    },
    {
      question: "… bəşər cəmiyyətin mövcud olduğu zamandan indiyə kimi ayrı-ayrı tarixi dövrlərdə tərbiyəni, məktəbi və pedaqoji nəzəriyyələrin yaranması və inkişafından bəhs edir.",
      answers: [
        "A) Ədəbiyyat tarixi",
        "B) Elm tarixi",
        "C) Mülkü tarix",
        "D) Pedaqogika tarixi",
        "E) Sosial tarix"
      ],
      correct: "D) Pedaqogika tarixi"
    },
    {
      question: "Pedaqogika tarixi nədən bəhs edir?",
      answers: [
        "A) Bəşər cəmiyyətin mövcud olduğu zamandan indiyə kimi ayrı-ayrı tarixi dövrlərdə tərbiyəni, məktəbi və pedaqoji nəzəriyyələrin yaranması və inkişafından",
        "B) Konkret peşə fəaliyyətinin qanunauyğunluqlarından",
        "C) Təlimin qanunauyğunluqlarının ayrı-ayrı fənlərin tədrisinə tətbiq edilməsinin xüsusiyyətlərindən",
        "D) Fiziki və əqli cəhətdən qüsurlu uşaqların inkişafının psixo-fizioloji xüsusiyyətlərini araşdırmaqdan",
        "E) Ali təhsil müəssisələrində ali təhsil prosesinin spesifik xüsusiyyətlərini öyrənməkdən"
      ],
      correct: "A) Bəşər cəmiyyətin mövcud olduğu zamandan indiyə kimi ayrı-ayrı tarixi dövrlərdə tərbiyəni, məktəbi və pedaqoji nəzəriyyələrin yaranması və inkişafından"
    },
    {
      question: "Tərbiyənin yaranması ilə bağlı nəzəriyyə:",
      answers: [
        "A) Fizioloji",
        "B) Təkamül-bioloji, psixoloji, dini",
        "C) Pedaqoji",
        "D) Sosioloji",
        "E) Kulturoloji"
      ],
      correct: "B) Təkamül-bioloji, psixoloji, dini"
    },
    {
      question: "İctimai fəaliyyətin xüsusi sahəsi olan məktəb və tərbiyənin meydana gəlməsi hansı regionun sivilizasiyaları ilə bağlıdır?",
      answers: [
        "A) Cənubi Amerika",
        "B) Qərbi Avropa",
        "C) Şimali Afrika",
        "D) Qədim Rus",
        "E) Qədim Şərq"
      ],
      correct: "E) Qədim Şərq"
    },
    {
      question: "İbtidai icma quruluşunun axırlarından başlayaraq əqli əməyin fiziki əməydən ayrılması prosesi yeni bir peşənin meydana gəlməsi ilə nəticələndi:",
      answers: [
        "A) Müəllimliyin",
        "B) Hərbçinin",
        "C) Astroloqların",
        "D) Musiqiçilərin",
        "E) Kahinliyin"
      ],
      correct: "A) Müəllimliyin"
    },
    {
      question: "Eramızdan əvvəl III minillikdə Yaxın Şərqdə İkiçay-Dəclə və Fərat çayları arasındakı dövlətlərdə (Şumerdə və Akkadda) meydana gələn məktəblər necə adlanırdı?",
      answers: [
        "A) Gimnasiya",
        "B) Cədvəl evləri (edubba)",
        "C) Efebiya",
        "D) Saray məktəbi",
        "E) Şadlıq evi"
      ],
      correct: "B) Cədvəl evləri (edubba)"
    },
    {
      question: "… məktəblərində təlim iki əsas proqram əsasında həyata keçirilirdi. Birinci proqramda elm və texnikaya, ikincidə isə ədəbiyyata, yaradıcılıq qabiliyyətinin inkişafına xüsusi diqqət yetirilirdi.",
      answers: [
        "A) Misir",
        "B) Çin",
        "C) Şumer",
        "D) Yunan",
        "E) Roma"
      ],
      correct: "C) Şumer"
    },
    {
      question: "Qədim Misirdə məktəb təhsili ilə bağlı ilk məlumatlar",
      answers: [
        "A) Bizim eradan əvvəl I minilliyə təsadüf edir",
        "B) Bizim eradan əvvəl V minilliyə təsadüf edir",
        "C) Bizim eradan əvvəl III minilliyə təsadüf edir",
        "D) Bizim eranın I minilliyinə təsadüf edir",
        "E) Bizim eradan əvvəl II minilliyə təsadüf edir"
      ],
      correct: "C) Bizim eradan əvvəl III minilliyə təsadüf edir"
    },
    {
      question: "Öz fikrini müxtəsər söyləyən, taleyin məhrumiyyətlərinə və əzablarına dözməyi bacara bilən insan … idealı hesab olunurdu",
      answers: [
        "A) Qədim misirlilərdə",
        "B) Romalılarda",
        "C) Yunanlılarda",
        "D) Finikiyalılarda",
        "E) Hindlilərdə"
      ],
      correct: "A) Qədim misirlilərdə"
    },
    {
      question: "Eramızdan əvvəl II minilliyin I yarısında Qədim Mesopotamiya çarlığının çiçəklənməsi dövründə təhsil sahəsində aparıcı rolu hansı məktəblər oynayırdı?",
      answers: [
        "A) Məhəllə məktəbləri",
        "B) Kafedral məktəbləri",
        "C) Kifara məktəbləri",
        "D) Saray və məbəd məktəbləri",
        "E) İcma məktəbləri"
      ],
      correct: "D) Saray və məbəd məktəbləri"
    },
    {
      question: "Qədim Misirdə məktəbdə şagirdlərin mütiliyinə nail olmaq üçün ən effektli metod hansı hesab olunurdu?",
      answers: [
        "A) Fiziki cəza",
        "B) Yüksək qiymət yazmaq",
        "C) Rəğbətləndirmə",
        "D) Mükafat",
        "E) Tənqid"
      ],
      correct: "A) Fiziki cəza"
    },
    {
      question: "Eramızdan əvvəl II-I minillikdə Qədim Hindistanda meydana gələn kasta (silki) quruluşunda aşağıdakı silklərdən hansı hakim silk hesab olunurdu və o silkin nümayəndələri fundamental təhsil alırdı?",
      answers: [
        "A) Bayşlar",
        "B) Kşatralar",
        "C) Şudralar",
        "D) Parilər",
        "E) Braxmanlar"
      ],
      correct: "E) Braxmanlar"
    },
    {
      question: "Buddizm pedaqoji ənənələri Çinə hansı ölkədən gəlmişdir?",
      answers: [
        "A) Hindistandan",
        "B) Vyetnamdan",
        "C) Əfqanıstandan",
        "D) Filippindən",
        "E) Tailanddan"
      ],
      correct: "A) Hindistandan"
    },
    {
      question: "Qədim Çində pedaqoji fikrin inkişafına ən çox təsir göstərən mütəfəkkir kim olmuşdur?",
      answers: [
        "A) Laosizi",
        "B) Mensizi",
        "C) Konfusi",
        "D) Syun-siz",
        "E) Dyu-gun-şu"
      ],
      correct: "C) Konfusi"
    },
    {
      question: "Görüşləri Çində feodal təhsil sisteminin əsasına qoyulan Konfutsinin klassik pedaqoji əsəri necə adlanır?",
      answers: [
        "A) «Adətlər kitabı»",
        "B) «Təlim haqqında qeydlər»",
        "C) «Orta xətt haqqında təlim»",
        "D) «Müsahibələr və mühakimələr»",
        "E) «Beş klassik kitab»"
      ],
      correct: "D) «Müsahibələr və mühakimələr»"
    },
    {
      question: "Qədim Çində ilk dəfə hansı əlifbadan istifadə olunmuşdur?",
      answers: [
        "A) Latın əlifbasından",
        "B) Kiril əlifbasından",
        "C) Heroqlifdən",
        "D) Ərəb əlifbasından",
        "E) Əl hərəkətlərindən"
      ],
      correct: "C) Heroqlifdən"
    },
    {
      question: "Qədim Spartada böyüməkdə olan spartalıların təlim-tərbiyəsi aşağıdakı hansı yaş mərhələlərində həyata keçirilirdi?",
      answers: [
        "A) 7–10, 10–15, 15–20",
        "B) 7–14, 14–18, 18–25",
        "C) 7–15, 15–20, 20–30",
        "D) 7–12, 12–18, 18–24",
        "E) 8–16, 16–24, 24–32"
      ],
      correct: "C) 7–15, 15–20, 20–30"
    },
    {
      question: "Qədim Afina tərbiyə sistemində hansı tip tədris müəssələri yox idi?",
      answers: [
        "A) Şəhər məktəbi",
        "B) Qrammatika, kifara",
        "C) Palestra",
        "D) Gimnasiya",
        "E) Efebiya"
      ],
      correct: "A) Şəhər məktəbi"
    },
    {
      question: "Qədim Yunanıstanda min ildən artıq fəaliyyət göstərən və 529-cu ildə imperator Yustinianın sərəncamı ilə bağlanan məktəb hansı idi?",
      answers: [
        "A) Universitet",
        "B) İnstitut",
        "C) Akademiya",
        "D) Likey",
        "E) Kinosarq"
      ],
      correct: "C) Akademiya"
    },
    {
      question: "Tərbiyə problemləri ilə ilk dəfə məşğul olan yunan filosofu kim olmuşdur?",
      answers: [
        "A) Platon",
        "B) Aristotel",
        "C) Sokrat",
        "D) Demokrit",
        "E) Heraklit"
      ],
      correct: "D) Demokrit"
    },
    {
      question: "Tərbiyə problemləri şərh edilən «Dialoqlar», «Dövlət» və «Qanunlar» əsərləri antik dövrün hansı filosofuna məxsusdur?",
      answers: [
        "A) Sokrat",
        "B) Antisfen",
        "C) Platon",
        "D) Demokrit",
        "E) Ksenefont"
      ],
      correct: "C) Platon"
    },
    {
      question: "Sofistlərin, yəni müdriklərin eramızdan əvvəl V-IV əsrlərdə təhsil proqramında aşağıdakı fənlərdən hansı yox idi?",
      answers: [
        "A) Dialektika",
        "B) Fizika",
        "C) Qrammatika",
        "D) Hesab",
        "E) Astranomiya"
      ],
      correct: "B) Fizika"
    },
    {
      question: "Eramızdan əvvəl III-I əsrlərdə ellinizm dövründə Yunanıstanda tərbiyə və təhsil sahəsində mühüm dəyişikliklər baş verdiyindən Aristotelin vaxtı ilə təşkil etdiyi fəlsəfə məktəbi hansı ali təhsil müəssisəsinə çevrildi?",
      answers: [
        "A) Likey",
        "B) Akademiya",
        "C) Efebiya",
        "D) Stoiklər məktəbi",
        "E) Epikürçülər məktəbi"
      ],
      correct: "A) Likey"
    },
    {
      question: "Roma fəlsəfi və pedaqoji fikrinin görkəmli nümayəndələrindən hansı «Natiqlik təhsili» adlı əsər yazmışdır:",
      answers: [
        "A) Seneka",
        "B) Plutarx",
        "C) Siseron",
        "D) Böyük katon",
        "E) Kvintilian"
      ],
      correct: "E) Kvintilian"
    },
    {
      question: "Platon kimi Elladanın tərbiyəçisi hesab etmişdir?",
      answers: [
        "A) Esxil",
        "B) Homer",
        "C) Qesiod",
        "D) Sofokl",
        "E) Evripid"
      ],
      correct: "B) Homer"
    },
    {
      question: "425-ci ildə Bizans imperatoru Fedosiinin vaxtında Konstantinopolda ali məktəb necə adlanırdı?",
      answers: [
        "A) Universitet",
        "B) Akademiya",
        "C) Auditorium",
        "D) Likey",
        "E) Efebiya"
      ],
      correct: "C) Auditorium"
    },
    {
      question: "VII əsrdə yaranan ərəb əlifbası özündən əvvəl mövcud olan hansı əlifba əsasında yaradılmışdır?",
      answers: [
        "A) Aramey",
        "B) Latın",
        "C) Yunan",
        "D) Kiril",
        "E) Alban"
      ],
      correct: "A) Aramey"
    },
    {
      question: "İslam dünyasında təhsilin yayıcısı hansı dil olmuşdur?",
      answers: [
        "A) Türk dili",
        "B) Fars dili",
        "C) Şumer dili",
        "D) Ərəb dili",
        "E) Akkad dili"
      ],
      correct: "D) Ərəb dili"
    },
    {
      question: "XI-XVI əsrlərdə Qərbi Avropada pedaqoji elmin inkişafında mühüm rol oynayan, universal fəlsəfə və ilahiyyat hesab olunan «orta əsr məktəb fəlsəfəsi» necə adlanırdı?",
      answers: [
        "A) Dualizm",
        "B) Sensualizm",
        "C) Sxolastika",
        "D) Naturalizm",
        "E) Realizm"
      ],
      correct: "C) Sxolastika"
    },
    {
      question: "Avropada xaç yürüşləri dövründə formalaşmış cəngavər tərbiyəsi sisteminin məzmununa yeddi cəngavər bacarığı (məziyyəti) daxil idi. Aşağıda onlardan biri səhv göstərilmişdir?",
      answers: [
        "A) Güləş",
        "B) Qılınc oynatmaq",
        "C) Nizə atmaq",
        "D) Üzmək",
        "E) Şahmat oynamaq"
      ],
      correct: "A) Güləş"
    },
    {
      question: "Avropada orta əsr universitetləri neçənci əsrdə meydana gəlmişdir?",
      answers: [
        "A) XI əsrdə",
        "B) X əsrdə",
        "C) XIII əsrdə",
        "D) XIV əsrdə",
        "E) XII əsrdə"
      ],
      correct: "E) XII əsrdə"
    },
    {
      question: "Avropada orta əsrlərdə ilk universitet hansı şəhərdə açılmışdır?",
          answers: [
        "A) Boloniya",
        "B) Paris",
        "C) Paduan",
        "D) Lissabon",
        "E) Neapol"
      ],
      correct: "A) Boloniya"
    },
    {
      question: "Aşağıda adları qeyd olunanlardan biri intibah dövr pedaqoqlarından deyil?",
      answers: [
        "A) Tomas Mor",
        "B) Erazm Rotterdamski",
        "C) Con Lokk",
        "D) Mişel Monten",
        "E) Tomazzo Kampanella"
      ],
      correct: "C) Con Lokk"
    },
    {
      question: "XVI əsrdə Qərbi və Mərkəzi Avropada başlayan geniş ictimai hərəkat olan Reformasiyanın pedaqoji nəzəriyyələrinin təşəkkülündə xüsusi yer rol oynayanlar içərisində bir nəfərin adı səhv göstərilmişdir. O kimdir?",
      answers: [
        "A) Martin Kardyer",
        "B) Uilyam Tindel",
        "C) Martin Lyüter",
        "D) Deni Didro",
        "E) Filip Melenxton"
      ],
      correct: "D) Deni Didro"
    },
    {
      question: "XV-XVII əsrlərdə Almanyada meydana gələn ilk gimnaziyaların «atası» kim olmuşdur?",
      answers: [
        "A) F. Trosendorf",
        "B) F. Melenxton",
        "C) İ.Şturm",
        "D) İ.Aqrikola",
        "E) İ.Volf"
      ],
      correct: "B) F. Melenxton"
    },
    {
      question: "XVI-XVII əsrlərdə hakim siniflərin tərbiyəsini öz üzərinə götürməklə Avropanın siyasi və ictimai həyatına təsiri öz əllərinə almaq istəyən müəssisələr necə adlanırdı?",
      answers: [
        "A) iezuit məktəbləri",
        "B) qrammatika məktəbləri",
        "C) saray məktəbləri",
        "D) kolleclər",
        "E) şəhər (latın) məktəbləri"
      ],
      correct: "A) iezuit məktəbləri"
    },
    {
      question: "X-XIII əsrlərdə Kiyev Rusunun tərbiyə idealları hansı abidədə öz əksini tapmışdır?",
      answers: [
        "A) Domostroy",
        "B) Svatoslav İzorniki",
        "C) Sestodnev",
        "D) Vladimir Monomaxın uşaqlara nəsihəti",
        "E) Pçela"
      ],
      correct: "D) Vladimir Monomaxın uşaqlara nəsihəti"
    },
    {
      question: "XVII əsrdə Lixuda qardaşlarının Moskvada açdıqları məktəb necə adlanır?",
      answers: [
        "A) Slavyan-Yunan-Latın akademiyası",
        "B) Mətbəə məktəbi",
        "C) Yunan-latın məktəbi",
        "D) Kollegiya",
        "E) Alman məktəbi"
      ],
      correct: "A) Slavyan-Yunan-Latın akademiyası"
    },
    {
      question: "XVI əsrin axırları və XVI əsrin birinci yarısında hansı qardaşlıq məktəbi latın və polyak dillərində aparılan ali təhsil müəssisəsi-Akademiyaya çevrildi?",
      answers: [
        "A) Magilyov qardaşlıq məktəbi",
        "B) Lvov qardaşlıq məktəbi",
        "C) Vilno qardaşlıq məktəbi",
        "D) Kiev qardaşlıq məktəbi",
        "E) Letski qardaşlıq məktəbi"
      ],
      correct: "D) Kiev qardaşlıq məktəbi"
    },
    {
      question: "XVI-XVIII əsrlərin pedaqoqları və filosofları içərisində kim müasir pedaqogikanın atası hesab olunur?",
      answers: [
        "A) Lokk",
        "B) R.Dekart",
        "C) Y.A.Komenski",
        "D) V.Ratel",
        "E) F.Bekon"
      ],
      correct: "C) Y.A.Komenski"
    },
    {
      question: "İngiltərədə maarifçilik dövrünün mütəfəkkirlərindən biri «Ağ lövhə» (tabula rasa) nəzəriyyəsi işləyib hazırladı. O kim idi?",
      answers: [
        "A) Lokk",
        "B) Petti",
        "C) Milton",
        "D) Peyno",
        "E) Belers"
      ],
      correct: "A) Lokk"
    },
    {
      question: "XVI əsrdə şəxsiyyətin təşəkkülündə təhsil və tərbiyənin həlledici rolunu qeyd edən II Yekaterinanın rəğbət bəslədiyi fransız filosofu kim idi?",
      answers: [
        "A) K.A.Helvetsi",
        "B) Ş.Monteskye",
        "C) D.Didro",
        "D) F.Volter",
        "E) E.Kondilyan"
      ],
      correct: "C) D.Didro"
    },
    {
      question: "J.J.Russo hansı tərbiyə tərəfdarı olmuşdur ki, məşhur rus yazıçısı L.N.Tolstoy öz pedaqoji fəaliyyətini o ideya əsasında qurmağa çalışmışdır?",
      answers: [
        "A) mühafizəkar",
        "B) avtoritar",
        "C) Pedosentrik",
        "D) Azad",
        "E) liberal"
      ],
      correct: "D) Azad"
    },
    {
      question: "Hansı əsərinə görə Fransanın Qanunvericilik yığıncağı Pestalossini Fransanın fəxri vətəndaşı elan etmişdir?",
      answers: [
        "A) Linqard və Gertruda",
        "B) Rahibin axşam saatları",
        "C) Gertruda öz uşaqlarını necə öyrədir",
        "D) Qu quşunun nəğməsi",
        "E) Stonsada olduğum barədə dostuma məktub"
      ],
      correct: "A) Linqard və Gertruda"
    },
    { 
      question: "İctimai quruluşu yeni insan xarakterini formalaşdırmaq yolu ilə dəyişdirməyin mümkünlüyünü sosial-pedaqoji eksperiment vasitəsilə sübut etməyə cəhd göstərmiş və uğursuzluqla nəticələnmiş bu eksperiment hansı utopik sosialist tərəfindən həyata keçirilmişdir?",
      answers: [
        "A) Ş. Furye",
        "B) R. Ouen",
        "C) S. Simon",
        "D) T. Mor",
        "E) T. Kampanella"
      ],
      correct: "B) R. Ouen"
    },
    {
      question: "Herbatın pedaqoji sistemindən qırmızı xətt kimi keçən hansı ideyadır?",
      answers: [
        "A) Əxlaqlı insan formalaşdırmaq",
        "B) Dərsin strukturu",
        "C) Tərbiyəedici təlim",
        "D) Pedaqoji elmin suveren olması",
        "E) Çoxmaraqlılıq"
      ],
      correct: "C) Tərbiyəedici təlim"
    },
    {
      question: "“Tərbiyənin məqsədi və vəzifəsi öz işini ağılla və planlı aparmağı bacaran centlmen yetişdirməkdir” fikri kimə məxsusdur?",
      answers: [
        "A) Con Look",
        "B) Y.A. Komenski",
        "C) K.D. Uşinski",
        "D) I.H. Pestalotsi",
        "E) I.F. Herbart"
      ],
      correct: "A) Con Look"
    },
    {
      question: "“Bütün insanların onda doqquzu tərbiyənin nəticəsində xeyirxah, yaxud ziyankar, faydalı, yaxud faydasız olur” fikri kimə məxsusdur?",
      answers: [
        "A) Y.A. Komenski",
        "B) K.D. Uşinski",
        "C) I.H. Pestalotsi",
        "D) Con Look",
        "E) I.F. Herbart"
      ],
      correct: "D) Con Look"
    },
    {
      question: "XIX əsrin alman pedaqoqlarından kim təlim və tərbiyənin bir-birilə qarşılıqlı bağlı olan iki prinsipi - təbiətəmüvafiqlik və mədəniyyətəmüvafiqlik prinsiplərini irəli sürmüşdür?",
      answers: [
        "A) A. Disterverq",
        "B) B. Humboldt",
        "C) F. Frebel",
        "D) B. Beyn",
        "E) T. Siller"
      ],
      correct: "A) A. Disterverq"
    },
    {
      question: "J.J. Russoya görə dünyanı yeni qaydada qurmaq üçün daha çox nəyə diqqət yetirmək lazımdır?",
      answers: [
        "A) yeni insan tərbiyə edilməlidir",
        "B) cəmiyyət inqilabi yolla dəyişdirilməlidir",
        "C) yeni pedaqoji əsərlər yazılmalıdır",
        "D) irsiyyətə üstünlük verilməlidir",
        "E) yeni məktəb binaları tikilməlidir"
      ],
      correct: "A) yeni insan tərbiyə edilməlidir"
    },
    {
      question: "XIX əsrin əvvəllərində Rusiyada Xalq Maarifi Nazirliyi tərəfindən «Xalq Maarifinin ilkin qaydaları» neçənci ildə qəbul edilmişdir?",
      answers: [
        "A) 1804",
        "B) 1805",
        "C) 1812",
        "D) 1815",
        "E) 1803"
      ],
      correct: "E) 1803"
    },
    {
      question: "XIX əsrdə Rusiyada «Tədris müəssisələrinin və universitetlərin nizamnaməsi» neçənci ildə qəbul edilmişdir?",
      answers: [
        "A) 1803",
        "B) 1805",
        "C) 1807",
        "D) 1804",
        "E) 1811"
      ],
      correct: "D) 1804"
    },
    {
      question: "1804-cü ilin məktəb nizamnaməsinə görə, Rusiya 6 təlim dairəsinə bölünmüşdü. Həmin cərgəni tapın.",
      answers: [
        "A) Moskva, Tiflis, Riqa, Tula, Kerç, Kazan",
        "B) Kazan, Xarkov, Derpit, Tula, Moskva, Yaroslavl",
        "C) Moskva, Peterburq, Kerç, Kazan, Tula, Tiflis",
        "D) Moskva, Peterburq, Kazan, Xarkov, Derpit, Vilno",
        "E) Moskva, Peterburq, Kazan, Xarkov, Vilno, Yaroslavl"
      ],
      correct: "D) Moskva, Peterburq, Kazan, Xarkov, Derpit, Vilno"
    },
    {
      question: "XIX əsrin əvvəllərində Rusiyada məktəb sistemində təhsilin dörd pilləsi nəzərdə tutulmuşdu. Ardıcıllıqla düzülmüş bəndi tapın.",
      answers: [
        "A) qəza məktəbləri, gimnaziya, universitet, məhəllə məktəbləri",
        "B) məhəllə məktəbləri, qəza məktəbləri, gimnaziya, universitet",
        "C) universitet, qəza məktəbləri, gimnaziya, məhəllə məktəbləri",
        "D) məhəllə məktəbləri, universitet, qəza məktəbləri, gimnaziya",
        "E) məhəllə məktəbləri, qəza məktəbləri, universitet, gimnaziya"
      ],
      correct: "B) məhəllə məktəbləri, qəza məktəbləri, gimnaziya, universitet"
    },
    {
      question: "XIX əsrdə hansı nizamnaməyə görə şəhər və kəndlərdə tədris müddəti 1 il olan məhəllə məktəbləri, qəza və quberniya şəhərlərində isə təhsil müddəti 2 il olan qəza məktəbləri açıla bilərdi?",
      answers: [
        "A) 1803-cü il nizamnaməsi",
        "B) 1807-ci il nizamnaməsi",
        "C) 1811-ci il nizamnaməsi",
        "D) 1804-cü il nizamnaməsi",
        "E) 1812-ci il nizamnaməsi"
      ],
      correct: "D) 1804-cü il nizamnaməsi"
    },
    {
      question: "«Uşaq ruhu ağ lövhə deyil, ağac olmaq imkanı olan toxumdur, imkanlara malik insandır» fikri XIX əsr rus pedaqoqlarından kimə məxsusdur?",
      answers: [
        "A) A.İ. Gertsen",
        "B) V.Q. Belinski",
        "C) K.D. Uşinski",
        "D) S.S. Uvarov",
        "E) M.L. Maqnitski"
      ],
      correct: "B) V.Q. Belinski"
    },
    {
      question: "Hansı nizamnaməyə görə, Rusiyada universitetlərin muxtariyyət hüquqları ləğv edildi. Universitet Şurasının hüququ məhdudlaşdırıldı, universitetlərdə klassizim gücləndirildi, tədris haqqı artırıldı, universitet təhsilli gənclərin xaricə ezamı qadağan edildi?",
      answers: [
        "A) 1833",
        "B) 1835",
        "C) 1804",
        "D) 1819",
        "E) 1836"
      ],
      correct: "B) 1835"
    },
    {
      question: "Görkəmli rus pedaqoqu … Qərbi Avropa pedaqoji fikrinin, məktəb təhsilinin qızğın təbliğatçısı olsa da Russonun azad tərbiyə ilə bağlı romantik ideyalarını bəyənmir, uşağın ətraf aləmdən təcrid olunmasını tənqid edirdi.",
      answers: [
        "A) V.Q. Belinski",
        "B) K.D. Uşinski",
        "C) S.S. Uvarov",
        "D) A.İ. Gertsen",
        "E) M.L. Maqnitski"
      ],
      correct: "D) A.İ. Gertsen"
    },
    {
      question: "Bu əsasnamə 1828-ci ilin nizamnaməsindən bir neçə cəhətinə görə fərqlənirdi: burada silkilik ləğv edilir, dini məhdudluq aradan qaldırılır:, zemstovlara, cəmiyyətlərə və xüsusi şəxslərə ibtidai məktəblər açmaq imkanı verilir; müəllimlik fəaliyyətinə yalnız kişilərin deyil, qadınların da buraxılmasına icazə verildi.",
      answers: [
        "A) 1864-cü il nizamnaməsi",
        "B) 1835-ci il nizamnaməsi",
        "C) 1804-cü il nizamnaməsi",
        "D) 1811-ci il nizamnaməsi",
        "E) 1812-ci il nizamnaməsi"
      ],
      correct: "A) 1864-cü il nizamnaməsi"
    },
    {
      question: "1864-cü il nizamnaməsinə görə, Rusiyada orta təhsil verən gimnaziyalar 3 tipə bölünürdü.",
      answers: [
        "A) xüsusi gimnaziya, ümumi gimnaziya, orta gimnaziya",
        "B) peşə gimnaziyası, klassik gimnaziya, real gimnaziya",
        "C) iki qədim dilli klassik gimnaziya, bir qədim dilli klassik gimnaziya, qədim dillərin əvəzinə iki yeni dil keçilən real gimnaziya",
        "D) klassik progimnaziya, real progimnaziya, peşə gimnaziyası",
        "E) fizika-riyaziyyat gimnaziyası, xüsusi gimnaziya, qadın gimnaziya"
      ],
      correct: "C) iki qədim dilli klassik gimnaziya, bir qədim dilli klassik gimnaziya, qədim dillərin əvəzinə iki yeni dil keçilən real gimnaziya"
    },
    {
      question: "Rusiyada 1874-cü il ildə qəbul olunmuş gimnaziyaların yeni nizamnaməsinə görə:",
      answers: [
        "A) gimnaziyaların tədris planında fizika və riyaziyyat fənləri 80%-dən çox yer tuturdu",
        "B) rus dilinə, tarixə, coğrafiyaya çox saat verilirdi",
        "C) real gimnaziyaların əvəzinə xüsusi gimnaziyalar təşkil olundu",
        "D) qrammatik təhsilə, rus dilindən latın və yunan dillərinə tərcüməyə diqqət verilmirdi",
        "E) orta məktəblərdə klassik fənlərin sayı artdı, klassisizm gücləndirildi, bütün oğlan gimnaziyaları klassik gimnaziyalara çevrildi"
      ],
      correct: "E) orta məktəblərdə klassik fənlərin sayı artdı, klassisizm gücləndirildi, bütün oğlan gimnaziyaları klassik gimnaziyalara çevrildi"
    },
    {
      question: "XIX əsrdə Rusiyada tərtib olunan «Müəllim seminariyasının layihəsi»nin müəllifi kimdir?",
      answers: [
        "A) L.N. Tolstoy",
        "B) D.A. Tolstoy",
        "C) N.İ. Piroqov",
        "D) K.D. Uşinski",
        "E) V.Q. Belinski"
      ],
      correct: "D) K.D. Uşinski"
    },
    {
      question: "1917-ci ilin yanvarın 1-nə kimi Rusiyada neçə müəllim seminariyası var idi?",
      answers: [
        "A) 171",
        "B) 170",
        "C) 169",
        "D) 186",
        "E) 24"
      ],
      correct: "A) 171"
    },
    {
      question: "XIX əsrin II yarısında Rusiyada aşağıdakı cərəyanlar var idi:",
      answers: [
        "A) osmanlı maarif cərəyanı, kitab cəmiyyəti, ziyalılar cəmiyyəti",
        "B) üsuli-cədid cərəyanı, Rusiya müsəlmanları, tərəqqi və maarif cərəyanı",
        "C) osmanlı maarif cərəyanı, liberal burjua cərəyan, tərəqqi və maarif cərəyanı",
        "D) inqilabi-demokratik pedaqoji cərəyan, liberal burjua cərəyan, burjua-demokratik pedaqoji cərəyan",
        "E) üsuli-cədid, kitab cəmiyyəti, burjua-demokratik pedaqoji cərəyan"
      ],
      correct: "D) inqilabi-demokratik pedaqoji cərəyan, liberal burjua cərəyan, burjua-demokratik pedaqoji cərəyan"
    },
    {
      question: "O, Moskva Universitetinin tibb fakültəsini bitirmiş, Derpt Universitetinin, Peterburq Tibbi Cərrahiyə Akademiyasınının professoru, Odessa təlim dairəsinin popeçiteli olmuş, “Həyat məsələləri” adlı məqaləsi o dövrdə Rusiyada nəşr olunan nüfuzlu pedaqoji orqanların hamısında təkrar nəşr olunmuşdu.",
      answers: [
        "A) N.İ. Piroqov",
        "B) L.N. Tolstoy",
        "C) D.A. Tolstoy",
        "D) K.D. Uşinski",
        "E) V.Q. Belinski"
      ],
      correct: "A) N.İ. Piroqov"
    },
    {
      question: "N.İ. Piroqovun hansı məqaləsində tərbiyənin vəzifəsinə, xarakterinə, əhəmiyyətinə münasibət bildirilmişdir?",
      answers: [
        "A) Təlim metodları",
        "B) Tərbiyənin vəzifələri",
        "C) Həyat məsələləri",
        "D) İnsan tərbiyənin predmetidir",
        "E) Tərbiyə haqqında fikirlər"
      ],
      correct: "C) Həyat məsələləri"
    },
    {
      question: "Real progimnaziyaların klassik progimnaziyalardan fərqi nə idi?",
      answers: [
        "A) Real progimnaziyalar gəncləri universitetlərə klassik progimnaziyalar isə akademiyalara hazırlayırdı",
        "B) Real progimnaziyanı bitirənlər həm universitetlərə, həm də ali ixtisas tədris müəssisələrinə gedə bilərdilər",
        "C) Real progimnaziyalar 5 illik, klassik progimnaziyalar isə 3 illik idi",
        "D) Real progimnaziyaların tədris planından fərqli olaraq klassik progimnaziyaların tədris planında iki yeni xarici dilin əvəzinə bir yeni xarici dil, üçüncü sinifdə latın dili, dördüncü sinifdə yunan dili tədris edilirdi",
        "E) Klassik progimnaziyaları bitirənlər real progimnaziyalara, real progimnaziyaları bitirənlər isə klassik progimnaziyalara daxil ola bilərdi"
      ],
      correct: "D) Real progimnaziyaların tədris planından fərqli olaraq klassik progimnaziyaların tədris planında iki yeni xarici dilin əvəzinə bir yeni xarici dil, üçüncü sinifdə latın dili, dördüncü sinifdə yunan dili tədris edilirdi"
    },
    {
      question: "“Uşaqları döymək və həm də başqa uşaqların qarşısında döymək olarmı?” məqaləsinin müəllifi kimdir?",
      answers: [
        "A) N.İ. Piroqov",
        "B) L.N. Tolstoy",
        "C) D.A. Tolstoy",
        "D) K.D. Uşinski",
        "E) V.Q. Belinski"
      ],
      correct: "A) N.İ. Piroqov"
    },
    {
      question: "N.İ. Piroqov əxlaq tərbiyəsinə nələri daxil edirdi?",
      answers: [
        "A) cəzalandırma, rəğbətləndirmə, döymə, töhmət vermək",
        "B) töhmət, məzəmmət, tərif, mükafat, inandırma və nümunə",
        "C) rəhm və qayğı ilə döymək, cəzalandırma, rəğbətləndirmə, mükafat",
        "D) inandırma, fiziki cəza, kütləvi tədbirlər, əxlaqi söhbət",
        "E) əxlaqi söhbət, töhmət vermək, rəhm və qayğı ilə döymək"
      ],
      correct: "B) töhmət, məzəmmət, tərif, mükafat, inandırma və nümunə"
    },
    {
      question: "O, Universitetə daxil olmaq üçün qəbul imtahanlarının əleyhinə idi, deyirdi ki, orta məktəbin buraxılış imtahanı ilə ali məktəbin qəbul imtahanı birləşdirilməlidir və bu imtahanlar ali məktəblərin nümayəndələrinin iştirakı ilə getməli, universitetlərə geniş müxtariyyət verilməlidir.",
      answers: [
        "A) N.İ. Piroqov",
        "B) L.N. Tolstoy",
        "C) D.A. Tolstoy",
        "D) K.D. Uşinski",
        "E) V.Q. Belinski"
      ],
      correct: "A) N.İ. Piroqov"
    },
    {
      question: "Rusiyada kilsəni dövlətdən, məktəbi kilsədən ayıran dekret verilib:",
      answers: [
        "A) 1921",
        "B) 1919",
        "C) 1917",
        "D) 1918",
        "E) 1924"
      ],
      correct: "D) 1918"
    },
    {
      question: "Sovet məktəbinin ilk tədris plan və proqramları neçənci ildə qəbul edildi?",
      answers: [
        "A) 1918",
        "B) 1920",
        "C) 1921",
        "D) 1919",
        "E) 1922"
      ],
      correct: "B) 1920"
    },
    {
      question: "1921-ci ildə tədris müddəti 4 il olan hansı məktəb yaradıldı?",
      answers: [
        "A) Fabrik-zavod şagirdliyi",
        "B) Kəndli gənclər məktəbi",
        "C) Fabrik-zavod yeddiilliyi",
        "D) Birdərəcəli məktəb",
        "E) Doqquzillik məktəb"
      ],
      correct: "A) Fabrik-zavod şagirdliyi"
    },
    {
      question: "1934-cü ildə qəbul edilən “İbtidai və orta məktəblərin quruluşu haqqında” qərarda məktəb sistemi aşağıdakı kimi formalaşdırıldı.",
      answers: [
        "A) ibtidai məktəb, yeddiillik məktəb, fabrik-zavod şagirdliyi",
        "B) fabrik-zavod şagirdliyi, yeddiillik məktəb, ibtidai məktəb",
        "C) ibtidai məktəb, orta məktəb, ali məktəb",
        "D) ibtidai məktəb, natamam orta məktəb, tam orta məktəb",
        "E) yeddiillik məktəb, doqquzillik məktəb, kəndli gənclər məktəbi"
      ],
      correct: "D) ibtidai məktəb, natamam orta məktəb, tam orta məktəb"
    },
    {
      question: "“İbtidai məktəb, natamam orta məktəb, tam orta məktəb” kimi müəyyənləşdirilən məktəb sistemi 30-cu illərdə hansı qərarda öz əksini tapmışdı?",
      answers: [
        "A) “İbtidai və orta məktəblərin quruluşu haqqında” qərar",
        "B) “Vahid əmək məktəbi haqqında əsasnamə”",
        "C) “İcbari ibtidai təhsil haqqında” qanun",
        "D) “İbtidai və orta məktəblərinin dərs proqramları və rejmlər haqqında” qanun",
        "E) “Köhnə orta və ibtidai məktəb tiplərini politexnik məktəblə əvəz etmək haqqında” qanun"
      ],
      correct: "A) “İbtidai və orta məktəblərin quruluşu haqqında” qərar"
    },
    {
      question: "RSFSR Pedaqoji Elmlər Akademiyası neçənci ildə təşkil olunbub?",
      answers: [
        "A) 1945",
        "B) 1963",
        "C) 1943",
        "D) 1942",
        "E) 1941"
      ],
      correct: "C) 1943"
    },
    {
      question: "Bu qanun əsasında ümumtəhsil orta məktəbləri 11 illik istehsalat təhsili verən ümumtəhsil məktəblərinə çevrildi.",
      answers: [
        "A) “İbtidai və orta məktəblərin quruluşu haqqında” qanun",
        "B) “İcbari ibtidai təhsil haqqında” qanun",
        "C) “Məktəbin həyatla əlaqəsini möhkəmləndirmək və SSRİ-də xalq maarif sistemini daha da inkişaf etdirmək haqqında” qanun",
        "D) “İbtidai və orta məktəblərinin dərs proqramları və rejmlər haqqında” qanun",
        "E) “Köhnə orta və ibtidai məktəb tiplərini politexnik məktəblə əvəz etmək haqqında” qanun"
      ],
      correct: "C) “Məktəbin həyatla əlaqəsini möhkəmləndirmək və SSRİ-də xalq maarif sistemini daha da inkişaf etdirmək haqqında” qanun"
    },
    {
      question: "Onun pedaqoji sisteminin əsas tələbi kollektivdə, kollektiv vasitəsilə, kollektiv üçün tərbiyə prinsipidir.",
      answers: [
        "A) A.S. Makarenko",
        "B) A.V. Lunaçarski",
        "C) S.T. Şatski",
        "D) P.P. Blonski",
        "E) A.P. Pinkeviç"
      ],
      correct: "A) A.S. Makarenko"
    },
    {
      question: "A.S. Makarenkonun tərbiyə sistemində hansı prinsip mühüm yer tutur?",
      answers: [
        "A) cəzalandırma",
        "B) rəğbətləndirmə",
        "C) məsul iş tapşırmaq",
        "D) paralel təsir",
        "E) ictimai rəy"
      ],
      correct: "D) paralel təsir"
    },
    {
      question: "“Perspektiv xətlər sistemi”nin müəllifi kimdir?",
      answers: [
        "A) A.V. Lunaçarski",
        "B) S.T. Şatski",
        "C) P.P. Blonski",
        "D) A.P. Pinkeviç",
        "E) A.S. Makarenko"
      ],
      correct: "E) A.S. Makarenko"
    },
    {
      question: "“Kollektiv mütəşəkkil şəxslərin, kollektiv orqanlara malik şəxsiyyətlərin məqsədəyönəlmiş kompleksidir…” fikrinin müəllifi kimdir?",
      answers: [
        "A) A.V.Lunaçarski",
        "B) S.T.Şatski",
        "C) A.S.Makarenko",
        "D) P.P.Blonski",
        "E) A.P.Pinkeviç"
      ],
      correct: "C) A.S.Makarenko"
    },
    {
      question: "A.S.Makarenko rəğbətləndirməyə nələri daxil edirdi:",
      answers: [
        "A) tərifləmək, mükafat vermək, şəklini divar qəzetinə vurmaq",
        "B) kitab bağışlamaq, hədiyyə vermək, şifahi təşəkkür vermək",
        "C) tərifləmək, müəllimin tərifi, fəxri adlar vermək, fərqlənmə nişanları vermək",
        "D) müəllimin tərifi, yoldaşların ehtiramı, əmrlə təşəkkür vermək, uşaqlara məsul iş tapşırmaq",
        "E) mükafat vermək, yoldaşların qarşısında tərifləmək, xüsusi partalarda oturtmaq"
      ],
      correct: "D) müəllimin tərifi, yoldaşların ehtiramı, əmrlə təşəkkür vermək, uşaqlara məsul iş tapşırmaq"
    },
    {
      question: "A.S.Makarenko nələri fiziki tərbiyənin vasitələri hesab edirdi?",
      answers: [
        "A) gəzinti, qaçış, nizə atmaq",
        "B) turizm, atla çapmaq, üzmək",
        "C) idman, tullanmaq",
        "D) gəzinti, turizm, oyun, idman, gimnastika",
        "E) gimnastika, hədəfi vurmaq"
      ],
      correct: "D) gəzinti, turizm, oyun, idman, gimnastika"
    },
    {
      question: "“Pedaqoji poema”nın müəllifi kimdir?",
      answers: [
        "A) A.S.Makarenko",
        "B) S.T.Şatski",
        "C) A.P.Pinkeviç",
        "D) A.V.Lunaçariski",
        "E) P.P.Bonski"
      ],
      correct: "A) A.S.Makarenko"
    },
    {
      question: "Bu filosofun ideal dövlət modelində üç ictimai qrup mövcud idi: filosoflar, döyüşçülər, sənətkarlar və əkinçilər",
      answers: [
        "A) Demokrit",
        "B) Sokrat",
        "C) Seneka",
        "D) Platon",
        "E) Aristotel"
      ],
      correct: "D) Platon"
    },
    {
      question: "Forma və məzmununun vəhdəti əsasında inkişaf ideyasını irəli sürən alim:",
      answers: [
        "A) Demokrit",
        "B) Platon",
        "C) Sokrat",
        "D) Seneka",
        "E) Aristotel"
      ],
      correct: "B) Platon"
    },
    {
      question: "Aristotelin ilk müəllimi kim olmuşdur?",
      answers: [
        "A) Platon",
        "B) Demokrit",
        "C) Sokrat",
        "D) Vittorino da Feltre",
        "E) Fransua Rable"
      ],
      correct: "A) Platon"
    },
    {
      question: "Uşaqların yaş dövrünün ilk elmi təsnifatını kim irəli sürmüşdür?",
      answers: [
        "A) Aristotel",
        "B) Yan Amos Komenski",
        "C) Jan Jak Russo",
        "D) Tomas Mor",
        "E) Mark Fabiy Kvintilian"
      ],
      correct: "A) Aristotel"
    },
    {
      question: "Aristotel nə üçün uşağın 7 yaşa qədər olan dövrünü “bitki dövrü” adlandırır?",
      answers: [
        "A) uşaqların təbiətin bir parçası olduğu üçün",
        "B) uşaqların o yaşda həyatı düzgün dərk etməsi üçün",
        "C) uşaqların bitkiləri çox sevdiyi üçün",
        "D) uşaqların tərbiyəyə ehtiyacı olduğu üçün",
        "E) körpə uşaqların bitkilər kimi qulluğa ehtiyacı olduğu üçün"
      ],
      correct: "E) körpə uşaqların bitkilər kimi qulluğa ehtiyacı olduğu üçün"
    },
    {
      question: "Aristotelə görə 7-14 yaşa qədər olan “heyvani dövr”də uşaqlarda nəyi tərbiyə etmək lazımdır?",
      answers: [
        "A) iradi keyfiyyətlər",
        "B) əmək tərbiyəsi",
        "C) fiziki, əqli və əxlaqi tərbiyə",
        "D) estetik tərbiyə",
        "E) təbiəti uşaqlara sevdirmək"
      ],
      correct: "A) iradi keyfiyyətlər"
    },
    {
      question: "Aristotelə görə 14-21 yaşa qədər olan “insani dövr”də gənclərə hansı tərbiyə vermək lazımdır?",
      answers: [
        "A) əxlaq tərbiyəsi",
        "B) ekoloji tərbiyə",
        "C) əqli tərbiyə",
        "D) fiziki və əmək tərbiyəsi",
        "E) iqtisadi tərbiyə"
      ],
      correct: "C) əqli tərbiyə"
    },
    {
      question: "Qədim Romada tərbiyənin əsas vəzifəsi nə idi?",
      answers: [
        "A) savadlı müəllim, həkim, mühəndis yetişdirmək",
        "B) hüquqşünas, iqtisadçı, həkim yetişdirmək",
        "C) bacarıqlı əkinçi, qüvvətli döyüşçü, dindar şəxs tərbiyə etmək",
        "D) mühəndis, tacir, dindar şəxs yetişdirmək",
        "E) savadlı alim, idmançı, cəld döyüşçü tərbiyə etmək"
      ],
      correct: "C) bacarıqlı əkinçi, qüvvətli döyüşçü, dindar şəxs tərbiyə etmək"
    },
    {
      question: "İlk dəfə “təbiətlə tərbiyə oxşardır” fikrini hansı filosof söyləmişdir?",
      answers: [
        "A) Demokrit",
        "B) Aristotel",
        "C) Platon",
        "D) Y.A.Komenski",
        "E) K.A.Helvetsi"
      ],
      correct: "A) Demokrit"
    },
    {
      question: "Roma respublikasının son dövründə hansı məktəblər əmələ gəldi?",
      answers: [
        "A) ibtidai məktəblər",
        "B) kifara musiqi məktəbləri",
        "C) ritorika məktəbləri",
        "D) idman məktəbləri",
        "E) icma məktəbləri"
      ],
      correct: "C) ritorika məktəbləri"
    },
    {
      question: "Qədim Romada əyanlar hansı dildə danışmağa üstünlük verirdilər?",
      answers: [
        "A) yunan dilində",
        "B) latın dilində",
        "C) fransız dilində",
        "D) ingilis dilində",
        "E) italyan dilində"
      ],
      correct: "A) yunan dilində"
    },
    {
      question: "M.F.Kvintilian uşaqlarda ən çox nəyə yüksək qiymət verirdi?",
      answers: [
        "A) şagirdlərin sağlamlığına",
        "B) savad almalarına",
        "C) təbii istedada",
        "D) tərbiyə olunmasına",
        "E) dini baxışlarına"
      ],
      correct: "C) təbii istedada"
    },
    {
      question: "Qərbi Avropa ölkələrində pedaqogikanın məqsədi nədən ibarət idi?",
      answers: [
        "A) ideal dindar şəxsiyyət tərbiyəsinin nəzəri məsələlərini işləyib hazırlamaq",
        "B) kamil insan yetişdirmək",
        "C) məktəblərdə dini təbliğ etmək",
        "D) kilsələrə xadimlər hazırlamaq",
        "E) dini tərbiyəni təkmilləşdirmək"
      ],
      correct: "A) ideal dindar şəxsiyyət tərbiyəsinin nəzəri məsələlərini işləyib hazırlamaq"
    },
    {
      question: "“Günəş şəhəri” əsərini kim yazıb?",
      answers: [
        "A) Dante Aligeri",
        "B) Mişel de Monten",
        "C) Fransua Rable",
        "D) Xuan Luis Vives",
        "E) Tomazo Kampanella"
      ],
      correct: "E) Tomazo Kampanella"
    },
    {
      question: "“Qarqantua və Pantaqruel” əsərinin müəllifi kimdir?",
      answers: [
        "A) Françesko Petrarka",
        "B) Dante Aligeri",
        "C) Tomazo Kampanella",
        "D) Fransua Rable",
        "E) Vittorino de Feltre"
      ],
      correct: "D) Fransua Rable"
    },
    {
      question: "Vittorino de Feltre XV əsrin 20-ci illərində təşkil etdiyi məktəbə belə ad vermişdir.",
      answers: [
        "A) “Tərbiyə evi”",
        "B) “Təhsil evi”",
        "C) “Təlim evi”",
        "D) “Şadlıq evi”",
        "E) “Əyləncə sarayı”"
      ],
      correct: "D) “Şadlıq evi”"
    }
  ];





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
   