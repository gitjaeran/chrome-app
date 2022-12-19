const quotes = [
  {
    quote:
      "​어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
    author: "제임스 오펜하임",
  },
  {
    quote:
      "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다. 더 많이 실험할수록 더 나아진다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.",
    author: "앙드레 말로",
  },
  {
    quote:
      "우리 인생의 가장 큰 영광은 결코 넘어지지 않는 데 있는 것이 아니라 넘어질 때마다 일어서는 데 있다.",
    author: "넬슨 만델라",
  },
  {
    quote:
      "인간이 불행한 이유는 자신이 행복하다는 사실을 모르기 때문이다. 단지 그뿐이다.",
    author: "표도르 도스토옙스키",
  },
  {
    quote: "변명 중에서도 가장 어리석고 못난 변명은 '시간이 없어서'이다.",
    author: "에디슨",
  },
  {
    quote: "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 줄 수 없다.",
    author: "캐롤 버넷",
  },
  {
    quote:
      "네 믿음은 네 생각이 된다. 네 생각은 네 말이 된다. 네 말은 네 행동이 된다. 네 행동은 네 습관이 된다. 네 습관은 네 가치가 된다. 네 가치는 네 운명이 된다.",
    author: "마하트마 간디",
  },
  {
    quote:
      "삶을 사는 데는 단 두 가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고, 또 다른 하나는 모든 것이 기적이라고 여기는 방식이다.",
    author: "알베르트 아인슈타인",
  },
  {
    quote: "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
    author: "헬렌 켈러",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
