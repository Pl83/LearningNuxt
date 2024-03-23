<script setup lang="ts"></script>

<template>
    <main>
        <header>
            <h1>Qui somme nous ? </h1>
            <p>Spéculat-IF est une agence web qui simplifie les nouvelles technologies liées à l'informatique en imaginant une vision hypothétique et subjective du futur façonné par ces avancées.</p>
        </header>
        <section class="about">
            <div class="socials">
                <div>
                    <h3 style="background-color: transparent !important; color: #FFFFFF !important;">Nos réseaux :</h3>
                    <p style="background-color: transparent !important; color: #FFFFFF !important;">Retrouvez nous sur youtube avec une version de nos articles aux format vidéo et en short sur TikTok.</p>
                </div>
                <div class="social">
                    <img src="../images/youtube.svg" alt="youtube">
                    <a href="https://www.youtube.com/channel/UCyraSvJ0mzdwG8zgk7-YcQg" target="_blank">Lien youtube</a>
                </div>
                <div class="social">
                    <img src="../images/tiktok.svg" alt="tiktok">
                    <a href="https://www.tiktok.com/@speculat_if" target="_blank">Lien tiktok</a>
                </div>
                <div class="social">
                    <img src="../images/insta.svg" alt="">
                    <a href="https://www.instagram.com/speculatif.horizon/" target="_blank">Lien instagram</a>
                </div>
            </div>
            <form action="">
                <div>
                    <div class="champ">
                        <label for="first name">First name</label>
                        <input id="prenom" type="text">
                    </div>
                    <div class="champ">
                        <label for="name">Name *</label>
                        <input id="nom" type="text">
                    </div>
                </div>
                <div>
                    <div class="champ">
                        <label for="email">Email *</label>
                        <input id="email" type="email">
                    </div>
                    <div class="champ">
                        <label for="sujet">Sujet *</label>
                        <select name="sujet" id="subject-select" class="CFD">
                            <option value="">-- Sélectioner une option --</option>
                            <option value="sujet 1">Retour</option>
                            <option value="sujet 2">Question</option>
                            <option value="sujet 3">Erreur</option>
                            <option value="sujet 4">Autre</option>
                          </select>
                    </div>
                </div>
                <div class="champ">
                    <label for="message">Message *</label>
                    <textarea name="message" id="message" class="CFD" cols="30" rows="5" placeholder="Écris ton message là"></textarea>
                </div>
                <div class="valid">
                    <input onclick="VerifAndSend()" value="Envoyer">
                </div>
            </form>
        </section>
    </main>
</template>

<style scoped>
main {
    min-height: calc(100vh - 90px - 250px);
}

main .about {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 8.75rem;
  gap: 2rem;
}
main .about .socials {
  display: flex;
  flex-direction: column;
  background-color: #2F4DDB;
  color: white;
  width: 30%;
  border-radius: 0.4rem;
  padding: 3rem 2rem;
  gap: 2rem;
}
main .about .socials div {
  display: flex;
  flex-direction: column;
}
main .about .socials div h3 {
  font-size: 1.5rem;
  font-weight: 700;
}
main .about .socials div p {
  font-size: 0.8rem;
  font-weight: 400;
}
main .about .socials .social {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
main .about .socials .social img {
  width: 5vh;
  height: 5vh;
}
main .about .socials .social a {
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
}
main .about .socials .social a:hover {
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}
main .about form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 60%;
}
main .about form div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
}
main .about form .champ {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
main .about form .champ label {
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
}
main .about form .champ .t-darkmode {
  color: #f1f9fc;
}
main .about form .champ input,
main .about form .champ select,
main .about form .champ textarea {
  padding: 0.75rem 1rem;
  color: rgb(30, 30, 30);
  border: none;
  border-bottom: 1.5px solid rgb(30, 30, 30);
  font-size: 0.8rem;
  font-weight: 400;
  width: 100%;
  outline: none;
  align-items: center;
  justify-content: center;
}
main .about form .champ input::-moz-placeholder, main .about form .champ select::-moz-placeholder, main .about form .champ textarea::-moz-placeholder {
  color: rgb(30, 30, 30);
}
main .about form .champ input::placeholder,
main .about form .champ select::placeholder,
main .about form .champ textarea::placeholder {
  color: rgb(30, 30, 30);
}
main .about form .champ input:active,
main .about form .champ input:focus,
main .about form .champ textarea:active,
main .about form .champ textarea:focus,
main .about form .champ select:active,
main .about form .champ select:focus {
  outline: none;
}
main .about form .valid {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
main .about form .valid input {
  background-color: #2F4DDB;
  color: white;
  border: none;
  padding: 0.5rem 3rem;
  border-radius: 0.3rem;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  width: object-fit;
}
@media screen and (max-width: 768px) {
  main .about {
    display: flex;
    flex-direction: column;
    padding: 0 1.75rem;
    gap: 5rem;
  }
  main .about .socials {
    width: 100%;
  }
  main .about form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
  main .about form div {
    flex-direction: column;
  }
  main .about form .valid {
    width: 100%;
  }
  main .about form .valid input {
    width: 100%;
  }
}

header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 8.75rem;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>