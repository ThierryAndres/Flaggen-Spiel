const countries = [
    { name: "Afghanistan", flag: "https://flagcdn.com/w320/af.png" },
    { name: "Ägypten", flag: "https://flagcdn.com/w320/eg.png" },
    { name: "Albanien", flag: "https://flagcdn.com/w320/al.png" },
    { name: "Algerien", flag: "https://flagcdn.com/w320/dz.png" },
    { name: "Andorra", flag: "https://flagcdn.com/w320/ad.png" },
    { name: "Angola", flag: "https://flagcdn.com/w320/ao.png" },
    { name: "Antigua und Barbuda", flag: "https://flagcdn.com/w320/ag.png" },
    { name: "Äquatorialguinea", flag: "https://flagcdn.com/w320/gq.png" },
    { name: "Argentinien", flag: "https://flagcdn.com/w320/ar.png" },
    { name: "Armenien", flag: "https://flagcdn.com/w320/am.png" },
    { name: "Aserbaidschan", flag: "https://flagcdn.com/w320/az.png" },
    { name: "Äthiopien", flag: "https://flagcdn.com/w320/et.png" },
    { name: "Australien", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Bahamas", flag: "https://flagcdn.com/w320/bs.png" },
    { name: "Bahrain", flag: "https://flagcdn.com/w320/bh.png" },
    { name: "Bangladesch", flag: "https://flagcdn.com/w320/bd.png" },
    { name: "Barbados", flag: "https://flagcdn.com/w320/bb.png" },
    { name: "Belgien", flag: "https://flagcdn.com/w320/be.png" },
    { name: "Belize", flag: "https://flagcdn.com/w320/bz.png" },
    { name: "Benin", flag: "https://flagcdn.com/w320/bj.png" },
    { name: "Bhutan", flag: "https://flagcdn.com/w320/bt.png" },
    { name: "Bolivien", flag: "https://flagcdn.com/w320/bo.png" },
    { name: "Bosnien und Herzegowina", flag: "https://flagcdn.com/w320/ba.png" },
    { name: "Botswana", flag: "https://flagcdn.com/w320/bw.png" },
    { name: "Brasilien", flag: "https://flagcdn.com/w320/br.png" },
    { name: "Brunei", flag: "https://flagcdn.com/w320/bn.png" },
    { name: "Bulgarien", flag: "https://flagcdn.com/w320/bg.png" },
    { name: "Burkina Faso", flag: "https://flagcdn.com/w320/bf.png" },
    { name: "Burundi", flag: "https://flagcdn.com/w320/bi.png" },
    { name: "Chile", flag: "https://flagcdn.com/w320/cl.png" },
    { name: "China", flag: "https://flagcdn.com/w320/cn.png" },
    { name: "Costa Rica", flag: "https://flagcdn.com/w320/cr.png" },
    { name: "Dänemark", flag: "https://flagcdn.com/w320/dk.png" },
    { name: "Dominica", flag: "https://flagcdn.com/w320/dm.png" },
    { name: "Dominikanische Republik", flag: "https://flagcdn.com/w320/do.png" },
    { name: "Dschibuti", flag: "https://flagcdn.com/w320/dj.png" },
    { name: "Ecuador", flag: "https://flagcdn.com/w320/ec.png" },
    { name: "El Salvador", flag: "https://flagcdn.com/w320/sv.png" },
    { name: "Eritrea", flag: "https://flagcdn.com/w320/er.png" },
    { name: "Estland", flag: "https://flagcdn.com/w320/ee.png" },
    { name: "Eswatini", flag: "https://flagcdn.com/w320/sz.png" },
    { name: "Fidschi", flag: "https://flagcdn.com/w320/fj.png" },
    { name: "Finnland", flag: "https://flagcdn.com/w320/fi.png" },
    { name: "Frankreich", flag: "https://flagcdn.com/w320/fr.png" },
    { name: "Gabun", flag: "https://flagcdn.com/w320/ga.png" },
    { name: "Gambia", flag: "https://flagcdn.com/w320/gm.png" },
    { name: "Georgien", flag: "https://flagcdn.com/w320/ge.png" },
    { name: "Ghana", flag: "https://flagcdn.com/w320/gh.png" },
    { name: "Grenada", flag: "https://flagcdn.com/w320/gd.png" },
    { name: "Griechenland", flag: "https://flagcdn.com/w320/gr.png" },
    { name: "Guatemala", flag: "https://flagcdn.com/w320/gt.png" },
    { name: "Guinea", flag: "https://flagcdn.com/w320/gn.png" },
    { name: "Guyana", flag: "https://flagcdn.com/w320/gy.png" },
    { name: "Haiti", flag: "https://flagcdn.com/w320/ht.png" },
    { name: "Honduras", flag: "https://flagcdn.com/w320/hn.png" },
    { name: "Indien", flag: "https://flagcdn.com/w320/in.png" },
    { name: "Indonesien", flag: "https://flagcdn.com/w320/id.png" },
    { name: "Irak", flag: "https://flagcdn.com/w320/iq.png" },
    { name: "Iran", flag: "https://flagcdn.com/w320/ir.png" },
    { name: "Irland", flag: "https://flagcdn.com/w320/ie.png" },
    { name: "Island", flag: "https://flagcdn.com/w320/is.png" },
    { name: "Israel", flag: "https://flagcdn.com/w320/il.png" },
    { name: "Italien", flag: "https://flagcdn.com/w320/it.png" },
    { name: "Jamaika", flag: "https://flagcdn.com/w320/jm.png" },
    { name: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
    { name: "Jemen", flag: "https://flagcdn.com/w320/ye.png" },
    { name: "Jordanien", flag: "https://flagcdn.com/w320/jo.png" },
    { name: "Kambodscha", flag: "https://flagcdn.com/w320/kh.png" },
    { name: "Kamerun", flag: "https://flagcdn.com/w320/cm.png" },
    { name: "Kanada", flag: "https://flagcdn.com/w320/ca.png" },
    { name: "Kap Verde", flag: "https://flagcdn.com/w320/cv.png" },
    { name: "Kasachstan", flag: "https://flagcdn.com/w320/kz.png" },
    { name: "Katar", flag: "https://flagcdn.com/w320/qa.png" },
    { name: "Kenia", flag: "https://flagcdn.com/w320/ke.png" },
    { name: "Kirgisistan", flag: "https://flagcdn.com/w320/kg.png" },
    { name: "Kiribati", flag: "https://flagcdn.com/w320/ki.png" },
    { name: "Kolumbien", flag: "https://flagcdn.com/w320/co.png" },
    { name: "Komoren", flag: "https://flagcdn.com/w320/km.png" },
    { name: "Kongo, Demokratische Republik", flag: "https://flagcdn.com/w320/cd.png" },
    { name: "Kongo, Republik", flag: "https://flagcdn.com/w320/cg.png" },
    { name: "Kroatien", flag: "https://flagcdn.com/w320/hr.png" },
    { name: "Kuba", flag: "https://flagcdn.com/w320/cu.png" },
    { name: "Kuwait", flag: "https://flagcdn.com/w320/kw.png" },
    { name: "Laos", flag: "https://flagcdn.com/w320/la.png" },
    { name: "Lesotho", flag: "https://flagcdn.com/w320/ls.png" },
    { name: "Lettland", flag: "https://flagcdn.com/w320/lv.png" },
    { name: "Libanon", flag: "https://flagcdn.com/w320/lb.png" },
    { name: "Liberia", flag: "https://flagcdn.com/w320/lr.png" },
    { name: "Libyen", flag: "https://flagcdn.com/w320/ly.png" },
    { name: "Liechtenstein", flag: "https://flagcdn.com/w320/li.png" },
    { name: "Litauen", flag: "https://flagcdn.com/w320/lt.png" },
    { name: "Luxemburg", flag: "https://flagcdn.com/w320/lu.png" },
    { name: "Madagaskar", flag: "https://flagcdn.com/w320/mg.png" },
    { name: "Malawi", flag: "https://flagcdn.com/w320/mw.png" },
    { name: "Malaysia", flag: "https://flagcdn.com/w320/my.png" },
    { name: "Malediven", flag: "https://flagcdn.com/w320/mv.png" },
    { name: "Mali", flag: "https://flagcdn.com/w320/ml.png" },
    { name: "Malta", flag: "https://flagcdn.com/w320/mt.png" },
    { name: "Marokko", flag: "https://flagcdn.com/w320/ma.png" },
    { name: "Marshallinseln", flag: "https://flagcdn.com/w320/mh.png" },
    { name: "Mauretanien", flag: "https://flagcdn.com/w320/mr.png" },
    { name: "Mauritius", flag: "https://flagcdn.com/w320/mu.png" },
    { name: "Mexiko", flag: "https://flagcdn.com/w320/mx.png" },
    { name: "Mikronesien", flag: "https://flagcdn.com/w320/fm.png" },
    { name: "Moldawien", flag: "https://flagcdn.com/w320/md.png" },
    { name: "Monaco", flag: "https://flagcdn.com/w320/mc.png" },
    { name: "Mongolei", flag: "https://flagcdn.com/w320/mn.png" },
    { name: "Montenegro", flag: "https://flagcdn.com/w320/me.png" },
    { name: "Mosambik", flag: "https://flagcdn.com/w320/mz.png" },
    { name: "Myanmar", flag: "https://flagcdn.com/w320/mm.png" },
    { name: "Namibia", flag: "https://flagcdn.com/w320/na.png" },
    { name: "Nauru", flag: "https://flagcdn.com/w320/nr.png" },
    { name: "Nepal", flag: "https://flagcdn.com/w320/np.png" },
    { name: "Niederlande", flag: "https://flagcdn.com/w320/nl.png" },
    { name: "Neuseeland", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Nicaragua", flag: "https://flagcdn.com/w320/ni.png" },
    { name: "Niger", flag: "https://flagcdn.com/w320/ne.png" },
    { name: "Nigeria", flag: "https://flagcdn.com/w320/ng.png" },
    { name: "Nordkorea", flag: "https://flagcdn.com/w320/kp.png" },
    { name: "Nordmazedonien", flag: "https://flagcdn.com/w320/mk.png" },
    { name: "Norwegen", flag: "https://flagcdn.com/w320/no.png" },
    { name: "Oman", flag: "https://flagcdn.com/w320/om.png" },
    { name: "Österreich", flag: "https://flagcdn.com/w320/at.png" },
    { name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
    { name: "Palau", flag: "https://flagcdn.com/w320/pw.png" },
    { name: "Panama", flag: "https://flagcdn.com/w320/pa.png" },
    { name: "Papua-Neuguinea", flag: "https://flagcdn.com/w320/pg.png" },
    { name: "Paraguay", flag: "https://flagcdn.com/w320/py.png" },
    { name: "Peru", flag: "https://flagcdn.com/w320/pe.png" },
    { name: "Philippinen", flag: "https://flagcdn.com/w320/ph.png" },
    { name: "Polen", flag: "https://flagcdn.com/w320/pl.png" },
    { name: "Portugal", flag: "https://flagcdn.com/w320/pt.png" },
    { name: "Ruanda", flag: "https://flagcdn.com/w320/rw.png" },
    { name: "Rumänien", flag: "https://flagcdn.com/w320/ro.png" },
    { name: "Russland", flag: "https://flagcdn.com/w320/ru.png" },
    { name: "Salomonen", flag: "https://flagcdn.com/w320/sb.png" },
    { name: "Sambia", flag: "https://flagcdn.com/w320/zm.png" },
    { name: "Samoa", flag: "https://flagcdn.com/w320/ws.png" },
    { name: "San Marino", flag: "https://flagcdn.com/w320/sm.png" },
    { name: "São Tomé und Príncipe", flag: "https://flagcdn.com/w320/st.png" },
    { name: "Saudi-Arabien", flag: "https://flagcdn.com/w320/sa.png" },
    { name: "Schweden", flag: "https://flagcdn.com/w320/se.png" },
    { name: "Schweiz", flag: "https://flagcdn.com/w320/ch.png" },
    { name: "Senegal", flag: "https://flagcdn.com/w320/sn.png" },
    { name: "Serbien", flag: "https://flagcdn.com/w320/rs.png" },
    { name: "Seychellen", flag: "https://flagcdn.com/w320/sc.png" },
    { name: "Sierra Leone", flag: "https://flagcdn.com/w320/sl.png" },
    { name: "Simbabwe", flag: "https://flagcdn.com/w320/zw.png" },
    { name: "Singapur", flag: "https://flagcdn.com/w320/sg.png" },
    { name: "Slowakei", flag: "https://flagcdn.com/w320/sk.png" },
    { name: "Slowenien", flag: "https://flagcdn.com/w320/si.png" },
    { name: "Somalia", flag: "https://flagcdn.com/w320/so.png" },
    { name: "Spanien", flag: "https://flagcdn.com/w320/es.png" },
    { name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
    { name: "St. Kitts und Nevis", flag: "https://flagcdn.com/w320/kn.png" },
    { name: "St. Lucia", flag: "https://flagcdn.com/w320/lc.png" },
    { name: "St. Vincent und die Grenadinen", flag: "https://flagcdn.com/w320/vc.png" },
    { name: "Sudan", flag: "https://flagcdn.com/w320/sd.png" },
    { name: "Suriname", flag: "https://flagcdn.com/w320/sr.png" },
    { name: "Swasiland", flag: "https://flagcdn.com/w320/sz.png" },
    { name: "Syrien", flag: "https://flagcdn.com/w320/sy.png" },
    { name: "Tadschikistan", flag: "https://flagcdn.com/w320/tj.png" },
    { name: "Tansania", flag: "https://flagcdn.com/w320/tz.png" },
    { name: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
    { name: "Timor-Leste", flag: "https://flagcdn.com/w320/tl.png" },
    { name: "Togo", flag: "https://flagcdn.com/w320/tg.png" },
    { name: "Tonga", flag: "https://flagcdn.com/w320/to.png" },
    { name: "Trinidad und Tobago", flag: "https://flagcdn.com/w320/tt.png" },
    { name: "Tschad", flag: "https://flagcdn.com/w320/td.png" },
    { name: "Tschechien", flag: "https://flagcdn.com/w320/cz.png" },
    { name: "Tunesien", flag: "https://flagcdn.com/w320/tn.png" },
    { name: "Türkei", flag: "https://flagcdn.com/w320/tr.png" },
    { name: "Turkmenistan", flag: "https://flagcdn.com/w320/tm.png" },
    { name: "Tuvalu", flag: "https://flagcdn.com/w320/tv.png" },
    { name: "Uganda", flag: "https://flagcdn.com/w320/ug.png" },
    { name: "Ukraine", flag: "https://flagcdn.com/w320/ua.png" },
    { name: "Ungarn", flag: "https://flagcdn.com/w320/hu.png" },
    { name: "Uruguay", flag: "https://flagcdn.com/w320/uy.png" },
    { name: "Usbekistan", flag: "https://flagcdn.com/w320/uz.png" },
    { name: "Vanuatu", flag: "https://flagcdn.com/w320/vu.png" },
    { name: "Vatikanstadt", flag: "https://flagcdn.com/w320/va.png" },
    { name: "Venezuela", flag: "https://flagcdn.com/w320/ve.png" },
    { name: "Vereinigte Arabische Emirate", flag: "https://flagcdn.com/w320/ae.png" },
    { name: "Vereinigte Staaten", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Vietnam", flag: "https://flagcdn.com/w320/vn.png" },
    { name: "Wales", flag: "https://flagcdn.com/w320/gb-wls.png" },
    { name: "Weißrussland", flag: "https://flagcdn.com/w320/by.png" },
    { name: "Zentralafrikanische Republik", flag: "https://flagcdn.com/w320/cf.png" }
];

let score = 0;
let timeLeft = 60;
let timer;
let currentQuestion = null;
let correctCount = 0;
let wrongCount = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomCountry() {
    const correctCountry = countries[Math.floor(Math.random() * countries.length)];
    let options = [correctCountry];
    while (options.length < 4) {
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        if (!options.find(opt => opt.name === randomCountry.name)) {
            options.push(randomCountry);
        }
    }
    return { correct: correctCountry, options: shuffle(options) };
}

function displayQuestion() {
    if (timeLeft > 0) {
        currentQuestion = getRandomCountry();
        document.getElementById("flagImage").src = currentQuestion.correct.flag;
        document.getElementById("question").textContent = "Welches Land gehört zu dieser Flagge?";
        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";
        currentQuestion.options.forEach(country => {
            const button = document.createElement("button");
            button.textContent = country.name;
            button.className = "option-btn";
            button.onclick = () => checkAnswer(country.name);
            optionsDiv.appendChild(button);
        });
    }
}

function checkAnswer(selected) {
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuestion.correct.name) {
            button.classList.add("correct");
            if (button.textContent === selected) {
                score++;
                correctCount++;
                document.getElementById("score").textContent = score;
            }
        } else if (button.textContent === selected) {
            button.classList.add("wrong");
            wrongCount++;
        }
    });
    setTimeout(() => {
        buttons.forEach(button => (button.disabled = false));
        buttons.forEach(button => button.classList.remove("correct", "wrong"));
        displayQuestion();
    }, 1000);
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showStats();
        }
    }, 1000);
}

function showStats() {
    document.getElementById("stats").style.display = "block";
    document.getElementById("correctCount").textContent = correctCount;
    document.getElementById("wrongCount").textContent = wrongCount;
    document.querySelector(".options").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.querySelector("button").style.display = "none";
}

function restartGame() {
    score = 0;
    timeLeft = 60;
    correctCount = 0;
    wrongCount = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = timeLeft;
    document.getElementById("stats").style.display = "none";
    document.querySelector(".options").style.display = "flex";
    document.getElementById("question").style.display = "block";
    document.querySelector("button").style.display = "block";
    clearInterval(timer);
    startTimer();
    displayQuestion();
}

// Spiel starten
startTimer();
displayQuestion();