const scorecardForm = document.querySelector("[data-scorecard-form]");

if (scorecardForm) {
  const resultPanel = document.querySelector("[data-scorecard-result]");
  const resultScore = document.querySelector("[data-score-value]");
  const resultBand = document.querySelector("[data-score-band]");
  const resultSummary = document.querySelector("[data-score-summary]");
  const resultSteps = document.querySelector("[data-score-steps]");
  const shareButton = document.querySelector("[data-share-score]");

  const bands = [
    {
      max: 39,
      label: "Fogged and Fragmented",
      summary:
        "Your vision may still be strong, but the business underneath it is leaking energy. The fastest win is simplification, not more hustle.",
      steps: [
        "Clarify the offer in one sentence your best-fit client understands immediately.",
        "Remove one draining channel, tool, or commitment that no longer supports the next chapter.",
        "Book a live rebuild call to map the first three repairs instead of trying to fix everything at once."
      ]
    },
    {
      max: 69,
      label: "Stuck but Salvageable",
      summary:
        "You have momentum and ingredients, but the path is crowded by mixed priorities, unclear sequencing, or structural drag.",
      steps: [
        "Choose the single growth constraint creating the most delay right now.",
        "Tighten the message, CTA path, and offer so the next move is obvious to buyers.",
        "Use a live session to rebuild the bottleneck before you invest more into traffic or tech."
      ]
    },
    {
      max: 89,
      label: "Clear and Building",
      summary:
        "The business has real traction, and a few strategic repairs could turn good movement into cleaner scale, calmer execution, and better conversions.",
      steps: [
        "Audit whether your website, systems, and delivery model match the level you are stepping into.",
        "Identify the one build project that would unlock the greatest compound benefit over the next 90 days.",
        "Use a focused build call to tighten execution speed without losing your voice or ownership."
      ]
    },
    {
      max: 100,
      label: "Prosperity Path Ready",
      summary:
        "You are close. The foundations are solid enough that a thoughtful rebuild or strategic implementation sprint can accelerate the next stage.",
      steps: [
        "Map the few highest-leverage upgrades that create stronger margin, clarity, and client experience.",
        "Protect your sustainability by aligning systems, messaging, and offer architecture before pushing harder.",
        "Book a build call to turn readiness into visible progress while the timing is strong."
      ]
    }
  ];

  const calculateScore = () => {
    const entries = new FormData(scorecardForm).entries();
    let total = 0;
    let answers = 0;

    for (const [, value] of entries) {
      total += Number(value);
      answers += 1;
    }

    return answers === 0 ? 0 : Math.round((total / (answers * 5)) * 100);
  };

  const renderResult = (score) => {
    const band = bands.find((item) => score <= item.max) || bands[bands.length - 1];
    resultScore.textContent = score;
    resultBand.textContent = band.label;
    resultSummary.textContent = band.summary;
    resultSteps.innerHTML = band.steps.map((step) => `<li>${step}</li>`).join("");
    resultPanel.hidden = false;
    resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    shareButton.dataset.shareText = `I scored ${score}/100 on the Clarity to Prosperity Scorecard: ${band.label}. Compare your score:`;
  };

  scorecardForm.addEventListener("submit", (event) => {
    event.preventDefault();
    renderResult(calculateScore());
  });

  if (shareButton) {
    shareButton.addEventListener("click", async () => {
      const pageUrl = window.location.href;
      const shareText = `${shareButton.dataset.shareText} ${pageUrl}`;
      try {
        if (navigator.share) {
          await navigator.share({
            title: "Clarity to Prosperity Scorecard",
            text: shareText,
            url: pageUrl
          });
        } else {
          await navigator.clipboard.writeText(shareText);
          const original = shareButton.textContent;
          shareButton.textContent = "Score link copied";
          setTimeout(() => {
            shareButton.textContent = original;
          }, 1800);
        }
      } catch (error) {
        await navigator.clipboard.writeText(shareText);
      }
    });
  }
}
