# to-do-list
Installatie-instructies
Client (Frontend)
Clone het GitHub-repository naar je lokale machine:
git clone <repository-url>

Navigeer naar de client-directory:
cd <repository-folder>/client


Installeer de projectafhankelijkheden met behulp van npm:
npm install

Start de client-applicatie:
npm start

De client-applicatie zou nu beschikbaar moeten zijn op http://localhost:3000 in je webbrowser.

Server (Backend)

Navigeer naar de server-directory:

cd <repository-folder>/server

Installeer de projectafhankelijkheden met behulp van npm:

npm install

Maak een .env-bestand in de server-directory en voeg de vereiste variabelen toe:

AZURE_OPENAI_API_KEY=<jouw-azure-openai-api-key>
OPENAI_API_VERSION=<jouw-openai-api-versie>
INSTANCE_NAME=<jouw-api-instantienaam>
ENGINE_NAME=<jouw-api-deploymentnaam>

Zorg ervoor dat je deze waarden hebt vanuit je Azure OpenAI-account.

Start de server:

npm start

De server zou nu moeten luisteren op http://localhost:3000.

Opmerkingen:
Zorg ervoor dat Node.js en npm zijn geïnstalleerd op je machine.
De client en server moeten elk in een afzonderlijke terminal worden uitgevoerd.
Als je de code in een live omgeving implementeert, update dan de API-sleutels en instellingen volgens de live omgeving.
