// src/data/passages.js

export const START_PASSAGE = "Pasaje sin título";

export const passages = {
  "Pasaje sin título": {
    id: 1,
    title: "Pasaje sin título",
    text: "Asi que has venido...",
    audio: "Breath",
    image: "imagen1.gif",
    options: [
      { text: "A que te refieres?", target: "A que te refieres?" },
      { text: "Obviamente", target: "Obviamente" },
      { text: "Por ti...", target: "Por ti..." }
    ]
  },
  "A que te refieres?": {
    id: 2,
    title: "A que te refieres?",
    text: "Me refiero a que... Genuinamente pensaba que no llegaria hasta aqui (hablo hace meses), pensaba que las personas no sienten tanto como yo... Si es que estamos aqui y ahora juntos valeria entonces...",
    audio: "Lost girl",
    image: "imagen2.gif",
    options: [
      { text: "Entonces...?", target: "Entonces...?" },
      { text: "Vamos al grano si?", target: "Vamos al grano si?" }
    ]
  },
  "Obviamente": {
    id: 3,
    title: "Obviamente",
    text: "Okay señorita obviedades, dejemonos de charla y vamos directo al grano entonces HMP! (#%#$)",
    audio: "sans.",
    image: "imagen4.jpg",
    options: [
      { text: "Pero amor-", target: "Pero amor-" },
      { text: "Mas te vale", target: "Mas te vale" }
    ]
  },
  "Por ti...": {
    id: 4,
    title: "Por ti...",
    text: "¿Por mi mi amor? Obviamente que seria por mi EN PLAN ¿Por quien mas seria? Yo soy el unico en tu vida mensa",
    audio: "sans.",
    image: "imagen4.jpg",
    options: [
      { text: "Puedes tomartelo mas enserio???", target: "Puedes tomartelo mas enserio???" },
      { text: "Ale! >:(", target: "Ale! >:(" }
    ]
  },
  "Puedes tomartelo mas enserio???": {
    id: 5,
    title: "Puedes tomartelo mas enserio???",
    text: "Esta bien... Esta bien... Continuamos entonces",
    options: [
      { text: "Mas te vale", target: "Mas te vale" }
    ]
  },
  "Ale! >:(": {
    id: 6,
    title: "Ale! >:(",
    text: '"#%"% PERO AMOR, okokok esta bien',
    options: [
      { text: "Mas te vale", target: "Mas te vale" }
    ]
  },
  "Mas te vale": {
    id: 7,
    title: "Mas te vale",
    text: "¿Te amo mucho si?",
    audio: "Home",
    options: [
      { text: "Y yo a ti", target: "Y yo a ti" }
    ]
  },
  "Entonces...?": {
    id: 8,
    title: "Entonces...?",
    text: "Entonces busque mil y un motivos para no estar contigo, mil y un motivos para dudar de ti, mil y un motivos para no confiar y aun asi te sigo amando Valeria...",
    options: [
      { text: "(Eso no es lindo de escuchar...)", target: "(Eso no es lindo de escuchar...)" },
      { text: "Pero Ale... Tienes que confiar en mi", target: "Pero Ale... Tienes que confiar en mi" }
    ]
  },
  "Vamos al grano si?": {
    id: 9,
    title: "Vamos al grano si?",
    text: "De acuerdo amor... Te amo mucho si?",
    audio: "Home",
    options: [
      { text: "Y yo a ti", target: "Y yo a ti" }
    ]
  },
  "(Eso no es lindo de escuchar...)": {
    id: 10,
    title: "(Eso no es lindo de escuchar...)",
    text: "Aun sigo aca, contigo, quizas pasamos momentos tanto terribles como emocionantes y felices... Yo genuinamente nunca dure ni siquiera un año con una persona",
    options: [
      { text: "(No se si sea bueno saber eso...)", target: "(No se si sea bueno saber eso...)" },
      { text: "Nosotros podemos hacerlo Ale", target: "Nosotros podemos hacerlo Ale" }
    ]
  },
  "Pero Ale... Tienes que confiar en mi": {
    id: 11,
    title: "Pero Ale... Tienes que confiar en mi",
    text: "Yo confio en ti Valeria... Lo siento, me fui del tema",
    options: [
      { text: "Nonono, que me querias decir?", target: "Nonono, que me querias decir?" },
      { text: "Está bien", target: "Está bien" }
    ]
  },
  "(No se si sea bueno saber eso...)": {
    id: 12,
    title: "(No se si sea bueno saber eso...)",
    text: "Yo se que suena a que no esperaba que nuestra relacion dure, como si no hubiera tenido fe...",
    options: [
      { text: "(Realmente suena asi)", target: "(Realmente suena asi)" },
      { text: "Tranquilo, no pensé en eso", target: "Tranquilo, no pensé en eso" }
    ]
  },
  "Nosotros podemos hacerlo Ale": {
    id: 13,
    title: "Nosotros podemos hacerlo Ale",
    text: "Tienes razon, podemos lograrlo, me fui del tema, perdon",
    options: [
      { text: "Nonono, que me querias decir?", target: "Nonono, que me querias decir?" },
      { text: "Está bien", target: "Está bien" }
    ]
  },
  "Nonono, que me querias decir?": {
    id: 14,
    title: "Nonono, que me querias decir?",
    text: "Nada, yo se que querias apoyarme pero no te preocupes ok?",
    options: [
      { text: "Está bien", target: "Está bien" }
    ]
  },
  "Está bien": {
    id: 15,
    title: "Está bien",
    text: "¿Te amo mucho si?",
    audio: "Home",
    options: [
      { text: "Y yo a ti", target: "Y yo a ti" }
    ]
  },
  "(Realmente suena asi)": {
    id: 16,
    title: "(Realmente suena asi)",
    text: "Pero es justamente lo contrario Valeria, si realmente hubiera pensado eso esta relacion hubiera terminado hace mucho tiempo, yo se que todo lo que hemos pasado hasta ahora valio la pena, cada cosa, cada regalo, cada lagrima, cada segundo y eso lo se por como me siento ahora... No necesariamente tengo que sentirme igual siempre pero quiero que sepas que aun asi este triste, enojado, feliz o distraido yo siempre voy a pensar en ti Valeria, al final del dia siempre voy a terminar preocupandome por tu bienestar <3",
    options: [
      { text: "(Seguiré escuchando)", target: "(Seguiré escuchando)" }
    ]
  },
  "Tranquilo, no pensé en eso": {
    id: 17,
    title: "Tranquilo, no pensé en eso",
    text: "Lo siento, me fui del tema",
    options: [
      { text: "Nonono, que me querias decir?", target: "Nonono, que me querias decir?" },
      { text: "Está bien", target: "Está bien" }
    ]
  },
  "Y yo a ti": {
    id: 18,
    title: "Y yo a ti",
    text: "En fin, solo queria que esto fuera especial mi amor... Ya son 6 meses juntos!!!",
    audio: "Hotel",
    image: "imagen3.png",
    options: [
      { text: "Siiiiiiiiii", target: "Siiiiiiiiii" },
      { text: "Ah si? No me digas", target: "Ah si? No me digas" }
    ]
  },
  "(Seguiré escuchando)": {
    id: 19,
    title: "(Seguiré escuchando)",
    text: "- Ale solamente te miró a los ojos -\n\n- Conseguiste un fragmento -",
    options: [
      { text: "(Ver el fragmento mas de cerca)", target: "(Ver el fragmento mas de cerca)" }
    ]
  },
  "(Ver el fragmento mas de cerca)": {
    id: 20,
    title: "(Ver el fragmento mas de cerca)",
    text: '"contraseña" "dc"',
    options: [
      { text: "(Quizas deba buscar la primera palabra en algun lado...", target: "(Quizas deba buscar la primera palabra en algun lado..." }
    ]
  },
  "Pero amor-": {
    id: 21,
    title: "Pero amor-",
    text: "¿Te amo mucho si?",
    audio: "Home",
    options: [
      { text: "Y yo a ti", target: "Y yo a ti" }
    ]
  },
  "Siiiiiiiiii": {
    id: 22,
    title: "Siiiiiiiiii",
    text: "SIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII2$&#%(/#%&RAJSFHVDGLKJSADFHGVSKJHG",
    audio: "Bonetrousle",
    image: "imagen5.jpg",
    options: [
      { text: "pero-", target: "pero-" }
    ]
  },
  "Ah si? No me digas": {
    id: 23,
    title: "Ah si? No me digas",
    text: "Wow señorita patas de hielo, bssbsbsbs (sonido de persona teniendo frio) hasta aca siento el frio de tu corazon",
    audio: "Bonetrousle",
    image: "imagen5.jpg",
    options: [
      { text: "pero-", target: "pero-" },
      { text: "Amor >:(", target: "Amor >:(" }
    ]
  },
  "Amor >:(": {
    id: 24,
    title: "Amor >:(",
    text: "Esta bien esta bien, voy a retomar la postura EHEHEHEM antes de saber si eres digna de mi PRECIOSO, MAJESTUOSO, ESPECTACULAR Y BRILLANTE regalo... tengo unas preguntas para ti",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "pero-": {
    id: 25,
    title: "pero-",
    text: "Esta bien esta bien, voy a retomar la postura EHEHEHEM antes de saber si eres digna de mi precioso y majestuoso regalo tengo unas preguntas para ti",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "¿Eh?": {
    id: 26,
    title: "¿Eh?",
    text: "Asi es señorita, espero que hayas estudiado muy bien",
    audio: "Dating Tense!",
    image: "imagen6.gif",
    options: [
      { text: "Ale ya >:( tomatelo enserio", target: "Ale ya >:( tomatelo enserio" },
      { text: "Pero amorrr afffghjahwj (sonidos de pereza)", target: "Pero amorrr afffghjahwj (sonidos de pereza)" }
    ]
  },
  "Ale ya >:( tomatelo enserio": {
    id: 27,
    title: "Ale ya >:( tomatelo enserio",
    text: "ME LO ESTOY TOMANDO MUY ENSERIO D:< ESA ES UNA OFENSA PARA MI",
    audio: "Dating Fight!",
    options: [
      { text: "TOMARSELO ENSERIO TAMBIEN", target: "TOMARSELO ENSERIO TAMBIEN" }
    ]
  },
  "Pero amorrr afffghjahwj (sonidos de pereza)": {
    id: 28,
    title: "Pero amorrr afffghjahwj (sonidos de pereza)",
    text: "Nada de bostezos calajo, eta vaina e seria",
    options: [
      { text: "Esta bieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen", target: "Esta bieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen" },
      { text: "Esta bien amor", target: "Esta bien amor" }
    ]
  },
  "Esta bieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen": {
    id: 29,
    title: "Esta bieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen",
    text: "eeeeeeee? EEE E EEE E E EEE\n\n- Ale se transformó en un ee e ee e e trans extiende su ano *digo su mano y te regresó en el tiempo -",
    audio: "Megalovania",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "Esta bien amor": {
    id: 30,
    title: "Esta bien amor",
    text: "Aver aver... ¿Cual es el arma favorita de Ale?",
    audio: "Quiz!",
    options: [
      { text: "Espada", target: "Espada" },
      { text: "Lanza", target: "Lanza" }
    ]
  },
  "TOMARSELO ENSERIO TAMBIEN": {
    id: 31,
    title: "TOMARSELO ENSERIO TAMBIEN",
    text: "MUY BIEN, AHORA SOLO TENDRAS 8 SEGUNDOS PARA RESPONDER CADA PREGUNTA JOJOJOJOJOJO",
    timer: 8,
    timeoutTarget: "¿Eh?",
    options: [
      { text: "PERO ALE", target: "PERO ALE" },
      { text: "JOJOJOJO", target: "JOJOJOJO" }
    ]
  },
  "PERO ALE": {
    id: 32,
    title: "PERO ALE",
    text: "- Respuesta incorrecta -",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "JOJOJOJO": {
    id: 33,
    title: "JOJOJOJO",
    text: "BIEN DICHO, JOJOJOJO ¿CUAL ES EL COLOR FAVORITO DE ALE Y SOPH?",
    sfx: "JOJOJO",
    timer: 8,
    timeoutTarget: "¿Eh?",
    options: [
      { text: "AZUL", target: "AZUL" },
      { text: "MORAO", target: "MORAO" },
      { text: "AZUL MORAO", target: "AZUL MORAO" },
      { text: "AMARILLO", target: "AMARILLO" }
    ]
  },
  "AZUL": {
    id: 34,
    title: "AZUL",
    text: "- Ese es solo el de Ale!!! -",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "MORAO": {
    id: 35,
    title: "MORAO",
    text: "- Ese es solo el de la papita asada!! -",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "AZUL MORAO": {
    id: 36,
    title: "AZUL MORAO",
    text: "Azul + Morado = Azul morao quien lo diria JOJOJOJO SIGUIENTE PREGUNTA... ¿CON QUE PERSONAJE SE ME ASOCIA DE FORMA COMICA?",
    timer: 8,
    timeoutTarget: "¿Eh?",
    options: [
      { text: "WISIN", target: "WISIN" },
      { text: "YANDEL", target: "YANDEL" },
      { text: "SEÑOR 4K", target: "SEÑOR 4K" },
      { text: "Un perrito blanco con correa sentado con una chaqueta de color azul", target: "Un perrito blanco con correa sentado con una chaqueta de color azul" }
    ]
  },
  "AMARILLO": {
    id: 37,
    title: "AMARILLO",
    text: '- ESE ES EL COLOR FAVORITO DE LA ELEKTRONIKA #"%"#& - - respuesta incorrecta -',
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "WISIN": {
    id: 38,
    title: "WISIN",
    text: "$&#&#54 PQ CALAJOS ME LLAMAN WISIN, En fin... SIGUIENTE PREGUNTA ¿CUAL ES MI CABALLA FAVORITA DE UMAMUSUME?",
    timer: 8,
    timeoutTarget: "¿Eh?",
    options: [
      { text: "LA CABALLA COMELONA", target: "LA CABALLA COMELONA" },
      { text: "LA CABALLA YANDERE", target: "LA CABALLA YANDERE" },
      { text: "LA CABALLA QUE TE PATEA EN LA CARA", target: "LA CABALLA QUE TE PATEA EN LA CARA" }
    ]
  },
  "YANDEL": {
    id: 39,
    title: "YANDEL",
    text: "- ESA ES ANDREAAAAAAAA -",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "SEÑOR 4K": {
    id: 40,
    title: "SEÑOR 4K",
    text: "- ESO NI SIQUIERA ES UN PERSONAJE MENSA -",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "Un perrito blanco con correa sentado con una chaqueta de color azul": {
    id: 41,
    title: "Un perrito blanco con correa sentado con una chaqueta de color azul",
    text: "¿Enserio miamor? ¿Y si fuera un terrier que se mueve como loco cuando lo agarran?",
    audio: "Temmie Village",
    clearTimer: true,
    options: [
      { text: "Claro que si mi amor", target: "Claro que si mi amor" }
    ]
  },
  "LA CABALLA COMELONA": {
    id: 42,
    title: "LA CABALLA COMELONA",
    text: "MUY BIEN AMOR! (Aunque tu eres mi caballa favorita) ¿ESTAS PREPARADA PARA LA SIGUIENTE PREGUNTA? JOJOJO",
    sfx: "JOJOJO",
    timer: 8,
    timeoutTarget: "¿Eh?",
    options: [
      { text: "Estoy preparada", target: "Estoy preparada" }
    ]
  },
  "LA CABALLA YANDERE": {
    id: 43,
    title: "LA CABALLA YANDERE",
    text: "MUY BIEN AMOR! (Aunque tu eres mi caballa favorita) ¿ESTAS PREPARADA PARA LA SIGUIENTE PREGUNTA? JOJOJO",
    sfx: "JOJOJO",
    timer: 8,
    timeoutTarget: "¿Eh?",
    options: [
      { text: "Estoy preparada", target: "Estoy preparada" }
    ]
  },
  "LA CABALLA QUE TE PATEA EN LA CARA": {
    id: 44,
    title: "LA CABALLA QUE TE PATEA EN LA CARA",
    text: "MUY BIEN AMOR! (Aunque tu eres mi caballa favorita) ¿ESTAS PREPARADA PARA LA SIGUIENTE PREGUNTA? JOJOJO",
    sfx: "JOJOJO",
    timer: 8,
    timeoutTarget: "¿Eh?",
    options: [
      { text: "Estoy preparada", target: "Estoy preparada" }
    ]
  },
  "A) 31.054 minutos": {
    id: 45,
    title: "A) 31.054 minutos",
    text: "- Se te aparece Yandel de la na y te dice -\n\nSOFIA! Soy la elektronikazzzzzzzzzzzzzz y para nada una copia generada por Ale pq esta arrecho pq en deltatraveler le jodieron la genocida, EN FIN, recuerda que la respuesta a eso es la D (fue tan facil como vencer a un hawlucha en undertale yellow) ¿Ya estas preparada?",
    options: [
      { text: "Estoy preparada", target: "Estoy preparada" }
    ]
  },
  "B) 16.232 minutos": {
    id: 46,
    title: "B) 16.232 minutos",
    text: "- Se te aparece Yandel de la na y te dice -\n\nSOFIA! Soy la elektronikazzzzzzzzzzzzzz y para nada una copia generada por Ale pq esta arrecho pq en deltatraveler le jodieron la genocida, EN FIN, recuerda que la respuesta a eso es la D (fue tan facil como vencer a un hawlucha en undertale yellow) ¿Ya estas preparada?",
    options: [
      { text: "Estoy preparada", target: "Estoy preparada" }
    ]
  },
  "C) 32.049 minutos": {
    id: 47,
    title: "C) 32.049 minutos",
    text: "- Se te aparece Yandel de la na y te dice -\n\nSOFIA! Soy la elektronikazzzzzzzzzzzzzz y para nada una copia generada por Ale pq esta arrecho pq en deltatraveler le jodieron la genocida, EN FIN, recuerda que la respuesta a eso es la D (fue tan facil como vencer a un hawlucha en undertale yellow) ¿Ya estas preparada?",
    options: [
      { text: "Estoy preparada", target: "Estoy preparada" }
    ]
  },
  "D) 32.058 minutos": {
    id: 48,
    title: "D) 32.058 minutos",
    text: "Parece que alguien agarro por fin su libro de matematicas, ojala seas asi con el excel que segun te ayudaria estudiar EHEHEHM VAMOS CON LA ULTIMA PREGUNTA Y LA MAS DIFICIL",
    audio: "Black Knife",
    image: "imagen7.gif",
    options: [
      { text: "Prepararse mentalmente para lo que viene", target: "Prepararse mentalmente para lo que viene" }
    ]
  },
  "Estoy preparada": {
    id: 49,
    title: "Estoy preparada",
    text: "Dos trenes, el Tren A y el Tren B, salen simultáneamente de la Estación A y la Estación B. La Estación A y la Estación B están a 252.5 millas de distancia. El Tren A se mueve a 124.7 mph hacia la Estación B, y el Tren B se mueve a 253.5 mph hacia la estación A. Si ambos trenes salieron a las 10:00 AM y ahora son las 10:08, ¿cuánto tiempo más falta para que ambos trenes se crucen?",
    timer: 8,
    timeoutTarget: "¿Eh?",
    options: [
      { text: "A) 31.054 minutos", target: "A) 31.054 minutos" },
      { text: "B) 16.232 minutos", target: "B) 16.232 minutos" },
      { text: "C) 32.049 minutos", target: "C) 32.049 minutos" },
      { text: "D) 32.058 minutos", target: "D) 32.058 minutos" }
    ]
  },
  "OH NO...": {
    id: 50,
    title: "OH NO...",
    text: "QUE PELUCHE SERIA MEJOR PARA UN ASADO?",
    audio: "And Now For Todays Sponsors",
    image: "imagen8.jpg",
    timer: 8,
    timeoutTarget: "¿Eh?",
    options: [
      { text: "Mapachongo asao", target: "Mapachongo asao" },
      { text: "Marci a la parrilla", target: "Marci a la parrilla" },
      { text: "NO TE DARE A MIS PELUCHES PA COMER COÑO!", target: "NO TE DARE A MIS PELUCHES PA COMER COÑO!" }
    ]
  },
  "Mapachongo asao": {
    id: 51,
    title: "Mapachongo asao",
    text: "- Ale empieza a preparar un mapachongo asao, metodicamente lo corta en partes iguales y lo sazona con comino, pimienta y ajo molido... Luego lo ahuma con un poco de laurel y oregano dandole un hedor mas fresco, posterior a ello lo quita del asador y lo moja en un menjunje de vino tinto añejado, genuinamente mapachongo tiene un buen sabor... -",
    image: "imagen5.jpg",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "Marci a la parrilla": {
    id: 52,
    title: "Marci a la parrilla",
    text: "- Ale prepara una marci a la parrilla, primero la corta en rebanadas y le pone una salsa parrillera premium de la marca elektronika que le da un sabor electrificantemente bueno, posterior a ello pone las rebanadas de marci en la parrilla hasta que queden bien doraditas, puedes ver como la grasita de marci se mezcla con la carne dandole un aspecto delicioso -",
    image: "imagen5.jpg",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "NO TE DARE A MIS PELUCHES PA COMER COÑO!": {
    id: 53,
    title: "NO TE DARE A MIS PELUCHES PA COMER COÑO!",
    text: "Si ok entiendo amor no me amas ok entiendo\n\n- Ale se va llorando a matar withers voladores para desestresarse -\n- Encontraste un fragmento -",
    audio: "Lost girl",
    image: "imagen2.gif",
    clearTimer: true,
    options: [
      { text: "(Ver este fragmento mas de cerca)", target: "(Ver este fragmento mas de cerca)" }
    ]
  },
  "(Ver este fragmento mas de cerca)": {
    id: 54,
    title: "(Ver este fragmento mas de cerca)",
    text: '"comentario" "tiktok" "ale"',
    options: [
      { text: "Quizas deba ver un comentario en algun video", target: "Quizas deba ver un comentario en algun video" }
    ]
  },
  "Quizas deba ver un comentario en algun video": {
    id: 55,
    title: "Quizas deba ver un comentario en algun video",
    text: "- Quizas un poco de pereza ayude... -",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "(Quizas deba buscar la primera palabra en algun lado...": {
    id: 56,
    title: "(Quizas deba buscar la primera palabra en algun lado...",
    text: "¿Te amo mucho si?",
    options: [
      { text: "Y yo a ti", target: "Y yo a ti" }
    ]
  },
  "Espada": {
    id: 57,
    title: "Espada",
    text: "- Respuesta incorrecta -",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "Lanza": {
    id: 58,
    title: "Lanza",
    text: "¿Cual es mi animal favorito?",
    options: [
      { text: "Lobo", target: "Lobo" },
      { text: "Perro", target: "Perro" },
      { text: "Halcon peregrino", target: "Halcon peregrino" }
    ]
  },
  "Lobo": {
    id: 59,
    title: "Lobo",
    text: "- Respuesta incorrecta -",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "Perro": {
    id: 60,
    title: "Perro",
    text: "- Respuesta incorrecta -",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "Halcon peregrino": {
    id: 61,
    title: "Halcon peregrino",
    text: "¿Cual es mi tipo de comida favorita?",
    options: [
      { text: "La pasta", target: "La pasta" },
      { text: "La criolla", target: "La criolla" },
      { text: "La marina", target: "La marina" }
    ]
  },
  "La pasta": {
    id: 62,
    title: "La pasta",
    text: "¿Quien es mi niña hermosa?",
    options: [
      { text: "Yo", target: "Yo" }
    ]
  },
  "La marina": {
    id: 63,
    title: "La marina",
    text: "- Respuesta incorrecta -",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "Yo": {
    id: 64,
    title: "Yo",
    text: "Asi es mi amor!! Solo tú <3 Bueno... Uhm me olvide la contraseña de mi regalo especial, aqui lo tienes de todas formas",
    options: [
      { text: '(Observar el "regalo")', target: '(Observar el "regalo")' }
    ]
  },
  "Claro que si mi amor": {
    id: 65,
    title: "Claro que si mi amor",
    text: "SKDJAKSJDAK Y SI FUERA UN PERRITO CON UN GORRITO DE HELICE FELIZ?!",
    options: [
      { text: "Obviamente mi amor", target: "Obviamente mi amor" }
    ]
  },
  "Obviamente mi amor": {
    id: 66,
    title: "Obviamente mi amor",
    text: "PERO MIAMOR *mueve la colita como perrito feliz Y SI FUERA UN PERRITO AMARILLO QUE TE MIRA RARO me seguirias queriendo? :(",
    options: [
      { text: "Por supuesto amor!", target: "Por supuesto amor!" }
    ]
  },
  "Por supuesto amor!": {
    id: 67,
    title: "Por supuesto amor!",
    text: "Obviamente que me seguirias queriendo, en plan ¿Porque me dejarias de querer? JOJOJO",
    audio: "Queen",
    sfx: "JOJOJO",
    options: [
      { text: "Ya vas a empezar", target: "Ya vas a empezar" }
    ]
  },
  "Ya vas a empezar": {
    id: 68,
    title: "Ya vas a empezar",
    text: "¿Empezar? Claro que voy a empezar JOJOJO, mi intelecto superior es mucho mayor a la de un perro amarillo que mira raro",
    options: [
      { text: "Ah si? Que sorpresa amor", target: "Ah si? Que sorpresa amor" }
    ]
  },
  "Ah si? Que sorpresa amor": {
    id: 69,
    title: "Ah si? Que sorpresa amor",
    text: "POR SUPUESTO! Mi intelecto es el equivalente a la grandiosa cantidad de 2 PERROS TERRIER que se mueven cuando los tocan JOJOJO",
    sfx: "JOJOJO",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  },
  "Prepararse mentalmente para lo que viene": {
    id: 70,
    title: "Prepararse mentalmente para lo que viene",
    text: "ASI ES, ESTA PREGUNTA LA LLEVO GUARDADA DURANTE MESES Y ES IMPOSIBLE RESPONDER CORRECTAMENTE",
    options: [
      { text: "Preparase aun mas mentalmente", target: "Preparase aun mas mentalmente" }
    ]
  },
  "Preparase aun mas mentalmente": {
    id: 71,
    title: "Preparase aun mas mentalmente",
    text: "AHORA SI, SE VIENE... SE ASOMA LA PREGUNTA MAS DIFICIL DE TODO ESTE QUIZ!!!",
    options: [
      { text: "OH NO...", target: "OH NO..." }
    ]
  },
  '(Observar el "regalo")': {
    id: 72,
    title: '(Observar el "regalo")',
    text: "- Tiene un nombre raro puesto, la contraseña parece tener 8 digitos -",
    audio: "Crickets",
    options: [
      { text: "Revisar mas de cerca", target: "Revisar mas de cerca" }
    ]
  },
  "Revisar mas de cerca": {
    id: 73,
    title: "Revisar mas de cerca",
    text: "- Hay un codigo, 30032026, piensas que deberias preguntarle a Ale -",
    options: [
      { text: "¿Eh?", target: "¿Eh?" }
    ]
  }
};