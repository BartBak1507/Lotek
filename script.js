function losujLiczby() {
    var liczby = [];
    while (liczby.length < 6) {
        var los = Math.floor(Math.random() * 49) + 1;
        if (!liczby.includes(los)) {
            liczby.push(los);
        }
    }
    return liczby;
}

function policzTrafienia(liczbyUzytkownika, liczbyLosowe) {
    var trafienia = 0;
    for (var i = 0; i < liczbyUzytkownika.length; i++) {
        if (liczbyLosowe.includes(liczbyUzytkownika[i])) {
            trafienia++;
        }
    }
    return trafienia;
}

function pokazWynik(liczbyLosowe, trafienia) {
    var wynikDiv = document.getElementById("result");
    wynikDiv.classList.add("result");

    var tekst = "<p class='resultTable'>Wylosowane liczby: " + liczbyLosowe.join(", ") + "</p>";

    if (trafienia === 0) {
        tekst += "<p class='resultTable'>Brak trafień!</p>";
    } else {
        tekst += "<p class='resultTable'>Liczba trafień: " + trafienia + "</p>";
    }

    wynikDiv.innerHTML = tekst;
}

function wyczyscWynik() {
    var wynikDiv = document.getElementById("result");
    wynikDiv.classList.remove("result");
    wynikDiv.innerHTML = "";
}

function pobierzLiczby() {
    var liczby = [];
    for (var i = 1; i <= 6; i++) {
        var wartosc = parseInt(document.getElementById("num" + i).value);
        liczby.push(wartosc);
    }
    return liczby;
}

function obsluzFormularz(event) {
    event.preventDefault(); 

    var liczbyUzytkownika = pobierzLiczby();
    var liczbyLosowe = losujLiczby();
    var trafienia = policzTrafienia(liczbyUzytkownika, liczbyLosowe);

    pokazWynik(liczbyLosowe, trafienia);
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formularz");
    form.addEventListener("submit", obsluzFormularz);
    form.addEventListener("reset", wyczyscWynik);
});
