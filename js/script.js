window.addEventListener("load", function () {
    // 1.A)
    const ecrans = document.querySelectorAll('[id^="ecran"]');
  
    ecrans.forEach((ecran, index) => {
      if (index !== 0) {
        ecran.style.display = "none";
      }
    });
  
    // 1.B)
    const boutonsOk = document.querySelectorAll('[id^="btEcran"]:not(#btEcran4)');
  
    boutonsOk.forEach((bouton) => {
      bouton.addEventListener("click", () => {
        const ecranActuel = bouton.closest('[id^="ecran"]');
  
        ecranActuel.style.display = "none";
  
        ecranActuel.nextElementSibling.style.display = "block";
      });
  
      // 1.C)
      const boutonsRetour = document.querySelectorAll(
        '[id^="btRetour"]:not(#btRetour1)'
      );
  
      boutonsRetour.forEach((bouton) => {
        bouton.addEventListener("click", () => {
          const ecranActuel = bouton.closest('[id^="ecran"]');
  
          ecranActuel.style.display = "none";
  
          ecranActuel.previousElementSibling.style.display = "block";
        });
      });
    });
  
    // 2.A)
    const forfaits = document.querySelectorAll(".card");
    const btOk = document.getElementById("btEcran1");
    let forfaitPrecedant = null;
    btOk.disabled = true;
  
    forfaits.forEach((forfait) => {
      forfait.addEventListener("click", function () {
        forfaits.forEach((autreForfait) => {
          if (autreForfait !== forfait) {
            autreForfait.style.backgroundColor = "white";
          }
        });
  
        if (forfait.style.backgroundColor === "red") {
          forfait.style.backgroundColor = "white";
          btOk.disabled = true;
        } else {
          forfait.style.backgroundColor = "red";
          btOk.disabled = false;
        }
      });
    });
  
    // 3)
    let nbrAnnonce = document.getElementById("inputNb");
  
    nbrAnnonce.addEventListener("input", function () {
      let annonce = parseFloat(nbrAnnonce.value);
      let btOk2 = document.getElementById("btEcran2");
      btOk2.disabled = true;
  
      if (annonce > 0) {
        btOk2.disabled = false;
      }
    });
  
    // 4.A)
    const forfaitsEcran4 = document.querySelectorAll("#ecran3 .card");
    const boutonEcran3 = document.getElementById("btEcran3");
  
    forfaitsEcran4.forEach((forfait) => {
      forfait.addEventListener("click", function () {
        forfaitsEcran4.forEach((autreForfait) => {
          if (autreForfait !== forfait) {
            autreForfait.classList.remove("selected");
          }
        });
  
        forfait.classList.add("selected");
      });
    });
  
    boutonEcran3.addEventListener("click", function () {
      const forfaitSelectionneEcran4 = document.querySelector("#ecran3 .card.selected h3").innerText;
      const prixSelectionneEcran4 = document.querySelector("#ecran3 .card.selected h4").innerText.split("/")[0].trim();
      const optionSelectionneeEcran4 = document.querySelector("#ecran3 .card.selected h3").innerText;
  
      const recapPrix = document.getElementById("recapPrix");
      const recapDuree = document.getElementById("recapDuree2");
      const recapQuantite = document.getElementById("recapQuantite");
      const prixTotal = document.getElementById("prixTotal");
  
      recapPrix.innerText = prixSelectionneEcran4;
      
      recapQuantite.innerText = nbrAnnonce.value;
      prixTotal.innerText = (parseFloat(prixSelectionneEcran4) * parseFloat(nbrAnnonce.value)).toFixed(2);
  
      const optionsSelectionnees = document.getElementById("recapOption1");
  
      if (optionSelectionneeEcran4 === "Duplique") {
        optionsSelectionnees.style.display = "block";
      } else {
        optionsSelectionnees.style.display = "none";
      }
  
      // Autres options à traiter de la même manière
  
      const ecranActuel = document.getElementById("ecran3");
      const ecranSuivant = ecranActuel.nextElementSibling;
  
      ecranActuel.style.display = "none";
      ecranSuivant.style.display = "block";
    });
  });
  