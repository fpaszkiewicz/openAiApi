kod aplikacji łączącej się z OpenAi Api znajduję się w pliku index.mjs
aplikacja łączy się z api uzywając klucza który jest przechowywany w zmiennej środowiskowej, następnie zczytuję text z pliku tresc-artykulu.txt (funkcja readFileAndProcess), następnie przekazuję zawartość pliku wraz z zapytaniem do OpenAi (funkcja processText) po czym zapisuje odpowiedź w pliku artykul.html
