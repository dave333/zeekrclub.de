# Loggbok – utmaningar under uppsättningen av Zeekr Club

En sammanställning av de tekniska problem vi stötte på och hur de löstes, under arbetet med zeekrclub.de och forum.zeekrclub.de.

---

## Dag 1 (19 oktober) – Bygget av sajten på Vercel

- **PowerShell blockerade `npx`-kommandon.** Windows exekveringspolicy stoppade `npx.ps1`. Löst genom att köra `npx.cmd` istället, vilket kringgår PowerShell-restriktionen.
- **Vercel-uppladdning kraschade på stora filer.** Vid deploy av bildspelet (flera MB stora PNG-bilder) avbröts uppladdningen av ett tillfälligt nätverksfel. Löst genom att köra om deployen.
- **Bildspelsbilder hade en "bleed"-artefakt.** Två av tre slides innehöll en felaktig rand överst (rest från en annan bild i serien, troligen ett exportfel från bildgenereringen). Du valde att behålla dem som de var.
- **www-subdomänen gav SSL-varning.** `www.zeekrclub.de` var aldrig kopplad till Vercel-projektet (bara `zeekrclub.de` utan "www"), vilket gjorde att webbläsaren fick fel certifikat. Löst genom att lägga till och verifiera www-domänen separat i Vercel.

## Dag 2 (24 oktober) – Flytt till egen server (Inleed VPS)

### Research och inköp
- Undersökte Inleeds webbhotell- och VPS-priser. Konstaterade att Discourse (forum-mjukvaran) kräver Docker och därför en VPS, inte vanligt delat webbhotell.
- Du köpte **VPS Starter** (89 kr/mån) hos Inleed.

### SSH-verktyg från grunden
- Standardverktyg för filöverföring (`sshpass`, `expect`, `plink`) saknades i miljön. Byggde egna Node.js-skript (via `ssh2`-biblioteket) för att köra kommandon och överföra filer till servern.
- **Git Bashs path-konvertering saboterade filsökvägar.** Git Bash på Windows "översätter" automatiskt argument som ser ut som Unix-sökvägar (t.ex. `/var/www/zeekrclub`) till Windows-sökvägar (`C:/Program Files/Git/var/www/zeekrclub`) innan de når Node.js. Det här orsakade att uppladdade filer hamnade på helt fel plats på servern, flera gånger, innan grundorsaken hittades. Löst med miljövariabeln `MSYS_NO_PATHCONV=1`.
- **SFTP-biblioteket kraschade på större filer.** Bildfiler (1,5–2,7 MB) fick uppladdningen att krascha med spökfel ("No such file" trots att filen fanns). Löst genom att byta metod till base64-kodning direkt via SSH-kommandon istället för SFTP-strömmar.

### Installation av Discourse (forumet)
- **Dockers standardinstallationsskript stödde inte AlmaLinux.** Fick installera Docker manuellt via `dnf` och Docker CE:s CentOS-repo istället.
- **Discourse vägrade bygga utan e-postinställningar.** Bootstrap avbröts med "Mail is not configured". Löst temporärt med flaggan `DISCOURSE_SKIP_EMAIL_SETUP` (riktig e-post/SMTP är fortfarande inte uppsatt).
- **Försökte installera ett plugin som redan fanns inbyggt.** `discourse-oauth2-basic` är numera bundlat med Discourse som standard – att försöka klona in det som separat plugin fick hela bygget att misslyckas och stoppade servern tillfälligt.
- **Adminkonto kunde inte skapas första gången.** `rake admin:create` gav felet "Database not found" – berodde på att kommandot kördes som fel Linux-användare (root istället för `discourse`), vilket gjorde att databasanslutningen misslyckades. Löst genom att köra kommandot med rätt användare.

### Domän, DNS och HTTPS
- Flyttade DNS för `zeekrclub.de`, `www` och `forum` från Vercel till den nya servern.
- Satte upp HTTPS (Let's Encrypt/certbot) för alla tre domänerna.

### Discord-inloggning (två separata gånger – forum och huvudsida)
- **Felaktigt schema i callback-länken.** Discourse genererade `http://` istället för `https://` i inloggningslänken till Discord, vilket fick Discord att neka. Löst genom att aktivera inställningen `force_https`.
- **Redirect-URL sparades aldrig i Discord-appen.** Hände två gånger (en gång för forumet, en gång för huvudsidan) – du klickade "Add Redirect" men missade att klicka den faktiska "Save Changes"-knappen, så adressen försvann vid omladdning.
- **Client secret blev ogiltig.** Troligen nollställdes den av misstag när redirect-länken redigerades, vilket gav felet `invalid_client` i serverloggen. Löst genom att generera en ny secret.
- **Egen inloggning på huvudsidan: `prompt=none`-bugg.** En felaktig parameter i vår egen inloggningskod fick Discords godkännande-sida att stängas automatiskt innan du hann klicka godkänn. Hittades och togs bort.
- **Cookie skrevs över sig själv.** Vår backend satte två cookies efter varandra (sessionscookien och en "städa upp"-cookie), men den andra skrev av misstag över den första istället för att läggas till, så inloggningen "lyckades" men ingen session sparades. Löst genom att skicka flera `Set-Cookie`-headers som en lista istället för att skriva över.
- **Inloggningsstatus syntes inte i headern.** Fixades genom att låta alla sidor kolla inloggningsstatus och uppdatera "Logga in"-länken till ditt namn.

### Forumets utseende
- **Guld-knappar blev ändå blå trots nytt färgschema.** Discourses nyare tema ("Foundation") kopplar inte sina primärknappar till det vanliga färgschema-systemet som äldre teman gör. Löst med direkta CSS-overrides.
- **Länkar förblev blå i mörkt läge.** Discourse har ett *separat* färgschema specifikt för mörkt läge (`dark_color_scheme_id`) som din webbläsare använde istället för standardschemat. Löst genom att sätta samma guldschema där också.

---

## Kvarstående/kända begränsningar
- Riktig SMTP (e-post) är inte konfigurerat – inga automatiska mejl skickas från forumet ännu.
- Impressum-sidan har fortfarande en platshållare istället för en riktig postadress.
- Stripe/betalinnehåll är inte byggt – nästa steg när ni är redo.
