$(function () {
    var home_select = null;
    var perch_select = null;


    function MontarTabuleiro() {
        var i;
        var letras = ["A", "B", "C", "D", "E", "F", "G", "H"];

        $("#game_board").append("<div id='column' class='column' />");

        for (n = 1; n <= 8; n++) {
            $("#column").append("<div id='idline' class='idline'>" + n + "</div>");
        }

        for (i = 0; i < 8; i++) {

            $("#game_board").append("<div id='column_" + i.toString() + "'class='column' />");

            for (j = 0; j < 8; j++) {
                var nome_casa = "home_" + i.toString() + "_" + j.toString();
                var classe = (i % 2 == 0 ? (j % 2 == 0 ? "home_white" : "home_black") : (j % 2 != 0 ? "home_white" : "home_black"));
                $("#column_" + i.toString()).append("<div id='" + nome_casa + "' class='" + classe + "' />");

                if (classe === "home_black") {
                    if (j < 3) {
                        $("#" + nome_casa).append("<img src='../img/black_perch.png' class='perch' id='" + nome_casa.replace("home", "black_perch") + "'/>");
                    }
                    else
                        if (j > 4) {
                            $("#" + nome_casa).append("<img src='../img/white_perch.png' class='perch' id='" + nome_casa.replace("home", "white_perch") + "'/>");
                        }
                }
            }

            $("#column_" + i.toString()).append("<div id='idcolumn' class='idcolumn'>" + letras[i] + "</div>");
        }
    }

    MontarTabuleiro();

    $(".home").click(function () {
        $("#" + home_select).removeClass("home_select");
        home_select = $(this).attr("id");
        $("#" + home_select).addClass("home_select");
        $("#home_select").text(home_select);

        perch_select = $("#" + home_select).children("img:first").attr("id");
        if (perch_select == null) {
            perch_select = "NENHUMA PECA SELECIONADA";
        }
        $("#info_perch_select").text(perch_select.toString());
        console.log(home_select);
        console.log(perch_select);
    });

});




