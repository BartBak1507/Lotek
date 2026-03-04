# 📘 Dokumentacja – Lotek

## 1. Cel projektu

Celem projektu było stworzenie aplikacji webowej symulującej losowanie 6 liczb z zakresu 1–49 oraz sprawdzającej liczbę trafień użytkownika.

Projekt miał na celu utrwalenie wiedzy z zakresu:
- HTML
- CSS
- JavaScript
- obsługi formularzy
- manipulacji DOM

---

## 2. Wymagania funkcjonalne

- Program umożliwia wprowadzenie 6 liczb
- Program losuje 6 unikalnych liczb
- Program oblicza ilość trafień
- Program wyświetla wynik losowania
- Program obsługuje reset formularza

---

## 3. Wymagania niefunkcjonalne

- Intuicyjny interfejs użytkownika
- Czytelny układ graficzny
- Szybkie działanie
- Działanie w przeglądarce bez instalacji

---

## 4. Opis działania algorytmu

### Funkcja losujLiczby()

1. Tworzona jest pusta tablica.
2. W pętli losowana jest liczba od 1 do 49.
3. Sprawdzane jest, czy liczba już znajduje się w tablicy.
4. Jeśli nie – zostaje dodana.
5. Proces powtarza się do momentu uzyskania 6 unikalnych liczb.
6. Funkcja zwraca tablicę wylosowanych liczb.

---

### Funkcja pobierzLiczby()

1. Pobierane są wartości z pól formularza.
2. Dane konwertowane są na typ number (parseInt).
3. Tworzona jest tablica liczb użytkownika.
4. Tablica zostaje zwrócona.

---

### Funkcja policzTrafienia()

1. Iteracja po liczbach użytkownika.
2. Sprawdzenie, czy dana liczba znajduje się wśród wylosowanych.
3. Jeśli tak – zwiększany jest licznik trafień.
4. Zwracana jest liczba trafień.

---

### Obsługa formularza

Zdarzenie submit:
- blokuje przeładowanie strony (preventDefault()),
- pobiera liczby użytkownika,
- losuje liczby,
- oblicza trafienia,
- wyświetla wynik.

Zdarzenie reset:
- usuwa wynik z ekranu,
- usuwa dodatkowe style CSS.

---

## 5. Testowanie

Przetestowano:

- 0 trafień
- 6 trafień (maksymalna wygrana)
- poprawność zakresu liczb (1–49)
- brak powtórzeń w losowaniu
- działanie przycisku reset

Program działa poprawnie.
