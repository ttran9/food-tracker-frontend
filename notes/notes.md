# Problems I came across and the solutions

- When configuring react testing library I did not have jest.config.js properly configured and this led to issues with
  an issue with the auth slice where localStorage could not be found.
  - The solution was to properly configure the file.

# Helpful Video Notes:

- Regex Related Notes:
- [Form validation video](https://www.youtube.com/watch?v=tIdNeoHniEY) thanks to [Lama Dev](https://www.youtube.com/channel/UCOxWrX5MIdXIeRNaXC3sqIg) on Youtube
- The [regex example portion](https://www.youtube.com/watch?v=tIdNeoHniEY&t=29m13s)
- Helpful threads for password with certain requirements:
  - [#1. Helpful thread/post for password regex](https://stackoverflow.com/questions/43127814/regex-for-at-least-1-number-1-lower-case-and-1-upper-case-letter)
  - [#2. Help thread/post for password regex](https://stackoverflow.com/questions/27938415/regex-for-password-atleast-1-letter-1-number-1-special-character-and-should)
- []

# Helpful Resources

- Installing cypress (resources for Ubuntu):
  - [installing system requirements on Linux](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
  - [installing cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
  - [install cypress with npm](https://docs.cypress.io/guides/getting-started/installing-cypress#npm-install)

# Approaches/Thoughts

- Context API vs Redux (or other state mangement libraries)
  - I could use the Context API but I was worried about having many providers so instead I am using redux to help deal with having a global store with multiple slices instead of using the Context API and having multiple providers.
  - It is possible that I look into other state management libraries but for now I will be using ReduxJS/toolkit.
