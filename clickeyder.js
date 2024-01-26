function clickit () {
    this.style.pointerEvents = "none";
    if (this.textContent == reihyn[feysht]) {
        if (sfxGoll) {
            const clinck = new Audio("sheeanyn/clinck.mp3");
            clinck.play();
            const sheean = new Audio(focklynYnsit[reihyn[feysht]].sheean);
            sheean.play();
            this.style.backgroundColor = "chartreuse";
        };
        feysht++;
        roie++;
        freayllAgg();
        if (feysht == Object.keys(focklynYnsit).length) {
            feysht = 0;
            runt++;
            if (runt == 4) {
                if (kiaullGoll) {
                    kiaull.pause();
                    let kiaullJerrinagh = new Audio(agg >= 108 ? 'sheeanyn/jerrey-mie.mp3' : 'sheeanyn/jerrey-cadjin.mp3');
                    kiaullJerrinagh.play();
                };
                const mullagh = document.getElementById("saagh-mullagh");
                mullagh.remove();
                const mean = document.getElementById("saagh-mean");
                mean.style.gridRow = "1";
                mean.style.marginTop = "40px";
                mean.textContent = "";
                const teksAggJerrinagh = trogAyrn("h2", "teks-agg-jerrinagh", ["Final Score"]);
                const moylley = document.createElement("div");
                moylley.textContent = "Jeant dy mie!";
                const aggJerrinagh = document.createElement("div");
                aggJerrinagh.id = "agg-jerrinagh";
                aggJerrinagh.textContent = agg;
                const reesht = trogAyrn("button", "cramman-reesht", ["again"]);
                reesht.onclick = () => location.reload();
                const earrooFeyshtyn = Object.keys(focklynYnsit).length * 4;
                const nynAgg = (smoo, sloo) => {
                    if (agg >= smoo * earrooFeyshtyn && agg < sloo * earrooFeyshtyn) {
                        caghlaaRoot(null, smoo);
                        return "nyn-agg";
                    } else return "agg-elley";
                };
                const boayrdAgg = trogAyrn('div', 'boayrd-agg', [
                    trogAyrn("div", "saagh-yindyssagh", [
                        trogAyrn("div", "yindyssagh", ["yindyssagh"], ["agg-ennym"]),
                        trogAyrn("div", "agg-yindyssagh", [`${5 * earrooFeyshtyn}`])
                    ], ["aggyn", `${nynAgg(5, 100)}`]),
                    trogAyrn("div", "saagh-niartal", [
                        trogAyrn("div", "niartal", ["niartal"], ["agg-ennym"]), 
                        trogAyrn("div", "agg-niartal", [`${4 * earrooFeyshtyn}`])
                    ], ["aggyn", `${nynAgg(4, 5)}`]),
                    trogAyrn("div", "saagh-feer-vie", [
                        trogAyrn("div", "feer-vie", ["feer vie"], ["agg-ennym"]),
                        trogAyrn("div", "agg-feer-vie", [`${3 * earrooFeyshtyn}`])
                    ], ["aggyn", `${nynAgg(3, 4)}`]),
                    trogAyrn("div", "saagh-braew", [
                        trogAyrn("div", "braew", ["braew"], ["agg-ennym"]),
                        trogAyrn("div", "agg-braew", [`${2 * earrooFeyshtyn}`])
                    ], ["aggyn", `${nynAgg(2, 3)}`]),
                    trogAyrn("div", "saagh-mdl", [
                        trogAyrn("div", "mdl", ["mie dy liooar"], ["agg-ennym"]), 
                        trogAyrn("div", "agg-mdl", [`${earrooFeyshtyn}`])
                    ], ["aggyn", `${nynAgg(1, 2)}`])
                ]);
                mean.append(teksAggJerrinagh, aggJerrinagh, moylley, reesht, boayrdAgg);
                return;
            }
            soieReihyn();
        };
        setTimeout(caghlaaMean, 500);
    } else {
        const neuChiart = new Audio("sheeanyn/neu-chiart.mp3");
        if (sfxGoll) neuChiart.play();
        if (agg > 0) { 
            agg--;
            roie = 0;
            const saaghAgg = document.getElementById("agg");
            saaghAgg.remove();
            const aggNoa = trogAyrn("div", "agg", [agg])
            caghlaaRoot("rgba(255, 69, 0, 0.5)");
            fys.append(aggNoa);
        };
        this.style.backgroundColor = "crimson";
        this.style.color = "white";
    };
};