export const MOCK_RESPONSES = {
  tax: {
    urgency: "High",
    deadlines: ["14 Days from postmark date"],
    summary: {
      en: [
        "The tax authority found an unpaid balance of $1,240.50 from your 2025 tax audit.",
        "If not paid within 14 days, they will automatically garnish wages or attach assets.",
        "You have a legal right to appeal to the Tax Court before the 14-day limit expires."
      ],
      ur: [
        "ٹیکس اتھارٹی نے آپ کی 2025 کے ٹیکس آڈٹ میں $1,240.50 کا غیر ادا شدہ بقایا پایا ہے۔",
        "اگر 14 دن کے اندر ادائیگی نہ کی گئی تو وہ تنخواہ یا اثاثے ضبط کر لیں گے۔",
        "آپ کے پاس 14 دن کی میعاد ختم ہونے سے پہلے ٹیکس کورٹ میں اپیل کرنے کا قانونی حق ہے۔"
      ],
      es: [
        "La autoridad fiscal encontró un saldo no pagado de $1,240.50 de su auditoría fiscal de 2025.",
        "Si no se paga en un plazo de 14 días, embargarán automáticamente sus salarios o activos.",
        "Tiene el derecho legal de apelar ante el Tribunal Fiscal antes de que expire el plazo."
      ]
    },
    tasks: {
      en: [
        "Verify the $1,240.50 claim against your official tax returns",
        "Pay the outstanding balance OR submit an official petition to the Tax Court",
        "Keep physical or digital confirmation receipts of payment/petition"
      ],
      ur: [
        "اپنے سرکاری ٹیکس گوشواروں کے خلاف $1,240.50 کا دعوی چیک کریں",
        "ببقایا رقم ادا کریں یا ٹیکس کورٹ میں باضابطہ درخواست جمع کرائیں",
        "ادائیگی یا درخواست کی کاغذی یا ڈیجیٹل رسیدیں محفوظ رکھیں"
      ],
      es: [
        "Verifique el reclamo de $1,240.50 con sus declaraciones de impuestos oficiales",
        "Pague el saldo pendiente O presente una petición oficial ante el Tribunal Fiscal",
        "Conserve los recibos de confirmación físicos o digitales de pago o petición"
      ]
    }
  },
  medical: {
    urgency: "Moderate",
    deadlines: ["48 Hours (Keep bandages clean)", "7 Days (Finish antibiotics)"],
    summary: {
      en: [
        "You successfully recovered from appendix surgery and are ready for home care.",
        "Take your Cephalexin antibiotic 4 times daily with food for 7 days.",
        "Avoid driving or alcohol while taking prescribed pain medication."
      ],
      ur: [
        "آپ نے اپینڈکس کی سرجری کے بعد کامیابی سے صحت یابی حاصل کر لی ہے۔",
        "اپنی اینٹی بائیوٹک سیفیلیکسن 7 دن کے لیے روزانہ 4 بار کھانے کے ساتھ لیں۔",
        "درد کی دوا لیتے وقت گاڑی چلانے یا الکحل سے پرہیز کریں۔"
      ],
      es: [
        "Se recuperó con éxito de la cirugía de apéndice y está listo para el cuidado en el hogar.",
        "Tome su antibiótico Cefalexina 4 veces al día con alimentos durante 7 días.",
        "Evite conducir o consumir alcohol mientras toma medicamentos recetados para el dolor."
      ]
    },
    tasks: {
      en: [
        "Take Cephalexin 500mg 4 times daily with meals for 7 days",
        "Keep the surgical bandage completely clean and dry for 48 hours",
        "Check surgical site daily for red skin, puss, or high fever (>101.5°F)"
      ],
      ur: [
        "7 دن کے لیے کھانے کے ساتھ روزانہ 4 بار Cephalexin 500mg لیں۔",
        "سرجری کی پٹی کو 48 گھنٹے تک مکمل طور پر صاف اور خشک رکھیں۔",
        "سرجری کی جگہ کو سرخ جلد یا تیز بخار کے لیے روزانہ دیکھیں۔"
      ],
      es: [
        "Tome Cefalexina 500 mg 4 veces al día con las comidas durante 7 días",
        "Mantenga el vendaje quirúrgico completamente limpio y seco durante 48 horas",
        "Examine la herida diariamente para detectar enrojecimiento, pus o fiebre alta"
      ]
    }
  },
  university: {
    urgency: "Moderate",
    deadlines: ["August 1st"],
    summary: {
      en: [
        "You have received a conditional admission offer for the Bachelor of Science program.",
        "You must submit official sealed high school transcripts to the Registrar by August 1st.",
        "A non-refundable $500 deposit is required by August 1st to lock in housing and classes."
      ],
      ur: [
        "آپ کو بیچلر آف سائنس پروگرام کے لیے مشروط داخلے کی پیشکش موصول ہوئی ہے۔",
        "آپ کو 1 اگست تک رجسٹرار کو سیل شدہ ہائی اسکول کی سرکاری کاپیاں جمع کرانی ہوں گی۔",
        "کلاسوں کو لاک کرنے کے لیے 1 اگست تک $500 ناقابل واپسی ڈپازٹ درکار ہے۔"
      ],
      es: [
        "Ha recibido una oferta de admisión condicional para el programa de Licenciatura en Ciencias.",
        "Debe enviar los certificados oficiales firmados de la escuela secundaria al Registro antes del 1 de agosto.",
        "Se requiere un depósito de $500 no reembolsable antes del 1 de agosto para asegurar alojamiento y clases."
      ]
    },
    tasks: {
      en: [
        "Request sealed official secondary school transcripts from your prior institution",
        "Submit the $500 tuition deposit via the student portal before August 1st",
        "Verify housing allocation status on the portal after deposit confirmation"
      ],
      ur: [
        "اپنے سابقہ ادارے سے سیل شدہ ہائی اسکول کی سرکاری کاپیاں طلب کریں۔",
        "1 اگست سے پہلے اسٹوڈنٹ پورٹل کے ذریعے $500 ٹیوشن ڈپازٹ جمع کرائیں۔",
        "ڈپازٹ کی تصدیق کے بعد پورٹل پر ہاؤسنگ کی حیثیت کی تصدیق کریں۔"
      ],
      es: [
        "Solicite a su institución anterior los certificados oficiales sellados de la escuela secundaria",
        "Envíe el depósito de matrícula de $500 a través del portal de estudiantes antes del 1 de agosto",
        "Verifique el estado de la asignación de vivienda en el portal después de confirmar el depósito"
      ]
    }
  }
};