function hitungBMI(event) {
  event.preventDefault();

  var berat = parseFloat(document.getElementById("berat").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value) / 100;

  if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
    alert("Harap masukkan berat dan tinggi badan dengan benar!");
    return;
  }

  var bmi = berat / (tinggi * tinggi);
  var statusDetails = {
    kurang: {
      status: "Kekurangan berat badan",
      batas: "Hasil BMI kurang dari 18.5",
      elements: ["hasil-container-kurang", "hasil-container-penyakit-kurang"],
    },
    normal: {
      status: "Normal (ideal)",
      batas: "Hasil BMI antara 18.5 dan 24.9",
      elements: ["hasil-container-ideal"],
    },
    lebih: {
      status: "Kelebihan berat badan",
      batas: "Hasil BMI antara 25.0 dan 29.9",
      elements: ["hasil-container-lebih"],
    },
    obesitas: {
      status: "Kegemukan (Obesitas)",
      batas: "Hasil BMI lebih dari 30.0",
      elements: ["hasil-container-lebih"],
    },
  };

  var statusKey = "";
  if (bmi < 18.5) {
    statusKey = "kurang";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    statusKey = "normal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    statusKey = "lebih";
  } else {
    statusKey = "obesitas";
  }

  var statusObj = statusDetails[statusKey];
  var status = statusObj.status;
  var batas = statusObj.batas;

  statusObj.elements.forEach(function (id) {
    document.getElementById(id).style.display = "block";
  });

  document.getElementById("hasil-bmi").textContent = bmi.toFixed(1);
  document.getElementById("status").textContent = status;
  document.getElementById("batas").textContent = batas;

  document.getElementById("hasil-container").style.display = "block";

  document.getElementById("hasil-container").scrollIntoView({
    behavior: "smooth",
  });
}

function resetForm(event) {
  event.preventDefault();

  document.getElementById("bmiForm").reset();
  document.getElementById("hasil-container").style.display = "none";

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
