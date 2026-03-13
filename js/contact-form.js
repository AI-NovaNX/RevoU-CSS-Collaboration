const initContactForm = () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: (form.method || "POST").toUpperCase(),
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (response.ok) {
        window.location.href = "thankyou.html";
        return;
      }

      console.error("Form submission failed:", response.status);
    } catch (error) {
      console.error("Form submission error:", error);
    }

    if (submitButton) submitButton.disabled = false;
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initContactForm);
} else {
  initContactForm();
}
