// ===== script.js (with User Choices + Large Thank You) =====
// Made with 💖 by Sachin Kumar Singh
// Instagram: @sachin_cse_ | LinkedIn: Sachin Kumar Singh

(function() {
  // ----- EMOJI SPARK ENGINE -----
  const canvas = document.getElementById('emoji-canvas');
  const ctx = canvas.getContext('2d');
  let width, height, particles = [];

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const reactionEmojis = ['❤️', '🧸', '✨', '🌸', '💕', '🌹', '🍫'];

  function createExplosion(x, y, count = 14) {
    for (let i = 0; i < count; i++) {
      const emoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
      const size = 22 + Math.floor(Math.random() * 34);
      particles.push({
        x: x || width/2,
        y: y || height/2,
        vx: (Math.random() - 0.5) * 13,
        vy: (Math.random() - 0.7) * 13 - 5,
        size,
        emoji,
        life: 0.8 + Math.random() * 0.7,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8
      });
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.18;
      p.vx *= 0.99;
      p.vy *= 0.99;
      p.life -= 0.01;
      p.rotation += p.rotSpeed;

      if (p.life <= 0 || p.y > height + 80) {
        particles.splice(i, 1);
        continue;
      }

      ctx.font = `${p.size}px 'Segoe UI', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI / 180);
      ctx.globalAlpha = p.life * 0.8;
      ctx.fillText(p.emoji, 0, 0);
      ctx.restore();
    }
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // ----- DOM ELEMENTS -----
  const bigTeddyScreen = document.getElementById('bigTeddyScreen');
  const fullContent = document.getElementById('fullCardContent');
  const giantTeddy = document.getElementById('giantTeddy');
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');
  const page3 = document.getElementById('page3');
  const userName = document.getElementById('userName');
  const createBtn = document.getElementById('createCardBtn');
  const personalizedMessage = document.getElementById('personalizedMessage');
  const sayariMessage = document.getElementById('sayariMessage');
  const thankyouMessage = document.getElementById('thankyouMessage');
  const signatureName = document.getElementById('signatureName');
  const gotoFinalBtn = document.getElementById('gotoFinalBtn');
  const resetBtn = document.getElementById('resetBtn');
  const backFromPage2 = document.getElementById('backFromPage2Btn');
  const backFromPage3 = document.getElementById('backFromPage3Btn');
  const choiceDecor = document.getElementById('choiceDecor');
  const choiceIcons = document.getElementById('choiceIcons');

  // Choice elements
  const choiceFlowers = document.getElementById('choiceFlowers');
  const choiceChocolate = document.getElementById('choiceChocolate');
  const choiceCake = document.getElementById('choiceCake');
  const choicePoetry = document.getElementById('choicePoetry');
  const choiceOptions = [choiceFlowers, choiceChocolate, choiceCake, choicePoetry];
  let currentChoice = 'flowers';

  // Audio elements
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const playPauseIcon = document.getElementById('playPauseIcon');
  const stopBtn = document.getElementById('stopBtn');
  const currentSong = document.getElementById('currentSong');

  // Page 2 audio controls
  const playPauseBtn2 = document.getElementById('playPauseBtn2');
  const playPauseIcon2 = document.getElementById('playPauseIcon2');
  const stopBtn2 = document.getElementById('stopBtn2');
  const currentSong2 = document.getElementById('currentSong2');

  // Page 3 audio controls
  const playPauseBtn3 = document.getElementById('playPauseBtn3');
  const playPauseIcon3 = document.getElementById('playPauseIcon3');
  const stopBtn3 = document.getElementById('stopBtn3');
  const currentSong3 = document.getElementById('currentSong3');

  // ===== 5 WORKING ROMANTIC HINDI SONGS =====
  const songDatabase = {
    flowers: {
      name: "🎵 Tum Hi Ho - Aashiqui 2",
      url: "https://pagalfree.com/musics/128-Tum%20Hi%20Ho%20-%20Aashiqui%202%20128%20Kbps.mp3"
    },
    chocolate: {
      name: "🎵 I Love You - Bodyguard",
      url: "https://pagalfree.com/musics/128-I%20Love%20You%20-%20Bodyguard%20128%20Kbps.mp3"
    },
    cake: {
      name: "🎵 Khat - Navjot",
      url: "https://pagalfree.com/musics/128-Khat%20-%20Navjot%20128%20Kbps.mp3"
    },
    poetry: {
      name: "🎵 Tumse Hi - Jab We Met",
      url: "https://pagalfree.com/musics/128-Tumse%20Hi%20-%20Jab%20We%20Met%20128%20Kbps.mp3"
    }
  };

  // ===== SHAYARI DATABASE with FAMOUS POETS =====
  const sayariDB = {
    flowers: [
      "Tujhse milne ke baad ye dil kehta hai, tu hi meri zindagi ki sabse khoobsurat sachchai hai. — Jaun Eliya 🌸",
      "Phoolon ki tarah khilte raho, khushiyon se bhar jaaye har pal. 🌹",
      "Tum phool ho mere dil ka baghicha, har din mehka karo. — Gulzar 🌺",
      "Gulab ki pankhudiyon si komal ho tum, khushbu si pyaari. 💐",
      "Tere chehre ki muskurahat mere dil ko sukoon deti hai, tu hi meri sabse badi khushi hai. — Gulzar 🌷"
    ],
    chocolate: [
      "Tum mithi ho chocolate se bhi zyada, mere dil ki har mithaas ho tum. 🍫",
      "Chocolate si mithi ho tum, cake si pyaari, tum ho meri duniya sabse pyaari. 🍬",
      "Tu meri chai ki cheeni hai, tu meri zindagi ki mithaas hai. — Gulzar ☕",
      "Teri baaton mein jo mithaas hai, wo shayad chaand ki roshni se bhi zyada pyaari hai. — Rahat Indori 🌙",
      "Tere alfaz mein wo shehad hai jo har zakhm ko bhar deta hai. — Basheer Badr 🍯"
    ],
    cake: [
      "Har din celebration hai, jab se tum mere ho. 🎂",
      "Cake jaisi khushboo, aapki mohabbat mein. 🎈",
      "Tumhare bina adhoori hai zindagi, like cake without icing. 🎂",
      "Janam janam ka saath hai, har janam tujhse pyaar rahega. 💝",
      "Tere saath beeta har pal hamesha yaad rahega, tu hi meri har khushi ka raaz rahega. ✨"
    ],
    poetry: [
      "Mohabbat ek khoobsurat ehsas hai, jo har dil ko jeene ka maksad deta hai. — Mirza Ghalib 📜",
      "Tum mere paas hote ho goya, jab koi doosra nahi hota. — Jaun Eliya 💫",
      "Har saans mein tera nasha hai, bas yunhi rahe silsila. — Faiz Ahmad Faiz 🍷",
      "Dil ki har dhadkan mein tera naam hai, ab toh ye rishta meri rooh se jud gaya hai. — Javed Akhtar 💓",
      "Ishq mein jeena ab aa gaya, tere bina marna bhi aayega. — Mirza Ghalib 🌹"
    ]
  };

  // Decorations based on choice
  const decorMap = {
    flowers: { decor: "🌸 🌹 🌺 🌸 🌹", icons: "🌸 🌸 🌹 💐" },
    chocolate: { decor: "🍫 🍬 🍭 🍫 🍬", icons: "🍫 💝 🍬 🍭" },
    cake: { decor: "🎂 🎈 🎉 🎂 🎈", icons: "🎂 💝 🎈 🎉" },
    poetry: { decor: "📜 ✍️ 💭 📜 ✨", icons: "📜 💝 ✍️ 💭" }
  };

  // Select choice
  function selectChoice(el, choice) {
    choiceOptions.forEach(opt => opt.classList.remove('selected'));
    el.classList.add('selected');
    currentChoice = choice;

    // Update song display
    const songData = songDatabase[choice];
    currentSong.innerText = songData.name;
    if (currentSong2) currentSong2.innerText = songData.name;
    if (currentSong3) currentSong3.innerText = songData.name;

    // Load new song
    audioPlayer.src = songData.url;
    audioPlayer.load();

    createExplosion(el.getBoundingClientRect().left + el.offsetWidth/2, el.getBoundingClientRect().top + el.offsetHeight/2, 10);
  }

  choiceFlowers.addEventListener('click', () => selectChoice(choiceFlowers, 'flowers'));
  choiceChocolate.addEventListener('click', () => selectChoice(choiceChocolate, 'chocolate'));
  choiceCake.addEventListener('click', () => selectChoice(choiceCake, 'cake'));
  choicePoetry.addEventListener('click', () => selectChoice(choicePoetry, 'poetry'));

  // Audio control functions
  function playSong() {
    audioPlayer.play()
      .then(() => {
        playPauseIcon.className = 'fas fa-pause';
        if (playPauseIcon2) playPauseIcon2.className = 'fas fa-pause';
        if (playPauseIcon3) playPauseIcon3.className = 'fas fa-pause';
      })
      .catch(error => {
        console.log("Playback error:", error);
        alert("Please tap the screen again to play song");
      });
  }

  function pauseSong() {
    audioPlayer.pause();
    playPauseIcon.className = 'fas fa-play';
    if (playPauseIcon2) playPauseIcon2.className = 'fas fa-play';
    if (playPauseIcon3) playPauseIcon3.className = 'fas fa-play';
  }

  function stopSong() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playPauseIcon.className = 'fas fa-play';
    if (playPauseIcon2) playPauseIcon2.className = 'fas fa-play';
    if (playPauseIcon3) playPauseIcon3.className = 'fas fa-play';
  }

  function togglePlay() {
    if (audioPlayer.paused) {
      playSong();
    } else {
      pauseSong();
    }
  }

  // Get random Shayari based on choice
  function getSayari(choice) {
    const arr = sayariDB[choice] || sayariDB.flowers;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Helper to show page
  function showPage(page) {
    [page1, page2, page3].forEach(p => p.classList.remove('active-page'));
    page.classList.add('active-page');
  }

  // Enable audio on user interaction
  function enableAudio() {
    const silentAudio = new Audio();
    silentAudio.src = "data:audio/mp3;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";

    silentAudio.play().then(() => {
      silentAudio.pause();
      console.log("Audio unlocked");
    }).catch(e => console.log("Audio unlock attempted"));

    document.removeEventListener('touchstart', enableAudio);
    document.removeEventListener('click', enableAudio);
  }

  document.addEventListener('touchstart', enableAudio, { once: true });
  document.addEventListener('click', enableAudio, { once: true });

  // Big teddy click
  giantTeddy.addEventListener('click', () => {
    bigTeddyScreen.style.display = 'none';
    fullContent.style.display = 'block';
    createExplosion(giantTeddy.getBoundingClientRect().left + giantTeddy.offsetWidth/2, giantTeddy.getBoundingClientRect().top + giantTeddy.offsetHeight/2, 20);
    showPage(page1);

    // Initialize first choice
    selectChoice(choiceFlowers, 'flowers');
    enableAudio();
  });

  // Create card button
  createBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let name = userName.value.trim();
    if (name === '') name = 'You';

    const sayari = getSayari(currentChoice);
    const decor = decorMap[currentChoice];

    // Update decorations based on choice
    if (decor) {
      choiceDecor.innerHTML = decor.decor.split(' ').map(d => `<span>${d}</span>`).join(' ');
      choiceIcons.innerHTML = decor.icons.split(' ').map(d => `<span>${d}</span>`).join(' ');
    }

    // Update messages with user name
    personalizedMessage.innerText = `For You, ${name} ❤️`;
    sayariMessage.innerHTML = `“${sayari}”<br><span style="font-size:1.8rem;">🌹🍫💌</span>`;

    // Update thank you page
    thankyouMessage.innerText = `Thank you for being you, for your love, and for choosing ${currentChoice}. You make every day special.`;
    signatureName.innerText = `With Love, Teddy 🧸`;

    createExplosion(createBtn.getBoundingClientRect().left + createBtn.offsetWidth/2, createBtn.getBoundingClientRect().top + createBtn.offsetHeight/2, 16);
    showPage(page2);
  });

  gotoFinalBtn.addEventListener('click', () => {
    createExplosion(gotoFinalBtn.getBoundingClientRect().left + gotoFinalBtn.offsetWidth/2, gotoFinalBtn.getBoundingClientRect().top + gotoFinalBtn.offsetHeight/2, 16);
    showPage(page3);
  });

  backFromPage2.addEventListener('click', () => {
    showPage(page1);
    createExplosion(backFromPage2.getBoundingClientRect().left + backFromPage2.offsetWidth/2, backFromPage2.getBoundingClientRect().top + backFromPage2.offsetHeight/2, 10);
  });

  backFromPage3.addEventListener('click', () => {
    showPage(page2);
    createExplosion(backFromPage3.getBoundingClientRect().left + backFromPage3.offsetWidth/2, backFromPage3.getBoundingClientRect().top + backFromPage3.offsetHeight/2, 10);
  });

  resetBtn.addEventListener('click', () => {
    createExplosion(resetBtn.getBoundingClientRect().left + resetBtn.offsetWidth/2, resetBtn.getBoundingClientRect().top + resetBtn.offsetHeight/2, 18);
    showPage(page1);
    userName.value = '';
    selectChoice(choiceFlowers, 'flowers');
    stopSong();
  });

  // Audio control event listeners
  playPauseBtn.addEventListener('click', togglePlay);
  stopBtn.addEventListener('click', stopSong);

  if (playPauseBtn2) playPauseBtn2.addEventListener('click', togglePlay);
  if (stopBtn2) stopBtn2.addEventListener('click', stopSong);

  if (playPauseBtn3) playPauseBtn3.addEventListener('click', togglePlay);
  if (stopBtn3) stopBtn3.addEventListener('click', stopSong);

  // When song ends, reset play button
  audioPlayer.addEventListener('ended', () => {
    playPauseIcon.className = 'fas fa-play';
    if (playPauseIcon2) playPauseIcon2.className = 'fas fa-play';
    if (playPauseIcon3) playPauseIcon3.className = 'fas fa-play';
  });

  // Click on teddy icon for spark
  document.querySelector('.small-teddy-icon')?.addEventListener('click', (e) => {
    createExplosion(e.pageX, e.pageY, 12);
  });

  // Developer Credit in Console
  console.log("%c❤️ Made with Love by Sachin Kumar Singh ❤️", "color: #ff3b5c; font-size: 16px; font-weight: bold; font-family: 'Dancing Script', cursive;");
  console.log("%c📷 Instagram: @sachin_cse_", "color: #E1306C; font-size: 14px; font-weight: bold;");
  console.log("%c💼 LinkedIn: Sachin Kumar Singh", "color: #0077B5; font-size: 14px; font-weight: bold;");
  console.log("%c📧 Email: sachincse326@gmail.com", "color: #D14836; font-size: 14px; font-weight; bold;");

  // INIT: show big teddy
  bigTeddyScreen.style.display = 'flex';
  fullContent.style.display = 'none';
})();
