
# 🎴 Kimetsu Memory Game

<video src="https://github.com/user-attachments/assets/7e85450c-d17d-430c-a9b6-b82a45f6695c"></video>

<div align="center">
  
  ![Demon Slayer](https://img.shields.io/badge/Tema-Demon_Slayer-purple?style=for-the-badge)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  
  ### Um jogo da memória temático de Kimetsu no Yaiba (Demon Slayer)
  
</div>

---

## Sobre 

**Kimetsu Memory** é um jogo da memória interativo desenvolvido com HTML, CSS e JavaScript puro, inspirado no anime Demon Slayer: Kimetsu no Yaiba. O objetivo é encontrar todos os pares de cartas correspondentes com personagens icônicos da série.

### Características

- Mecânica clássica de jogo da memória
- 10 cartas (5 pares de personagens)
- Embaralhamento aleatório a cada partida
- Design temático com gradientes vibrantes
- Sistema de detecção de vitória
- Botão de reset para reiniciar o jogo
- Interface responsiva e intuitiva

---

## 🎮 Como Jogar

1. **Clique em uma carta** para revelá-la
2. **Clique em outra carta** para tentar encontrar o par
3. Se as cartas coincidirem, elas permanecem abertas com destaque vermelho
4. Se não coincidirem, elas voltam a ficar viradas
5. Continue até encontrar todos os pares
6. **Vença o jogo** quando todos os pares forem encontrados!

---

## Tecnologias Utilizadas

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização e animações
  - Flexbox para layout responsivo
  - Transform 3D para efeito de flip das cartas
  - Gradientes e box-shadows para visual atraente
- **JavaScript (Vanilla)** - Lógica do jogo
  - Manipulação do DOM
  - Sistema de eventos
  - Algoritmo de embaralhamento


### Sistema de Verificação de Pares
- Armazena até 2 cartas abertas
- Compara o conteúdo HTML das cartas
- Aplica classe `boxMatch` para pares corretos
- Remove classe `boxOpen` para pares incorretos

