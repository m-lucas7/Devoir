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
});
