












let answersGiven = new Array(questions.length).fill(null); // hər sual üçün null başlanğıc


let currentIndex = 0;
let selectedAnswer = null;

function loadQuestion(index) {
  if (index < 0 || index >= questions.length) return;

  sec.style.borderColor = "black";
  D_Y.textContent = "";

  sual.textContent = `Sual ${index + 1}`;
  question.textContent = questions[index].question;

  const answers = questions[index].answers;
  [btn_A, btn_B, btn_C, btn_D, btn_E].forEach((btn, i) => {
    btn.textContent = answers[i];
    btn.classList.remove("selected");
    btn.disabled = false;
  });

  selectedAnswer = null;
  currentIndex = index;
}

function selectAnswer(index) {
  selectedAnswer = questions[currentIndex].answers[index];

  const buttons = [btn_A, btn_B, btn_C, btn_D, btn_E];
  buttons.forEach((btn, i) => {
    btn.classList.toggle("selected", i === index);
  });
}

[btn_A, btn_B, btn_C, btn_D, btn_E].forEach((btn, i) => {
  btn.addEventListener("click", () => {
    selectAnswer(i);
  });
});


yoxla.addEventListener("click", () => {
    if (!selectedAnswer) return;
  
    const correct = questions[currentIndex].correct;
  
    // Cavabı yadda saxla
    answersGiven[currentIndex] = selectedAnswer;
  
    if (selectedAnswer === correct) {
      sec.style.borderColor = "green";
      D_Y.textContent = "Doğru";
      D_Y.style.color = "green";
    } else {
      sec.style.borderColor = "red";
      D_Y.textContent = "Səhv";
      D_Y.style.color = "red";
    }
  });


  const resultArea = document.getElementById("result_area");
  const showResultBtn = document.getElementById("show_result");
  
  showResultBtn.addEventListener("click", () => {
    let correctCount = 0;
  
    for (let i = 0; i < questions.length; i++) {
      if (answersGiven[i] === questions[i].correct) {
        correctCount++;
      }
    }
  
    resultArea.textContent = `Sən ${questions.length} sualdan ${correctCount} düzgün cavab verdin.`;
  });
  

// İrəli
so_sual.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) {
    loadQuestion(currentIndex + 1);
  }
});

// Geri
ev_sual.addEventListener("click", () => {
  if (currentIndex > 0) {
    loadQuestion(currentIndex - 1);
  }
});

// İstənilən suala keç
document.getElementById("goto_btn").addEventListener("click", () => {
  const value = parseInt(document.getElementById("goto_input").value);
  if (!isNaN(value) && value >= 1 && value <= questions.length) {
    loadQuestion(value - 1);
  }
});

// İlk sualı yüklə
loadQuestion(0);
   



const originalQuestions = JSON.parse(JSON.stringify(questions));
let answersGiven = new Array(questions.length).fill(null);


function partialShuffle(array, count) {
  const part = array.slice(0, count);
  for (let i = part.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [part[i], part[j]] = [part[j], part[i]];
  }
  for (let i = 0; i < count; i++) {
    array[i] = part[i];
  }
}
document.getElementById("shuffle_partial").addEventListener("click", () => {
  const countInput = document.getElementById("mix_count").value;
  const count = parseInt(countInput);

  if (isNaN(count) || count < 1 || count > questions.length) {
    alert(`1 ilə ${questions.length} arasında bir ədəd daxil edin.`);
    return;
  }

  partialShuffle(questions, count);
  answersGiven = new Array(questions.length).fill(null);
  loadQuestion(0); // sənə uyğun funksiya varsa
});


document.getElementById("reset_btn").addEventListener("click", () => {
  questions.splice(0, questions.length, ...JSON.parse(JSON.stringify(originalQuestions)));
  answersGiven = new Array(questions.length).fill(null);
  loadQuestion(0); // yenə sənə uyğun sual göstərmə funksiyası
});
