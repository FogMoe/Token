---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  image:
    src: /FOGMOE.png
  name: "$FOGMOE"
  text: "A unique Token on Solana"
  tagline: Empowering the FOGMOE community
  actions:
    - theme: brand
      text: Get Started
      link: /docs/
    - theme: alt
      text: Trade $FOGMOE
      link: /docs/get-fogmoe-token/
---

::: info Direct Sale Progress
<div class="sale-container">
  <div class="sale-header">
    <h3>Early Fundraising</h3>
    <a href="https://x.com/FOG_MOE/status/1882997027417809110" target="_blank" class="x-link">
      View Details →
    </a>
  </div>

  <div class="progress-bar">
    <div class="progress" style="width: 0%;"></div>
  </div>

  <div class="sale-stats">
    <div class="stat-item">
      <span class="stat-label">Raised</span>
      <span class="stat-value">0.0/2.0 SOL</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Remaining</span>
      <span class="stat-value">500K/500K FOGMOE</span>
    </div>
  </div>
</div>

<style>
.sale-container {
  padding: 1.5rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.sale-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.x-link {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-size: 0.9rem;
}

.x-link:hover {
  text-decoration: underline;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background: var(--vp-c-bg);
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: var(--vp-c-brand);
  transition: width 0.3s ease;
}

.sale-stats {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.stat-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
</style>
:::