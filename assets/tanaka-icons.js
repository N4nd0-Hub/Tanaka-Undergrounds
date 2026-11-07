/* ==========================================================
   TANAKA UNDERGROUND — tanaka-icons.js
   Biblioteca de ícones dos itens: adesivos coloridos com
   contorno de tinta e sombra deslocada (estilo Persona 5).
   Cada ícone é uma lista de formas numa caixa 64×64:
     p:COR:caminho        forma preenchida com contorno
     c:COR:cx,cy,r        círculo
     e:COR:cx,cy,rx,ry    elipse
     r:COR:x,y,w,h[,rx]   retângulo
     a:COR:LARG:caminho   traço grosso colorido (cordas, cabos)
     l:caminho            linha de tinta
     t:caminho            detalhe fino de tinta
     h:caminho            brilho (traço claro)
   Usado pela loja (index.html) e pelo modo GM (admin.html).
   ========================================================== */
(function (root) {
  'use strict';
  var C = {
    k: '#1d1520', w: '#fff6e3', r: '#e8343f', p: '#ef2b97', P: '#ff9fcf', y: '#ffd23f', o: '#ff8a3d',
    g: '#69d36e', G: '#2f8f4e', c: '#5cd8f4', b: '#3e7bff', B: '#24356f', v: '#9b6bff', s: '#d3d8e2',
    m: '#8a92a3', d: '#3b3442', n: '#a0612f', t: '#f0c08c', l: '#c6f25a', u: '#7a2638'
  };
  var G1 = 'Lâminas e impacto', G2 = 'Armas de fogo', G3 = 'Instrumentos', G4 = 'Vestimentas e proteção',
      G5 = 'Acessórios', G6 = 'Consumíveis', G7 = 'Objetos e raridades', G8 = 'Genéricos',
      G9 = 'Tecnologia 2000', G10 = 'Persona & Metaverso';
  /* [rótulo, grupo, desenho] */
  var I = {
    /* ---------- lâminas e impacto ---------- */
    knife: ['Adaga / faca', G1, 'p:s:M24 40 L46 14 Q54 7 57 6 Q56 12 50 20 L30 46 Z|h:M30 38 L48 16|p:y:M18 36 L22 32 L34 44 L30 48 Z|p:n:M24 44 L28 48 L16 59 Q11 60 10 56 Z|t:M18 52 L21 55'],
    sword: ['Espada de uma mão', G1, 'p:s:M24 36 L50 10 L57 7 L54 14 L28 40 Z|h:M28 34 L50 12|p:y:M17 30 L21 26 L38 43 L34 47 Z|p:n:M24 41 L27 44 L17 54 L14 51 Z|c:y:14,54,4'],
    greatsword: ['Espada de duas mãos', G1, 'p:s:M20 38 L46 8 L57 5 L55 16 L26 44 Z|t:M24 40 L52 9|h:M23 36 L46 11|p:y:M11 32 L17 26 L38 47 L32 53 Z|p:d:M22 46 L26 50 L14 60 L10 56 Z|c:y:10,58,3.5'],
    katana: ['Katana', G1, 'p:s:M22 42 Q38 30 50 12 Q54 7 58 5 Q55 16 46 27 Q36 38 27 46 Z|h:M28 39 Q40 29 50 15|c:y:24,44,6|p:d:M20 47 L25 51 L14 61 L10 57 Z|t:M18 51 L21 54 M15 54 L18 57'],
    rapier: ['Florete / sabre', G1, 'p:s:M30 34 L56 7 L58 9 L33 37 Z|p:n:M24 44 L28 48 L18 58 L14 54 Z|a:y:3:M20 30 Q12 42 24 48 Q36 52 40 40|c:y:28,40,7|c:y:15,57,3'],
    dualblades: ['Lâminas duplas', G1, 'p:s:M15 46 L40 14 Q46 8 51 7 Q50 13 44 19 L19 50 Z|p:p:M13 48 L18 52 L11 59 L6 55 Z|p:s:M49 46 L24 14 Q18 8 13 7 Q14 13 20 19 L45 50 Z|p:c:M51 48 L46 52 L53 59 L58 55 Z|h:M20 44 L42 16'],
    axe: ['Machado', G1, 'p:n:M40 12 L45 15 L22 59 L17 56 Z|p:s:M36 9 L45 18 L35 26 Q22 35 11 26 Q13 13 25 11 Z|h:M15 24 Q19 16 27 14|t:M31 14 L39 22'],
    spear: ['Lança', G1, 'p:n:M12 54 L42 24 L45 27 L15 57 Z|p:s:M40 21 L58 5 L47 27 Z|h:M44 22 L55 9|p:r:M38 27 Q31 34 35 40 Q40 33 44 31 Z'],
    naginata: ['Naginata', G1, 'p:d:M8 54 L40 22 L44 26 L12 58 Z|p:s:M40 22 Q46 9 58 5 Q57 18 45 28 Z|h:M44 22 Q48 13 55 9|p:y:M36 23 L43 30 L40 33 L33 26 Z'],
    bat: ['Taco / bastão', G1, 'p:s:M11 52 L36 22 Q44 12 52 10 Q57 14 52 21 Q44 30 15 56 Z|h:M38 22 Q44 15 50 13|p:p:M15 47 L19 51 L16 54 L12 50 Z|c:d:10,55,3.5'],
    hammer: ['Martelo pesado', G1, 'p:n:M29 30 H35 V58 H29 Z|r:m:10,13,44,17,3|r:s:10,13,9,17,2|h:M22 17 H48|t:M45 13 V30'],
    knuckles: ['Soco-inglês', G1, 'p:s:M10 30 Q10 20 18 20 H46 Q54 20 54 30 V34 Q54 44 44 46 H20 Q10 44 10 34 Z|c:d:19,28,4|c:d:28,28,4|c:d:37,28,4|c:d:46,28,4|h:M14 38 Q32 42 50 38'],
    claws: ['Garras', G1, 'p:s:M16 40 L20 7 L25 40 Z|p:s:M27 40 L32 4 L37 40 Z|p:s:M39 40 L45 8 L48 40 Z|r:p:11,38,42,13,3|t:M17 44 H47|h:M21 12 L22 34'],
    whip: ['Chicote', G1, 'a:n:4:M20 44 Q40 18 52 30 Q60 42 44 46 Q34 50 40 58|p:d:M8 52 L18 42 L23 47 L13 57 Z|c:y:9,56,3'],
    chain: ['Corrente', G1, 'a:s:4:M8 56 a7 4.5 -45 1 0 12 -12 a7 4.5 -45 1 0 -12 12|a:m:4:M20 44 a7 4.5 45 1 0 12 -12 a7 4.5 45 1 0 -12 12|a:s:4:M32 32 a7 4.5 -45 1 0 12 -12 a7 4.5 -45 1 0 -12 12|a:m:4:M44 20 a7 4.5 45 1 0 12 -12 a7 4.5 45 1 0 -12 12'],
    fan: ['Leque', G1, 'p:p:M32 54 L7 26 Q32 3 57 26 Z|p:w:M32 54 L19 39 Q32 31 45 39 Z|t:M32 54 L15 16 M32 54 L32 9 M32 54 L49 16|h:M14 24 Q32 8 50 24|c:y:32,52,3'],
    bow: ['Arco', G1, 'a:n:4:M20 7 Q50 32 20 57|t:M20 7 V57|a:s:3:M10 32 H52|p:s:M52 26 L61 32 L52 38 Z|p:p:M11 32 L4 25 L15 28 Z|p:p:M11 32 L4 39 L15 36 Z'],
    cards: ['Cartas', G1, 'p:w:M9 21 L27 15 L37 49 L19 55 Z|p:w:M25 12 L44 14 L42 50 L23 48 Z|p:w:M36 16 L55 23 L45 55 L26 48 Z|p:r:M41 32 c-2 -4 -8 -2 -6 3 l6 6 6 -6 c2 -5 -4 -7 -6 -3 Z|t:M40 22 L42 22'],
    /* ---------- armas de fogo ---------- */
    pistol: ['Pistola', G2, 'r:m:9,17,46,11,2|h:M13 20 H51|p:d:M14 28 H29 L25 51 H12 Z|l:M29 28 Q31 38 22 38|t:M16 34 H24 M15 40 H23|r:d:49,19,6,7,1'],
    revolver: ['Revólver', G2, 'r:s:26,18,32,7,2|p:n:M10 31 H23 L19 54 H8 Z|p:m:M9 20 H27 V32 H10 Z|r:m:20,15,14,15,4|t:M24 18 V28 M29 18 V28|p:d:M10 20 L5 13 L13 16 Z|h:M29 20 H55'],
    shotgun: ['Escopeta', G2, 'r:m:20,21,40,7,2|p:n:M3 26 L20 20 L22 34 L8 41 Z|r:d:16,20,10,13,2|r:n:31,28,15,7,2|h:M24 23 H58|t:M34 31 H44'],
    smg: ['Submetralhadora', G2, 'r:d:14,19,32,13,2|r:m:46,22,13,6,2|p:m:M30 32 H38 L41 53 H33 Z|p:d:M17 32 H26 L23 47 H15 Z|p:d:M3 21 H14 V29 H6 Z|h:M18 22 H42'],
    rifle: ['Fuzil', G2, 'r:m:30,22,30,5,2|p:n:M3 31 L18 24 H40 V31 H26 L20 37 L5 41 Z|r:d:20,13,20,7,3|c:c:22,16.5,2|r:d:28,31,6,11,1|h:M8 32 L18 27'],
    launcher: ['Lança-granadas', G2, 'r:G:5,20,48,15,5|r:y:51,17,9,21,2|p:d:M22 35 H30 L28 48 H20 Z|r:d:29,13,9,7,1|t:M14 20 V35 M42 20 V35|h:M9 24 H48'],
    /* ---------- instrumentos ---------- */
    guitar: ['Guitarra elétrica', G3, 'p:n:M24 42 L48 14 L52 18 L28 46 Z|p:r:M10 44 Q5 55 16 58 Q26 61 29 52 Q35 50 33 44 Q31 37 24 40 Q20 34 14 38 Q8 40 10 44 Z|p:w:M14 48 Q16 53 21 50 L23 46 Z|t:M18 52 L50 15|p:d:M46 14 L52 5 L59 12 L52 18 Z|r:y:21,46,6,4,1'],
    bass: ['Baixo elétrico', G3, 'p:d:M22 44 L50 10 L53 13 L25 47 Z|p:b:M8 46 Q4 57 14 58 Q24 61 27 52 Q33 50 31 44 Q29 38 22 40 Q18 34 12 38 Q6 42 8 46 Z|t:M16 51 L51 11|p:d:M48 10 L54 3 L61 10 L54 15 Z|h:M10 47 Q12 54 18 55'],
    acoustic: ['Violão', G3, 'p:n:M24 40 L48 14 L52 18 L28 44 Z|p:t:M8 46 Q4 58 16 58 Q26 60 30 50 Q34 42 26 38 Q20 32 12 38 Q8 42 8 46 Z|c:d:19,47,4.5|t:M17 51 L50 15|p:n:M46 14 L52 7 L59 14 L52 18 Z|h:M10 46 Q11 53 16 55'],
    violin: ['Violino / viola', G3, 'p:n:M32 22 Q22 20 22 30 Q26 34 22 38 Q18 51 32 53 Q46 51 42 38 Q38 34 42 30 Q42 20 32 22 Z|r:d:30,6,4,24,1|c:d:32,6,3.5|t:M27 34 Q26 38 28 42 M37 34 Q38 38 36 42 M32 22 V50|a:t:2:M8 58 L56 12'],
    cello: ['Violoncelo', G3, 'p:n:M32 18 Q18 16 18 30 Q22 35 18 41 Q14 57 32 59 Q50 57 46 41 Q42 35 46 30 Q46 16 32 18 Z|r:d:30,3,4,22,1|t:M27 32 Q25 38 28 44 M37 32 Q39 38 36 44 M32 18 V54|h:M22 28 Q20 34 24 38'],
    harp: ['Harpa', G3, 'p:y:M11 58 L11 9 Q41 5 53 30 L48 33 Q38 14 16 14 L16 58 Z|t:M21 16 L21 50 M27 16 L27 46 M33 18 L33 42 M39 22 L39 38 M45 26 L45 34|a:n:4:M13 57 L50 31|h:M14 12 Q34 8 46 22'],
    keyboard: ['Teclado / sintetizador', G3, 'r:d:5,18,54,28,3|r:w:9,29,46,13,1|r:k:15,29,3,7|r:k:21,29,3,7|r:k:30,29,3,7|r:k:36,29,3,7|r:k:42,29,3,7|r:k:50,29,3,7|c:y:13,23,2|c:p:20,23,2|r:c:30,21,16,5,1'],
    accordion: ['Acordeão', G3, 'p:p:M19 14 L46 14 L46 50 L19 50 Z|t:M23 14 L27 22 L23 30 L27 38 L23 46 M31 14 L35 22 L31 30 L35 38 L31 46 M39 14 L43 22 L39 30 L43 38 L39 46|r:d:7,12,13,40,2|r:d:45,12,13,40,2|r:w:10,16,7,32|c:w:51,22,2|c:w:51,30,2|c:w:51,38,2'],
    flute: ['Flauta transversal', G3, 'p:s:M8 50 L50 9 L55 14 L13 55 Z|h:M12 49 L50 12|c:d:23,38,1.8|c:d:29,32,1.8|c:d:35,26,1.8|c:d:46,16,2.2|t:M18 44 L21 47'],
    recorder: ['Flauta doce', G3, 'p:t:M28 5 H36 L38 52 Q38 59 32 59 Q26 59 26 52 Z|r:d:29,11,6,3|c:d:32,22,1.8|c:d:32,29,1.8|c:d:32,36,1.8|c:d:32,43,1.8|h:M29 16 L30 50'],
    sax: ['Saxofone', G3, 'a:y:7:M40 9 V38 Q40 52 28 52 Q18 52 18 42|p:y:M9 34 Q18 27 27 34 L23 45 Q16 45 12 41 Z|c:w:40,19,2|c:w:40,27,2|c:w:39,35,2|a:d:3:M40 9 L49 4|h:M37 12 V36'],
    trumpet: ['Trompete', G3, 'a:y:4:M14 32 Q14 43 26 43 H40 Q44 43 44 35|r:y:9,24,37,8,4|p:y:M44 20 L58 12 V44 L44 36 Z|r:s:20,13,4,12,1|r:s:28,13,4,12,1|r:s:36,13,4,12,1|r:s:3,26,8,4,1|h:M12 26 H42'],
    trombone: ['Trombone', G3, 'a:s:4:M6 24 H40 M6 37 H40 M6 24 V37|a:y:4:M40 24 Q50 24 50 30 Q50 37 40 37|p:y:M40 17 L58 8 V45 L40 31 Z|h:M44 21 L55 15'],
    harmonica: ['Gaita', G3, 'r:s:5,21,54,22,3|r:m:5,28,54,8|r:d:9,30,4,4|r:d:15,30,4,4|r:d:21,30,4,4|r:d:27,30,4,4|r:d:33,30,4,4|r:d:39,30,4,4|r:d:45,30,4,4|r:d:51,30,4,4|h:M9 24 H55'],
    drums: ['Bateria', G3, 'e:p:32,46,22,6|r:p:10,24,44,22|e:w:32,24,22,6|t:M16 27 V47 M24 29 V49 M40 29 V49 M48 27 V47|a:n:3:M20 21 L36 5|a:n:3:M44 21 L28 5|h:M14 34 V42'],
    drumsticks: ['Baquetas', G3, 'a:t:4:M10 55 L50 10|a:t:4:M54 55 L14 10|c:t:51,9,3.5|c:t:13,9,3.5|h:M14 50 L44 16'],
    tambourine: ['Pandeiro', G3, 'c:t:32,32,22|c:w:32,32,15|r:s:26,7,12,6,2|r:s:26,51,12,6,2|r:s:7,26,6,12,2|r:s:51,26,6,12,2|h:M22 24 Q26 19 32 18'],
    conga: ['Conga / percussão', G3, 'p:n:M20 10 H44 Q49 30 42 57 H22 Q15 30 20 10 Z|e:w:32,10,12,4|t:M19 22 H45 M20 46 H44|r:s:16,20,4,6,1|r:s:44,20,4,6,1|h:M24 16 Q22 32 25 52'],
    mic: ['Microfone', G3, 'c:s:32,20,12|t:M22 16 H42 M21 22 H43 M26 10 V30 M38 10 V30|r:p:22,30,20,6,2|p:d:M26 36 H38 L35 58 H29 Z|h:M25 13 Q28 9 33 9'],
    turntable: ['Toca-discos / DJ', G3, 'r:d:5,11,54,43,4|c:k:28,33,17|t:M28 21 a12 12 0 1 0 0.1 0|c:p:28,33,6|c:w:28,33,1.5|a:s:3:M50 16 V36 L40 44|c:s:50,16,3|r:p:46,46,8,4,1'],
    amp: ['Amplificador', G3, 'r:d:8,9,48,47,4|r:y:13,13,38,7,1|c:w:18,16.5,2|c:w:26,16.5,2|c:w:34,16.5,2|r:m:13,24,38,28,2|c:d:32,38,10|c:s:32,38,4'],
    /* ---------- vestimentas e proteção ---------- */
    jacket: ['Jaqueta', G4, 'p:d:M14 14 L24 9 L32 18 L40 9 L50 14 L58 40 L50 42 L48 30 V57 H16 V30 L14 42 L6 40 Z|p:m:M24 9 L32 18 L28 35 L21 22 Z|p:m:M40 9 L32 18 L36 35 L43 22 Z|t:M32 18 V57 M20 46 H27 M37 46 H44|c:y:30,40,1.5|h:M17 20 L12 36'],
    gloves: ['Luvas', G4, 'p:d:M18 52 V34 L13 25 Q13 20 18 22 L22 28 V12 Q22 8 26 9 V26 V8 Q31 5 32 9 V26 V10 Q37 8 38 12 V28 V17 Q43 14 44 18 V40 Q44 50 38 52 Z|r:p:22,31,18,6,2|r:r:16,51,25,9,2|t:M26 26 V18 M32 26 V16 M38 28 V20'],
    boots: ['Botas', G4, 'p:d:M16 8 H34 V40 L50 44 Q58 46 58 52 H14 Z|r:p:10,51,50,9,2|t:M20 14 H30 M20 20 H30 M20 26 H30 M20 32 H30|h:M19 10 V36'],
    vest: ['Colete / armadura', G4, 'p:B:M18 8 L26 10 Q32 18 38 10 L46 8 L51 20 V56 H13 V20 Z|r:m:18,26,12,11,2|r:m:34,26,12,11,2|r:m:18,40,12,11,2|r:m:34,40,12,11,2|t:M32 18 V56'],
    shirt: ['Camiseta / uniforme', G4, 'p:w:M20 9 L28 7 Q32 13 36 7 L44 9 L57 20 L50 29 L46 25 V57 H18 V25 L14 29 L7 20 Z|r:p:18,30,28,7|p:d:M28 7 Q32 13 36 7 L34 4 H30 Z|h:M22 14 L20 50'],
    coat: ['Sobretudo', G4, 'p:n:M16 10 L26 5 L32 14 L38 5 L48 10 L55 59 H9 Z|p:t:M26 5 L32 14 L27 30 L20 16 Z|p:t:M38 5 L32 14 L37 30 L44 16 Z|r:d:11,32,42,5|c:y:28,44,2|c:y:28,52,2|t:M32 14 V59'],
    helmet: ['Capacete', G4, 'p:r:M10 40 Q10 12 32 12 Q54 12 54 40 Z|p:c:M16 29 H48 Q51 40 44 42 H20 Q13 40 16 29 Z|r:d:10,40,44,7,2|t:M32 12 V29|h:M17 26 Q20 17 30 15|h:M20 33 L28 33'],
    shield: ['Escudo', G4, 'p:s:M32 5 L55 13 Q55 42 32 59 Q9 42 9 13 Z|p:p:M32 11 L49 17 Q49 38 32 51 Q15 38 15 17 Z|p:y:M32 20 L35 28 L43 28 L37 33 L39 41 L32 36 L25 41 L27 33 L21 28 L29 28 Z|h:M14 16 Q14 32 22 42'],
    /* ---------- acessórios ---------- */
    headphones: ['Fones de ouvido', G5, 'a:d:5:M12 36 Q12 9 32 9 Q52 9 52 36|r:p:5,31,15,22,5|r:p:44,31,15,22,5|r:d:16,35,5,14,2|r:d:43,35,5,14,2|h:M9 35 V48'],
    charm: ['Amuleto', G5, 'a:y:3:M26 18 Q32 3 38 18|p:p:M18 18 Q32 10 46 18 V52 Q32 59 18 52 Z|r:w:24,25,16,19,2|t:M28 30 H36 M32 28 V40 M28 36 H36|h:M21 22 V48'],
    ring: ['Anel', G5, 'a:y:6:M18 41 a14 14 0 1 0 28 0 a14 14 0 1 0 -28 0|p:c:M23 21 L28 14 H36 L41 21 L32 30 Z|t:M23 21 H41 M28 14 L32 21 L36 14|h:M22 46 Q24 52 30 54'],
    glasses: ['Óculos', G5, 'p:d:M5 23 H29 L27 38 Q25 43 16 43 Q8 43 8 36 Z|p:d:M35 23 H59 L56 36 Q56 43 48 43 Q39 43 37 38 Z|l:M29 26 Q32 22 35 26|h:M12 28 L18 35|h:M42 28 L48 35'],
    watch: ['Relógio', G5, 'r:n:25,5,14,54,3|c:s:32,32,13|c:w:32,32,9.5|t:M32 32 V25 M32 32 L37 34|r:s:44,30,3,4,1'],
    scarf: ['Cachecol', G5, 'p:r:M13 13 Q32 22 51 13 L53 25 Q32 33 11 25 Z|p:r:M35 27 L46 26 L44 55 L33 56 Z|t:M18 16 L17 26 M46 16 L47 26 M35 38 L45 37 M34 47 L44 46|t:M34 56 V60 M38 56 V60 M42 55 V59'],
    /* ---------- consumíveis ---------- */
    bottle: ['Tônico / frasco', G6, 'p:c:M24 22 H40 L44 30 V54 Q44 58 40 58 H24 Q20 58 20 54 V30 Z|r:w:27,12,10,10|r:p:25,5,14,8,2|r:w:22,35,20,13|p:r:M30 37 h4 v3 h3 v4 h-3 v3 h-4 v-3 h-3 v-4 h3 Z|h:M24 31 V52'],
    coffee: ['Café / bebida quente', G6, 'a:w:4:M43 30 Q54 30 52 40 Q50 46 41 46|p:w:M13 24 H44 L40 54 Q40 58 36 58 H21 Q17 58 17 54 Z|r:n:15,33,28,11|r:d:10,19,37,7,2|t:M22 15 Q18 10 22 4 M30 15 Q26 10 30 4 M38 15 Q34 10 38 4|h:M18 28 L20 50'],
    soda: ['Lata / refrigerante', G6, 'p:r:M18 12 H46 V54 Q46 58 42 58 H22 Q18 58 18 54 Z|e:s:32,12,14,4|r:w:18,25,28,13|p:r:M26 31 Q32 25 38 31 Q32 37 26 31 Z|h:M22 17 V52|t:M30 10 H36'],
    onigiri: ['Onigiri / alimento', G6, 'p:w:M32 8 Q44 8 52 34 Q56 50 44 54 H20 Q8 50 12 34 Q20 8 32 8 Z|r:d:23,36,18,19,1|t:M27 40 H37|h:M20 30 Q24 18 30 13|c:r:32,26,3'],
    bandage: ['Curativo', G6, 'p:t:M8 40 L40 8 Q46 4 52 10 Q58 16 54 22 L22 54 Q16 58 10 52 Q4 46 8 40 Z|p:w:M23 29 L33 19 L43 29 L33 39 Z|c:n:14,44,1.3|c:n:18,48,1.3|c:n:46,16,1.3|c:n:50,20,1.3|h:M12 40 L38 13'],
    medkit: ['Primeiros socorros', G6, 'a:d:4:M24 18 V12 H40 V18|r:w:8,18,48,37,4|p:r:M28 26 h8 v6 h6 v8 h-6 v6 h-8 v-6 h-6 v-8 h6 Z|r:d:8,18,48,6|h:M12 28 V50'],
    pills: ['Comprimidos', G6, 'p:p:M12 46 Q6 40 12 34 L24 22 L36 34 L24 46 Q18 52 12 46 Z|p:w:M24 22 L30 16 Q36 10 42 16 Q48 22 42 28 L36 34 Z|h:M12 40 L22 30|c:c:47,47,8.5|t:M41 53 L53 41'],
    snack: ['Lanche / pacote', G6, 'p:y:M14 10 L18 6 L22 10 L26 6 L30 10 L34 6 L38 10 L42 6 L46 10 L50 6 V58 L46 54 L42 58 L38 54 L34 58 L30 54 L26 58 L22 54 L18 58 L14 54 Z|c:r:32,32,11|p:w:M32 24 L34 30 L40 30 L35 34 L37 40 L32 36 L27 40 L29 34 L24 30 L30 30 Z|h:M18 14 V50'],
    bento: ['Bentô / refeição', G6, 'r:r:6,17,52,35,4|r:w:10,21,44,27,2|t:M30 21 V48 M30 34 H54|c:r:19,32,4|t:M14 26 H26|e:y:42,28,8,4|c:g:45,42,4|c:o:38,42,3'],
    spray: ['Spray / antídoto', G6, 'r:G:18,20,23,37,4|r:w:20,11,19,10,2|r:d:34,7,7,6,1|r:y:18,30,23,12|c:c:49,9,2|c:c:55,13,2|c:c:53,5,1.5|h:M22 24 V52'],
    /* ---------- objetos e raridades ---------- */
    tape: ['Fita cassete', G7, 'r:d:5,13,54,38,4|r:w:9,17,46,15,2|t:M13 22 H51 M13 27 H38|r:m:18,34,28,11,4|c:w:24,39.5,3.5|c:w:40,39.5,3.5|r:p:9,17,6,15,1'],
    disc: ['CD / disco', G7, 'c:s:32,32,24|p:c:M32 32 L32 8 A24 24 0 0 1 53 21 Z|p:P:M32 32 L53 43 A24 24 0 0 1 32 56 Z|c:w:32,32,8|c:d:32,32,3|h:M14 22 Q20 12 30 10'],
    book: ['Livro / manual', G7, 'p:B:M10 12 H45 Q50 12 50 18 V54 H16 Q10 54 10 48 Z|r:w:14,47,36,6|r:y:20,20,22,8,1|t:M16 12 V46|h:M47 20 V46'],
    key: ['Chave', G7, 'p:y:M24 28 L53 57 L49 61 L20 32 Z|p:y:M41 45 L48 38 L52 42 L45 49 Z|p:y:M47 51 L52 46 L55 49 L50 54 Z|c:y:18,22,11|c:d:18,22,4|h:M10 20 Q12 14 18 12'],
    phone: ['Celular', G7, 'r:d:37,2,5,10,2|r:s:19,8,26,51,6|r:c:23,14,18,15,2|r:w:23,33,18,21,2|t:M29 33 V54 M35 33 V54 M23 40 H41 M23 47 H41|h:M23 17 L29 23'],
    battery: ['Pilha / bateria', G7, 'r:d:5,19,47,27,4|r:s:52,26,7,13,2|r:l:9,23,27,19,2|p:y:M31 21 L23 34 H31 L27 45 L40 30 H32 L36 21 Z'],
    backpack: ['Mochila', G7, 'a:d:3:M26 10 Q32 3 38 10|p:p:M14 20 Q14 10 32 10 Q50 10 50 20 V54 Q50 58 46 58 H18 Q14 58 14 54 Z|r:d:20,35,24,17,4|t:M20 42 H44|h:M18 18 V50|c:y:32,26,3'],
    briefcase: ['Maleta', G7, 'a:d:4:M24 20 V13 H40 V20|r:n:5,20,54,35,4|t:M5 34 H59|r:y:27,30,10,8,1|h:M9 24 H55'],
    ticket: ['Ingresso / bilhete', G7, 'p:y:M5 18 H59 V28 Q55 32 59 36 V46 H5 V36 Q9 32 5 28 Z|t:M44 18 V46|r:p:12,24,26,5|t:M12 34 H36 M12 39 H30|p:r:M51 28 L53 32 L57 32 L54 35 L55 39 L51 37 L47 39 L48 35 L45 32 L49 32 Z'],
    gem: ['Cristal / material', G7, 'p:c:M20 12 H44 L56 26 L32 56 L8 26 Z|t:M8 26 H56 M20 12 L26 26 L32 56 M44 12 L38 26 L32 56 M26 26 L32 12 L38 26|h:M14 26 L28 46'],
    gift: ['Presente', G7, 'r:r:10,28,44,28,2|r:r:8,20,48,10,2|r:y:28,20,8,36|p:y:M32 20 Q19 5 15 16 Q17 23 32 20 Z|p:y:M32 20 Q45 5 49 16 Q47 23 32 20 Z|h:M13 32 V52'],
    box: ['Caixa / item genérico', G7, 'p:t:M10 22 L32 12 L54 22 V48 L32 58 L10 48 Z|p:n:M10 22 L32 32 L54 22 L32 12 Z|t:M32 32 V58|p:w:M19 18 L41 28 V33 L19 23 Z|h:M14 28 V45'],
    /* ---------- genéricos ---------- */
    consumivel: ['Consumível genérico', G8, 'p:p:M26 8 H38 V20 Q52 26 50 42 Q48 58 32 58 Q16 58 14 42 Q12 26 26 20 Z|p:c:M15 40 Q24 34 32 40 Q42 46 49 40 Q49 56 32 56 Q15 56 15 40 Z|r:n:25,3,14,7,2|h:M20 30 Q18 36 19 42|c:w:28,48,2'],
    arma: ['Arma genérica', G8, 'p:s:M24 36 L50 10 L57 7 L54 14 L28 40 Z|h:M28 34 L50 12|p:r:M17 30 L21 26 L38 43 L34 47 Z|p:d:M24 41 L27 44 L17 54 L14 51 Z|c:r:14,54,4'],
    protecao: ['Proteção genérica', G8, 'p:b:M32 5 L55 13 Q55 42 32 59 Q9 42 9 13 Z|p:c:M32 11 L49 17 Q49 38 32 51 Q15 38 15 17 Z|t:M32 11 V51 M15 28 H49|h:M14 16 Q14 32 22 42'],
    acessorio: ['Acessório genérico', G8, 'p:y:M32 6 L39 24 L58 25 L43 37 L48 56 L32 45 L16 56 L21 37 L6 25 L25 24 Z|c:p:32,32,6|h:M28 16 L25 25'],
    especial: ['Objeto misterioso', G8, 'r:v:10,13,44,42,4|r:d:10,13,44,8|a:y:5:M24 31 Q24 24 32 24 Q40 24 40 31 Q40 37 32 39 V42|c:y:32,48,3|h:M14 25 V50'],

    /* =================== NOVOS =================== */
    kunai: ['Kunai', G1, 'p:s:M32 4 L40 26 L32 34 L24 26 Z|h:M32 9 L33 28|r:d:29,34,6,17|t:M29 38 H35 M29 42 H35 M29 46 H35|a:d:3:M27 57 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0'],
    shuriken: ['Shuriken', G1, 'p:s:M32 4 L38 26 L60 32 L38 38 L32 60 L26 38 L4 32 L26 26 Z|c:d:32,32,4.5|h:M32 9 L35 27|h:M55 32 L38 35'],
    nunchaku: ['Nunchaku', G1, 'a:s:2:M25 33 Q31 18 38 33|p:n:M6 44 L22 28 L28 34 L12 50 Z|p:n:M36 34 L52 50 L46 56 L30 40 Z|h:M10 44 L22 32|t:M16 38 L20 42 M42 42 L46 46'],
    tonfa: ['Tonfa', G1, 'r:d:7,20,50,9,4|p:d:M20 29 H28 V50 H20 Z|c:d:24,51,4.5|h:M11 23 H53'],
    scythe: ['Foice', G1, 'a:n:4:M16 60 Q20 30 26 8|p:s:M26 8 Q50 3 59 25 Q45 14 28 18 Z|h:M32 9 Q46 8 54 18|a:d:5:M17 52 L18 46'],
    staff: ['Bastão / bō', G1, 'a:n:5:M10 56 L54 8|a:y:6:M13 53 L17 49|a:y:6:M47 15 L51 11|a:r:6:M30 34 L34 30|h:M20 44 L44 18'],
    crowbar: ['Pé de cabra', G1, 'a:r:5:M14 56 L44 14 Q48 8 54 10 Q57 14 52 17|t:M14 56 L10 54|h:M18 50 L42 17'],
    pipe: ['Cano de ferro', G1, 'a:m:8:M12 52 L48 16|a:s:12:M14 50 L18 46|a:s:12:M44 20 L48 16|h:M16 44 L42 18'],
    wrench: ['Chave inglesa', G1, 'a:s:7:M14 52 L40 26|c:s:46,19,11|p:d:M47 20 L57 11 L60 17 L51 24 Z|c:d:46,19,4|h:M17 46 L38 25'],
    umbrella: ['Guarda-chuva', G1, 'a:d:3:M32 30 V54 Q32 60 26 58|p:r:M6 30 Q8 8 32 8 Q56 8 58 30 Q52 26 45 30 Q38 26 32 30 Q26 26 19 30 Q12 26 6 30 Z|t:M32 8 L19 30 M32 8 L45 30 M32 8 V30|h:M12 24 Q16 14 26 11'],
    golfclub: ['Taco de golfe', G1, 'a:s:3:M48 6 L22 48|p:d:M14 45 L26 47 L28 56 L10 56 Q8 49 14 45 Z|a:d:5:M48 6 L43 15|c:w:47,51,5|t:M45 49 h.1 M49 52 h.1'],
    slingshot: ['Estilingue', G1, 'a:n:5:M32 58 V36 L18 13 M32 36 L46 13|a:p:3:M18 14 Q32 32 46 14|c:n:32,25,3.5|h:M30 54 V40'],
    taser: ['Taser', G2, 'p:y:M8 24 H44 L52 28 V36 H24 L20 48 H10 L14 36 H8 Z|t:M52 28 H58 M52 36 H58|p:c:M55 18 L61 24 L56 25 L61 31 L53 26 L57 25 Z|r:d:28,27,10,5,1|h:M11 27 H42'],
    crossbow: ['Besta', G2, 'p:n:M28 14 H36 V58 H28 Z|a:d:4:M8 27 Q32 10 56 27|t:M8 27 L32 41 L56 27|a:s:2:M32 7 V41|p:s:M28 9 L32 2 L36 9 Z|h:M30 18 V54'],
    grenade: ['Granada', G2, 'c:G:32,39,16|t:M17 39 H47 M32 23 V55 M21 28 L43 50 M43 28 L21 50|r:s:26,14,12,9,2|p:s:M38 15 Q48 10 48 23 L44 25 Q44 17 38 19 Z|a:y:2:M18 14 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0|h:M22 32 Q24 28 28 27'],
    boombox: ['Rádio boombox', G3, 'a:s:3:M18 20 V12 H46 V20|r:d:4,20,56,33,4|c:m:16,39,9|c:d:16,39,4|c:m:48,39,9|c:d:48,39,4|r:c:26,30,12,10,1|r:p:26,24,4,3|r:y:33,24,4,3|h:M8 24 H56'],
    walkman: ['Walkman', G3, 'a:d:2:M50 50 Q60 56 52 62|r:y:14,7,36,49,4|r:d:20,15,24,17,2|c:w:26,23.5,3|c:w:38,23.5,3|r:s:18,40,7,7,1|r:s:28,40,7,7,1|r:r:38,40,7,7,1|h:M18 10 V36'],
    megaphone: ['Megafone', G3, 'p:w:M14 22 L48 8 V48 L14 34 Z|e:r:48,28,6,20|p:r:M14 22 L22 19 V37 L14 34 Z|p:d:M20 34 H28 L26 51 H18 Z|t:M54 18 Q61 28 54 38 M57 13 Q65 28 57 43'],
    shamisen: ['Shamisen', G3, 'p:n:M27 6 H31 V39 H27 Z|p:n:M25 2 H33 L31 8 H27 Z|r:t:17,38,24,21,4|r:w:20,41,18,15,2|t:M29 8 V56 M26 4 H22 M32 4 H36|p:y:M40 30 L54 22 L50 36 Z'],
    taiko: ['Taiko', G3, 'p:n:M14 18 Q8 36 14 54 H50 Q56 36 50 18 Z|e:w:32,18,18,5|a:r:2:M14 31 Q32 37 50 31|c:y:17,24,1.5|c:y:47,24,1.5|a:t:3:M44 5 L58 19|h:M18 26 Q14 38 18 48'],
    keytar: ['Keytar', G3, 'p:p:M6 44 L44 20 Q54 16 58 22 L22 50 Q12 56 6 44 Z|p:w:M14 44 L40 28 L44 34 L18 50 Z|t:M20 40 L24 46 M26 36 L30 42 M32 32 L36 38|c:y:52,22,2'],
    maracas: ['Maracas', G3, 'a:n:4:M22 30 L18 58|a:n:4:M42 30 L46 58|e:o:22,18,10,12|e:c:42,18,10,12|c:y:19,14,2|c:y:25,20,2|c:p:40,14,2|c:p:45,21,2|h:M16 12 Q17 8 21 7'],
    bell: ['Sino', G3, 'p:y:M32 8 Q48 10 48 30 V40 L54 48 H10 L16 40 V30 Q16 10 32 8 Z|c:n:32,52,5|c:y:32,7,3|h:M21 20 Q22 13 28 12|t:M16 40 H48'],
    cap: ['Boné', G4, 'p:d:M30 36 H60 Q60 45 50 45 H30 Z|p:B:M10 38 Q10 14 32 14 Q52 14 54 36 Z|c:p:32,14,3|t:M32 15 Q26 26 28 37|p:y:M18 24 L20 28 L24 28 L21 31 L22 35 L18 33 L14 35 L15 31 L12 28 L16 28 Z|h:M14 30 Q15 22 22 18'],
    beanie: ['Gorro', G4, 'c:w:32,10,6|p:r:M10 44 Q10 14 32 14 Q54 14 54 44 Z|r:d:8,40,48,12,4|t:M16 41 V51 M24 41 V51 M32 41 V51 M40 41 V51 M48 41 V51|h:M15 34 Q16 23 24 19'],
    hoodie: ['Moletom', G4, 'p:v:M10 22 L22 12 Q32 2 42 12 L54 22 L58 46 L50 46 L48 34 V58 H16 V34 L14 46 L6 46 Z|p:d:M24 14 Q32 26 40 14 Q32 8 24 14 Z|t:M22 44 H42 L40 52 H24 Z M28 22 V30 M36 22 V30|h:M14 26 L10 42'],
    sneakers: ['Tênis', G4, 'p:w:M6 40 Q6 28 14 26 L26 22 Q36 34 52 36 Q58 38 58 46 V48 H6 Z|p:p:M20 30 L36 34 L34 41 L18 37 Z|r:r:4,46,56,8,3|t:M24 26 L28 30 M28 24 L32 29|h:M10 32 Q12 28 16 28'],
    skirt: ['Saia', G4, 'r:d:18,9,28,6|p:B:M20 15 H44 L56 52 H8 Z|t:M25 15 L18 52 M30 15 L28 52 M34 15 L36 52 M39 15 L46 52|a:r:2:M13 38 H51'],
    belt: ['Cinto', G4, 'p:d:M4 26 H60 V38 H4 Z|r:y:21,21,17,22,2|r:d:25,25,9,14|c:y:46,32,1.6|c:y:52,32,1.6|t:M30 32 H38|h:M8 29 H18'],
    necklace: ['Colar', G5, 'a:y:2:M10 10 Q32 50 54 10|p:c:M25 37 H39 L32 51 Z|t:M25 37 L32 41 L39 37|c:p:21,30,2|c:p:43,30,2|h:M28 39 L30 43'],
    earrings: ['Brincos', G5, 'a:y:3:M10 24 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0|c:y:18,14,2.5|c:y:46,12,2.5|a:y:2:M46 14 V24|p:p:M46 24 L49 31 L56 31 L50 35 L52 42 L46 38 L40 42 L42 35 L36 31 L43 31 Z'],
    bracelet: ['Pulseira', G5, 'a:s:5:M10 34 a22 10 0 1 0 44 0 a22 10 0 1 0 -44 0|c:p:14,41,3.5|c:c:23,44,3.5|c:y:32,45,3.5|c:c:41,44,3.5|c:p:50,41,3.5'],
    hairclip: ['Presilha', G5, 'p:p:M8 32 L48 18 Q57 17 56 25 L15 40 Q6 41 8 32 Z|t:M14 34 L50 21|p:y:M44 10 L47 17 L54 18 L49 22 L50 29 L44 25 L38 29 L39 22 L34 18 L41 17 Z|h:M12 32 L30 26'],
    pin: ['Broche / bóton', G5, 'c:y:32,32,22|c:r:32,32,16|p:w:M32 21 L35 29 L43 29 L37 34 L39 42 L32 37 L25 42 L27 34 L21 29 L29 29 Z|h:M16 24 Q20 14 30 12'],
    ramen: ['Lámen / ramen', G6, 'a:n:3:M36 22 L58 6|a:n:3:M40 24 L60 12|p:r:M8 30 H56 Q54 50 40 54 H24 Q10 50 8 30 Z|e:t:32,29,24,4|a:y:3:M14 28 Q18 22 22 28 Q26 22 30 28|c:w:41,27,5|c:o:41,27,2.5|c:w:24,27,4|t:M14 40 H50|r:d:20,54,24,4,1'],
    energy: ['Energético', G6, 'p:B:M20 8 H44 V56 Q44 60 40 60 H24 Q20 60 20 56 Z|e:s:32,8,12,3|p:l:M34 16 L24 34 H32 L28 50 L42 28 H34 L38 16 Z|h:M23 13 V54'],
    candy: ['Doce / bala', G6, 'p:y:M20 32 L7 21 V43 Z|p:y:M44 32 L57 21 V43 Z|e:p:32,32,13,10|h:M26 26 L36 39|h:M30 25 L40 37'],
    dango: ['Dango', G6, 'a:n:3:M32 4 V60|c:P:32,16,8.5|c:w:32,32,8.5|c:g:32,48,8.5|h:M27 12 Q28 9 31 9'],
    takoyaki: ['Takoyaki', G6, 'a:w:2:M50 12 L44 34|p:n:M6 40 H58 L52 55 H12 Z|c:t:18,36,8|c:t:32,34,8|c:t:46,36,8|a:n:3:M12 33 Q18 29 24 33 Q30 29 36 33 Q42 29 52 33|h:M14 40 L18 42'],
    icecream: ['Sorvete', G6, 'p:t:M20 30 L32 60 L44 30 Z|t:M24 36 L40 44 M22 42 L38 50 M40 36 L26 48|c:c:26,26,9|c:P:38,26,9|c:w:32,16,8|c:r:32,7,3|h:M27 13 Q29 10 32 10'],
    teacan: ['Chá gelado', G6, 'p:G:M18 12 H46 V54 Q46 58 42 58 H22 Q18 58 18 54 Z|e:s:32,12,14,4|r:w:18,25,28,18|p:g:M26 39 Q32 25 42 29 Q38 41 26 39 Z|h:M22 17 V52'],
    milk: ['Leite / caixinha', G6, 'p:s:M24 12 L32 4 L40 12 Z|p:w:M18 22 L24 12 H40 L46 22 V57 H18 Z|r:c:22,31,20,17,2|t:M18 22 H46|c:w:32,39,4|h:M21 26 V54'],
    syringe: ['Seringa', G6, 'a:s:2:M42 22 L57 7|p:w:M14 42 L36 20 L44 28 L22 50 Z|p:l:M18 46 L30 34 L36 40 L24 52 Z|p:m:M30 17 L47 34 L44 37 L27 20 Z|a:m:3:M18 46 L8 56|t:M24 32 L27 35 M28 28 L31 31'],
    herb: ['Erva / planta', G6, 'a:G:3:M32 58 V28 M32 40 L20 30 M32 34 L44 24|p:g:M20 30 Q8 24 12 12 Q24 16 20 30 Z|p:g:M44 24 Q56 18 52 8 Q40 10 44 24 Z|p:g:M32 28 Q24 16 32 6 Q40 16 32 28 Z|t:M12 12 L19 28 M52 8 L45 22'],
    potion: ['Poção', G6, 'p:v:M27 8 H37 V20 Q54 26 52 42 Q50 58 32 58 Q14 58 12 42 Q10 26 27 20 Z|p:P:M14 40 Q22 34 32 40 Q42 46 50 40 Q50 56 32 56 Q14 56 14 40 Z|r:n:25,3,14,7,2|c:w:26,47,2|c:w:36,51,1.5|h:M18 30 Q16 36 17 42'],
    sake: ['Saquê', G6, 'p:w:M26 4 H38 V14 Q46 20 46 30 V56 Q46 60 42 60 H22 Q18 60 18 56 V30 Q18 20 26 14 Z|r:r:22,31,20,21|t:M28 37 H36 M32 35 V48 M27 43 H37|h:M22 24 V54'],
    pager: ['Pager', G9, 'r:d:9,15,46,34,5|r:l:15,21,34,13,2|t:M19 26 H39 M19 30 H33|r:s:17,38,9,6,1|r:s:29,38,9,6,1|r:p:41,38,7,6,1|r:d:22,10,20,6,2'],
    handheld: ['Videogame portátil', G9, 'r:s:15,4,34,56,5|r:d:19,8,26,24,2|r:l:22,11,20,18|p:d:M20 40 h4 v-4 h4 v4 h4 v4 h-4 v4 h-4 v-4 h-4 Z|c:p:41,42,3|c:p:47,37,3|t:M26 54 L30 52 M33 54 L37 52'],
    floppy: ['Disquete', G9, 'r:B:8,8,48,48,3|r:s:19,8,25,17|r:d:35,10,6,13|r:w:15,32,34,22,2|t:M19 38 H45 M19 43 H40 M19 48 H35'],
    vhs: ['Fita VHS', G9, 'r:d:5,15,54,34,3|r:m:17,21,30,13,2|c:w:24,27.5,4|c:w:40,27.5,4|r:w:9,38,46,8|r:p:9,38,9,8|h:M9 18 H55'],
    laptop: ['Notebook', G9, 'r:d:12,9,40,30,3|r:c:15,12,34,24,1|p:s:M6 40 H58 L54 51 H10 Z|t:M14 44 H50 M22 48 H42|h:M18 15 L26 23'],
    camera: ['Câmera', G9, 'p:d:M20 20 L24 12 H40 L44 20 Z|r:d:6,20,52,34,4|c:s:32,37,12|c:B:32,37,7.5|r:w:46,24,8,5,1|r:p:10,24,7,4,1|h:M27 33 Q29 30 32 30'],
    polaroid: ['Polaroid', G9, 'r:w:12,6,40,52,2|r:c:16,10,32,32|c:y:39,20,4|p:g:M16 42 L28 26 L36 36 L42 30 L48 42 Z|t:M18 50 H32'],
    keycard: ['Cartão de acesso', G9, 'r:w:8,14,48,36,4|r:d:8,20,48,6|r:y:14,32,11,9,1|r:c:38,30,12,15,1|c:w:44,35,3|t:M14 45 H30'],
    flashlight: ['Lanterna', G9, 'p:y:M44 22 L60 12 V52 L44 42 Z|r:d:6,26,30,12,3|p:s:M35 21 H45 V43 H35 Z|r:r:14,29,8,6,1|h:M10 29 H32'],
    crt: ['TV de tubo', G9, 'a:d:2:M26 10 L18 2 M38 10 L46 2|r:s:5,10,54,41,6|r:c:11,15,37,31,6|p:d:M22 51 H42 L46 58 H18 Z|c:d:53,20,2|c:d:53,28,2|h:M15 22 L21 18'],
    wallet: ['Carteira', G7, 'p:g:M10 16 L14 8 H40 L42 16 Z|r:n:6,16,52,37,4|r:d:36,26,23,17,4|c:y:46,34.5,3|h:M10 22 V48'],
    coin: ['Moeda / iene', G7, 'c:y:32,32,23|c:y:32,32,17|t:M24 22 L32 32 L40 22 M32 32 V45 M25 34 H39 M25 39 H39|h:M14 24 Q18 14 28 11'],
    creditcard: ['Cartão de crédito', G7, 'r:b:6,14,52,36,4|r:d:6,20,52,7|r:y:12,32,10,8,1|t:M28 40 H50 M28 35 H40|c:r:46,44,3|c:y:50,44,3'],
    map: ['Mapa', G7, 'p:t:M6 14 L22 8 L42 14 L58 8 V50 L42 56 L22 50 L6 56 Z|t:M22 8 V50 M42 14 V56|a:r:2:M12 44 Q20 30 30 34 Q40 38 46 24|p:r:M44 18 L52 26 M52 18 L44 26|l:M44 18 L52 26 M52 18 L44 26'],
    compass: ['Bússola', G7, 'c:s:32,32,24|c:w:32,32,18|p:r:M32 14 L37 32 H27 Z|p:d:M32 50 L37 32 H27 Z|c:y:32,32,3|t:M32 8 V12 M32 52 V56 M8 32 H12 M52 32 H56'],
    dice: ['Dados', G7, 'p:w:M10 20 L32 10 L54 20 L32 30 Z|p:s:M10 20 L32 30 V56 L10 46 Z|p:w:M54 20 V46 L32 56 V30 Z|c:r:32,20,2.6|c:d:16,30,2|c:d:26,46,2|c:d:38,36,2|c:d:44,42,2|c:d:49,48,2|c:d:46,30,2'],
    lockpick: ['Gazuas / cadeado', G7, 'a:s:3:M8 50 L36 22 H44|a:m:3:M12 56 L40 28 Q46 26 46 32|a:s:3:M41 40 V33 Q47 27 53 33 V40|r:y:37,40,20,17,2|c:d:47,47,2.5|t:M47 49 V53'],
    rope: ['Corda', G7, 'a:n:5:M12 32 a20 15 0 1 0 40 0 a20 15 0 1 0 -40 0|a:n:5:M20 32 a12 8 0 1 0 24 0 a12 8 0 1 0 -24 0|a:n:5:M44 40 Q52 52 58 58|t:M14 26 L17 29 M48 24 L51 27 M30 46 L33 49'],
    toolbox: ['Caixa de ferramentas', G7, 'a:d:4:M24 16 V10 H40 V16|p:r:M10 16 H54 L58 24 H6 Z|r:r:6,24,52,30,3|r:s:28,28,8,6,1|t:M6 36 H58|h:M10 28 V50'],
    lighter: ['Isqueiro', G7, 'p:o:M38 14 Q29 8 36 2 Q45 8 38 14 Z|p:y:M38 13 Q34 10 37 6 Q41 10 38 13 Z|r:s:20,14,24,12,3|c:d:26,12,4|r:r:20,24,24,34,4|h:M24 28 V54'],
    letter: ['Carta / envelope', G7, 'r:w:6,16,52,34,2|t:M6 16 L32 36 L58 16 M6 50 L24 34 M58 50 L40 34|c:r:32,34,6|p:w:M32 37 c-1.5 -3 -6 -1.5 -4.5 2 l4.5 4 4.5 -4 c1.5 -3.5 -3 -5 -4.5 -2 Z'],
    photo: ['Fotografia', G7, 'p:w:M10 14 L52 8 L56 46 L14 52 Z|p:c:M14 18 L48 14 L52 38 L18 42 Z|c:d:33,26,5|p:d:M24 41 Q32 30 42 39 Z|p:y:M28 6 L40 4 L41 10 L29 12 Z'],
    manga: ['Mangá / revista', G7, 'p:w:M12 8 H48 V56 H12 Z|r:p:16,12,28,30|t:M18 16 L42 36 M18 24 L36 38 M30 14 L44 26|r:d:12,8,5,48|r:d:20,46,22,4|c:y:36,22,4'],
    candle: ['Vela', G7, 'e:y:32,56,15,4|r:w:24,26,16,30,2|p:w:M24 30 Q22 36 25 38 V30 Z|p:o:M32 22 Q24 12 32 3 Q40 12 32 22 Z|p:y:M32 20 Q28 14 32 9 Q36 14 32 20 Z|h:M27 32 V52'],
    mask: ['Máscara de ladrão', G10, 'p:w:M4 26 Q14 18 32 26 Q50 18 60 26 Q58 42 44 42 Q36 42 32 36 Q28 42 20 42 Q6 42 4 26 Z|p:d:M12 30 Q18 25 27 32 Q20 37 12 30 Z|p:d:M52 30 Q46 25 37 32 Q44 37 52 30 Z|t:M4 26 L1 20 M60 26 L63 20|h:M8 28 Q14 23 22 25'],
    callingcard: ['Cartão de aviso', G10, 'p:r:M10 10 L54 6 L56 56 L12 58 Z|p:d:M22 31 H42 V20 Q42 14 32 14 Q22 14 22 20 Z|r:d:18,30,28,4|h:M18 40 H44 M18 46 H38|t:M10 10 L12 58'],
    tarot: ['Carta de tarô', G10, 'r:B:14,4,36,56,3|t:M18 8 H46 V56 H18 Z|p:y:M32 12 L35 20 L43 20 L37 25 L39 33 L32 28 L25 33 L27 25 L21 20 L29 20 Z|p:w:M38 46 Q30 46 30 39 Q30 32 38 32 Q33 35 33 39 Q33 43 38 46 Z|t:M28 52 H36'],
    crystalball: ['Bola de cristal', G10, 'p:n:M18 50 H46 L50 58 H14 Z|c:v:32,30,18|c:P:27,26,6|c:w:38,34,2|c:w:24,36,1.5|h:M21 22 Q25 15 32 14'],
    shadow: ['Sombra', G10, 'p:d:M10 54 Q6 34 18 26 Q22 10 34 12 Q50 10 52 28 Q60 40 54 54 Q48 48 42 54 Q36 48 30 54 Q24 48 18 54 Q14 50 10 54 Z|p:y:M21 30 L30 34 L21 37 Z|p:y:M43 30 L34 34 L43 37 Z|t:M24 44 Q32 48 40 44'],
    evoker: ['Evocador', G10, 'r:s:9,17,46,11,2|p:s:M14 28 H29 L25 51 H12 Z|r:r:9,21,10,4|t:M44 20 H52|l:M29 28 Q31 38 22 38|h:M13 20 H51'],
    velvetkey: ['Chave de veludo', G10, 'p:b:M24 28 L53 57 L49 61 L20 32 Z|p:b:M41 45 L48 38 L52 42 L45 49 Z|c:B:18,22,11|c:c:18,22,5|p:y:M18 15 L20 20 L25 21 L21 24 L22 29 L18 26 L14 29 L15 24 L11 21 L16 20 Z|h:M10 19 Q12 14 17 12'],
    grimoire: ['Grimório', G10, 'p:v:M10 12 H45 Q50 12 50 18 V54 H16 Q10 54 10 48 Z|r:w:14,47,36,6|p:y:M30 20 L33 28 L41 28 L35 33 L37 41 L30 36 L23 41 L25 33 L19 28 L27 28 Z|t:M16 12 V46|c:y:30,30,9']
  };
  /* "cor:CHAVE" vira o hexa */
  function col(k) { return C[k] || k; }
  function nums(s) { return s.split(',').map(Number); }
  function sh(type, color, data, w) {
    var a = '';
    if (type === 'c') { var q = nums(data); a = '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="' + q[2] + '"'; }
    else if (type === 'e') { var e = nums(data); a = '<ellipse cx="' + e[0] + '" cy="' + e[1] + '" rx="' + e[2] + '" ry="' + e[3] + '"'; }
    else if (type === 'r') { var r = nums(data); a = '<rect x="' + r[0] + '" y="' + r[1] + '" width="' + r[2] + '" height="' + r[3] + '"' + (r[4] ? ' rx="' + r[4] + '"' : ''); }
    else a = '<path d="' + data + '"';
    return a;
  }
  var cache = {};
  function parts(id) {
    var def = I[id]; if (!def) return null;
    return def[2].split('|').map(function (s) {
      var t = s[0], rest = s.slice(2);
      if (t === 'p' || t === 'c' || t === 'e' || t === 'r') { var i = rest.indexOf(':'); return { t: t, c: rest.slice(0, i), d: rest.slice(i + 1) }; }
      if (t === 'a') { var i1 = rest.indexOf(':'), i2 = rest.indexOf(':', i1 + 1); return { t: 'a', c: rest.slice(0, i1), w: +rest.slice(i1 + 1, i2), d: rest.slice(i2 + 1) }; }
      return { t: t, d: rest };
    });
  }
  function inner(id) {
    if (cache[id]) return cache[id];
    var ps = parts(id); if (!ps) return '';
    var ink = C.k, shadow = '', body = '';
    ps.forEach(function (p) {
      if (p.t === 'a') {
        shadow += '<path d="' + p.d + '" fill="none" stroke="' + ink + '" stroke-width="' + (p.w + 3.4) + '"/>';
        body += '<path d="' + p.d + '" fill="none" stroke="' + ink + '" stroke-width="' + (p.w + 3.4) + '"/><path d="' + p.d + '" fill="none" stroke="' + col(p.c) + '" stroke-width="' + p.w + '"/>';
      } else if (p.t === 'l') body += '<path d="' + p.d + '" fill="none" stroke="' + ink + '" stroke-width="2.8"/>';
      else if (p.t === 't') body += '<path d="' + p.d + '" fill="none" stroke="' + ink + '" stroke-width="1.7" opacity=".85"/>';
      else if (p.t === 'h') body += '<path d="' + p.d + '" fill="none" stroke="#fff" stroke-width="2.3" opacity=".75"/>';
      else {
        shadow += sh(p.t, '', p.d) + ' fill="' + ink + '" stroke="' + ink + '" stroke-width="2.8"/>';
        body += sh(p.t, '', p.d) + ' fill="' + col(p.c) + '" stroke="' + ink + '" stroke-width="2.8"/>';
      }
    });
    return (cache[id] = '<g class="tk-sh" transform="translate(2.2 2.8)" opacity=".9">' + shadow + '</g><g class="tk-bd">' + body + '</g>');
  }
  function svg(id, cls) {
    if (!I[id]) return '';
    return '<svg class="tk-icon ' + (cls || '') + '" viewBox="-2 -2 68 68" aria-hidden="true" focusable="false" stroke-linejoin="round" stroke-linecap="round">' + inner(id) + '</svg>';
  }
  /* entradas novas para os seletores de ícone (o que ainda não existia nas listas antigas) */
  var BASE = 'knife sword greatsword katana rapier dualblades axe spear naginata bat hammer knuckles claws whip chain fan bow cards pistol revolver shotgun smg rifle launcher guitar bass acoustic violin cello harp keyboard accordion flute recorder sax trumpet trombone harmonica drums drumsticks tambourine conga mic turntable amp jacket gloves boots vest shirt coat helmet shield headphones charm ring glasses watch scarf bottle coffee soda onigiri bandage medkit pills snack bento spray tape disc book key phone battery backpack briefcase ticket gem gift box consumivel arma protecao acessorio especial'.split(' ');
  var extra = Object.keys(I).filter(function (k) { return BASE.indexOf(k) < 0; }).map(function (k) { return { id: k, label: I[k][0], group: I[k][1] }; });
  var css = '.tk-icon{display:inline-block;flex-shrink:0;vertical-align:middle;overflow:visible;background:none!important;-webkit-mask:none!important;mask:none!important}' +
    '.tk-icon .tk-bd,.tk-icon .tk-sh{transition:transform .35s cubic-bezier(.34,1.56,.64,1)}' +
    '@media (hover:hover){*:hover>.tk-icon .tk-bd,.tk-icon:hover .tk-bd{transform:translate(-1px,-2px) rotate(-2deg);transform-origin:32px 32px}}';
  try { var st = document.createElement('style'); st.id = 'tanakaIconsCss'; st.textContent = css; (document.head || document.documentElement).appendChild(st); } catch (e) {}
  root.TanakaIcons = { has: function (id) { return !!I[id]; }, svg: svg, list: Object.keys(I), extra: extra, label: function (id) { return I[id] ? I[id][0] : ''; }, group: function (id) { return I[id] ? I[id][1] : ''; } };
})(window);
