const categories = ['Vegetariana', 'Vegana', 'Post'];
const types = ['Mancaruri', 'Supe', 'Salate', 'Placinte', 'Deserturi', 'Gustari'];
const ingredients = [
  'Orez',
  'Naut',
  'Ceapa',
  'Ardei rosu',
  'Pulpe',
  'Rosii',
  'Usturoi',
  'Carne tocata',
  'Ciuperci',
  'Morcov',
  'Paine',
  'Cartofi',
  'Varza murata',
  'Bulgur',
  'Vanata',
  'Faina',
  'Dovleac',
  'Linte',
  'Porumb',
  'Lamaie',
  'Spaghete',
  'Vin',
  'Ardei iute',
  'Carne',
  'Sfecla',
  'Varza',
  'Ciocalata',
  'Unt de arahide',
  'Unt',
  'Nuci',
  'Pastarnac',
  'Rucola',
  'Oua',
  'Smantana',
  'Avocado',
  'Ananas',
  'Biscuiti',
  'Praz',
  'Lapte',
  'Bob',
  'Orzo',
  'Passata',
  'Cacao',
  'Verdeturi',
  'Ridiche',
  'Mazare',
  'Telemea',
  'Broccoli',
  'Conopida',
  'Cascaval',
  'Jambon',
  'Mere',
  'Castraveti',
  'Sunca',
  'Branza',
  'Iaurt',
  'Spanac',
  'Kefir',
  'Salvie',
  'Ansoa',
  'Ciabatta',
  'Pancetta',
  'Cirese',
];
const recipes = [
  //1
  {
    name: 'Orez prajit cu naut',
    category: [0, 1, 2],
    types: [0],
    ingredients: [0, 1, 2, 3],
    ingredientsText:
      '1/2 cana orez, 250 gr naut fiert (poate fi din conserva),1 ceapa medie,1/2 ardei rosu,2 catei mari de usturoi,5 fire patrunjel,1 lingurita condiment adobo (optional),1 lingura ulei,1/2 lingura unt,sare, piper negru',
    recipe:
      'Orezul se fierbe conform instructiunilor de pe pachet, pana e facut dar nu moale. Ideal e sa folositi orez fiert cu o zi inainte, deci e o reteta in care puteti folosi resturile de orez. Dar daca il fierbeti in aceeasi zi, il scurgeti bine si il rasfirati pe un platou larg si il lasati sa se raceasca si sa se usuce complet.\nIntr-un robot/blender vertical se pun ceapa, ardeiul si usturoiul taiate bucati. Se mixeaza pana obtineti o pasta. Adaugati 1 lingura de apa daca robotul pare ca nu mixeaza suficient de bine. Adaugati apoi patrunjelul si mixati doar pana e maruntit.\nIntr-o tigaie larga (cca 25-28 cm) se adauga putin ulei si pasta de legume. Se soteaza, amestecand cand si cand pana pasta devine cumva uscata, si incepe sa se caramelizeze usor. Presarati sare.\nAdaugati untul, amestecati pana se topeste complet.\nAdaugati nautul scurs bine si continuati sa sotati, amestecand mai des de data asta, pana incepe sa se prajeasca si el putin, mie mi se pare mai bun asa. In timpul sotarii, presarati iar putina sare si rasniti piper negru. Adaugati si adobo acum, daca aveti preparat.\nAdaugati la final orezul si continuati sa prajiti cam 3-4 minute, amestecand cand si cand. Orezul trebuie sa se prajeasca si el ici-colo. E bun imediat, dar si reincalzit.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/orez-cu-naut.jpg',
  },
  //2
  {
    name: 'Tajina de pui cu rosii cherry',
    category: [],
    types: [0],
    ingredients: [4, 5, 6],
    ingredientsText:
      '4 pulpe dezosate,10 rosii cherry marinate,2 catei mari usturoi,1 lingura pasta de ardei,1/2 lingurita chimion macinat,1/2 lingurita coriandru boabe macinate,1/4 lingurita boia afumata,1/4 lingurita seminte fenicul,50 gr iaurt gras (10%),3 fire patrunjel ,3 linguri ulei de pe rosiile marinate,sare, piper negru',
    recipe:
      'Pulpele dezosate se taie in doua bucati egale.\nSe aseaza pulpele si se lasa pana se rumenesc putin.\nDaca uleiul e foarte incins trageti 1 minut vasul de pe foc. Adaugati usturoiul si pasta de ardei si caliti totul timp de 1-2 minute, pana pasta de caramelieaza putin si usturoiul miroase placut.\nAdaugati condimentele (chimion, coriandru, boia afumata si fenicul) si amestecati rapid, doar pana la omogenizare.\nAdaugati pulpele cu tot cu sucul lasat si amestecati sa se acopere de condimente.\nAdaugati 150-200 ml apa (cat sa ajunga la 3/4 din inaltimea pulpelor). Rasniti piper negru si adaugati sare. Aduceti la fierbere, dati focul la mic si fierbeti cu capac pana carnea e facuta complet si moale (cca 30 minute).\nCand e gata, trageti vasul de pe foc. Adaugati treptat (cate 2 linguri deoadata) sos din oala peste iaurtul amestecat cu patrunjel tocat. Omogenizati. Cand ati adaugat cam 10-12 linguri de sos, puteti turna iaurtul in vas peste pui. Amestecati rapid sa nu se branzeasca prea tare.\nAdaugati rosiile cherry, puneti capacul si lasati sa stea 10 minute. Gustati de sare apoi.\nTajina e buna calda, cu couscous sau cu conopida fiarta/coapta.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/tajina-de-pui-cu-rosii-cherry.jpg',
  },
  //3
  {
    name: 'Saleuri cu carne tocata si ciuperci',
    category: [],
    types: [5],
    ingredients: [7, 8, 9, 10, 2],
    ingredientsText:
      '250 gr carne tocata,500 gr ciuperci (champignon),100 gr miez de paine veche,1 morcov,1 ceapa,1 fir de cimbru,2-3 fire marar,1/4 legatura patrunjel,1 galbenus de ou,2-3 linguri ulei,sare, piper negru',
    recipe:
      'Pentru umplutura se pun cateva linguri de ulei intr-o tigaie cat mai larga si se adauga ceapa tocata marunt si morcovul ras. Cand se inmoaie un pic (cam 2-3 minute) se adauga ciupercile (curatate de picioruse) taiata felii. Se soteaza la foc mare pana apa lasata de ciuperci se evapora. Se presara sare si piper negru in timp ce sotati.\nSe pune continutul tigaii peste carnea trecuta o data prin masina de tocat. Se adauga verdeturile tocate si se mai presara putina sare si piper. Se adauga painea inmuiata in apa sau lapte si apoi stoarsa bine. Se amesteca usor cu mana si apoi se trece compozitia inca o data prin masina de tocat carne. Ideea e sa aveti un amestec mai pastos care sa poata fi spritzat usor pe aluat.\nAdaugati galbenusul si amestecati acum doar cu o furculita. Puneti umplutura intr-un spritz de patiserie.\nSe ia fiecare foaie de aluat si se intinde usor (doar treceti cu sucitorul de cateva ori pe lungime si de cateva ori pe latime). Se taie in doua pe latime.\nSe spriteaza umplutura pe latime (paralel cu taietura) randuri groase de un deget, la distanta  cam de doua degete unele de altele (mi-au intrat 3 randuri pe fiecare foaie; vezi poza 2).\nAcoperiti carnea cu cealalata foaie de aluat.\nBateti oul cu 1 lingura de apa si ungeti bine aluatul intre randurile de carne. Intepati zonele unse in cateva locuri cu dintii unei furculite.\nAcoperiti carnea cu cealalta jumatate de aluat. Apasati foarte bine aluatul intre straturile de carne (vezi poza 3).\nTrageti "placintele" pe funduri de lemn. Introduceti-le in congelator pana sunt semi-inghetate (cam 2 ore).\nScoateti "placintele" din congelator si cu un cutit mare si lat taiati felii groase de un deget perpendiculare pe randurile de carne (vezi poza 4).\nUngeti aluatul deasupra cu ou batut si presarati seminte de chimen (sau de susan, sare mare).\nAsezati feliile taiate in tavile cuptorului (acoperite cu hartie de copt) la distanta unele de altele, fiindca se vor umfla si se vor rasturna in timpul coptului.\nCoaceti fiecare tura la 200C pentru aprox. 15 minute (pana foietajul e umflat si placut rumen).',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/saleuri-cu-carne-tocata-si-ciuperci.jpg',
  },
  //4
  {
    name: 'Supa crema de fenicul cu somon afumat',
    category: [],
    types: [1],
    ingredients: [2, 11, 8],
    ingredientsText:
      '2 bulbi de fenicul (aprox 450-500 gr),4 cartofi medii (aprox. 500 gr),1 ceapa mare,3 catei usturoi,1 foaie de dafin,4 linguri ulei masline,1 ligura verdeata de fenicul tocata,sare, piper negru',
    recipe:
      'Intr-o oala mai larga se adauga 2 linguri de masline si ceapa tocata. Se caleste cca 5 minute, pana se inmoaie.\nSe adauga usturoiul strivit si se mai caleste 1 minut.\nSe retine verdeata de la fenicul. Restul se taie felii subtiri, se adauga peste ceapa si se caleste 10 minute, amestecand des, pana se inmoaie.\nSe adauga cartofii curatati si taiati cuburi, foaia de dafin rupa in doua si 5 cani se apa. Se adauga sare si se rasneste piper negru.\nSe fierbe cu capan pana legumele sunt moi, cca 25-30 minute (testati si feniculul si cartofii).\nSe scoate foaia de dafin. Se transfera solidele din oala in robot si se adauga cam jumatate din lichid. Se mixeaza pana devine piure fin, apoi se adauga treptat restul de lichid pana aveti consistenta dorita.\nGustati de sare, apoi adaugati 2 linguri de ulei extravirgin si verdeata de fenicul si mai mixati cateva secunde. Daca doriti, puteti adauga si 3-4 frunze de menta pentru o supa mai fresh.\nDoar inainte de servire, mini-baghetele se taie in doua pe lungime, se stropesc cu putin ulei de masline si se prajesc in tigaia grill pana devin placut rumene. Se ung cu putina crema de branza si se aseaza fasii de somon afumat deasupra.Se presara cu verdeata de fenicul.\nServiti supa calda sau rece, cu felii de bagheta.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/supa-crema-de-fenicul-cu-somon-afumat.jpg',
  },
  //5
  {
    name: 'Sarmale de post',
    category: [0, 1, 2],
    types: [0],
    ingredients: [12, 13, 8, 2, 6],
    ingredientsText:
      '1 varza murata,150 gr bulgur fin,300 gr ciuperci proaspete,3-4 linguri nuca tocata marunt,1 ceapa,1 catel usturoi,1 lingurita boia dulce,2 lingurite pudra de ciuperci,1 lingurita cimbru uscat,1/2 lingurita chili/harissa,1/2 legatura patrunjel,100 ml bulion,3-4 fire cimbru uscat,1 lingurita vegeta de casa,4 linguri ulei masline,sare și piper',
    recipe:
      'Desfaceti cca 15 foi de varza de pe capatana si le taiati in doua daca sunt mari. Le curatati de cotorul tare de pe mijloc si le fierbeti in apa timp de 20 minute.\nBulgurul il acoperim cu apa fierbinte si lasam 10-15 minute sa stea si sa se umfle.\nCeapa tocata marunt o calim in uleiul incins. Cand e moale, oprim focul si adaugam boiaua, usturoiul strivit si sare si piper dupa gust.\nAdaugam ciupercile taiate cubulete marunte, bulgurul (care intre timp a absorbit toata apa), cimbru, nucile, pudra de ciuperci, chili si patrujelul tocat marunt. Amestecam bine. Gustati de condimente si mai adaugati daca este necesar.\neu am folosit champignon, de aceea am adaugat pudra\nIn foile de varza oparite (racorite un pic ca sa se poata manevra) impachetam sarmalele, punand cate o lingura de umplutura pe fiecare foaie.\nPe fundul oalei asezam frunze de sarmale tocate fin. Deasupra aranjam sarmalele. Acoperim cu un alt strat de varza tocata, punem cimbrul si turnam bulionul. Turnam apa amestecata cu vegeta naturala cat aproape sa le acopere (cca 2 1/2 cani). Punem o farfurioara peste sarmale si le apasam un pic sa se acopere de apa.\nFierbem pe aragaz cu capac, la foc mai mare pana incep sa fiarba si apoi dati pe mediu spre mic, inca cca 35 minute. Verificati sa fie fiarta varza, umplutura sigur va fi fiarta in acest timp.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/sarmale-de-post.jpg',
  },
  //6
  {
    name: 'Supa crema de legume coapte',
    category: [2],
    types: [1],
    ingredients: [3, 5, 6, 2, 14, 59],
    ingredientsText:
      '5 ardei rosii copti,1 conserva rosii (sau 3 rosii proaspete),6 catei de usturoi,1 ceapa rosie medie,1 vanata mica coapta,1/2 lingurita pasta de ardei iute,3 cani de apa,1 lingurita otet de sherry reserva (sau de orez),3 linguri ulei de masline,sare, piper negru,4 fileuri de ansoa,2 catei mari de usturoi,3-4 linguri ulei de masline,3 fire patrunjel tocat fin',
    recipe:
      'Ardeii si vinetele se coc in coaja, in cuptor sau pe jar. Se curata de coaja si seminte urmand instructiunile de aici pentru ardei si de aici pentru vinete. Se retine sucul lasat de ardeii copti.\nRosiile se taie in jumatate (cele din conserva) sau in patru (cele de gradina) si se aseaza intr-o tava termorezistenta cu taietura in sus. Daca folositi rosii din conserva, turnati si sucul din conserva in tava. Se presara peste ele usturoiul curatat si taiat felii si ceapa taiata felii nu foarte groase. Se stropeste totul cu uleiul de masline. Se coc la 180C timp de 30 minute, amestecand o data in acest timp.\nSe toarna tot continutul tavii intr-o oala. Se adauga ardeii copti taiati bucati mari (+ suscul de pe ei) si pulpa vinetei coapte. Daca doriti sa fie supa picanta adaugati pasta iute de ardei. Acoperiti totul cu 1.5 l apa, adaugati sare dupa gust si rasniti piper negru. Aduceti la fierbere si fierbeti 10 minute, doar cat sa se amestece aromele. Gustati supa si daca o simtiti prea acida, adaugati in timpul fierberii 1/2 lingurita zahar.\nMixati supa in robot sau cu blenderul vertical pana e fina. Gustati de sare, dar tineti cont ca uleiul de ansoa va fi sarat si el.\nIntr-un mojar striviti ansoa si usturoiul pana aveti o pasta. Adaugati treptat uleiul in timp ce pisati cu pistilul. Va rezulta un ulei care curge usor de pe lingura. La final adaugati patrunjelul tocat.\nServiti supa calda cu focaccia sau paine taraneasca prajita si stropita generos cu ulei de ansoa.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/supa-crema-de-legume-cu-ulei-de-ansoa.jpg',
  },
  //7
  {
    name: 'Placinte cu cartofi si mujdei de usturoi',
    category: [0, 1, 2],
    types: [3],
    ingredients: [15, 11, 6],
    ingredientsText:
      '500 gr faina alba,300 ml apa calduta,1 pachet drojdie proaspata de 25 gr (sau un plic drojdie uscata),2 lingurite sare,1 lingurita zahar ,1 kg cartofi,6-7 linguri ulei,5-6 catei usturoi,4 lingurite ulei,1 lingurita boia, sare,piper',
    recipe:
      'Facem maia din drojdie, putina apa calduta si zahar. Framantam aluatul din toate ingredientele pana e elastic si se desface de pe maini, apoi il lasam la crescut cel putin 1 ora. Eu l-am framanta in masina de paine.\nIn acest timp preparam umplutura: se fierb cartofii taiati cubulete; se scurg de apa si apoi se sfarma ca si pentru piure; adaugati incet uleiul pana cartofii se leaga; condimentati cu sare dupa gust si mult piper, piureul trebuie sa fie picant.\nPe masa de lucru data cu faina impartim aluatul in doua, apoi fiecare bucata iar in doua, si apoi fiecare din cele 4 bucati iar in doua, obtinem astfel 8 bile de aluat aproximativ egale.\nIntindeti fiecare bucata de aluat cat de subtire puteti. Pe jumatate din el asezati 2 linguri umplutura. Aduceti cealalta jumatate de aluat peste cea cu umplutura si apasati cu degetele la capat sa sigilati umplutura. Mai intindeti putin cu sucitorul placinta obtinuta, aveti insa grija sa nu iasa umplutura afara!\nIntr-o tigaie antiaderenta puneti ulei de un deget la incins. Cand e fierbinte prajiti placintele pe ambele parti pana se rumenesc. Daca in timpul coacerii au tendinta sa se umfle intepati-le cu furculita in cateva locuri.\nPregatiti mujdeiul: striviti cateii de usturoi si frecati-i cu putina sare pana se inmoaie; adaugati apoi uleiul incet ca la maioneza si frecati sa se incorporeze bine, pana se face pasta; adaugati piper si boia si apoi diluati cu cateva linguri de apa.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/placinte-cu-cartofi-si-mujdei-de-usturoi.jpg',
  },
  //8
  {
    name: 'Supa crema de dovleac cu bulgur',
    category: [0, 1, 2],
    types: [1],
    ingredients: [16, 2, 13],
    ingredientsText:
      '1 dovleac placintar mic,1 ceapa medie,1 lingurita coriandru macinat,1/2 lingurita chimion macinat,coaja rasa de la 1/4 lamaie,2 linguri ulei,sare,piper negru,1 portie bulgur cu verdeturi,1 ceapa medie,1 portie bulgur cu verdeturi',
    recipe:
      'Intr-o oala se incinge uleiul si se caleste ceapa pana se inmoaie (cca 5 minute). Se adauga coriandrul si chimionul si se mai calesc 30 secunde.\nSe adauga dovleacul taiat cuburi, apa cat sa cuprinda dovleacul, sare si se rasneste piper cu generozitate.\nSe aduce la fierbere si se fierbe la foc mediu spre mic pana dovleacul e facut (cca 15 minute).\nSe mixeaza totul in robot/blender pana aveti o supa fina. Se drege de sare si se adauga coaja rasa de lamaie.\nSe serveste supa calda presarata cu bulgur (in loc de crutoane). E buna imediat sau reincalzita.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/supa-crema-de-dovleac-cu-bulgur.jpg',
  },
  //9
  {
    name: 'Supa crema de linte cu lamaie si porumb',
    category: [0, 1, 2],
    types: [1],
    ingredients: [17, 18, 2, 9, 6, 19],
    ingredientsText:
      '300 gr linte (galbena sau rosie),100 gr porumb din conserva,1 ceapa medie,2 morcovi mai mici,3 catei usturoi,3/4 lingurita curry praf,1 lamaie bio,4 lingura ulei,sare,2 linguri pinoli,fulgi de chili dupa gust',
    recipe:
      "in uleiul incins se adauga ceapa tocata cubulete marunte si morcovii taiati felii subtiri. Se soteaza pana ceapa se inmoaie, cam 5 minute, fara sa o lasati sa se rumeneasca.\nSe adauga usturoiul strivit si se mai caleste 1 minut.\nSe adauga curry si porumbul si se amesteca bine. Se adauga lintea (spalata in mai multe ape) si 1.5 l apa.\nSe aduce la fierbere si apoi se fierbe la foc mic pana lintea si morcovii sunt facuti (cca 20 minute). Catre final se adauga 1.5 lingurite sare (sau dupa gust).\nCu polonicul se scot solidele din supa intr-un blender. Se adauga si putina supa. Se mixeaza 2 minute, sa devina piure fin. Treptat se adauga restul de supa si mixati pana aveti consistenta dorita (daca puneti toata  supa va fi mai subtire la inceput, dar la reincalzire se va ingrosa).\nAdaugati coaja rasa de la lamaie si sucul. Amestecati si dregeti de sare.\nIn momentul servitii incingeti uleiul si adaugati boabele de porumb, pinoli, putina sare si fulgi de chili dupa gust (am pus piment d'espelette). Lasati doar pana se infierbanta toate.",
    imgUrl:
      'https://www.e-retete.ro/imagini/retete/supa-crema-de-linte-galbena-cu-lamaie-si-porumb.jpg',
  },
  //10
  {
    name: 'Spaghete cu sos de ciuperci',
    category: [0, 1, 2],
    types: [0],
    ingredients: [20, 8, 6, 21],
    ingredientsText:
      '200 gr spaghete,500 gr ciuperci champignon,1-2 catei de usturoi,30 ml vin alb sec,2 linguri cu varf sos de rosii spaniol (sau alt sos de rosii),1 fir rozmarin,1/4 lingurita cimbru uscat,1/2 lingurita pudra de hribi,sare, piper negru,2-3 linguri ulei',
    recipe:
      'Se curata ciupercile de codite si se taie felii. Se soteaza in uleiul incins, presarate cu sare si piper negru. Se soteaza la foc mare, amestecand din cand in cand. Daca tigaia nu este suficient de larga, le puteti sota in ture.\nCand ciupercile sunt moi si apa de pe ele s-a evaporat, se adauga usturoiul strivit si se soteaza inca 1 minut.\nSe stinge cu vin si se lasa pana se evapora.\nSe adauga sosul de rosii, cimbrul, rozmarinul si pudra de hribi. Se adauga si 1/3 cana de apa. Se fierbe totul cu capac, pana sosul scade (cca 10 minute).\nJumatate din ciuperci se pun in blender si se mixeaza pana devin pasta. Se amesteca cu restul ciupercilor. Se drege sosul de sare.\nIn acest timp se fierb spaghetele in multa apa cu sare, conform instructiunilor de pe pachet.\nSe scurg pastele si se pun peste sosul de ciuperci. Se amesteca bine.\nSe servesc stropite cu ulei de masline si parmezan in afara postului. Puteti presara cu "parmezan" vegan, adica cantitati egale de fulgi de drojdie cu alune caju si putina sare macinate in masina de cafea',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/spaghete-cu-sos-de-ciuperci.jpg',
  },
  //11
  {
    name: "Penne all' arrabbiata",
    category: [0, 1, 2],
    types: [0],
    ingredients: [5, 6, 22],
    ingredientsText:
      '600 gr rosii (bine coapte),2 catei mari de usturoi,1 ardei iute (crud sau uscat; sau fulgi chili),1/2 lingurita oregano uscat,1 lingurita rasa zahar,5 frunze mari de busuioc proaspat (sau 3 fire patrunjel),2 linguri ulei masline,250 gr penne,100 gr mozzarella (optional; nu se adauga in varianta de post),sare, piper',
    recipe:
      'Se pune multa apa la fiert cu sare.\nSe incalzeste uleiul. Se adauga usturoiul si ardeiul iute taiat felii. Se prajeste la foc foarte mic pana incepe sa se rumeneasca usor.\nSe adauga rosiile decojite si mixate in robot (daca nu aveti robot le puteti da pe razatoare) si oregano. Condimentati cu sare si piper dupa gust. Aduceti la fierbere.\nAdaugati pastele in apa care fierbe.\nFierbeti sosul de rosii, la foc mediu, timp de aproape 15 minute. Amestecati din cand in cand in el, mai ales mai spre final. Gustati sosul si daca pare acid adaugati zaharul.\nCand sosul e gata, mixati-l foarte putin cu un blender vertical. Nu trebuie sa-l faceti fin. Eu bag blenderul in el doar de cateva ori fiindca capata o consistenta mai "legata" si catifelata.\nAdaugati busuiocul taiat, pastele scurse si mozzarella rupta bucatele. Amestecati rapid, pana pastele sunt acoperite de sos si mozzarella e topita. In timp ce amestecati gustati de sare.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/penne-all-arrabbiata.jpg',
  },
  //12
  {
    name: 'Bors rosu',
    category: [0, 1, 2],
    types: [1],
    ingredients: [23, 9, 2, 24, 5, 25, 11],
    ingredientsText:
      '500 gr carne de porc (pulpa),1 picior de porc (adidas; crapat pana la maduva; sau cateva costite),1 morcov mare (150 gr),2 cepe (200 gr),1 sfecla rosie (300 gr),2 rosii bine coapte (500 gr; sau rosii din conserva),250 gr varza,3 cartofi,3 fire leustean (sau marar),1/4 legatura patrunjel,1/2 lamaie (sau bors),3 linguri ulei,3 lingurite sare',
    recipe:
      'Se taie carnea cubulete iar piciorul de porc se curata daca e cazul si se spala bine. Se pun la fiert cu 3.5 l apa. Se fierbe la foc mediu spre mic, timp de 1 ora din momentul in care incepe sa fiarba. In primele 15 minute se spumeaza bine supa.\nSe dau pe razatoarea mare morcovul si sfecla. Se toaca marunt ceapa. Se calesc toate in uleiul incins timp de 5 minute. Se adauga rosiile date pe razatoare si se mai fierbe inca 5 minute.\nCand carnea e fiarta, se scoate adidasul si se adauga in supa varza taiata fideluta si 2 lingurite de sare. Se fierbe inca 10 minute.\nSe adauga cartofii taiati cuburi si se mai fierbe inca 10 minute.\nSe adauga amestecul de ceapa+morcov+sfecla+rosii. Se mai fierbe inca 10 minute (sau pana cartofii sunt fierti). Se drege borsul de sare.\nSe stinge focul si se acreste borsul cu 2-3 linguri suc de lamaie (sau 300-400 ml bors fiert). Se presara verdeata tocata marunt si se lasa sa stea 10 minute.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/bors-rosu.jpg',
  },
  //13
  {
    name: 'Batoane de ciocolata si unt de arahide',
    category: [0, 1, 2],
    types: [4],
    ingredients: [26, 27, 28, 29],
    ingredientsText:
      '250 gr ciocolata neagra (50% cacao; maruntita cu cutitul sau sub forma de fulgi/bobite),250 gr unt de arahide (sau alt unt de nuci: alune de padure/caju/migdale),50 gr unt gras (82% grasime; sau unt de cocos pentru varianta vegana/de post),1/4 lingurita scortisoara macinat (optional; sau alte arome),3 linguri sirop de artar (sau miere; sau alt indulcitor de genul acesta),200 gr amestec de nuci, seminte si fructe uscate',
    recipe:
      'Se topesc pe abur ciocolata maruntita, untul taiat cubulete si untul de arahide. Vasul in care sunt ingredientele sa fie cu fund gros si sa nu ajunga in apa care formeaza aburul, astfel incat topirea sa se faca lent, ca sa nu se strice ciocolata. Se amesteca de cateva ori dupa ce ciocolata incepe sa se topeasca.\nSe ia vasul de pe abur si se adauga indulcitorul ales treptat. Adaugati cate o lingura, amestecati si gustati. Adaugati pana e pe gustul vostru de dulce (am pus 3 linguri sirop artar). Nu adaugati zahar, nici chiar zahar pudra, nu se va topi complet in amestec.\nTurnati amestecul topit peste amestecul crocant (nuci, seminte, fructe uscate maruntite daca e cazul). Adaugati scortisoara. Amestecati pana la omogenizare.\nUngeti o tava de chec cu un strop de ulei si tapetati-o cu folie de plastic. Turnati amestecul in tava, nivelati. Trageti marginile foliei deasupra si mai nivelati cu mana.\nIntroduceti tava la frigider minim cateva ore, pana se intareste.\nCand doriti sa feliati scoateti tava cu 10 minute inainte ca sa revina la temp camerei, se va felia mai usor si mai frumos. Se taie felii de aprox. 2-3 cm. Batoanele se invelesc individual in folie. Se pastreaza la frigider, dar se servesc la temperatura camerei.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/batoane-de-ciocolata-si-unt-de-arahide.jpg',
  },
  //14
  {
    name: 'Legume la cuptor cu arpacas',
    category: [0, 1, 2],
    types: [0],
    ingredients: [16, 3, 2, 9, 30],
    ingredientsText:
      '1 dovlecel mic,1 ardei gras rosu mic,1 ceapa rosie mica,3 felii radacina telina,1 morcov mare,1 pastarnac ,6 linguri cu varf arpacas fiert,20 gr ghimbir,2-3 linguri ulei,sare, piper negru, chili',
    recipe:
      'Se curata morcovii, ceapa, telina, pastarnacul. Ceapa se taie pestisori. Restul legumelor se taie betisoare nu extrem de subtiri, doar morcovii sa fie un pic mai subtiri decat restul fiindca se fac mai greu.\nSe imprastie legumele in tava cuptorului acoperita cu hartie de copt. Se pesara sare, piper negru, fulgi de chili. Se toarna 1 lingura de ulei. Se amesteca bine si apoi se niveleaza legumele in tava sa fie egal distribuite.\nSe coc la 200C, cam 35-40 minute.Verificati sa fie facuti morcovii si telina, daca ele sunt ok si restul sunt gata.\nIntr-o tigaie larga se incing 1-2 linguri de ulei si se adauga ghimbirul dat pe razatoarea mica. Se soteaza 30 secunde, apoi se adauga arpacasul fiert. Se soteaza rapid, la foc mare pana arpacasul e fierbinte. Se drege de sare.\nCand legumele sunt gata, scoateti tava din cuptor. Turnati arpacasul aromatizat peste legume si amestecati usor. Rasniti piper negru si mai adaugati sare daca trebuie.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/legume-la-cuptor-cu-arpacas.jpg',
  },
  //15
  {
    name: 'Pavlova cu zmeura si catina',
    category: [0],
    types: [5],
    ingredients: [32, 33],
    ingredientsText:
      '4 albusuri de ou (la temp. camerei),200 gr zahar pudra vanilat,2 lingurite otet,1 priza sare,100 gr catina,50 gr zahar,200 gr zmeura,2 lingurite sirop de catina,200 ml smantana pentru frisca,frunze de menta',
    recipe:
      'Se spala bine, se usca bine si apoi se degreseaza cu o felie de lamaie vasul in care bateti albusurile (inclusiv telul si alte accesorii, daca folositi robotul de bucatarie). Se pun albusurile cu o priza de sare in vas si incepeti sa le bateti. Cand aveti o spuma alba densa, incepeti sa adaugati zaharul pudra, cate o lingura o data, apoi faceti pauza sa se incorporeze bine si treceti la urmatoarea lingura. Cand ati pus jumatate de zahar adaugati o lingurita otet. Adaugati si restul de zahar, tot asa treptat, cate o lingura pe rand. La final adaugati cealalta lingurita de otet. Mai bateti un minut spuma. Acum, ea trebuie sa stea pe tel si sa fie lucioasa. Daca nu este asa, continuati sa bateti.\nPe tava cuptorului puneti hartie de copt. Trasati un cerc pe hartie (diametru 20 cm) si asezati spuma in mijlocul lui.Cu o spatula lata de patiserie dati forma de dom. Cu spatula tinuta paralel cu tava trageti de jos in sus pe spuma de jur-imprejur ca sa obtineti o margine regulata, ca petalele de lalea. Cu dosul unei linguri faceti o adancitura in mijloc, ca un crater, ca sa aveti loc de umplutura.\nDati spuma la cuptor, la 130C pentru 1 ora si 20 minute. Nu deschideti cuptorul in acest timp. Bezeaua va deveni usor crem pe dinafara si cu o crusta foarte casanta. In interior va ramane alba si va avea consistenta de marshmallow. Stingeti cuptorul si lasati bezeaua sa se raceasca in cuptor. Acest pas este obligatoriu, altfel bezeaua poate crapa sau se poate lasa.\nDesfaceti hartia de copt de sub bezea, tragand usor de ea, fara sa rupeti blatul. Asta e pasul cel mai greu. Daca apar mici fisuri in bezea e ok! Asezati bezeaua pe platou.\nPentru siropul de catina se pune catina si 50 ml apa intr-o craticioara. Se fierbe 5 minute, pana catina e moale. Se stoarce continutul cratiteti intr-un tifon ca sa extrageti cat de mult suc din catina. Ar trebui sa aveti cam 100 ml suc la final. Adaugati zaharul si fierbeti inca 5 minute, pana aveti un sirop consistent. Raciti si pastrati la frigider pana e nevoie de el. La rece se va mai ingrosa, va deveni ca o miere.\nPentru coulis de zmeura aceasta se mixeaza in robot sau blender (sau cu blenderul vertical) pana aveti piure. Se trece acest piure printr-o sita fina (cea de ceai de exemplu) ca sa eliminati samburii. Adaugati in coulis 2 lingurite sirop de catina si amestecati. Se pastreaza la frigider pana e nevoie de el.\nFrisca se bate doar cu maxim 30 minute inainte de a servi desertul.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/pavlova-cu-zmeura-si-catina.jpg',
  },
  //16
  {
    name: 'Salsa de avocado si ananas',
    category: [2],
    types: [0],
    ingredients: [34, 35, 22, 2],
    ingredientsText:
      '1 avocado (copt și untos),80 gr pulpa de ananas proaspat,1 ardei iute rosu,1 ceapa rosie mica (cca 30 gr),3 linguri suc lime,1/4 legatura patrunjel,1 lingura ulei neutru,sare',
    recipe:
      'Se alege un anans copt si aromat. De asemenea avocado trebuie sa fie copt, astfel incat sa fie gustos si untos. Ambele sunt foarte importante in aceasta reteta.\nSe curata ceapa si se taie rondele subtiri. Se presara cu sare, se amesteca sa se desfaca inelele si se lasa sa stea 5 minute. Se stoarce ceapa in pumn (sau in tifon daca faceti cantitati mai mari) pana iese zeama din ea. Se adauga 2 linguri suc de lime si se lasa 10 minute, pana preparati restul ingredientelor.\nSe taie ananasul cubulete mici. Se curata ardeiul iute de seminte si se taie cat de marunt puteti. Se toaca fin patrunjelul.\nUltimul se taie avocado, cubulete la fel de mici ca cele de ananas. Se stropesc cu 1 lingura suc de lime sa nu se oxideze.\nIntr-un bol se amesteca usor toate ingredientele pregatite mai sus. Se adauga uleiul si sare daca mai e nevoie. Se amesteca usor.Se serveste imediat.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/salsa-de-avocado-si-ananas.jpg',
  },
  //17
  {
    name: 'Cuburi de biscuiti si nuca',
    category: [0, 1, 2],
    types: [4],
    ingredients: [36, 29, 28, 26],
    ingredientsText:
      '225 gr biscuiti simpli,225 gr nuca (sau amestec alune de padure si migdale),225 gr unt,125 ml apa,200 gr zahar (poate fi brun),200 gr ciocolata neagra (50% cacao),1 lingura rom,1 lingurita esenta de vanilie,1 lingura ulei (cu gust neutru)',
    recipe:
      'Se topeste pe abur 100 gr ciocolata.\nSe zdrobesc marunt biscuitii (i-am macinat in robot). Se macina nuca. Se amesteca bine.\nIntr-o craticioara se pune apa si zaharul. Pana se dizolva complet zaharul lasati focul pe mic, sa nu fiarba, apoi puteti creste un pic intensitatea lui. Dupa ce incepe sa fiarba siropul lasati pe foc 3 minute.\nTrageti craticioara de pe foc si adaugati untul taiat bucati. Amestecati pana untul e dizolvat complet. Adaugati vanilia.\nTurnati siropul peste amestecul de biscuiti+nuca. Amestecati.\nImpartiti amestecul in doua parti egale. In una din parti turnati ciocolata topita si romul si amestecati rapid, pana e omogen.\nSe lasa cele doua compozitii sa se racoreasca un pic (cca 5 minute).\nIntr-o tava patrata de 20 x 20 cm (tapetata cu hartie de copt) se pune amestecul cu ciocolata. Se niveleaza bine de tot cu dosul unei linguri.\nSe pune deasupra amestecul simplu. Se niveleaza si el bine.\nSe topeste restul de 100 gr ciocolata pe abur. Se adauga uleiul si se omogenizeaza.\nSe toarna glazura de ciocolata peste prajitura. Scuturati putin tava sa se autoniveleze glazura. Se acopera vasul cu folie si se da la frigider cateva ore (sau si mai bine peste noapte).\nSe taie batoane sau cuburi. Daca doriti, puteti presara putina cacao deasupra. Prajitura se pastreaza la frigider, altfel se inmoaie. Daca nu o puteti taia perfect, lasati-o 5-10 minute la temperatura camerei si apoi se va taia usor.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/cuburi-de-biscuiti-si-nuca.jpg',
  },
  //18
  {
    name: 'Pilaf de orez cu praz',
    category: [0, 1, 2],
    types: [0],
    ingredients: [37, 9, 0, 19],
    ingredientsText:
      '500 gr praz,1 morco,1 lingura pasta de rosi,150 gr orez,3-4 fire mara,1 fir ment,1/2 lamai,1 lingura unt (optional; se omite in varianta de post,4 linguri ulei de maslin,sare, piper negru',
    recipe:
      'Se taie prazul si morcovul rondele nu foarte groase. Daca prazul e mai gros, se taie prima data in doua pe lungime si apoi felii. Aveti nevoie de 500 gr praz, cantarita doar partea alba si verde-deschis (fara frunze).\nIntr-o cratita larga (cca 25 cm) se incinge uleiul si se adauga legumele si se presara putina sare. Se calesc la foc mic pana prazul se inmoaie si isi pierde mult din volum (cca 10-15 minute).\nSe face un pic de loc in mijlocul legumelor si acolo se adauga pasta e rosii si se caleste 1 minut.\nSe adauga 500 ml apa, inca putina sare si piper negru proaspat rasnit. Se aduce la fierbere si se da focul la mic. Se fierbe cu capac 5 minute.\nSe spala orezul in cateva ape pana aceasta ramane curata, nu mai e laptoasa.\nSe adauga verdeturile tocate si orezul. Se amesteca sa se distribuie egal orezul in cratita. Se adauga deasupra cateva felii de lamaie.\nSe pune capacul si se fierbein continuare la foc mica pana orezul e facut (putin peste 15 minute, dar verificati si ambalajul orezului pentru a stabili timpul de fierbere). Se ia cratita de pe foc.\nSe scoate lamaia din cratita si se adauga deasupra untul taiat bucatele. Se pune iar capacul si se lasa sa stea 10 minute. Se amesteca usor folosind 2 furculite.\nSe serveste cald ca atare sau pe post de garnitura. E bunut si rece.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/pilaf-de-orez-cu-praz.jpg',
  },
  //19
  {
    name: 'Brownie cu ciocolata',
    category: [0],
    types: [4],
    ingredients: [26, 28, 32, 15],
    ingredientsText:
      '120 gr ciocolata neagra (70% cacao),60 gr unt gras,2 oua,150 gr zahar,30 gr faina,10 gr cacao,1 priza sare,100 gr fructe uscate',
    recipe:
      'Stafidele si smochinele se pun la inmuiat in apa calduta in care puteti adauga daca doriti un shot de rom. Se lasa pana e gata aluatul.\nSe topeste ciocolata pe abur. Cat vasul e inca pe abur se adauga treptat untul cubulete, amestecand pana se topeste fiecare transa.\nSeparat se bat cu mixerul ouale cu zaharul pana obtineti o crema galben-pal, cca 2-3 minute.\nSe adauga crema de oua peste ciocolata topita si se amesteca usor cu telul.\nSe amesteca faina cu cacaoa si sarea si se incorporeaza in aluat amestecand usor cu telul.\nSe scurg fructele de lichid, iar smochinele se toaca marunt. Se adauga fructele uscate in aluat.\nSe unge o tava cu unt (daca stiti ca tava lipeste, puteti sa o tapetati cu hartie de copt) si se toarna aluatul. Se niveleaza, avand grija mai ales in centru unde are tendinta sa se adune mai mult.\nSe coace la 170 C timp de aprox 30 minute. Se lasa sa se raceasca complet, apoi se poate portiona.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/brownie-cu-ciocolata.jpg',
  },
  //20
  {
    name: 'Chiftele de cartofi si bulgur',
    category: [0, 1, 2],
    types: [5],
    ingredients: [11, 13, 2],
    ingredientsText:
      '400 gr cartofi fainosi,100 gr bulgur fin,1/2 ceapa,1 lingura pasta de ardei,1/2 lingurita condiment turcesc,1 manunchi ceapa mica (chives; cca 10 gr),1/4 legatura patrunjel,10 frunze menta,2 linguri ulei ,sare,frunze de salata verde pentru servit',
    recipe:
      'Se curata cartofii, se taie cuburi si se pun la fiert in apa cu sare, exact ca si cand faceti piure.\nPana fierb cartofii se toarna 125 ml apa clocotita peste bulgurul presarat cu putina sare, se acopera vasul si se lasa sa stea pana e gata ceapa.\nCeapa se toaca marunt. Se caleste in uleiul incins, la foc mic, pana e moale bine de tot. Se adauga pasta de ardei si condimentul si se mai tin pe foc impreuna 1 minut.\nSe toarna ceapa peste bulgur si se amesteca.\nCand sunt gata cartofii, se scurg si se paseaza ca sa obtineti un piure cat mai fin.\nSe lasa sa se racoreasca un pic, apoi se adauga amestecul de bulgur si putina sare peste cartofi. Se framanta pana obtineti o pasta cu o culoare portocalie uniforma. Se drege de sare.\nSe adauga verdeturile tocate fin si se mai framanta 1 minut.\nCu mainile umede sau purtand manusi de silicon, luati portii cat o nuca si le formati, strangandu-le in pumn. Vor capata o forma lunguiata, cu urme de degete, e ok asa, nu va chinuiti sa le modelati prea perfecte.\nLe asezati pe un platou tapetat cu frunze de salata.\nSe servesc asa: se rup bucati din frunze de salata si se ruleaza chiftelele in frunze. Sunt bune si a doua zi',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/chiftele-de-cartofi-si-bulgur.jpg',
  },
  //21
  {
    name: 'Inghetata de orez cu scortisoara',
    category: [0],
    types: [4],
    ingredients: [38, 32, 0, 19],
    ingredientsText:
      '750 ml lapte (3.5%),75 gr orez,1 priza sare,1 baton de scortisoara de 5m,2 fasii coaja de lamaie,90 gr zahar,3 galbenusuri,375 ml lapte (3.5%)',
    recipe:
      'Intr-o cratita se pune la fiert laptele, sarea si orezul. Se adauga aromele (scortisoara, coaja de lamaie). Cand incepe sa fiarba se da focul la mic (pe cel mai mic ochi de la plita am pus cratita), astfel incat laptele doar sa bolboroseasca usor ca sa nu se umfle sau sa faca pojghita. Amestecati des, ca sa stimulati eliberarea amidonului din orez, ca la risotto. Nu trebuie amesteca continuu, doar des. Fierbeti orezul cam 30-35 minute, astfel incat bobul sa fie complet fiert (sa nu se simta deloc tare in mijloc) si laptele sa fie absorbit in mare parte, sa aveti o budinca groasa de orez. Daca laptele scade si orezul nu e fiert mai puteti picura putin lapte.\nLuati cratita de pe foc, scoateti aromele si apoi adaugati zaharul si amestecati pana se dizolva.\nInfierbantati laptele. Intr-o craticioara (preferabil cu fund gros), se freaca putin galbenusurile cu zaharul. Se toarna incet, in timp ce amstecati cu telul, laptele fierbinte. Oul nu are voie sa sa se coaguleze, deci turnati incet laptele mai ales la inceput.\nPuneti craticioara pe foc mic si contnuati sa amestecati cu telul pana simtiti ca se ingroasa putin compozitia. Nu va deveni ca o budinca, dar veti simti ca devine vascoasa. Dureaza cam 6 minute la oala cu frund gros, dar mai putin la o oala cu fund subtire. La o oala cu fund subtire trebuie sa fiti mai atenti sa nu se coaguleze oul, momentul dintre crema si omleta e mai mic vesel Daca aveti un termometru, va opriti cand crema ajunge la 85C.\nLuati de pe foc crema si turnati-o peste budinca de orez. Daca aveti robot cu carcasa de plastic lasati sa se racoreasca compozitia 10 minute. Daca e din inox puteti continua imediat. Puneti compozitia in robot si mixati la viteza mare pana devine cremoasa (la un robot puternic dureaza 10-15 secunde, dar la unul mai slabut puteti sa mixati si 1 minut).\nPuneti compozitia intr-un vas cu cioc (va fi util cand o turnati in masina de inghetata) si dati la frigider macare cateva ore, pana se raceste bine. Eu o las de pe o zi pe alta.\nPuneti compozitia in masina de inghetata dupa instructiunile masinii si lasati pana are consistenta dorita (la mine a durat 15 minute, apoi am pus-o intr-un vas cu capac si am dat congelator inca 1 ora). Se serveste imediat, dar o puteti pastra la congelator mai mult timp. Inghetata se va intari la congelator, dar daca o scoateti cu 30 minute inainte va reveni la consistenta buna, doar ii mai dati cateva mixuri cu o lingura de lemn sa se omogenizeze.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/inghetata-de-orez-cu-scortisoara.jpg',
  },
  //22
  {
    name: 'Supa crema de bob',
    category: [0, 1, 2],
    types: [0],
    ingredients: [39, 6, 19],
    ingredientsText:
      '500 gr bob uscat (necuratat de coaja maronie; fava bean),4 catei de usturoi,1 lingurita chimion macinat,1 lingurita boia dulce,1 lingurita turmeric,2 linguri suc de lamaie,7 linguri ulei de masline,sare,1/4 lingurita chimion macinat ,1/2 lingurita boia dulce,4 fasii coaja de lamaie',
    recipe:
      'Cu o seara inainte se pune bobul la inmuiat cu multa apa la temperatura camerei. A doua zi bobul ar trebui sa fie foarte umflat si sa se curete usor. Se curata de coaja exterioara maronie astfel: se desface teaca in varful cu "ochiul" negru (va puteti ajuta de un cutit) si apoi se strange din partea opusa iar bobul va aluneca usor din teaca. Ceea ce scoateti din teaca are o culoare galben-pal si se desface usor in doua. Procesul de curatare este migalos, dar trebuie facut, altfel supa nu va avea o culoare foarte placuta.\nIntr-o oala se incalzeste uleiul si se adauga cateii de usturoi curatati si lasati intregi. Se soteaza pana incep sa miroasa frumos (cca 1 minut), apoi se trage oala de pe foc si se adauga chimionul, boiaua si turmericul. Se amesteca.\nSe adauga bobul si 4 cani de apa, sare dupa gust si se aduce la fierbere. Se fierbe cu capac, la foc mediu spre mic, timp de 30 minute, pana cand bobul e foarte moale. Se curata spuma alba care se formeaza la suprafata la inceputul fierberii.\nIntr-o craticioara se pune uleiul si coaja de lamaie (4 fasii luate cu aparatul de curatat legume pe lungimea lamaii) si se incalzesc usor. Uleiul nu are voie sa sfaraie, tineti-l la temp. mica. Dupa 3 minute, luati craticioara de pe foc, adaugati condimentele, amestecati si acoperiti. Lasati la infuzat pana e gata supa, apoi strecurati uleiul.\nSe mixeaza continutul oalei in blender sau cu mixerul vertical pana aveti un piure fin. Se drege de sare si se adauga sucul de lamaie.\nSe serveste calda, stropita cu ulei aromat si granola sarata pe post de crutoane. Supa se ingroasa daca e pastrata mai mult decat cateva ore.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/supa-crema-de-bob.jpg',
  },
  //23
  {
    name: 'Orzo cu ciuperci',
    category: [0, 1, 2],
    types: [0],
    ingredients: [40, 8, 2, 6, 21, 41],
    ingredientsText:
      '200 gr orzo,1 punga mix de ciuperci congelate (450 gr),1 ceapa medie,3 catei de usturoi,50 vin sec (alb sau rosu),200 ml passata,1 lingurita oregano uscat ,3 boabe ienibahar,1 foaie dafin,1 varf lingurita nucsoara macinata,5 fire de patrunjel,2 linguri ulei,sare,piper',
    recipe:
      'Se caleste la foc mic ceapa tocata marunt in uleiul incins pana se inmoaie bine de tot. Se adauga usturoiul strivit si se mai caleste 1 minut. Se stinge cu vin si se fierbe pana se evapora complet.\nSe adauga ciupercile congelate si se da focul pe mediu. Se lasa pana ciupercile sunt decongelate (verificati bucatile mai mari sa fie moi) si au lasat mult suc.\nSe adauga passata, oregano, ienibaharul, dafinul, nucsoara, sare si piper dupa gust. Se aduce la fierbere si se fierbe cu capacul pus, la foc mic timp de 15 minute.\nSe adauga 2 cani de apa (500 ml), patrunjelul tocat si inca putina sare (eu am mai pus 1 lingurita rasa) pentru ca vor veni pastele adaugate. Se aduce la fierbere si in acel moment se pune orzo pe toata suprafata oalei, se scutura oala sa se aseze uniform si se acopera cu capac. Se lasa la fiert inca 15-20 minute, tot la foc mic. Dupa 5 minute puteti amesteca usor in paste sa se distribuie mai bine in oala. Dupa 15 minute verificati pastele si daca sunt fierte, mancarea e gata. La final lichidul nu trebuie sa fi scazut de tot, e in regula sa ramana putin sos deasupra. Daca mancarea sta o vreme pana o serviti, oricum sosul se va absorbi de tot.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/orzo-cu-ciuperci.jpg',
  },
  //24
  {
    name: 'Cookies de ciocolata cu nuca',
    category: [0],
    types: [4],
    ingredients: [26, 28, 32, 15, 29],
    ingredientsText:
      '115 gr ciocolata neagra (70% cacao),25 gr unt nesarat (80% grasime),70 gr zahar fin,10 gr zahar vanilat,1 ou,1/2 lingurita esenta de cafea,25 gr faina alba,1 priza sare,1 varf cutit bicarbonat de sodiu,50 gr nuca tocata,50 gr fulgi/chipsuri de ciocolata (minim 50% cacao)',
    recipe:
      'Se amesteca faina cu sarea si bicarbonatul.\nSe topeste ciocolata rupta bucatele pe abur. Se adauga untul taiat cubulete si se amesteca pana se topeste.\nSe adauga zaharul si se amesteca. Va rezulta  ca o pasta mai consistenta.\nAdaugati oul si esenta si amestecati bine pana la omogenizare. Va rezulta un amestec mai moale si lucios.\nAdaugati faina si amestecati vartos pana simtit ca aluatul e elastic.\nVerificati sa fie racit amestecul si adaugati nuca tocata cu cutitul si fulgii de ciocolata. Amestecati.\nPe tava cu hartie de copt puneti movilite, cate 1 lingura de aluat. Fiindca aluatul este destul de elastic, e mai usor sa folositi 2 linguri, sa-l modelati un pic trecandu-l de pe o lingura pe alta si apoi sa-l lasati sa cada in tava. Aluatul este destul de ferm incat nu se lateste in tava, doar se lasa un pic sub propria greutate (vezi poza 1). Cookies vor intra pe o singura tava de cuptor.\nCoaceti cookies la 175C timp de 12 minute. La final vor fi foarte moi, dar e ok asa. Le luati din tava doar dupa ce se racoresc macar 10 minute, altfel se vor rupe.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/cookies-de-ciocolata-cu-nuca.jpg',
  },
  //25
  {
    name: 'Cartofi prajiti dietetici',
    category: [0, 1, 2],
    types: [0],
    ingredients: [11],
    ingredientsText: '4-5 cartofi,3 linguri ulei,sare, oregano',
    recipe:
      'Se curata cartofii si se taie betisoare, ca pentru cartofii pai, insa nu foarte subtiri.\nSe pun la fiert in apa cu sare si se fierb doar pana sunt aproape facuti (sunt comestibili, dar inca nu se rup usor; cca 10 minute).\nSe scurg intr-o strecuratoare si se lasa 2-3 minute sa se evapore apa de pe ei. Se presara cu sare si putin oregano. Se toarna uleiul si se amesteca usor, sa nu se rupa.\nSe aseaza cartofii in tava cuptorului, intr-un singur strat.\nSe dau la cuptor, la 220C pentru aprox. 25-30 minute, pana sunt rumeni pe alocuri, amestecand de 2-3 ori in acest timp (dupa 15 minute cand deja sunt usor uscati deasupra si catre final). Cartofii trebuie sa fie rumeni pe alocuri si sa aiba o crusta crocanta. Lasati-i la cuptor pana arata asa, chiar daca e necesar un timp usor mai lung decat cel indicat de mine (depinde de cartofi, de grosimea lor si de cuptor).',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/cartofi-prajiti-dietetici.jpg',
  },

  //26
  {
    name: 'Brownie cu cacao si nuca',
    category: [0, 1, 2],
    types: [4],
    ingredients: [28, 42, 32, 15, 29],
    ingredientsText:
      '210 gr unt (82% grasime),120 gr cacao (20% grasime),300 gr zahar,3 oua,1 lingurita esenta vanilie,1 lingurita esenta de cafea (sau 1 lingurita cafea instant),100 gr faina alba,100 gr nuci tocate,1 priza de sare',
    recipe:
      'Se topeste untul pe foc mic, fara a-l lasa sa se incinga. Se adauga zaharul in el si se omogenizeaza. Se adauga cacaoa, esentele si sarea si se amesteca bine. Se ia cratita de pe foc si daca e fierbinte se lasa sa se racoreasca.\nSe adauga ouale, cate unul pe rand, amestecand vigusors cu o lingura de lemn dupa fiecare. La final amestecul va fi lucios.\nSe adauga faina si se amesteca cu o paleta prin rasturnari succesive, pana nu se mai vede, apoi se mai amesteca de cateva ori, pana aluatul se desface usor de pe marginea vasului.\nSe incorporeaza nuca tocata. Amestecul final va fi dens si lipicios.\nSe pune aluatul intr-o tava, unsa bine cu unt sau tapetata cu hartie de copt si se niveleaza bine cu dosul unei linguri.\nSe coace la 165 C timp de aprox 35 minute (dupa 30 minute am inceput sa o verific cu scobitoarea in centru pana pe aceasta nu a mai ramas aluat moale).\nSe scoate si dupa ce sa raceste se taie cuburi. Prajitura nu e foarte inalta, are pana in 3 cm.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/brownie-cu-cacao-si-nuca.jpg',
  },
  //27
  {
    name: 'Salata de rosii cu ceapa',
    category: [0, 1, 2],
    types: [2],
    ingredients: [2, 5, 19],
    ingredientsText:
      '1 ceapa mica rosie,2 rosii mai mici,1 lime/lamaie,2 linguri ulei,cateva fire de patrunjel,sare',
    recipe:
      'Ceapa de taie felii subtiri. Se desfac feliile intr-un bol si se presara cu 1/2 lingurita sare mare. Se amesteca bine si se lasa sa stea 10-15 minute.\nStoarceti bine ceapa in pumn pana stoarceti cat de mult suc se poate din ea. Gustati ceapa, daca e foarte sarata o puteti clati in apa rece si apoi o stoarceti iar.\nPuneti ceapa inapoi in bol. Adaugati sucul de la lime (sau lamaie), amestecati si lasati sa stea inca 10-15 minute.\nAdaugati uleiul si amestecati.\nTaiati rosille felii (rosiile cherry in doua sau patru). Adaugati-le peste ceapa. Amestecati usor si lasati salata sa stea pana o serviti (minim 15 minute, maxim 30 minute). Vasul in care ati pus salata ar trebui sa fie acum plin cu suc delicios cam pana la jumatate.\nInainte de servire adaugati patrunjelul tocat. Dregeti de sare daca e cazul.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/salata-de-rosii-cu-ceapa.jpg',
  },
  //28
  {
    name: 'Covrigi cu sare',
    category: [0],
    types: [5],
    ingredients: [38, 28, 15],
    ingredientsText:
      '125 ml lapte caldut,425 ml apa calduta,1/2 plic drojdie uscata,1 lingurita zahar,50 gr unt taiat bucati (la temp. camerei),425 gr faina alba (BL55),1 lingurita sare,10 gr bicarbonat de sodiu',
    recipe:
      'Se pun ingredientele pentru aluat in masina de paine in ordinea data. Se seteaza masina pe programul de framantat. Se poate framanta si cu mana, dar trebuie insistat cam 15 minute astfel incat aluatul sa fie foarte elastic. Se pune aluatul intr-un vas uns cu ulei, se acopera si se lasa la temperatura camerei numai 15 minute, timp in care va creste foarte putin.\nSe rastoarna aluatul pe masa de lucru si cu mana ii dati forma de patrat sau dreptunghi. Veti simti ca aluatul e foarte elastic si se se intinde fara efort. Cu o rola de patiserie taiati fasii egale (cca 35-40 gr pentru covrigi mici sau 75-80 gr covrigi mari).\nSe ia fiecare bucata si se ruleaza astfel incat sa obtineti un rulou gros cat degeteul mare. Orientativ va pot spune ca din bucatile mici mi-au iesit rulouri lungi de 50 cm. Daca doriti covrigii mai pufosi puteti lasa rulourile un pic mai groase. Cu cat ii faceti ma subtiri cu atata vor iesi mai crocanti.\nFormati covrigii direct in tava cuptorului pe care ati asezat hartie de copt. Nu-i inghesuiti, ca sa aiba loc sa creasca. Veti avea nevoie de 2 tavi ca sa incapa toti.\nDupa ce sunt toti formati, introduceti tavile in pungi de plastic si ii lasati sa creasca la temperatura camerei 1 ora.\nInainte sa expire ora, aduceti la fierbere apa cu bicarbonatul. Cu o pensula ungeti covrigii cu apa clocotita. Aveti grija sa-i ungeti peste tot.\nDati tava la 200C timp de 10 minute, pana sunt placut rumeniti.\nAmestecati ingredientele pentru glazura. Va rezulta un amestc ca cel de clatite, trebuie sa curga incet de pe lingura.\nScoateti covrigii din cuptor si cu lingura picurati glazura in zig-zag peste ei. Puteti pune cat de multa glazura va face placere, nu trebuie sa o folositi pe toata.\nIntroduceti iar tava la cuptor pentru 3-4 minute, doar cat sa se coaca glazura.\nCovrigii sunt buni imediat si in ziua in care au fost copti, mai ales daca i-ati format mai subtiri.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/covrigi-cu-sare.jpg',
  },
  //29
  {
    name: 'Salata de primavara',
    category: [0],
    types: [2],
    ingredients: [43, 44, 32, 19],
    ingredientsText:
      '1 farfurie adanca plina cu verdeturi de primavara,3 ridichi,1 fir ceapa verde,1/4 legatura patrunjel,1 fir marar,1 lingura seminte de pin,2 linguri parmezan razuit,1 ou fiert tare,2 linguri ulei masline extravirgin,1 lingura suc de lamaie',
    recipe:
      'Folositi orice verdeata de primavara va place. Eu am folosit 2 legaturi loboda, 5 frunze de leurda si vreo 10 frunze macris. Se spala frunzele, cele mari se taie fasiute, se scurg bine de apa. Se amesteca cu ceapa verde taiata rondele si patrunjelul si mararul tocate marunt. Se aseaza pe un platou.\nDeasupra se pun ridichile taiate felii subtiri. Se presara semintele de pin (prajite usor intr-o tigaie fara grasime). Se presara sare si piper negru.\nSe amesteca parmezanul ras cu galbenusul oului trecut printr-o sita si albusul tocat marunt. Se presara peste salata.\nSe amesteca uleiul cu sucul de lamaie pana devine ca o emulsie, apoi se torna peste salata. Se serveste imediat.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/salata-de-primavara.jpg',
  },
  //30
  {
    name: 'Orez cu legume si susan',
    category: [0, 1, 2],
    types: [2],
    ingredients: [0, 8, 37, 46],
    ingredientsText:
      '1 cana orez,1 1/4 cana apa,1/4 lingurita ulei susan,1/2 lingurita sos de soia,250 gr ciuperci champignon,2 fire ceapa verde,1 praz,1/2 cana mazare (proaspata sau congelata),2 linguri seminte de susan,3 linguri ulei,sare, piper negru',
    recipe:
      'Se incinge 1 lingura ulei intr-o oala. Se adauga orezul si se prajeste la foc mare, pana se rumeneste usor. Nu se va rumeni uniform, e ok asa. In tot acest timp amestecati des.\nSe adauga apa calda peste orez, se aduce la fierbere, se pune capacul si se fierbe 5 minute.\nSe stinge focul se ridica capacul, se pune un prosop pe oala si apoi se pune capacul la loc. Se lasa sa stea 15 minute, timp in care nu ridicati capacul.\nSe taie ceapa verde rondele (si partea alba si partea verde). Se taie partea alba si verde deschis de la praz in doua pe lungime, apoi se taie rondele subtiri. Ciupercile se curata de codita si se taie felii subtiri.\nIntr-o tigaie larga, in 2 linguri ulei se calesc ciupercile, presarate cu putina sare si piper negru, pana se inmoaie. Se scot pe o farfurie.\nIn aceeasi tigaie se calesc ceapa verde si prazul timp de doar 2 minute, pana se inmoaie usor. Se scot peste ciuperci.\nMazarea se fierbe in apa cu sare. Se scurge si se pune peste celelalte legume.\nSusanul se prajeste usor intr-o tigaie fara adaos de grasime.\nOrezul fiert se stropeste cu ulei de susan si sos se soia si se amesteca cu o furculita.\nSe adauga legumele si susanul prajit peste orez si se amesteca iar, gustand de sare.\nSe serveste cald sau rece.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/orez-cu-legume-si-susan.jpg',
  },
  //31
  {
    name: 'Salata de sfecla rosie si telemea',
    category: [0],
    types: [2],
    ingredients: [24, 32, 46],
    ingredientsText:
      '1 sfecla rosie medie,2 oua fierte tari,100 gr telemea,1 lingura suc de lamaie,putin hrean ras,piper negru',
    recipe:
      'Se da telemeaua pe razatoarea mare. Se da sfecla pe razatoarea mare si se amesteca cu putin hrean ras si sucul de lamaie. Se toaca albusurile marunt.\nSe aseaza in vas un strat de sfecla, apoi un strat de telemea, urmeaza un strat de albusuri si la final galbenusurile trecute prin sita. Se presara cu putin piper negru.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/salata-de-sfecla-rosie-si-telemea.jpg',
  },
  //32
  {
    name: 'Tzatziki cu sfecla rosie',
    category: [0],
    types: [2],
    ingredients: [24, 33, 6, 19],
    ingredientsText:
      '2 sfecle rosii mici,300 gr iaurt grecesc (sau smantana acra),1 lingura ulei masline,1 catel usturoi,1 lingura suc lamaie,2-3 fire marar,sare',
    recipe:
      'Sfeclele se fierb intregi in apa cu sare pana intra furculita usor in ele. Pentru o varianta super rapida puteti folosi sfecla cumparata gata fiarta pe abur. Se curata sfeclele de coaja.\nSe da sfecla pe razatoare. Se presara cu sare, usturoi strivit si suc de lamaie. Se amesteca usor.\nSe adauga iaurtul, mararul tocat si uleiul de masline si se amesteca pana la omogenizare. Se drege de sare.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/tzatziki-cu-sfecla-rosie.jpg',
  },
  //33
  {
    name: 'Saratele',
    category: [0],
    types: [5],
    ingredients: [15, 28, 32, 38, 33],
    ingredientsText:
      '500 gr faina alba,150 gr unt/margarina,100 gr untura,1 ou,1/2 lingurita sare,1/2 pachet drojdie proaspata (12 gr),4 linguri lapte caldut,1 priza zahar,150 gr smantana (acra)',
    recipe:
      'Se dizolva drojdia in laptele caldut impreuna cu zaharul. Se lasa sa stea la loc caldut 15 minute, pana se umfla si devine spumoasa.\nIntr-un bol punem faina si in mijloc adaugam: galbenusul oului, untul, untura, sarea si maia de drojdie. Faramitam totul cu degetele pana devine precum pesemtul.\nAdaugam smantana pana se leaga (incepeti cu 4 linguri si mai adaugati daca e necesar). Framantam bine aluatul timp de 5 minute.\nAcoperim bolul si lasam sa stea 15 minute.\nImpartim aluatul in 4 bucati.\nPe blatul de lucru presarat cu putina faina, intindem din fiecare bucata cate o foaie subtire de cca 5 mm. Taiem foaia pe margini cu o rola de patiserie ca sa obtinem un dreptunghi. Taiem foaia fasiute inguste folosind rola de patiserie sau decupam saratelele cu forma traditionala (vezi poza 4).\nAsezam saratele in tava de acoperita cu hartie de copt.\nBatem albusul ramas cu 1 lingura apa si putina sare. Folosind o pensula de silicon ungem saratelele si le presaram cu chimen si cascaval.\nDati saratelele la cuptor la 200C pentru 12-13 minute, pana cand cascavalul se rumeneste frumos.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/saratele.jpg',
  },
  //34
  {
    name: 'Salata de broccoli si conopida',
    category: [0, 1, 2],
    types: [2],
    ingredients: [47, 48, 2, 49, 50],
    ingredientsText:
      '100 gr buchetele broccoli,100 gr buchetele conopida,1 lingura ceapa rosie tocata,3 linguri parmezan razuit (sau cascaval),1 lingura cu varf seminte de floarea soarelui (prajite),5 felii subtiri jambon',
    recipe:
      'Se taie buchetelele de broccoli si conopida bucati mici. Se amesteca cu ceapa tocata marunt.\nPentru dressing se prepara maioneza dupa reteta de aici si cand e gata se drege cu otet si suc de lamaie. Se toarna dressingul peste legume si se amesteca bine. E necesara maioneza doar cat sa lege un pic legumele, nu mai multa.\nSe prajesc feliile de jambon intr-o tigaie fara grasime pana devin crocante. Se rup bucatele mici.\nSe adauga jambonul, semintele si parmezanul peste salata. Se condimenteaza cu putin piper negru macinat. Se amesteca bine. Se drege de sare doar daca e cazul (in principiu parmezanul, semintele si baconul sunt destul de sarate).\nEste buna imediat, dar si dupa ce sta. Se poate pastra la frigider. Semintele si baconul se vor inmuia daca o lasati sa stea, dar asta nu va afecta gustul, doar textura. Puteti sa adaugati aceste ingrediente doar in momentul servirii.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/salata-de-broccoli-si-conopida.jpg',
  },
  //35
  {
    name: 'Salata de cruditati cu mozzarella',
    category: [0],
    types: [2],
    ingredients: [43, 9, 24, 5],
    ingredientsText:
      '2 maini de frunze tinere de spanac,1 morcov mic,1 sfecla rosie mica,2 rosii,5-6 bile mozzarella,oregano,1 sana de 200 gr,10 masline negre,1/2 lingurita ceapa verde uscata,1/2 lingurita fulgi de ceapa uscata,1/2 lingurita patrunjel uscat,1/4 lingurita usturoi granulat,1 priza buna de piper negru macinat,1 lingura ulei,sare',
    recipe:
      'Preparam dressingul: se macina in masina de cafea toate ingredientele uscate pentru dressing (ceapa verde, ceapa, patrunjel, usturoi, piper). Se toarna peste sana. Se adauga maslinele tocate foarte marunt si uleiul si se amesteca bine. Se drege de sare.\nSe rup sau se taie frunzele de spanac/salata si se pun intr-un bol. Deasupra se rad betisoare morcovii si sfecla. Se amesteca usor cu mana.\nSe imparte salata in doua farfurii. Se aseaza desupra rondele/felii de rosii si mozzarella. Se presara oregano din belsug.\nSe serveste cu dressing si cate o felie de paine prajita.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/salata-de-cruditati-cu-mozzarella.jpg',
  },
  //36
  {
    name: 'Chipsuri de mere',
    category: [0, 1, 2],
    types: [5],
    ingredients: [51],
    ingredientsText: '1 mar,1 lingura zahar pudra vanilat,1/4 lingurita scortisoara',
    recipe:
      'Se scoate cotorul de la mar cu aparatul de scos cotoare. Se feliaza marul rondele foarte subtiri, ca chipsurile.\nSe aseaza feliile una langa alta in tava cu hartie de copt si apoi cu o sita fina le pudram cu zahar amestecat cu scoartisoara.\nDam la cuptor, pe cel mai de sus nivel, la 200C pentru 10 minute. Intoarcem feliile in tava, dam temperatura la 180C si mai lasam 10 minute, pana chipsurile devin maronii deschis pe margini. Daca feliile nu se rumenesc usor nu vor fi crocante.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/chipsuri-de-mere.jpg',
  },
  //37
  {
    name: 'Salata bulgareasca',
    category: [0],
    types: [2],
    ingredients: [5, 52, 3, 53, 46, 19],
    ingredientsText:
      '1 rosie mare,3 castraveciori,1 ardei gras,3 fire ceapa verde,cateva fire patrunjel,200 gr sunca (Praga),branza telemea,2 oua fierte tari,3 linguri ulei masline,1 lingura suc de lamaie (sau otet),sare și piper',
    recipe:
      'Se taie rosiile, castravetii, ardeii, albusurile de ou si sunca cubulete. Ceapa verde se taie rondele. Se toaca fin patrunjelul. Se pun toate intr-un bol.\nSe condimenteaza salata cu sare si piper dupa gust si se amesteca totul usor.\nSe amesteca uleiul cu sucul de lamaie pana devine ca o emulsie si se toarna peste salata.\nGalbenusurile de ou se "cern" peste salata, adica se trec printr-o sita fina. Se amesteca iar. Galbenusul va forma impreuna cu dressingul un sos cremos si delicios.\nSalata obtinuta se distribuie in boluri individuale.\nSe rade deasupra fiecaruri bol multa telemea, ca o cupola, pana legumele nu se mai vad.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/salata-bulgareasca.jpg',
  },
  //38
  {
    name: 'Bruschetta cu branza de capra si rosii cherry coapte incet',
    category: [0],
    types: [5],
    ingredients: [10, 54, 6, 5],
    ingredientsText:
      'felii de paine taraneasca,branza de capra,usturoi,putin ulei de masline,rosii cherry,ulei masline,sare',
    recipe:
      'Puteti prepara orice cantitate de rosii doriti, dar fiindca e un proces lung, de cateva ore, e mai practic sa preparati o cantitate mai mare de rosii, cat va intra maxim in tava cuptorului.\nRosiile se taie in doua, iar daca sunt mici de tot se pot lasa intregi. Se presara sare grunjoasa si se picura ulei de masline doar cat sa se unga toate (pentru rosii care va umplu tava cuptorului, 3-4 linguri sunt suficiente). Amestecati. Asezati rosiile in tava, cu taietura in sus daca e cazul. Rosiile trebuie sa intre pe un singur strat in tava si sa nu fie extrem de inghesuite sau suprapuse.\nIncingeti cuptorul la 120C si dati tava cu rosii pentru 2 ore. Dupa aceea reduceti temperatura la 100C si mai lasati inca 1 ora. Rosiile vor fi coapte, dar inca usor zemoase si gustul foarte concentrat.\nLasati rosiile sa se racoreasca in tava, apoi le stropiti iar cu ulei de masline, de data asta fiti mai generosi, sa se vada uleiul in tava (inca 4-5 linguri sigur vor fi necesare).\nTransferati rosiile cu atentie, ca sa nu le striviti, in vasul in care vreti sa le pastrati, cu tot cu uleiul din tava. Cand le transferati, rosiile vor lasa putin suc si se va amesteca cu uleiul, rezultand un sos delicios. Daca vreti, acum puteti adauga si cateva frunze de busuioc tocate fin. Se pastreaza la frigider, dar se readuc la temperatura camerei in momentul folosirii.\nPentru bruschette: taiati felii de paine taraneasca, le picurati cu ulei si le prajiti pe gratar, in toaster sau in cuptor. Trebuie sa devina usor crocante si placut rumene. Se lasa sa se racoreasca inainte sa montati bruschettele.\nSe freaca painea prajita cu un catel de usturoi. Se presara cu branza proaspata de capra sfaramata (am folosit aceasta branza). Fiti generosi cu branza. Nu exista o regula, dar orientativ, am folosit 50 gr branza la 2 felii medii de paine...\nPuneti o movilita de rosii coapte peste branza si picurati cu sosul de pe rosii. Daca nu ati pus busuioc in vasul cu rosii, puteti presara acum busuioc tocat.',
    imgUrl:
      'https://www.e-retete.ro/imagini/retete/bruschetta-cu-branza-de-capra-si-rosii-cherry-coapte-incet.jpg',
  },
  //39
  {
    name: 'Placinte cu urda si marar',
    category: [0],
    types: [3],
    ingredients: [15, 28, 55, 32, 54, 2],
    ingredientsText:
      '230 gr faina alba,100 gr unt topit,100 gr iaurt grecesc,1 lingura ulei,2 ouă,1 lingurita praf de copt,1/2 lingurita sare,50 gr unt topit (pentru uns foile),200 gr urda,1/2 ceapa,4-5 fire marar,sare și piper',
    recipe:
      'Se mixeaza bine iaurtul, untul topit si racorit si uleiul. Se adauga oul si se mixeaza iar pana compozitia e omogena.\nSe toarna amestecul de mai sus peste faina cernuta cu sare si praf de copt. Se framanta pana aluatul se leaga. Puteti continua sa-l framantati de mana inca 10 minute.\nIl acoperiti cu folie de plastic si-l lasati sa stea intre 1 si 2 ore.\nImpartiti aluatul in doua bucati egale.\nPe masa asezati o fata de masa de bumbac curata si o presarati cu faina. Intindeti fiecare bucata de aluat foaie cat puteti de patrata, cam la 45 cm latura.\nUngeti foaia obtinuta cu unt topit. Impaturati foaia in doua, astfel incat marginile sa se intalneasca la centru. Ungeti iar foaia cu unt. Impaturati in doua, fix prin zona in care s-au intalnit marginile. Veti obtine o foaie lunga, dreptunghiulara.\nUngeti foaia deasupra cu unt topit. Impaturati foaia in doua, astfel incat marginile scurte sa se uneasca in centru. Ungeti foaia cu unt. Impaturati iar in doua, fix in zona in care s-au intalnit marginile. Veti obtine o foaia cat de cat patrata.\nInvartiti cele doua bucati de aluat impaturite in folie de plastic si lasati-le la frigider 15 minute, sa se relaxeze un pic.\nAmestecati branza cu mararul tocat si ceapa data pe razatoare. Condimentati cu sare si piper negru dupa gust. Adaugati oul si omogenizati.\nCand veti prepara placintele, taiati fiecare bucata de aluat in doua. Veti avea 4 bucati, deci veti face 4 placinte.nPe fata de masa data cu faina intindeti fiecare bucata de aluat.\nPuneti 1/4 de umplutura pe o latura lunga a fiecarei foi. Rulati din acea parte ca sa obtineti un rulou.\nAsezati rulourile in tava cuptorului tapetata cu hartie de copt. Ungeti rulourile cu ou batut cu iaurt si 1 lingura de apa. Presarati cu sare mare si seminte de nigella/susan sau fulgi de chili.\nCoaceti placintele la 200C timp de 20 minute. Intoarceti tava la jumatatea timpului de coacere.\nDupa ce se racoresc se taie placintele bucati (4-6 bucati fiecare rulou) cu cutitul zimtat. Sunt bune caldute sau reci.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/placinte-cu-urda-si-marar.jpg',
  },
  //40
  {
    name: 'Placintele cu ciuperci',
    category: [0],
    types: [3],
    ingredients: [15, 38, 32, 8, 2, 6, 54],
    ingredientsText:
      '250 gr faina alba,1/2 plic drojdie uscata,125 ml lapte caldut,1 ou,1 lingura ulei,1/2 lingurita zahar,1 lingurita sare,1 ou + 2 linguri lapte,1/2 kg ciuperci (hribi),1 ceapa medie,1 catel usturoi,2 prize cimbru uscat,50 gr branza cu mucegai,2 linguri ulei,sare și piper',
    recipe:
      'Puneti ingredinetele de aluat in masina de paine si programati pe programul de framantat si dospit. Daca nu aveti masina, dizolvati drojdia si zaharul in lapte. Adaugati peste restul ingredientelor si framantati de mana pana aluatul e elastic si se desprinde de pe maini, apoi lasati-l la dopsit acoperit, pentru minim 1 ora.\nPentru umplutura: se taie ciupercile felii mici. Se caleste ceapa tocata marunt in 2 linguri de ulei pana se inmoaie. Apoi se adauga usturoiul strivit si se mai continua calirea 1 minut. Se adauga ciupercile, se condimenteaza cu sare, piper si cimbru. Se calesc pana se evapora suscul care-l lasa si incep sa se rumeneasca usor. Se iau de pe foc si se lasa la racit complet. Apoi se adauga branza sfaramata si se amesteca bine.\nAluatul fie il intideti foaie subtire si-l decupati cu un pahar, fie il impartiti in 8 bucati egale, faceti bile din fiecare bucata si apoi le asezati pe masa de lucru, puneti o folie deasupra si apasati cu fundul unei farfurii pana obtineti un disc subtirel.\nPe jumatate de disc asezati cam 1 lingura de umplutura, acoperiti cu jumatatea de aluat goala si apoi sigilati placinta cu dintii unei furculite.\nAsezati toate placintelele obtinute pe tava cu hartie de copt, ungeti cu ou batut cu 2 linguri de lapte si intepati placintelele deasupra cu dintii unei furculite.\nDati la cuptor la 200C pentru 40 minute. Se lasa acoperite sa se racoreasca. Sunt bune calde sau reci.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/placintele-cu-ciuperci.jpg',
  },
  //41
  {
    name: 'Strudel cu mere',
    category: [0],
    types: [3],
    ingredients: [15, 38, 32, 51, 29, 28, 19],
    ingredientsText:
      '200 gr faina alba,110 ml lapte,1/2 ou,1/2 lingura ulei,1 priza buna de sare,1 kg mere,80 gr zahar,50 gr stafide,2 linguri rom,80 gr nuca ,35 gr pesmet,50 gr unt,1/4 lingurita scortisoara,1/2 lamaie,2 linguri unt topit,1/2 ou,1 lingura lapte',
    recipe:
      'Umplutura: se acopera stafidele cu rom si apa calduta. Se lasa la inmuiat.\nPesmetul se prajeste intr-o tigaie fara adaos de grasime, pana se rumeneste usor. Nuca se prajeste in cuptor. Jumatate din cantitatea de nuca se macina si se amesteca cu pesmetul. Restul de nuca se toaca cu cutitul.\nSe taie merele cubulete de 1/2 cm. Am procedat astfel: am scos cotoarele merelor cu acest aparat. Le-am curatat de coaja, le-am taiat in jumatate; fiecare jumatate am asezat-o cu taietura in jos si am feliat-o la 1/2 cm. Feliile le-am taiat apoi cuburi. Am stropit cubuletele cu suc de lamaie pentru a nu se oxida.\nIntr-o tigaie larga se incinge untul si se adauga cubuletele de mere. Se calesc 5 minute cu capacul pus. In acest timp ridicati capacul si amestecati o data, la mijlocul timpului. Se adauga zaharul si scortisoara si se mai calesc 10 minute, tot cu capac, amestecand iar la mijlocul timpului.\nCand ati terminat umplutura, mutati-o in alt vas. Adaugati stafidele si nuca tocata cu cutitul (daca doriti). Lasati umplutura sa se racoreasca si apoi puneti-o la frigider pentru cateva ore (minim 3). Important! Umplutura trebuie lasata la frigider pana e rece bine.\nAluatul: bateti ca pentru omleta un ou mare; veti folosi jumatate la aluat si jumatate la uns strudelul.\nSe pune faina intr-un bol si se face o gaura in mijloc. Acolo se adauga sarea, jumatate din oul batut, uleiul si laptele. Se trage treptat faina peste lichide, amestecand cu degetele pana aluatul se leaga.\nSe framanta aluatul cu mana pana e omogen. Eu l-am framantat vreo 2-3 minute cu mana si apoi in masina de paine pe programul de framantat de 13 minute. Exclusiv cu mana, framantati-l macar 10 minute.\nSe pune aluatul pe masa de lucru data cu faina si se acopera cu un bol. Se lasa sa stea intre 1 si 5 ore (cu cat mai mult, cu atat mai bine; eu l-am lasat 2 ore).\nFormarea: pe masa se pune o fata de masa mare si se pudreaza cu putina faina.\nSe aseaza bucata de aluat in mijloc si se intinde la inceput cu sucitorul, cat puteti de mult. Apoi se continua intinderea cu mainile: bagati pumnul sub foaia de aluat (incepand din centru) si trageti catre margine.\nUngeti ruloul cu restul de ou batut cu lapte. Dati la cuptor pentru 20 minute, intorcand tava la mijlocul timpului de coacere ca sa se rumeneasca egal. La final, strudelul trebuie sa aiba o crusta crocanta si frumoas rumenita.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/strudel-cu-mere.jpg',
  },
  //42
  {
    name: 'Placinta cu carne',
    category: [],
    types: [3],
    ingredients: [15, 7, 2, 3, 32],
    ingredientsText:
      '450 gr faina alba,300 ml apa,4 linguri untura topita (optional),ulei,350 gr carne tocata (de vita/vitel sau mixta vita-porc),1 ceapa mica,1 lingurita boia dulce,1/2 lingurita piper negru,1/4 lingurita chimion macinat,2 prize scortisoara macinata,1 lingura pasta de ardei dulce,1 ou mic,2 linguri ulei, sare',
    recipe:
      'Umplutura: se caleste ceapa tocata marunt in uleiul incins pana se inmoaie. Se adauga carnea si se prajeste pana-si schimba culoarea. Se trage tigaia de pe foc si se adauga condimentele si pasta de ardei. Se lasa sa se raceasca si apoi se adauga oul batut.\nAluatul: Se pune faina intr-un bol larg si se face o gaura in mijloc. Se presara sarea pe marginea fainii, iar in centru se toarna apa. Cu degetele, incepeti sa trageti faina in apa, amestecand, pana cand toata faina e absorbita. Se framanta apoi fie manual timp de 10 minute, pana aluatul e elastic si nelipicioas, fie cu masina de paine pe programul de framantat.\nSe pune aluatul pe masa de lucru data cu putina faina. Se imparte in 4 bucati egale, la care se da forma de chifla. Se aplatizeaza bucatile de aluat in discuri de cca 10 cm diametru.\nIntr-un vas mic se pune untura topita (daca folositi) si putin ulei. Se pun discurile de aluat in grasime (unul peste altul) si apoi se completeaza cu ulei, astfel incat sa fie acoperite.\nSe lasa aluatul sa stea in grasime timp de 30 minute.\nIncepem formarea placintei: se ia o bucata de aluat din grasime, se scurge usor si se aseaza pe masa curata. Cu mainile incepeti sa intindeti aluatul. Se va intinde foarte usor, ca si guma de mestecat. Cand este subtirel, incepeti sa trageti de margini de jur imprejur, pana obtineti o foaie transparenta, prin care se vede masa. Daca apar cateva gaurele, mai ales pe margine nu e nicio problema. Cu un cutit taiati marginile groase, de jur imprejurul aluatului.\nPe o latura lunga a aluatului puneti 1/4 din umplutura (formati un sir omogen). Rulati aluatul. Ruloul obtinut rulati-l sub forma de melc. Puneti melcul pe tava de copt unsa cu putin ulei.\nRepetati intinderea si rularea cu restul bucatilor de aluat si a umpluturii. Fiecare rulou nou format il asezati in continuarea melcului initial. La final veti obtine un melc mare.\nCoaceti placinta cu carnea la 220C timp de 25 minute, pana e rumena.\nSe scoate din cuptor si dupa ce se racoreste se poate taia bucati (folosind un cutit zimtat, ca cel de paine). Este buna calduta sau rece. Este buna la micul dejun, cu iaurt.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/placinta-cu-carne.jpg',
  },
  //43
  {
    name: 'Placinta cu branza si spanac',
    category: [0],
    types: [3],
    ingredients: [15, 46, 54, 56, 32],
    ingredientsText:
      '450 gr faina alba,300 ml apa,1 lingurita rasa sare,4 linguri untura topita,ulei,100 gr telemea,100 gr branza proaspata de vaca,70 gr spanac,2 fire marar,1 ou mic,piper negru',
    recipe:
      'Aluatul: Se pune faina intr-un bol larg si se face o gaura in mijloc. Se presara sarea pe marginea fainii, iar in centru se toarna apa. Cu degetele, incepeti sa trageti faina in apa, amestecand, pana cand toata faina e absorbita. Se framanta apoi fie manual timp de 10 minute, pana aluatul e elastic si nelipicioas, fie cu masina de paine pe programul de framantat.\nSe pune aluatul pe masa de lucru data cu putina faina. Se imparte in 5 bucati egale, la care se da forma de chifla. Se aplatizeaza bucatile de aluat in discuri de cca 10 cm diametru.\nIntr-un vas mic se pune untura topita (daca folositi) si putin ulei. Se pun discurile de aluat in grasime (unul peste altul) si apoi se completeaza cu ulei, astfel incat sa fie acoperite.\nSe lasa aluatul sa stea in grasime timp de 30 minute.\nIn acest timp se prepara umplutura: se amesteca branza de vaca cu telemeaua razuita si mararul tocat. Se condimenteaza cu piper negru macinat si se adauga oul batut. Se amesteca bine.\nSpanacul daca a fost congelat doar se scurge bine de apa. Daca folositi spanac proaspat, il opariti in apa cu sare 1 minut. Il scoateti intr-o strecuratoare sa se scurga cateva minute, apoi se strange bine in pumn (sau tifon), sa se scurga bine de apa, dupa care se toaca marunt cu cutitul.\nSe adauga spanacul peste branza si se amesteca bine.\nIncepem formarea placintei: se ia o bucata de aluat din grasime, se scurge usor si se aseaza pe masa curata. Cu mainile incepeti sa intindeti aluatul. Se va intinde foarte usor, ca si guma de mestecat. Cand este subtirel, incepeti sa trageti de margini de jur imprejur, pana obtineti o foaie transparenta, prin care se vede masa. Daca apar cateva gaurele, mai ales pe margine nu e nicio problema. Cu un cutit taiati marginile groase, de jur imprejurul aluatului.\nImpaturiti aceasta prima foaie in patru. Veti obtine un dreptunghi care va reprezenta baza placintei.\nIntindeti o a doua bucata de aluat la fel de subtire si decupati marginile. Asezati baza in centrul acestei foi.\nPresarati umplutura peste baza. Nu fiti tentati sa puneti multa umplutura.\nRidicati doua margini opuse ale aluatului peste umplutura, apoi ridicati si marginile opuse. Veti obtine un pachet dreptunghiular.\nIntindeti a treia foaie, asezati pachetul in centru, presarati umplutura si impachetati.\nRepetati, adica intindeti a patra foaie, asezati pachetul in centru, presarati umplutura si impacehtati.\nCoaceti placinta la 220C, timp de 25 minute, pana e rumena.\n',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/placinta-cu-branza-si-spanac.jpg',
  },
  //44
  {
    name: 'Branzoici',
    category: [0],
    types: [3],
    ingredients: [15, 32, 28, 54, 32],
    ingredientsText:
      '400 gr faina alba,80 gr zahar,1/2 lingurita sare,1 pliculet drojdie uscata (8 gr),1 plic zahar vanilat,2 oua (la temperatura camerei),60 gr un topit,80 ml lapte (caldut),60 ml apa (calduta),300 gr branza proaspata de vaca (branza dulce),4-5 linguri zahar,1 plic zahar vanilat,1 ou mare,30 gr stafide (inmuiate in apa calduta si apoi in putin rom),putina coaja de lamaie razuita',
    recipe:
      'Se amesteca faina cu zaharul si sarea.\nSe bat ouale si se amesteca cu laptele, apa si untul topit.\nIn masina de paine se pune amestecul de oua peste care se presara drojdia uscata si zaharul vanilat. Deasupra se aseaza amestecul de faina. Se seteaza masina pe programul de framantat si dospit.\nPentru umplutura se freaca branza cu zaharul si coaja rasa de lamaie. Se adauga oul batut si se omogenizeaza. Se adauga stafidele scurse.\nAluatul dospit se pune pe masa data cu faina si se framanta usor. Se intinde apoi foaie de cca 25 cm x 45 cm. Se taie marginile neregulate, astfel incat sa obtineti un dreptunghi.\nFoaia se taie patrate de 7 cm (se taie in 3 pe latime si in 6 pe lungime; veti obtine 18 patrate)\nSe aseaza branzoicile formate in tava, la distanta unele de altele. Se baga tava intr-o punga si se lasa la crescut 30 minute.\nSe bate galbenusul cu iaurtul si apa. Amestecul se va folosi pentru uns branzoicile.\nSe ung branzoicile cu amestecul de galbenus si iaurt.\nSe coc la cuptor, la 180C pentru 15-20 minute, pana sunt aurii deasupra.\nSe lasa sa se raceasca.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/branzoici.jpg',
  },
  //45
  {
    name: 'Cornuri cu unt si salvie',
    category: [0],
    types: [5],
    ingredients: [15, 57, 38, 32, 28, 54, 58],
    ingredientsText:
      '350 faina alba,50 ml kefir,50 ml lapte caldut,50 ml apa calduta,50 ml ulei ,2 oua,1/2 plic drojdie uscata,1/2 lingurita sare,1 lingurita zahar,75 gr unt,10 frunze mari de salvie',
    recipe:
      'Se dizolva drojdia in apa calduta amestecata cu zahar. Se lasa la loc cald pana se inspumeaza deasupra.\nAmestecati toate ingredientele si framantati pana obtineti un aluat elastic (8 minute cu robotul de framantare sau o tura in masina de paine). Va rezulta un aluat usor de lucrat si deloc lipicios, nu va fi nevoie de faina pe masa de lucru.\nSe pune aluatul pe masa de lucru si se taie in 4 bucati egale (cam de 145 gr fiecare; folositi cantarul).\nIntindeti fiecare bucata foaie rotunda subtire. Incercati sa fie cat mai rotunda foaia.\nFrecati untul cu sarea pana e cremos folosind robotul. Adaugati salvia tocata si mixati pana se vad bucatele marunte prin unt.\nUngeti 2 foi cu cate jumatate din untul aromat. Lasati 1 cm liber pe margine.\nAsezati cate o foaie simpla peste foile cu unt. Veti obtine doua foi cu unt la mijloc, ca niste sandwichuri.\nIntindeti "sandwichurile" foi rotunde un pic mai mari decat la prima intindere (cca 25-27 diametrul). Daca tasneste putin unt afara e ok, stergeti acea zona cu un servetel.\nTaiati foile in 8, ca o pizza, folosind o rola de patiserie.\nRulati fiecare bucata dinspre partea lata spre varf, tragand de varf ca sa lungiti triunghiul. Trageti si de colturi cand incepeti sa rulati.\nAsezati cornurile in tava cuptorului (cu hartie de copt pe fund), avand grija ca varful sa fie dedesubt. Cornurile vor intra in 2 tavi.\nIntroduceti tavile in pungi de plastic si lasati-le la crescut, la loc cald timp de 1 ora.\nBateti oul cu laptele. Ungeti cornurile cu ou.\nSe coc cornurile la 200C timp de 20 minute, pana sunt placut rumene. Scoateti tava, presarati branza razuita (am folosit parmezan) pe fiecare corn si rasniti putin piper negru daca doriti. Introduceti tava la cuptor inca 1 minut, doar pana branza e topita si se lipeste de cornuri.\nServiti cornurile caldute sau la temperatura camerei. Sunt bune simple cu o cana de kefir. Dar cel mai mult imi plac taiate in doua si umplute cu felii de prosciutto cotto. Pastrati-le in punga.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/cornuri-cu-unt-si-salvie.jpg',
  },
  //46
  {
    name: 'Tartine cu sunca si rucola',
    category: [],
    types: [5],
    ingredients: [10, 50, 54, 5, 31],
    ingredientsText:
      '1 felie mare paine integrala,1-2 felii subtiri sunca uscata,50 gr branza de capra tartinabila (sau crema de branza),4-5 rosii uscate in ulei (sau rosii cherry),rucola',
    recipe:
      'Painea se prajeste in toaster sau in cuptor.\nDupa e se racoreste se unge cu branza tartinabila.\nSe aseaza felii de sunca deasupra. Se presara cu rucola si apoi se pun cateva rosii uscate. Se stropesc cu putin ulei de pe rosii.\nSe taie feliile bucati pe latime.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/tartine-cu-sunca-si-rucola.jpg',
  },
  //47
  {
    name: 'Bruschetta cu rosii',
    category: [0, 1, 2],
    types: [5],
    ingredients: [5, 60, 6],
    ingredientsText:
      '200 gr rosii (pot fi cherry),4 felii ciabatta,1 catel mare usturoi,4 frunze mari de busuioc,4 linguri ulei masline extravirgin,putina sare mare de mare',
    recipe:
      'Se striveste busuiocul cu sare mare, in mojar. Cand devin pasta, se adauga uleiul de masline si se omogenizeaza.\nRosiile se taie in cubulete. Daca nu folositi rosii cherry, curatati miezul cu seminte.\nSe toarna sosul de busuioc peste rosii si se amesteca usor. Daca ati folosit rosii cherry veti vedea ca mare parte din seminte cad la fund (practic se curata singure). Se lasa sa stea pana faceti pasii urmatori.\nSe prajeste paine, pe ambele parti, pe tigaia grill.\nSe taie catelul de usturoi la un capat ca sa expuneti miezul. Se freaca cu acel capat feliile de paine (cat de mult doriti, dupa cat de usturoiate vrei sa fie bruschetele).\nSe distribuie rosii pe fiecare felie de paine. Sucul de la rosii ramas in farfurie se toarna deasupra (cu grija, sa nu cada samburi, daca ati folosit cherry).\nSe decoreaza cu frunze proaspete de busuioc.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/bruschetta-cu-rosii.jpg',
  },
  //48
  {
    name: 'Oua cu pancetta si rosii cherry',
    category: [],
    types: [0],
    ingredients: [32, 61, 5, 6],
    ingredientsText:
      '4 oua,50-75 gr pancetta afumata,250 gr rosii cherry mici,1 catel de usturoi,1 fir rozmarin,sare,piper negru,fulgi de chili',
    recipe:
      'O tigaie de 25-28 cm (care merge si la cuptor) se pune pe foc si imediat se adauga pancetta taiata cuburi. Se lasa la foc mic, pana isi lasa grasimea in tigaie. Cand e suficienta grasime, incepeti sa amestecati din cand in cand ca sa se rumeneasca placut peste tot. Adaugati si rozmarinul in acest timp ca sa aromatizeze grasimea. Daca folositi alt tip de sunca care nu lasa grasime, completati cu 2 linguri de ulei. Trageti pancetta intr-o parte a tigaii.\nIn zona goala a tigaii adaugati rosiile cherry taiate in doua (lasati doar cateva intregi). Sotati la foc mediu, amestecand cand si cand, pana rosiile se inmoaie si incep sa lase suc. Unele dintre ele se vor sfarama cand amestecati, e ok. Va dura cam 3 minute.\nAdaugati usturoiul strivit, putina sare si amestecati cu pancetta si rosiile timp de 1 minut.\nImpingeti continutul tigaiie spre margine, facand 4 locuri mai spre centru. Acolo spargeti ouale. Le presarati cu sare, piper negru si chili daca doriti. Lasati tigaia pe foc doar pana nu mai vedeti fundul tigaii prin albus. Nu trebuie sa fie coagulat complet, doar dedesubt sa devina alb (dureaza cam 2 minute).\nMutati tigaia in cuptor, la 160C, timp de 5 minute. In aceste timp albusul se va coagula complet, dar galbenusurile raman moi.\nDecorati cu verdeata (frunze de busuioc sau patrunjel) si serviti imedi\n',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/oua-cu-pancetta-si-rosii-cherry.jpg',
  },
  //49
  {
    name: 'Menemen',
    category: [0],
    types: [0],
    ingredients: [32, 2, 22, 5],
    ingredientsText:
      '4 oua,1 ceapa mica,2 ardei semi-iuti bulgaresti,1 rosie medie spre mica, bine coapta (cca 150 gr; 5 linguri pulpa de rosii),2 linguri ulei (poate fi ulei de masline cu gust mai neutru),sare, piper, pul biber,patrunjel',
    recipe:
      'Se toaca ceapa marunt. Se curata ardeiul de cotoare si seminte si se taie bucati. Se calesc in ulei, la foc mic, pana ceapa se inmoaie, fara sa se rumeneasca insa (undeva spre 10 minute).\nSe adauga rosia data pe razatoare (o taiati in doua si o dati pe razatoare cu partea taiata pana ramaneti doar cu coaja in mana) si se continua calirea, amestecand din cand in cand, pana uleiul se aduna pe margini (cca 5 minute). Se presara cu sare, piper negru macinat si fulgi de chili.\nSe sparg ouale intr-un bol si se bat numai pana cand galbenusurile sunt sparte si usor amestecate in albus. Nu le omogenizati prea tare.\nSe da focul sub tigaie la mic si se toarna ouale. Cu o lingura de lemn amestecati constant in oua, insistand pe fund si pe margini unde are tendinta sa se coaguleze mai repede. Amestecati incet, lenes, dar constant. Incet, incet veti vedea ca se coaguleaza. Daca vi se pare ca se coaguleaza prea tare si prea repede, trageti tigaia de pe foc si continuati sa amestecati. Cand pe margini incepe sa arate usor prea uscata va puteti opri, luati tigaia de pe foc. Papara trebuie sa fie moale, ca o mamaliga.\nServiti papara presarata cu patrunjel verde tocat.',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/menemen.jpg',
  },
  //50
  {
    name: 'Tarta cu cirese si migdale',
    category: [0],
    types: [4],
    ingredients: [28, 19, 32, 15, 62, 21, 29],
    ingredientsText:
      '125 gr unt,50 gr zahar,coaja rasa de la 1 lamaie mica,230 gr faina,o priza de sare,500 gr cirese,250 ml Merlot,150 gr zahar,2 lingurite pasta de vanilie,115 gr unt,115 gr zahar,coaja rasa de la 1/2 lamaie,3 oua, ,115 gr migdale macinate (faina de migdale),20 ml Kirsch (sau 2-3 picaturi esenta de migdale)',
    recipe:
      'Cu mixerul sau in robot, frecati untul cu zaharul si coaja de lamaie pana aveti o crema moale (cca 3 minute). Adaugati oul si vanilia si mixati pana aveti o culoare omogena. Adaugati faina si sarea si mixati scurt pana aveti un aluat legat.\nPuneti aluatul pe folie de plastic, aplatizati-l cu mana sa aveti un disc mai subtire. Inveliti-l in folie si puneti-l la frigider 30 minute, sa se intareasca astfel incat sa il puteti intinde usor.\nCuratati ciresele de samburi.\nIntr-o craticioara puneti zaharul si vinul si aduceti la fierbere. Adaugati vanilia si fierbeti la foc mediu, fara sa amestecati 2 minute.\nAdaugati ciresele, dati focul la mic si fierbeti 5 minute, doar cat ciresele sa se inmoaie usor. Le scoateti cu o paleta cu gauri intr-o farfurie. Lichidul ramas in cratita il fierbeti la foc mediu spre mic pana se ingroasa un pic, capata consistenta de sirop (cca 10 minute). Lasati siropul sa se raceasca complet.\nIntindeti aluatul foaie subtire din care puteti decupa cu ajutorul unei farfurii un disc de 25 cm. Daca cumva l-ati lasat mai mult la frigider si aluatul crapa la intins, doar il lasati sa stea afara cateva minute pana redevine usor de intins. daca afara e foarte cald si incepe sa se lipeasca de sucitor, doar il dati asa cum e la frigider si continuati sa il intindeti dupa ce se intareste. Aluatul nu e sensibil, chiar daca se rupe il puteti "petici" la loc apasand cu mana.\nAsezati aluatul intr-o tava rotunda de tarta sau una rotunda cu pereti detasabili (de 20 cm diametrul). Intepati fundul tartei cu furculita din loc in loc, ca sa nu se umfle la copt. Dati tava la congelator 15 minute (daca nu va grabiti o puteti lasa la frigider minim 30 minute).\nPuneti hartie de copt peste crusta si umpleti-o cu boabe de fasole sau orez. Coaceti crusta la 180C timp de 15 minute, apoi scoateti hartia si boabele si continuati sa o coaceti pana e usor rumena pe margini si uscata pe fund (cca 10-15 minute). Scoateti crusta din cuptor.\nFrecati untul cu zaharul, vanilia si coaja de lamaie pana aveti o crema moale si pufoasa (cca 3 minute). Adaugati cate un ou pe rand si mixati pana aveti o culoare omogena. Adaugati faina, migdalele macinate si Kirsch. Mixati pana se omogenizeaza. Turnati crema obtinuta in crusta.\nCoaceti tarta la 160C cam 20 minute',
    imgUrl: 'https://www.e-retete.ro/imagini/retete/tarta-cu-cirese-si-crema-de-migdale.jpg',
  },
];

localStorage.setItem('ingredients', JSON.stringify(ingredients));
localStorage.setItem('recipes', JSON.stringify(recipes));
localStorage.setItem('categories', JSON.stringify(categories));
localStorage.setItem('types', JSON.stringify(types));
// localStorage.setItem(
//   'selectedProducts',
//   JSON.stringify(ingredients.map((el) => ingredients.indexOf(el))),
// );
localStorage.setItem('selectedProducts', JSON.stringify([]));
