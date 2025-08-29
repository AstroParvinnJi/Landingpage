        const eventDate = new Date("Sep 5, 2025 20:00:00").getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff < 0) {
        document.getElementById("timer").innerHTML = "<b>कार्यक्रम शुरू हो चुका है!</b>";
        return;
      }

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hrs = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const mins = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const secs = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

      document.getElementById("cd-days").textContent = days;
      document.getElementById("cd-hrs").textContent = hrs;
      document.getElementById("cd-min").textContent = mins;
      document.getElementById("cd-sec").textContent = secs;
    }, 1000);
  //FORM JS 
    document.getElementById('registrationForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.querySelector('input[name="name"]').value.trim();
      const dob = document.querySelector('input[name="dob"]').value;
      const birthTime = document.querySelector('input[name="birthTime"]').value;
      const birthPlace = document.querySelector('input[name="birthPlace"]').value.trim();
      const mobile = document.querySelector('input[name="mobile"]').value.trim();
      const email = document.querySelector('input[name="email"]').value.trim();
      const question = document.querySelector('textarea[name="question"]').value.trim();

      if (name === "" || mobile === "") {
        alert("कृपया नाम और मोबाइल नंबर अनिवार्य रूप से भरें।");
        return;
      }

      if (!/^[6-9]\d{9}$/.test(mobile)) {
        alert("कृपया वैध 10 अंकों का मोबाइल नंबर दर्ज करें।");
        return;
      }

      if (email !== "") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          alert("कृपया सही ईमेल आईडी दर्ज करें या इसे खाली छोड़ें।");
          return;
        }
      }

      const data = {
        name,
        dob,
        birthTime,
        birthPlace,
        mobile,
        email,
        question
      };

      // ✅ WhatsApp redirect
      window.location.href = 'https://chat.whatsapp.com/I6eyozWDH66KppJJZnKXup?mode=ac_t';

      // ✅ Send data to Google Sheet
      const scriptURL = 'https://script.google.com/macros/s/AKfycbziaE5vCb370pahjyVlIKH1pF5k-gdho5n2FUOd5XIKqdiyyE_7Pwrpc3FME3wGtzxn5g/exec';
      fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data)
      }).catch(error => {
        console.error('Error!', error.message);
      });
    });
