$(function () {
    beolvas("recept.json", megjelenit);
    $(".title").css("background", "lightyellow");
    $(".title2").css("background", "red");
    $(".kep").append("<img>");
    $(".kep").append("/<img>");
    $(".title2").css("background", "red");
    $(".receptNev").css("background", "red");
    $("img").css("width", "300px");


});

function beolvas(eleresiut, callback) {
    fetch(eleresiut)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.receptek);
            callback(data.receptek);
        })
        .catch((err) => console.log(err));
}

function megjelenit(tomb) {
    let txt = "<table>";
    tomb.forEach(function (recept, index) {
        txt += "<tr id =" + index + ">";
        for (const key in recept) {
            txt += "<td>";
            txt += recept[key];
            txt += "</td>";
        }
        txt += "</tr>";
    });
    txt += "</table>";
    $(".tartalom").append(txt);

    $(".tartalom table tr").on("click", function () {
        let aktIndex = ($(this).attr("id"))
        $(".kep img").attr("src", tomb[aktIndex].kep);

        $(".receptNev").html(tomb[aktIndex].nev);
        let txt = "<ul> Hozzávalók"
        tomb.forEach(function (recept, index) {
            txt += "<li>" + tomb[aktIndex].hozzavalok + "</li>"
        })
        txt += "</ul>"
        $(".hozzavalok").html(txt);
        $(".keszitese").html("Elkészítése: " + "<br>" + tomb[aktIndex].leiras);
    })

}