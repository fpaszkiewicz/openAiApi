kod aplikacji łączącej się z OpenAi Api znajduję się w pliku app.mjs
aplikacja łączy się z api uzywając klucza który jest przechowywany w zmiennej środowiskowej, następnie zczytuję text z pliku tresc-artykulu.txt (funkcja readFileAndProcess), następnie przekazuję zawartość pliku wraz z zapytaniem do OpenAi (funkcja processText) po czym zapisuje odpowiedź w pliku artykul.html
podglad.html pobiera zawartosc z artykul.html i wyswietla jego zawartość w <body>
aby uruchomić aplikację należy zdefiniować klucz do OpenAi Api $env:OPENAI_API_KEY="klucz_do_api" następnie można uruchomić aplikację za pomocą node app.mjs
