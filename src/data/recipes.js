const recipes = [
  {
    "id": "asai",
    "title": "asai-perrito",
    "ingredients": [
      "YOGURT 2KG",
      "SOBRE ASAI 4 PAQUETES"
    ],
    "description": ""
  },
  {
    "id": "granola",
    "title": "granola-perrito",
    "ingredients": [
      "AVENA 1 PAQUETE",
      "ALMENDRA GRANILLO 600GR",
      "MEXCLA SEMILLAS 1,2KG",
      "AGUA 400ML",
      "MIEL 550ML",
      "ACEITE DE OLIVA 300ML",
      "CANELA 3X15ML",
      "JENGIBRE POLVO 2X15ML",
      "ESENCIA VAINILLA 2X15ML"
    ],
    "description": ""
  },
  {
    "id": "tzatziki",
    "title": "tzatziki-perrito",
    "ingredients": [
      "PEPINO 4UD",
      "YOGURT 2KG",
      "LIMON 3",
      "HIERBA BUENA ½ MANOJO",
      "CILANTRO ½ MANOJO",
      "ENELDO ½ MANOJO",
      "AJO 2 DIENTES",
      "SAL Y PIMIENTA"
    ],
    "description": ""
  },
  {
    "id": "guacamole",
    "title": "guacamole-perrito",
    "ingredients": [
      "AGUACATE 2UD",
      "TABASCO 5ML",
      "LIMA 1UD",
      "CEBOLLA ROJA ¼",
      "SAL, PIMIENTA Y ACEITE DE OLIVA"
    ],
    "description": ""
  },
  {
    "id": "pico-de-gallo",
    "title": "pico de gallo-perrito",
    "ingredients": [
      "PIMIENTO ROJO 1UD",
      "PIMIENTO VERDE 1UD",
      "CEBOLLA ROJA 1UD",
      "AJO 2 DIENTES",
      "CILANTRO 1 PUÑADO",
      "VINAGRE DE VINO 100ML",
      "ACEITE DE OLIVA 200ML",
      "OREANO 15ML",
      "COMINO 2X1ML",
      "SAL Y PIMIENTA"
    ],
    "description": ""
  },
  {
    "id": "3-mostazas",
    "title": "3 mostazas-perrito",
    "ingredients": [
      "DIJON 1 BOTE",
      "ANTIGUA 1 BOTE",
      "CHOVI 200ML",
      "MAYONESA 600ML"
    ],
    "description": ""
  },
  {
    "id": "mayo-picante",
    "title": "mayo picante-perrito",
    "ingredients": [
      "MAYONESA 1KG",
      "SRIRACHA 100ML",
      "SAMBAL 100ML"
    ],
    "description": ""
  },
  {
    "id": "vinagre-japo",
    "title": "vinagre japo-perrito",
    "ingredients": [
      "VINAGRE ARROZ 500ML",
      "VINAGRE MANZANA 500ML",
      "AZUCAR ½ KG"
    ],
    "description": ""
  },
  {
    "id": "mayo-japo",
    "title": "mayo japo-perrito",
    "ingredients": [
      "MAYONESA 1KG",
      "SALSA SOJA 100ML",
      "VINAGRE JAPO 100ML"
    ],
    "description": ""
  },
  {
    "id": "mayo-trufa",
    "title": "mayo trufa-perrito",
    "ingredients": [
      "MAYONESA 1KG",
      "TARTUFFO 100GR",
      "ACEITE TRUFA 2 CUCHARADAS"
    ],
    "description": ""
  },
  {
    "id": "mayo-kimchi",
    "title": "mayo kimchi-perrito",
    "ingredients": [
      "MAYONESA 1KG",
      "KIMCHI BASE 100ML"
    ],
    "description": ""
  },
  {
    "id": "salsa-blt",
    "title": "salsa blt-perrito",
    "ingredients": [
      "MAYONESA 1KG",
      "KETCHUP 250ML",
      "MOSTAZA 125ML",
      "PEPINILLO DULCE PICADO 200ML",
      "CEBOLLA ROJA PICADA 200ML",
      "LIMON 1",
      "PIMENTON 15ML",
      "TABASCO 15ML",
      "SAL Y PIMIENTA"
    ],
    "description": ""
  },
  {
    "id": "ensaladilla-atun",
    "title": "ensaladilla atún-perrito",
    "ingredients": [
      "ATUN 1KG",
      "MAYONESA 400ML",
      "ALCAPARRAS 100ML",
      "SAL Y PIMIENTA"
    ],
    "description": ""
  },
  {
    "id": "pesto-tomate",
    "title": "pesto tomate-perrito",
    "ingredients": [
      "TOMATE SECO ½ BOTE",
      "PARMESANO 75GR",
      "ALMENDRA GRANILLO 100GR",
      "ACEITE DE OLIVA HASTA TAPAR",
      "SAL Y PIMIENTA"
    ],
    "description": ""
  },
  {
    "id": "tahine",
    "title": "tahine-perrito",
    "ingredients": [
      "SESAMO TOSTADO 1KG",
      "ACEITE DE OLIVA 200/300ML",
      "SAL"
    ],
    "description": ""
  },
  {
    "id": "queso-rabano",
    "title": "queso rábano-perrito",
    "ingredients": [
      "QUESO CREMA 4 PAQUETES",
      "LIMA ½",
      "TAJIN MAXICANO 10ML",
      "RABANO 100ML"
    ],
    "description": ""
  },
  {
    "id": "salsa-cacahuete",
    "title": "salsa cacahuete-perrito",
    "ingredients": [
      "MANTEQUILLA DE CACAHUETE",
      "AGUA"
    ],
    "description": ""
  },
  {
    "id": "cherrys-confitados",
    "title": "cherrys confitados-perrito",
    "ingredients": [
      "TOMATE CHERRY",
      "AJO LAMINADO",
      "ACEITE DE OLIVA",
      "AZUCAR, SAL Y PIMIENTA"
    ],
    "description": ""
  },
  {
    "id": "burger-carne",
    "title": "burger carne-perrito",
    "ingredients": [
      "CARNE PICADA 5KG",
      "CEBOLLA 3",
      "AJO POLVO 30ML",
      "HUEVO 5",
      "DIJON 1 BOTE",
      "PIMENTON DULCE 30ML",
      "OREGANO 100ML"
    ],
    "description": ""
  },
  {
    "id": "burger-soja",
    "title": "burger soja-perrito",
    "ingredients": [
      "SOJA TEXTURIZADA 400GR CON 850ML AGUA Y 250 ML SOJA",
      "HUEVOS 3",
      "CEBOLLA 2",
      "HARINA INTEGRAL 250GR",
      "PIMENTON AHUMADO 15ML",
      "SAL Y PIMIENTA"
    ],
    "description": ""
  },
  {
    "id": "pulled-beef",
    "title": "pulled beef-perrito",
    "ingredients": [
      "VACIO DE TERNERA 5KG",
      "SALSA SOJA 800ML",
      "CHIMICHURRI 200ML",
      "OREGANO 200ML",
      "AJO 1 CABEZA",
      "AGUA"
    ],
    "description": ""
  },
  {
    "id": "falafel",
    "title": "falafel-perrito",
    "ingredients": [
      "GARBANZOS HIGRATADOS 1KG",
      "CEBOLLA 4",
      "PEREJIL 1 MANOJO",
      "CILANTRO 2 MANOJOS",
      "AJO 1 CABEZA",
      "LIMON 3",
      "TAJIN MEXICANO 30ML",
      "SAL 60ml Y PIMIENTA"
    ],
    "description": ""
  },
  {
    "id": "tom-kha",
    "title": "tom kha-perrito",
    "ingredients": [
      "CEBOLLA 3",
      "LEMON GRASS 5",
      "GALANGA ½ PAQUETE",
      "JENJIBRE 100GR",
      "HOJAS LIMA 15",
      "PASTA TOM KHA 1",
      "LECHE COCO 3 LITROS",
      "CALDO VEGETAL 3 LITROS"
    ],
    "description": ""
  },
  {
    "id": "wakame",
    "title": "wakame-perrito",
    "ingredients": [
      "WAKAME",
      "VINAGRETA",
      "SESAMO"
    ],
    "description": ""
  },
  {
    "id": "pepino-pickle-5un",
    "title": "pepino pickle 5un.-perrito",
    "ingredients": [
      "SALSA SOJA 500ML",
      "ZUMO NARANJA 250ML",
      "VINAGRE 50ML",
      "ACEITE DE SESAMO 50ML"
    ],
    "description": ""
  },
  {
    "id": "mango",
    "title": "mango-perrito",
    "ingredients": [
      "MANGO ½ KG",
      "ACEITE DE SESAMO 15ML",
      "TAJIN MEXICANO 15ML",
      "SAL"
    ],
    "description": ""
  },
  {
    "id": "salmon-bowl",
    "title": "salmon bowl-perrito",
    "ingredients": [
      "SALMON PICADO 1KG",
      "SALSA SOJA 50ML",
      "LIMON 1",
      "CEBOLLINO"
    ],
    "description": ""
  },
  {
    "id": "coleslaw",
    "title": "coleslaw-perrito",
    "ingredients": [
      "COL ¼",
      "ZANAHORIA 2UD",
      "JENGIBRE ENCURTIDO 100ML",
      "MAYO JAPO 200ML",
      "SALSA SOJA 30ML",
      "ACEITE DE SESAMO 15ML",
      "VINAGRE 15ML"
    ],
    "description": ""
  },
  {
    "id": "kimchi-col",
    "title": "kimchi col-perrito",
    "ingredients": [
      "COL LOMBARDA 1 GRANDE",
      "SALSA SOJA 500ML",
      "ACEITE DE SESAMO 100ML",
      "SAMBAL 100ML",
      "VINAGRE 100ML",
      "ZUMO NARANJA 250ML",
      "SAL 15ML"
    ],
    "description": ""
  },
  {
    "id": "chutney",
    "title": "chutney-perrito",
    "ingredients": [
      "MANZANA O PERA 5KG",
      "JENGIBRE 200GR",
      "CEBOLLA 1 GRANDE",
      "AZUCAR 600GR",
      "VINAGRE 400ML",
      "CHILE 1",
      "GARAM MASASA 30ML"
    ],
    "description": ""
  },
  {
    "id": "pollo-tandoori",
    "title": "pollo tandoori-perrito",
    "ingredients": [
      "CONTRAS DE POLLO 3KG",
      "LECHE DE COCO 750ML",
      "PASTA AJO Y JENGIBRE 30ML",
      "LIMON 2",
      "TANDOORI 75GR",
      "SAL Y PIMIENTA"
    ],
    "description": ""
  },
  {
    "id": "salsa-atun",
    "title": "salsa atún-perrito",
    "ingredients": [
      "SALSA SOJA 1L",
      "ZUMO NARANJA 400ML",
      "JENGIBRE 100GR",
      "CILANTRO ½ MANOJO",
      "AJO 1 CABEZA",
      "SWEET CHILLY 100ML",
      "ACEITE DE SESAMO 100ML"
    ],
    "description": ""
  },
  {
    "id": "verduras-asadas",
    "title": "verduras asadas-perrito",
    "ingredients": [
      "CALABACIN 2UD",
      "BERENJENAS 2UD",
      "COLIFLOR 1UD",
      "CHAMPIÑONES 250GR",
      "AJO 1 CABEZA",
      "PIMENTON AHUMADO 30ML",
      "ACEITE DE OLIVA",
      "SAL Y PIMIENTA"
    ],
    "description": ""
  },
  {
    "id": "masa-quiche-2-moldes",
    "title": "masa quiche (2 moldes)-perrito",
    "ingredients": [
      "HARINA COMUN 4DL",
      "HARINA INTEGRAL 2DL",
      "MANTEQUILLA 200GR",
      "HUEVOS 2",
      "TOMILLO 15ML",
      "SAL 2ML",
      "30-50 LECHE"
    ],
    "description": ""
  },
  {
    "id": "relleno-almendra",
    "title": "relleno almendra-perrito",
    "ingredients": [
      "ALMENDRA MOLIDA 500GR",
      "YEMA 75GR",
      "LECHE ALMENDRA 150ML",
      "AZUCAR 200GR",
      "AZUCAR VAINILLA 50GR"
    ],
    "description": ""
  },
  {
    "id": "almibar",
    "title": "almíbar-perrito",
    "ingredients": [
      "AGUA 500ML",
      "AZUCAR 500ML",
      "LIMON 1"
    ],
    "description": ""
  },
  {
    "id": "tapa-crumble",
    "title": "tapa crumble-perrito",
    "ingredients": [
      "COPOS AVENA 7DL",
      "AZUCAR 3DL",
      "HARINA COMUN 2DL",
      "MANTEQUILLA 270GR"
    ],
    "description": ""
  },
  {
    "id": "crumble-manzana",
    "title": "crumble manzana-perrito",
    "ingredients": [
      "MANZANA 1KG",
      "JENGIBRE POLVO 15ML",
      "CANELA 30ML",
      "AZUCAR 150ML",
      "MANTEQUILLA 100G"
    ],
    "description": "Manzana: 30min 180C. Crumble: defrost 3min 400g - 25min 180C."
  },
  {
    "id": "crumble-frambuesa",
    "title": "crumble frambuesa-perrito",
    "ingredients": [
      "FRAMBUESA 750GR",
      "AZUCAR 150GR",
      "MAIZENA 3OML"
    ],
    "description": ""
  },
  {
    "id": "masa-rayada",
    "title": "masa rayada-perrito",
    "ingredients": [
      "HARINA 9DL",
      "AZUCAR 240GR",
      "MANTEQUILLA 400GR",
      "HUEVOS 2",
      "RAYADURA DE 2 NARANJAS"
    ],
    "description": ""
  },
  {
    "id": "tarta-lima",
    "title": "tarta lima-perrito",
    "ingredients": [
      "CLARA HUEVO 380GR",
      "AZUCAR 200GR",
      "ALMENDRA MOLIDA 200GR",
      "LIMA RAYADA 3",
      "MANTEQUILLA CLARIFICADA 160ML"
    ],
    "description": ""
  },
  {
    "id": "bolita-choco",
    "title": "bolita choco-perrito",
    "ingredients": [
      "AVENA 9DL",
      "AZUCAR 4DL",
      "AZUCAR VAINILLA 50ML",
      "CACAO POLVO 1DL",
      "MANTEQUILLA 300DL",
      "CAFÉ 4 EXPRESOS",
      "RON 15ML",
      "SAL 5ML"
    ],
    "description": ""
  },
  {
    "id": "mayo-curry",
    "title": "mayo curry-perrito",
    "ingredients": [],
    "description": ""
  },
  {
    "id": "panceta-confiada",
    "title": "panceta confiada-perrito",
    "ingredients": [],
    "description": ""
  },
  {
    "id": "mayo-nduja",
    "title": "mayo nduja-perrito",
    "ingredients": [],
    "description": ""
  },
  {
    "id": "cebolla-pickle",
    "title": "cebolla pickle-perrito",
    "ingredients": [],
    "description": ""
  },
  {
    "id": "salsa-miso",
    "title": "salsa miso-perrito",
    "ingredients": [],
    "description": ""
  },
  {
    "id": "mayo-chipotl",
    "title": "mayo chipotl-perrito",
    "ingredients": [],
    "description": ""
  },
  {
    "id": "tandoori-pollo",
    "title": "tandoori pollo-perrito",
    "ingredients": [
      "POLLO 2KG",
      "TANDOORI 2 CUCHARADAS",
      "LIMÓN EXPRIMIDO 1",
      "JENGIBRE Y AJO (ALIÑO) 2 CUCHARADAS",
      "SAL Y PIMIENTA",
      "YOGURT GRIEGO 2 CUCHARADAS"
    ],
    "description": ""
  },
  {
    "id": "arroz-quinoa",
    "title": "arroz quinoa-perrito",
    "ingredients": [
      "AGUA 3 PARTES",
      "ARROZ 2 PARTES",
      "SAL",
      "QUINOA 1KG",
      "AGUA 1,8KG",
      "CÚRCUMA 15ML",
      "ACEITE 100ML",
      "LIMÓN 1 (PIEL + ZUMO)",
      "SAL"
    ],
    "description": "Mezclar primero la quinoa con la sal, el aceite y la cúrcuma. Luego agregar el agua."
  },
  {
    "id": "galletas-de-almendra-mama-de-stef",
    "title": "galletas de almendra mamá de stef-perrito",
    "ingredients": [
      "ALMENDRAS TRITURADAS 500GR",
      "AZÚCAR 300GR",
      "RALLADURA DE UN LIMÓN"
    ],
    "description": "Mezclar bien y guardar enfilmado por dos horas. Mezclar con 4 claras al punto nieve y una vez todo mezclado agregar la última clara poco a poco. Tiene que quedar una mezcla pegajosa. Armar bolitas de 40gr, colocar almendras laminadas al final presionándolas en el centro. Cocinar por unos 15 minutos a 130°C. Ojo, corroborar tiempos y temperatura."
  },
  {
    "id": "marinado-tempura-verduras-asadas",
    "title": "marinado tempura verduras asadas-perrito",
    "ingredients": [
      "SODA 1/4 BOTELLA",
      "SEMILLAS DE SÉSAMO MEZCLA",
      "RALLADO SIN GLUTEN",
      "SAL"
    ],
    "description": ""
  },
  {
    "id": "claras-punto-nieve-para-galletas-almendras",
    "title": "claras punto nieve (para galletas almendras)-perrito",
    "ingredients": [
      "CLARAS 190GR"
    ],
    "description": "8 minutos en Thermomix. Velocidad 4."
  },
  {
    "id": "salsa-para-atun",
    "title": "salsa para atún-perrito",
    "ingredients": [
      "SALSA SOJA 1LT",
      "ZUMO NARANJA 0,5LTS",
      "JENGIBRE 150GR",
      "AJO 60G",
      "CILANTRO 100G",
      "ACEITE SÉSAMO 100GR",
      "SWEET CHILI 230GR",
      "ZUMO DE 3 LIMAS"
    ],
    "description": ""
  },
  {
    "id": "mezcla-semillas",
    "title": "mezcla semillas-perrito",
    "ingredients": [
      "MEZCLA SÉSAMO 1/2 KG",
      "PIPAS 1/2 KG",
      "CALABAZA 1/2 KG",
      "LINO 1/2 KG"
    ],
    "description": ""
  },
  {
    "id": "pan-sin-gluten",
    "title": "pan sin gluten-perrito",
    "ingredients": [
      "PARA 3 PANES",
      "AGUA 1200",
      "LEVADURA 50",
      "SAL",
      "OLIVA VIRGEN 100ML",
      "PIPAS DE GIRASOL 3 PUÑADOS",
      "PREMEZCLA 1KG"
    ],
    "description": "Batir todo rápido sin que se endurezca. Pasar a molde y espolvorear semillas."
  },
  {
    "id": "pan-masa-madre",
    "title": "pan masa madre-perrito",
    "ingredients": [
      "AGUA 2LTS",
      "LEVADURA 50",
      "HARINA INTEGRAL 1,8KG",
      "SAL 50GR",
      "PIPAS 5 PUÑADOS",
      "POTE GRANDE DE MASA MADRE"
    ],
    "description": ""
  },
  {
    "id": "alimento-masa-madre",
    "title": "alimento masa madre-perrito",
    "ingredients": [
      "AGUA 600",
      "HARINA INTEGRAL 6DL",
      "POTE PEQUEÑO DE MASA MADRE"
    ],
    "description": "Luego se reparte mitad y mitad."
  },
  {
    "id": "salsa-holandesa",
    "title": "salsa holandesa-perrito",
    "ingredients": [
      "YEMAS 10",
      "AGUA 100ML",
      "LIMA 1",
      "SAL 2ML",
      "MANTEQUILLA CLARIFICADA 250ML",
      "CEBOLLINO"
    ],
    "description": "8:30 en Thermomix a 70°C, velocidad 4. A los 6 minutos añadir 250ml de mantequilla clarificada. Finalizar con cebollino."
  },
  {
    "id": "brownie",
    "title": "brownie-perrito",
    "ingredients": [
      "HUEVOS 5",
      "AZÚCAR 300",
      "MANTEQUILLA 250",
      "CHOCOLATE EN BARRA 400",
      "HARINA COMÚN 150",
      "NUECES PICADAS 100GR"
    ],
    "description": "Montar los huevos con el azúcar en Thermomix velocidad 5 durante 8 minutos. Fundir la mantequilla y el chocolate en microondas en plato hondo tapado con film durante 3 minutos a máxima potencia. Mezclar los huevos montados con el chocolate y la mantequilla. Agregar la harina y las nueces picadas y mezclar. En una bandeja mediana de horno poner toda la mezcla y hornear a 180°C durante 20 minutos. Dejar enfriar en el molde."
  },
  {
    "id": "cebolla-marinada",
    "title": "cebolla marinada-perrito",
    "ingredients": [
      "AZÚCAR 150G (1 PARTE)",
      "VINAGRE 300G (2 PARTES)",
      "AGUA 450G (3 PARTES)",
      "CEBOLLA ROJA 4"
    ],
    "description": "Añadir un poco de sal a la cebolla para que sude. Calentar las partes hasta que quede homogéneo y añadir a las cebollas en juliana."
  },
  {
    "id": "salsa-barbacoa",
    "title": "salsa barbacoa-perrito",
    "ingredients": [
      "COCA COLA 2 LATAS",
      "KETCHUP 660ML",
      "MIEL 100ML",
      "CEBOLLA 1 EN TROZOS DE 1CM",
      "CURRY POLVO 1GR"
    ],
    "description": "Cocinar todo hasta reducir un poco."
  }
];

export default recipes;