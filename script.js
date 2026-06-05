/**
 * SCRIPT CHÍNH - LANDING PAGE LỊCH SỬ ASEAN
 * Quản lý các tương tác giao diện, chuyển đổi Dark Mode, nạp dữ liệu động,
 * hiệu ứng scroll, lightbox ảnh và trò chơi trắc nghiệm (Quiz).
 */

document.addEventListener("DOMContentLoaded", function() {
  
  // Khởi tạo các trạng thái ban đầu
  initLoader();
  initDarkMode();
  initScrollEffects();
  initMobileMenu();
  
  // Nạp dữ liệu học thuật động từ data/aseanHistory.js
  if (typeof aseanHistoryData !== 'undefined') {
    populateAcademicData(aseanHistoryData);
  } else {
    console.error("Không tìm thấy dữ liệu aseanHistoryData từ data/aseanHistory.js.");
  }
  
  // Thiết lập hiệu ứng Scroll Reveal bằng IntersectionObserver
  initScrollReveal();
  
  // Thiết lập thư viện ảnh và Lightbox
  initGalleryLightbox();
  
  // Lập trình trò chơi trắc nghiệm (Quiz)
  initQuizGame();
  
  // Hiệu ứng 3D tilt cho hero visual
  initHeroTilt();
});

/* ==========================================================================
   1. MÀN HÌNH LOADING & THANH TIẾN ĐỘ CUỘN
   ========================================================================== */
function initLoader() {
  const loader = document.getElementById("loader");
  if (loader) {
    // Ẩn loader khi toàn bộ trang (ảnh, CSS, v.v.) tải xong
    window.addEventListener("load", function() {
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
      }, 500); // Tạo độ trễ nhẹ cho hiệu ứng mượt mà
    });
    
    // Tự động tắt sau 3 giây đề phòng sự cố sự kiện load không kích hoạt
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 3000);
  }
}

/* ==========================================================================
   2. QUẢN LÝ CHẾ ĐỘ SÁNG / TỐI (DARK & LIGHT MODE)
   ========================================================================== */
function initDarkMode() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const body = document.body;
  const html = document.documentElement;
  
  if (!themeToggleBtn) return;
  
  // 1. Kiểm tra cấu hình đã lưu trong localStorage hoặc cài đặt hệ thống
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  function applyTheme(theme) {
    if (theme === "dark") {
      body.classList.remove("light-mode", "light");
      body.classList.add("dark-mode", "dark");
      html.setAttribute("data-theme", "dark");
    } else {
      body.classList.remove("dark-mode", "dark");
      body.classList.add("light-mode", "light");
      html.setAttribute("data-theme", "light");
    }
  }
  
  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }
  
  // 2. Lắng nghe sự kiện click đổi theme
  themeToggleBtn.addEventListener("click", function() {
    const currentTheme = body.classList.contains("dark") ? "light" : "dark";
    applyTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  });
}

/* ==========================================================================
   3. THANH TIẾN ĐỘ CUỘN, STICKY HEADER & BACK-TO-TOP
   ========================================================================== */
function initScrollEffects() {
  const header = document.getElementById("header");
  const scrollProgress = document.getElementById("scroll-progress");
  const backToTopBtn = document.getElementById("back-to-top");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id], main section[id]");
  
  window.addEventListener("scroll", function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // a. Cập nhật thanh tiến độ cuộn trang
    if (docHeight > 0) {
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrollPercent + "%";
    }
    
    // b. Thay đổi shadow header khi scroll xuống
    if (scrollTop > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    
    // c. Hiện/Ẩn nút Back-to-top
    if (scrollTop > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
    
    // d. Scroll Spy: Kích hoạt menu tương ứng khi cuộn tới phần
    let currentSectionId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120; // Trừ đi chiều cao header
      const sectionHeight = section.offsetHeight;
      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });
    
    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
  
  // Sự kiện nút Back-to-top
  backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ==========================================================================
   4. MENU ĐIỀU HƯỚNG DI ĐỘNG (MOBILE NAVIGATION)
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  
  if (!menuToggle || !navMenu) return;
  
  // Mở/Đóng menu khi click hamburger icon
  menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("open");
    
    // Thay đổi biểu tượng menu (hamburger thành đóng x)
    const icon = menuToggle.querySelector("i");
    if (navMenu.classList.contains("open")) {
      icon.setAttribute("data-lucide", "x");
    } else {
      icon.setAttribute("data-lucide", "menu");
    }
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  });
  
  // Đóng menu khi click vào một liên kết bất kỳ và cuộn mượt đến section
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Đóng menu di động trước
        navMenu.classList.remove("open");
        const icon = menuToggle.querySelector("i");
        if (icon) {
          icon.setAttribute("data-lucide", "menu");
          if (typeof lucide !== 'undefined') {
            lucide.createIcons();
          }
        }
        
        // Cuộn mượt bằng scrollIntoView để tự động áp dụng CSS scroll-margin-top / scroll-padding-top
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

/* ==========================================================================
   5. NẠP DỮ LIỆU ĐỘNG TỪ BỘ DỮ LIỆU HỌC THUẬT (DATA POPULATION)
   ========================================================================== */
function populateAcademicData(data) {
  // --- A. GIỚI THIỆU ASEAN ---
  document.getElementById("intro-title").innerText = data.overview.title;
  document.getElementById("intro-eng-name").innerText = data.overview.englishName;
  document.getElementById("intro-motto").innerText = `"${data.overview.motto}"`;
  const logoDescription = String(data.overview.logoDescription)
    .replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]))
    .replace(/(Xanh|Đỏ|Trắng|Vàng)/g, '<strong class="symbol-color-word">$1</strong>');
  document.getElementById("intro-logo-desc").innerHTML = logoDescription;
  
  const introCardsContainer = document.getElementById("intro-cards-container");
  if (introCardsContainer) {
    introCardsContainer.innerHTML = data.overview.cards.map((card, idx) => `
      <div class="metric-card reveal" style="transition-delay: ${idx * 0.1}s">
        <div class="metric-icon-box">
          <i data-lucide="${card.icon}"></i>
        </div>
        <div class="metric-info">
          <h4>${card.title}</h4>
          <div class="value">${card.value}</div>
          <p>${card.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // --- B. BỐI CẢNH RA ĐỜI ---
  const contextParagraphs = document.getElementById("context-paragraphs");
  if (contextParagraphs) {
    contextParagraphs.innerHTML = data.context.paragraphs.map(p => `<p>${p}</p>`).join('');
  }
  
  const contextImg = document.getElementById("context-img");
  const contextCaption = document.getElementById("context-caption");
  if (contextImg) {
    contextImg.src = data.context.imageUrl;
    // Bẫy lỗi nếu ảnh từ wikipedia bị lỗi tải
    contextImg.onerror = function() {
      this.src = data.context.imageFallbackUrl;
    };
  }
  if (contextCaption) {
    contextCaption.innerText = data.context.imageCaption;
  }

  // --- C. 5 QUỐC GIA SÁNG LẬP ---
  document.getElementById("founders-subtitle").innerText = data.founders.subtitle;
  document.getElementById("founders-main-desc").innerText = data.founders.description;
  
  const foundersContainer = document.getElementById("founders-container");
  if (foundersContainer) {
    foundersContainer.innerHTML = data.founders.list.map((f, idx) => `
      <div class="founder-card reveal" style="transition-delay: ${idx * 0.1}s">
        <div class="founder-flag-wrapper">
          <img src="${f.flag}" alt="Cờ quốc gia ${f.country}" class="founder-flag">
        </div>
        <h3>${f.country}</h3>
        <div class="founder-capital">Thủ đô: ${f.capital}</div>
        <div class="founder-rep">${f.representative}</div>
        <div class="founder-role">${f.role}</div>
        <div class="founder-quote">“${f.quote}”</div>
      </div>
    `).join('');
  }

  // --- D. TIMELINE LỊCH SỬ ---
  const timelineContainer = document.getElementById("timeline-container");
  if (timelineContainer) {
    let currentLayout = ''; // 'desktop' or 'mobile'
    let isResettingStage = false;
    let activeStage = 1; // Track active stage state

    const getTimelineIcon = (category) => {
      switch (category) {
        case "establishment": return "flag";
        case "treaty": return "file-text";
        case "expansion": return "user-plus";
        case "economy": return "coins";
        case "strategy": return "target";
        default: return "calendar";
      }
    };

    const stageMeta = {
      1: { num: "I", label: "Khởi đầu, định hình và xác lập nguyên tắc cơ bản", sub: "1967 – 1976" },
      2: { num: "II", label: "Tiến trình kết nạp thành viên mới và đẩy mạnh liên kết khu vực", sub: "1976 – 1999" },
      3: { num: "III", label: "Thể chế hóa và đặt nền móng xây dựng Cộng đồng", sub: "1999 – 2015" },
      4: { num: "IV", label: "Cộng đồng ASEAN - Hội nhập toàn diện và tự cường", sub: "2015 – Nay" }
    };

    const updateTimelineProgress = (stageNum) => {
      activeStage = stageNum;
      const fill = document.getElementById("timeline-progress-fill");
      if (fill) {
        const percent = ((stageNum - 1) / 3) * 100;
        fill.style.width = `${percent}%`;
      }
      
      const titleEl = document.getElementById("active-stage-title");
      if (titleEl) {
        const s = stageMeta[stageNum];
        titleEl.innerHTML = `Giai Đoạn ${s.num}: <span class="active-stage-name">${s.label}</span> <span class="active-stage-years">(${s.sub})</span>`;
      }
    };

    const renderTimeline = () => {
      const isDesktop = window.innerWidth >= 993;
      const neededLayout = isDesktop ? 'desktop' : 'mobile';
      
      if (currentLayout === neededLayout) return;
      currentLayout = neededLayout;

      let buttonsHtml = '';
      let panelsHtml = '';

      // Build Buttons
      Object.keys(stageMeta).forEach((stageKey) => {
        const stage = parseInt(stageKey);
        const s = stageMeta[stage];
        const isActive = stage === activeStage ? 'active' : '';

        buttonsHtml += `
          <button class="timeline-stage-btn ${isActive}" data-stage="${stage}">
            <span class="stage-btn-roman">${s.num}</span>
            <span class="stage-btn-label">Giai Đoạn ${s.num}</span>
            <span class="stage-btn-name">${s.label}</span>
            <span class="stage-btn-years">${s.sub}</span>
          </button>
        `;
      });

      if (neededLayout === 'desktop') {
        // PC Layout: Single continuous timeline panel
        let milestonesHtml = '';
        data.timeline.milestones.forEach((m) => {
          const iconName = getTimelineIcon(m.category);
          milestonesHtml += `
            <div class="milestone-card" data-stage="${m.stage || 1}">
              <div class="milestone-year-badge">${m.year}</div>
              <div class="milestone-icon"><i data-lucide="${iconName}"></i></div>
              <div class="milestone-body">
                <div class="milestone-meta">
                  <span><i data-lucide="calendar"></i>${m.date}</span>
                  <span><i data-lucide="map-pin"></i>${m.location}</span>
                </div>
                <h4>${m.title}</h4>
                <p>${m.description}</p>
              </div>
            </div>
          `;
        });

        panelsHtml = `
          <div class="timeline-panel active" data-stage="all">
            ${milestonesHtml}
            <div class="timeline-progress-track"></div>
            <div class="timeline-progress-bar"></div>
          </div>
        `;
      } else {
        // Mobile Layout: 4 separate stage panels
        const stageGroups = {};
        data.timeline.milestones.forEach((m) => {
          const st = m.stage || 1;
          if (!stageGroups[st]) stageGroups[st] = [];
          stageGroups[st].push(m);
        });

        Object.keys(stageGroups).forEach((stageKey) => {
          const stage = parseInt(stageKey);
          const milestones = stageGroups[stage];
          const isActive = stage === activeStage ? 'active' : '';

          let milestonesHtml = '';
          milestones.forEach((m) => {
            const iconName = getTimelineIcon(m.category);
            milestonesHtml += `
              <div class="milestone-card" data-stage="${stage}">
                <div class="milestone-year-badge">${m.year}</div>
                <div class="milestone-icon"><i data-lucide="${iconName}"></i></div>
                <div class="milestone-body">
                  <div class="milestone-meta">
                    <span><i data-lucide="calendar"></i>${m.date}</span>
                    <span><i data-lucide="map-pin"></i>${m.location}</span>
                  </div>
                  <h4>${m.title}</h4>
                  <p>${m.description}</p>
                </div>
              </div>
            `;
          });

          panelsHtml += `
            <div class="timeline-panel ${isActive}" data-stage="${stage}">
              ${milestonesHtml}
              <div class="timeline-progress-track"></div>
              <div class="timeline-progress-bar"></div>
            </div>
          `;
        });
      }

      timelineContainer.innerHTML = `
        <div class="timeline-horizontal">
          <div class="timeline-stages-bar">
            <div class="timeline-horz-progress">
              <div class="timeline-progress-fill" id="timeline-progress-fill"></div>
            </div>
            ${buttonsHtml}
          </div>
          
          <div class="active-stage-header">
            <h3 class="active-stage-title" id="active-stage-title">Giai Đoạn I: Khởi đầu, định hình và xác lập nguyên tắc cơ bản (1967 – 1976)</h3>
          </div>

          <div class="timeline-slider-container">
            <button class="timeline-nav-btn prev-btn" id="timeline-prev-btn" aria-label="Mốc trước">
              <i data-lucide="chevron-left"></i>
            </button>
            <button class="timeline-nav-btn next-btn" id="timeline-next-btn" aria-label="Mốc tiếp theo">
              <i data-lucide="chevron-right"></i>
            </button>

            <div class="timeline-panels-wrapper">
              ${panelsHtml}
            </div>
          </div>
        </div>
      `;

      // Reinitialize Lucide icons
      if (window.lucide) {
        window.lucide.createIcons();
      }

      // Bind interaction event listeners
      initTimelineInteractions();
    };

    const initTimelineInteractions = () => {
      const prevBtn = document.getElementById("timeline-prev-btn");
      const nextBtn = document.getElementById("timeline-next-btn");
      const panelsWrapper = timelineContainer.querySelector(".timeline-panels-wrapper");

      if (!panelsWrapper) return;

      const updateNavButtons = () => {
        const scrollLeft = panelsWrapper.scrollLeft;
        const maxScroll = panelsWrapper.scrollWidth - panelsWrapper.clientWidth;
        
        if (prevBtn && nextBtn) {
          if (scrollLeft <= 5) {
            prevBtn.classList.add("disabled");
          } else {
            prevBtn.classList.remove("disabled");
          }
          
          if (scrollLeft >= maxScroll - 5) {
            nextBtn.classList.add("disabled");
          } else {
            nextBtn.classList.remove("disabled");
          }
        }

        const isDesktop = window.innerWidth >= 993;
        const activePanel = isDesktop 
          ? panelsWrapper.querySelector('.timeline-panel')
          : panelsWrapper.querySelector(`.timeline-panel[data-stage="${activeStage}"]`);

        if (activePanel) {
          const track = activePanel.querySelector('.timeline-progress-track');
          const bar = activePanel.querySelector('.timeline-progress-bar');
          if (track && bar) {
            const cards = activePanel.querySelectorAll('.milestone-card');
            if (cards.length > 0) {
              const firstCard = cards[0];
              const lastCard = cards[cards.length - 1];
              const selectedCard = activePanel.querySelector('.milestone-card.selected') || lastCard;

              if (isDesktop) {
                track.style.top = '';
                track.style.height = '';
                bar.style.top = '';
                bar.style.height = '';

                const firstCenter = firstCard.offsetLeft + firstCard.offsetWidth / 2;
                const selectedCenter = selectedCard.offsetLeft + selectedCard.offsetWidth / 2;
                
                track.style.left = `${firstCenter}px`;
                track.style.width = `calc(100% - ${firstCenter + 20}px)`;
                
                bar.style.left = `${firstCenter}px`;
                if (isResettingStage) {
                  bar.style.width = '0px';
                } else {
                  bar.style.width = `${selectedCenter - firstCenter}px`;
                }

                // Scroll Spy on Desktop
                if (!isResettingStage) {
                  let closestCard = cards[0];
                  let minDiff = Infinity;
                  const wrapperCenter = panelsWrapper.scrollLeft + panelsWrapper.clientWidth / 2;
                  
                  cards.forEach((card) => {
                    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                    const diff = Math.abs(cardCenter - wrapperCenter);
                    if (diff < minDiff) {
                      minDiff = diff;
                      closestCard = card;
                    }
                  });
                  
                  const currentStage = parseInt(closestCard.dataset.stage || 1);
                  updateTimelineProgress(currentStage);
                  timelineContainer.querySelectorAll('.timeline-stage-btn').forEach((btn) => {
                    btn.classList.toggle('active', parseInt(btn.dataset.stage) === currentStage);
                  });
                }
              } else {
                track.style.left = '';
                track.style.width = '';
                bar.style.left = '';
                bar.style.width = '';

                const isSmallMobile = window.innerWidth < 768;
                const dotOffset = isSmallMobile ? 25 : 31;
                
                const firstCenterY = firstCard.offsetTop + dotOffset;
                const lastCenterY = lastCard.offsetTop + dotOffset;
                const selectedCenterY = selectedCard.offsetTop + dotOffset;

                track.style.top = `${firstCenterY}px`;
                track.style.height = `${lastCenterY - firstCenterY}px`;
                
                bar.style.top = `${firstCenterY}px`;
                if (isResettingStage) {
                  bar.style.height = '0px';
                } else {
                  bar.style.height = `${selectedCenterY - firstCenterY}px`;
                }
              }
            }
          }
        }
      };

      if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
          panelsWrapper.scrollBy({ left: -380, behavior: "smooth" });
        });
        nextBtn.addEventListener("click", () => {
          panelsWrapper.scrollBy({ left: 380, behavior: "smooth" });
        });
      }

      // Helper function to switch stage, select defaults, and scroll/swap
      const selectStage = (stageNum, scrollBehavior = 'smooth') => {
        activeStage = stageNum;
        const isDesktop = window.innerWidth >= 993;

        // 1. Update active stage button at the top
        timelineContainer.querySelectorAll('.timeline-stage-btn').forEach((btn) => {
          btn.classList.toggle('active', parseInt(btn.dataset.stage) === stageNum);
        });

        // 2. Clear progress styling briefly if it's smooth scroll to prevent flash
        if (scrollBehavior === 'smooth') {
          isResettingStage = true;
          timelineContainer.querySelectorAll('.timeline-progress-bar').forEach((b) => {
            b.style.width = '0px';
            b.style.height = '0px';
          });
        }

        if (isDesktop) {
          // Desktop behavior: scroll inside single panel
          const panel = timelineContainer.querySelector('.timeline-panel');
          const stageCards = panel.querySelectorAll(`.milestone-card[data-stage="${stageNum}"]`);
          
          if (stageCards.length > 0) {
            const targetCard = stageCards[stageCards.length - 1];
            panel.querySelectorAll('.milestone-card').forEach((c) => {
              c.classList.toggle('selected', c === targetCard);
            });

            const firstCardOfStage = stageCards[0];
            const cardCenter = firstCardOfStage.offsetLeft + firstCardOfStage.offsetWidth / 2;
            const targetScroll = cardCenter - panelsWrapper.clientWidth / 2;
            panelsWrapper.scrollTo({
              left: targetScroll,
              behavior: scrollBehavior
            });
          }
        } else {
          // Mobile/Tablet behavior: swap panels
          timelineContainer.querySelectorAll('.timeline-panel').forEach((p) => {
            p.classList.toggle('active', parseInt(p.dataset.stage) === stageNum);
          });

          // Reset scroll inside wrapper
          panelsWrapper.scrollLeft = 0;

          // Auto select last card of this stage's panel
          const activePanel = timelineContainer.querySelector(`.timeline-panel[data-stage="${stageNum}"]`);
          if (activePanel) {
            const cards = activePanel.querySelectorAll('.milestone-card');
            if (cards.length > 0) {
              const targetCard = cards[cards.length - 1];
              cards.forEach((c) => {
                c.classList.toggle('selected', c === targetCard);
              });
            }
          }
        }

        updateTimelineProgress(stageNum);
        updateNavButtons();

        if (scrollBehavior === 'smooth') {
          setTimeout(() => {
            isResettingStage = false;
            updateNavButtons();
          }, 400);
        }
      };

      // Click stage button => switch stage
      timelineContainer.querySelectorAll('.timeline-stage-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const stage = parseInt(btn.dataset.stage);
          selectStage(stage, 'smooth');
        });
      });

      // Click card => highlight and sync
      panelsWrapper.addEventListener('click', (e) => {
        const card = e.target.closest('.milestone-card');
        if (card) {
          const panel = card.closest('.timeline-panel');
          if (panel) {
            panel.querySelectorAll('.milestone-card').forEach((c) => {
              c.classList.toggle('selected', c === card);
            });
            
            const stage = parseInt(card.dataset.stage || activeStage);
            updateTimelineProgress(stage);
            
            timelineContainer.querySelectorAll('.timeline-stage-btn').forEach((btn) => {
              btn.classList.toggle('active', parseInt(btn.dataset.stage) === stage);
            });

            // On mobile, if card click changes the stage, we also make sure the correct panel is active
            if (window.innerWidth < 993) {
              timelineContainer.querySelectorAll('.timeline-panel').forEach((p) => {
                p.classList.toggle('active', parseInt(p.dataset.stage) === stage);
              });
            }

            updateNavButtons();
            
            // Scroll clicked card to center on PC
            if (window.innerWidth >= 993) {
              const cardCenter = card.offsetLeft + card.offsetWidth / 2;
              const targetScroll = cardCenter - panelsWrapper.clientWidth / 2;
              panelsWrapper.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
              });
            }
          }
        }
      });

      panelsWrapper.addEventListener("scroll", updateNavButtons);
      window.addEventListener("resize", updateNavButtons);
      
      if (window.ResizeObserver) {
        const resizeObserver = new ResizeObserver(() => {
          updateNavButtons();
        });
        resizeObserver.observe(panelsWrapper);
      }

      // Initial update on bind
      updateTimelineProgress(activeStage);
      updateNavButtons();
    };

    // Initial load
    renderTimeline();

    // Re-render timeline if layout crossed screen width threshold on window resize
    window.addEventListener('resize', () => {
      renderTimeline();
    });

    // Run first stage selection after load
    setTimeout(() => {
      timelineContainer.querySelectorAll('.timeline-stage-btn').forEach((btn) => {
        if (parseInt(btn.dataset.stage) === 1) {
          btn.click(); // Trigger initial stage 1 click to run full logic
        }
      });
    }, 150);
  }

  // --- E. CÁC NƯỚC THÀNH VIÊN & CHI TIẾT MODAL ---
  const membersContainer = document.getElementById("members-container");
  if (membersContainer) {
    membersContainer.innerHTML = data.members.countries.map((c, idx) => `
      <div class="member-card reveal" style="transition-delay: ${(idx % 4) * 0.08}s">
        <div class="member-image">
          <img src="${c.landmark}" alt="Landmark ${c.vietnameseName}">
          <span class="member-badge">${c.joinYear === 1967 ? "Sáng lập" : "Thành viên"}</span>
          <div class="member-floating-flag-wrapper">
            <img src="${c.flag}" alt="Quốc kỳ ${c.vietnameseName}" class="member-floating-flag">
          </div>
        </div>
        <div class="member-content">
          <h3>${c.vietnameseName}</h3>
          <div class="member-eng-name">${c.name}</div>
          <div class="member-info">
            <div class="member-info-row">
              <span>Ngày gia nhập</span>
              <span>${c.joinDate}</span>
            </div>
            <div class="member-info-row">
              <span>Thủ đô</span>
              <span>${c.capital}</span>
            </div>
          </div>
          <p class="member-description">${c.description}</p>
          <button class="btn-view-detail" data-country-id="${c.id}">
            <span>Xem chi tiết</span>
            <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    `).join('');

    // Setup Modal xem chi tiết
    const memberModal = document.getElementById("member-modal");
    const memberModalBody = document.getElementById("member-modal-body");
    const memberModalClose = document.getElementById("member-modal-close");

    if (memberModal && memberModalBody && memberModalClose) {
      // Đăng ký click cho các nút "Xem chi tiết"
      const detailButtons = membersContainer.querySelectorAll(".btn-view-detail");
      detailButtons.forEach(btn => {
        btn.addEventListener("click", function() {
          const countryId = this.getAttribute("data-country-id");
          const country = data.members.countries.find(c => c.id === countryId);
          if (country) {
            memberModalBody.innerHTML = `
              <div class="modal-banner-wrapper">
                <img src="${country.landmark}" alt="Landmark ${country.vietnameseName}" class="modal-banner">
                <span class="modal-badge">${country.joinYear === 1967 ? "Sáng lập" : "Thành viên"}</span>
                <div class="modal-floating-flag-wrapper">
                  <img src="${country.flag}" alt="Quốc kỳ ${country.vietnameseName}" class="modal-floating-flag">
                </div>
              </div>
              <div class="modal-details">
                <h2>${country.vietnameseName}</h2>
                <div class="modal-eng-name">${country.name}</div>
                <div class="modal-stats-grid">
                  <div class="modal-stat-card">
                    <span>Ngày gia nhập</span>
                    <span>${country.joinDate}</span>
                  </div>
                  <div class="modal-stat-card">
                    <span>Thủ đô</span>
                    <span>${country.capital}</span>
                  </div>
                  <div class="modal-stat-card">
                    <span>Quốc hoa</span>
                    <span>${country.nationalFlower}</span>
                  </div>
                  <div class="modal-stat-card">
                    <span>Tiền tệ</span>
                    <span>${country.currency}</span>
                  </div>
                </div>
                <p class="modal-description">${country.description}</p>
              </div>
            `;
            memberModal.classList.add("open");
            memberModal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden"; // Chống cuộn trang khi mở modal
            
            // Khởi tạo các icon của Lucide bên trong modal
            if (window.lucide) {
              window.lucide.createIcons();
            }
          }
        });
      });

      // Đóng modal khi click vào nút X
      memberModalClose.addEventListener("click", closeMemberModal);

      // Đóng modal khi click ra ngoài vùng modal content
      memberModal.addEventListener("click", function(e) {
        if (e.target === memberModal) {
          closeMemberModal();
        }
      });

      // Đóng modal khi nhấn phím ESC
      window.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && memberModal.classList.contains("open")) {
          closeMemberModal();
        }
      });

      function closeMemberModal() {
        memberModal.classList.remove("open");
        memberModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // Khôi phục cuộn trang
      }
    }
  }

  // --- F. MỤC TIÊU & NGUYÊN TẮC ---
  const goalsContainer = document.getElementById("goals-container");
  if (goalsContainer) {
    goalsContainer.innerHTML = data.principles.goals.map((g, idx) => `
      <div class="principle-item">
        <span class="item-number">${idx + 1}</span>
        <div>
          <h4>${g.title}</h4>
          <p>${g.desc}</p>
        </div>
      </div>
    `).join('');
  }

  const rulesContainer = document.getElementById("rules-container");
  if (rulesContainer) {
    rulesContainer.innerHTML = data.principles.rules.map((r, idx) => `
      <div class="principle-item">
        <span class="item-number">${idx + 1}</span>
        <div>
          <h4>${r.title}</h4>
          <p>${r.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // --- G. THÀNH TỰU NỔI BẬT ---
  const achievementsContainer = document.getElementById("achievements-container");
  if (achievementsContainer) {
    const iconsMap = {
      ac: "globe",
      eco: "trending-up",
      peace: "shield",
      diplomacy: "handshake",
      rcep: "landmark",
      identity: "sparkles"
    };
    achievementsContainer.innerHTML = data.achievements.list.map((a, idx) => `
      <article class="achievement-card reveal" style="transition-delay: ${(idx % 2) * 0.08}s">
        <div class="achievement-icon">
          <i data-lucide="${iconsMap[a.id] || "check"}"></i>
        </div>
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
      </article>
    `).join('');
  }

  // --- H. VIỆT NAM VÀ ASEAN ---
  document.getElementById("vietnam-intro").innerHTML = data.vietnam.intro;
  document.getElementById("vietnam-role-title").innerHTML = `<i data-lucide="star" class="text-yellow"></i> ${data.vietnam.roleTitle}`;
  document.getElementById("vietnam-meaning-title").innerHTML = `<i data-lucide="award" class="text-yellow"></i> ${data.vietnam.meaningTitle}`;
  
  const vnRolesContainer = document.getElementById("vietnam-roles-container");
  if (vnRolesContainer) {
    vnRolesContainer.innerHTML = data.vietnam.roles.map(r => `
      <div class="vn-role-item">
        <h4>${r.title}</h4>
        <p>${r.desc}</p>
      </div>
    `).join('');
  }

  const vnMeaningContainer = document.getElementById("vietnam-meaning-container");
  if (vnMeaningContainer) {
    vnMeaningContainer.innerHTML = data.vietnam.meaningParagraphs.map(p => `
      <div class="vn-meaning-item">
        ${p}
      </div>
    `).join('');
  }

  // --- I. THƯ VIỆN HÌNH ẢNH ---
  const galleryContainer = document.getElementById("gallery-container");
  if (galleryContainer) {
    galleryContainer.innerHTML = data.gallery.map(img => `
      <div class="gallery-item" data-category="${img.category}">
        <img src="${img.url}" alt="${img.title}" class="gallery-img">
        <div class="gallery-overlay">
          <h3>${img.title}</h3>
          <p>${img.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Kích hoạt lại Lucide icons cho tất cả các phần tử mới được chèn động
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/* ==========================================================================
   6. SCROLL REVEAL STYLES (intersection observer)
   ========================================================================== */
function initScrollReveal() {
  // Tạo đối tượng Observer
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15 // Kích hoạt khi phần tử hiện diện 15% diện tích
  };
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        
        // Nếu là phần tử timeline, kích hoạt hiệu ứng riêng biệt
        if (entry.target.classList.contains("timeline-item")) {
          entry.target.classList.add("show");
        }
        
        // Ngừng quan sát khi đã hiện ra (tránh chạy lại nhiều lần)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Đăng ký quan sát các đối tượng
  const targets = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .timeline-item");
  targets.forEach(target => {
    revealObserver.observe(target);
  });
}

/* ==========================================================================
   7. THƯ VIỆN HÌNH ẢNH & POPUP XEM ẢNH LỚN (LIGHTBOX)
   ========================================================================== */
function initGalleryLightbox() {
  const filtersContainer = document.getElementById("gallery-filters");
  const galleryContainer = document.getElementById("gallery-container");
  
  if (!filtersContainer || !galleryContainer) return;
  
  // A. Chức năng Lọc (Filter) ảnh
  const filterBtns = filtersContainer.querySelectorAll(".filter-btn");
  
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      // Loại bỏ active ở nút cũ, thêm active vào nút hiện tại
      filterBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      
      const filterValue = this.getAttribute("data-filter");
      const galleryItems = galleryContainer.querySelectorAll(".gallery-item");
      
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");
        if (filterValue === "all" || itemCategory === filterValue) {
          item.style.display = "block";
          // Tạo hiệu ứng xuất hiện mượt
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 50);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.8)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // B. Chức năng Phóng to Ảnh lớn (Lightbox)
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");
  
  if (!lightboxModal) return;
  
  // Sự kiện click vào thẻ ảnh
  galleryContainer.addEventListener("click", function(e) {
    const clickedItem = e.target.closest(".gallery-item");
    if (!clickedItem) return;
    
    const img = clickedItem.querySelector(".gallery-img");
    const title = clickedItem.querySelector("h3").innerText;
    const desc = clickedItem.querySelector("p").innerText;
    
    if (img) {
      lightboxImg.src = img.src;
      lightboxCaption.innerHTML = `<strong>${title}</strong> - ${desc}`;
      
      lightboxModal.classList.add("show");
      lightboxModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden"; // Ngăn cuộn trang phía sau
    }
  });
  
  // Hàm đóng lightbox
  const closeLightbox = function() {
    lightboxModal.classList.remove("show");
    lightboxModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Cho phép cuộn trở lại
    setTimeout(() => {
      lightboxImg.src = "";
    }, 300);
  };
  
  lightboxClose.addEventListener("click", closeLightbox);
  
  // Click ra ngoài vùng ảnh cũng đóng lightbox
  lightboxModal.addEventListener("click", function(e) {
    if (e.target === lightboxModal || e.target.closest(".lightbox-content-wrapper") === null && e.target !== lightboxClose) {
      closeLightbox();
    }
  });
  
  // Nhấn ESC cũng đóng lightbox
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && lightboxModal.classList.contains("show")) {
      closeLightbox();
    }
  });
}

/* ==========================================================================
   8. TRÒ CHƠI TRẮC NGHIỆM TƯƠNG TÁC (QUIZ GAME LOGIC)
   ========================================================================== */
function initQuizGame() {
  const quizBox = document.getElementById("quiz-box");
  if (!quizBox) return;
  
  // Các màn hình
  const screenStart = document.getElementById("quiz-start-screen");
  const screenPlay = document.getElementById("quiz-play-screen");
  const screenResult = document.getElementById("quiz-result-screen");
  
  // Nút điều khiển
  const btnStart = document.getElementById("btn-start-quiz");
  const btnNext = document.getElementById("btn-next-question");
  const btnRestart = document.getElementById("btn-restart-quiz");
  
  // Phần tử nội dung
  const questionText = document.getElementById("quiz-question-text");
  const optionsContainer = document.getElementById("quiz-options-container");
  const currentNum = document.getElementById("quiz-current-num");
  const totalNum = document.getElementById("quiz-total-num");
  const progressBar = document.getElementById("quiz-progress-bar");
  
  // Phần tử kết quả
  const statCorrect = document.getElementById("stat-correct");
  const statWrong = document.getElementById("stat-wrong");
  const statPercent = document.getElementById("stat-percent");
  const scoreTxt = document.getElementById("result-score-txt");
  const remarksTxt = document.getElementById("result-remarks-txt");
  
  // Cài đặt Quiz State
  let quizQuestions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let userAnswers = []; // Lưu danh sách đáp án người chơi chọn
  
  // Nút hiển thị trạng thái dữ liệu tải
  const sourceIndicator = document.getElementById("quiz-source-indicator");
  const sourceText = document.getElementById("quiz-source-text");

  // A. HÀM TẢI CÂU HỎI TRẮC NGHIỆM
  async function loadQuizQuestions() {
    try {
      // 1. Cố gắng tải dữ liệu từ tệp cauhoi.txt trong thư mục dự án
      const response = await fetch("cauhoi.txt");
      if (!response.ok) {
        throw new Error("Không thể fetch file cauhoi.txt");
      }
      const arrayBuffer = await response.arrayBuffer();
      const decoder = new TextDecoder("utf-8");
      const rawText = decoder.decode(arrayBuffer);
      
      // 2. Chuyển đổi tệp tin cauhoi.txt thành mảng JSON
      quizQuestions = parseQuizText(rawText);
      
      if (quizQuestions.length === 0) {
        throw new Error("Tệp cauhoi.txt rỗng hoặc không đúng định dạng.");
      }
      
      console.log(`Đã tải thành công ${quizQuestions.length} câu hỏi từ cauhoi.txt.`);
      
      // Hiển thị trạng thái màu xanh lá
      if (sourceIndicator && sourceText) {
        sourceIndicator.className = "quiz-source-badge success";
      }
      
    } catch (error) {
      console.warn("Lỗi tải cauhoi.txt (CORS khi mở file:// trực tiếp hoặc lỗi file). Sử dụng dữ liệu dự phòng data/quizQuestions.js. Chi tiết lỗi:", error);
      
      // 3. Fallback: Dùng dữ liệu dự phòng từ file data/quizQuestions.js
      if (typeof fallbackQuizQuestions !== 'undefined' && fallbackQuizQuestions.length > 0) {
        quizQuestions = fallbackQuizQuestions;
        // Hiển thị trạng thái màu vàng cam cảnh báo
        if (sourceIndicator && sourceText) {
          sourceIndicator.className = "quiz-source-badge fallback";
          sourceText.innerText = "Chế độ offline (Dữ liệu cục bộ)";
        }
      } else {
        if (sourceIndicator && sourceText) {
          sourceIndicator.className = "quiz-source-badge wrong";
          sourceText.innerText = "Lỗi tải bộ dữ liệu câu hỏi.";
        }
        console.error("Không tìm thấy fallbackQuizQuestions.");
      }
    }
  }

  // B. BỘ PHÂN TÍCH TEXT HỌC THUẬT (TEXT PARSER LOGIC)
  function parseQuizText(text) {
    const questions = [];
    // Phân tách bộ câu hỏi bằng cách cắt theo các khối trắng gấp khúc
    const blocks = text.trim().split(/\n\s*\n/);
    
    blocks.forEach(block => {
      const lines = block.split("\n").map(l => l.trim()).filter(l => l.length > 0);
      if (lines.length < 3) return; // Khối lỗi, bỏ qua
      
      let questionObj = {
        question: "",
        options: [],
        answer: ""
      };
      
      lines.forEach(line => {
        if (line.startsWith("Câu hỏi:") || line.startsWith("Câu hỏi")) {
          questionObj.question = line.replace(/^Câu hỏi\s*:\s*/i, "").replace(/^Câu hỏi\s*/i, "");
        } else if (line.match(/^[A-D]\./i)) {
          // Trích xuất nội dung đáp án (loại bỏ A. B. C. D.)
          const optionContent = line.replace(/^[A-D]\.\s*/i, "");
          questionObj.options.push(optionContent);
        } else if (line.startsWith("Đáp án:") || line.startsWith("Đáp án")) {
          questionObj.answer = line.replace(/^Đáp án\s*:\s*/i, "").replace(/^Đáp án\s*/i, "").trim().toUpperCase();
        }
      });
      
      if (questionObj.question && questionObj.options.length >= 2 && questionObj.answer) {
        questions.push(questionObj);
      }
    });
    
    return questions;
  }

  // C. KHỞI CHẠY LẦN ĐẦU
  loadQuizQuestions();

  // D. SỰ KIỆN CLICK BẮT ĐẦU CHƠI QUIZ
  btnStart.addEventListener("click", function() {
    if (quizQuestions.length === 0) {
      alert("Bộ dữ liệu câu hỏi chưa sẵn sàng, vui lòng làm mới hoặc tải lại trang.");
      return;
    }
    
    // Shuffle xáo trộn câu hỏi nếu muốn (ở đây giữ nguyên thứ tự học thuật ban đầu)
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    screenStart.classList.add("hidden");
    screenPlay.classList.remove("hidden");
    screenResult.classList.add("hidden");
    
    showQuestion(currentQuestionIndex);
  });

  // E. HIỂN THỊ CÂU HỎI
  function showQuestion(index) {
    const q = quizQuestions[index];
    
    // Cập nhật số thứ tự câu hỏi và thanh progress bar
    currentNum.innerText = index + 1;
    totalNum.innerText = quizQuestions.length;
    
    const roundedPercent = Math.round((index / quizQuestions.length) * 100);
    progressBar.style.width = roundedPercent + "%";
    
    const percentEl = document.getElementById("quiz-progress-percent");
    if (percentEl) {
      percentEl.innerText = roundedPercent + "%";
    }
    
    // Tạo hiệu ứng trượt mượt mà cho câu hỏi mới
    const questionContainer = document.querySelector(".quiz-question-container");
    if (questionContainer) {
      questionContainer.classList.remove("active-question");
      void questionContainer.offsetWidth; // Kích hoạt reflow để chạy lại animation
      questionContainer.classList.add("active-question");
    }
    
    // Hiển thị câu hỏi
    questionText.innerText = q.question;
    optionsContainer.innerHTML = "";
    
    // Khóa nút "Câu tiếp theo"
    btnNext.disabled = true;
    
    // Hiển thị danh sách đáp án dưới dạng các nút bấm
    const prefixLetters = ["A", "B", "C", "D"];
    q.options.forEach((opt, oIdx) => {
      const optLetter = prefixLetters[oIdx] || "A";
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `
        <span class="option-prefix">${optLetter}</span>
        <span class="option-text">${opt}</span>
      `;
      
      btn.addEventListener("click", () => handleSelectOption(btn, optLetter, q.answer));
      optionsContainer.appendChild(btn);
    });
  }

  // F. XỬ LÝ CHỌN ĐÁP ÁN
  function handleSelectOption(selectedBtn, chosenLetter, correctAnswer) {
    const optionBtns = optionsContainer.querySelectorAll(".option-btn");
    
    // Khóa tất cả các nút đáp án không cho nhấn lại
    optionBtns.forEach(btn => btn.classList.add("disabled"));
    
    const isCorrect = chosenLetter === correctAnswer;
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
      // Tạo hiệu ứng rung lắc nhẹ chúc mừng nếu cần
    } else {
      selectedBtn.classList.add("wrong");
      
      // Hiển thị đáp án đúng màu xanh lá để người học ghi nhớ
      const prefixLetters = ["A", "B", "C", "D"];
      optionBtns.forEach((btn, idx) => {
        if (prefixLetters[idx] === correctAnswer) {
          btn.classList.add("correct");
        }
      });
    }
    
    userAnswers.push({
      questionIndex: currentQuestionIndex,
      isCorrect: isCorrect,
      chosen: chosenLetter,
      correct: correctAnswer
    });
    
    // Mở khóa nút đi tiếp
    btnNext.disabled = false;
    
    // Nếu đây là câu cuối, nút bấm sẽ đổi chữ sang "Xem kết quả"
    if (currentQuestionIndex === quizQuestions.length - 1) {
      btnNext.querySelector("span").innerText = "Xem kết quả";
      btnNext.querySelector("i").setAttribute("data-lucide", "trophy");
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    } else {
      btnNext.querySelector("span").innerText = "Câu tiếp theo";
      btnNext.querySelector("i").setAttribute("data-lucide", "arrow-right");
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  }

  // G. CÂU TIẾP THEO
  btnNext.addEventListener("click", function() {
    // Tăng chỉ số câu hỏi
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion(currentQuestionIndex);
    } else {
      // Kết thúc bộ câu hỏi, tính toán hiển thị kết quả
      showResults();
    }
  });

  // H. HIỂN THỊ MÀN HÌNH KẾT QUẢ THỐNG KÊ CHI TIẾT
  function showResults() {
    screenPlay.classList.add("hidden");
    screenResult.classList.remove("hidden");
    
    // Cập nhật thanh tiến độ đạt 100%
    progressBar.style.width = "100%";
    
    const correctCount = score;
    const wrongCount = quizQuestions.length - score;
    const percentage = Math.round((correctCount / quizQuestions.length) * 100);
    
    statCorrect.innerText = correctCount;
    statWrong.innerText = wrongCount;
    statPercent.innerText = percentage + "%";
    
    scoreTxt.innerText = `${correctCount}/${quizQuestions.length}`;
    
    // Viết nhận xét học thuật cá nhân hóa
    let remarks = "";
    let iconName = "trophy";
    let iconClass = "text-accent";
    
    if (percentage === 100) {
      remarks = "Xuất sắc! Bạn thực sự là một Nhà sử học ASEAN lỗi lạc! Bạn trả lời chính xác tất cả các câu hỏi.";
      iconClass = "text-yellow";
    } else if (percentage >= 80) {
      remarks = "Tuyệt vời! Kiến thức lịch sử ASEAN của bạn vô cùng sâu sắc. Bạn rất am hiểu về khu vực!";
      iconClass = "text-accent";
    } else if (percentage >= 50) {
      remarks = "Rất tốt! Bạn nắm vững các mốc lịch sử cốt lõi của ASEAN. Hãy tiếp tục khám phá thêm nhé!";
      iconClass = "text-primary";
    } else {
      remarks = "Cố gắng lên! Có vẻ bạn cần thêm một chút thời gian để đọc kỹ phần Dòng thời gian lịch sử và thông tin thành viên ở trên. Đừng nản lòng nhé!";
      iconName = "alert-circle";
      iconClass = "text-red";
    }
    
    remarksTxt.innerText = remarks;
    
    // Đổi biểu tượng cúp tương ứng
    const iconContainer = document.getElementById("quiz-result-icon");
    iconContainer.className = `quiz-icon-large ${iconClass}`;
    iconContainer.innerHTML = `<i data-lucide="${iconName}"></i>`;
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // I. CHƠI LẠI QUIZ
  btnRestart.addEventListener("click", function() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    screenResult.classList.add("hidden");
    screenPlay.classList.remove("hidden");
    
    showQuestion(currentQuestionIndex);
  });
}

/* ==========================================================================
   10. HIỆU ỨNG 3D TILT CHO HERO VISUAL
   ========================================================================== */
function initHeroTilt() {
  const tiltCards = document.querySelectorAll('.js-tilt-card');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 1024) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.animation = 'none';
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.animation = 'heroFloat3D 6s ease-in-out infinite';
    });
  });
}
