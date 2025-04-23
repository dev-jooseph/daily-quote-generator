const quotes = [
    { quote: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { quote: "Programs must be written for people to read.", author: "Harold Abelson" },
    { quote: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { quote: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { quote: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" }
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    document.getElementById("quote").textContent = `"${quote.quote}"`;
    document.getElementById("author").textContent = `– ${quote.author}`;
  }